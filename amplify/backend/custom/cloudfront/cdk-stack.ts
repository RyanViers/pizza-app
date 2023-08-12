import * as cdk from 'aws-cdk-lib';
import * as AmplifyHelpers from '@aws-amplify/cli-extensibility-helper';
import { AmplifyDependentResourcesAttributes } from '../../types/amplify-dependent-resources-ref';
import { Construct } from 'constructs';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class cdkStack extends cdk.Stack {
  constructor(
    scope: Construct,
    id: string,
    props?: cdk.StackProps,
    amplifyResourceProps?: AmplifyHelpers.AmplifyResourceProps
  ) {
    super(scope, id, props);

    /* Do not remove - Amplify CLI automatically injects the current deployment environment in this input parameter */
    new cdk.CfnParameter(this, 'env', {
      type: 'String',
      description: 'Current Amplify CLI env name',
    });

    /* AWS CDK code goes here - learn more: https://docs.aws.amazon.com/cdk/latest/guide/home.html */

    //environment name
    const envName = cdk.Fn.ref('env');

    // Access other Amplify Resources
    const dependencies:AmplifyDependentResourcesAttributes = AmplifyHelpers.addResourceDependency(this as any, 
      amplifyResourceProps.category, 
      amplifyResourceProps.resourceName, 
      [{ category: 'storage', resourceName: 'pizzaStorage' }]
    );

    // Create a reference to the existing Amplify S3 storage bucket
    const bucketName = cdk.Fn.ref(dependencies.storage.pizzaStorage.BucketName);
    const bucketId = `${bucketName}-${envName}`;
    const amplifyS3Bucket = s3.Bucket.fromBucketName(this, bucketId, bucketName);

    // Create an origin access identity
    const oaiId = `AmplifyOAI`;
    const oai = new cloudfront.OriginAccessIdentity(this, oaiId, {
      comment: 'Origin Access Identity for the Amplify S3 bucket',
    });

    // Create an Origin Access Identity policy
    const oaiPolicy = new iam.Policy(this, 'MyOriginAccessIdentityPolicy', {
      statements: [
        new iam.PolicyStatement({
          actions: ['s3:GetObject'],
          effect: iam.Effect.ALLOW,
          resources: [`${amplifyS3Bucket.bucketArn}/*`],
          principals: [oai.grantPrincipal],
        }),
      ],
    });

    // Create a CloudFront distribution and use the Amplify S3 bucket as the origin
    const distributionId = `AmplifyCloudFrontDistribution`;
    const distribution = new cloudfront.CloudFrontWebDistribution(this, distributionId, {
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: amplifyS3Bucket,
            originAccessIdentity: oai,
          },
          behaviors: [
            {
              isDefaultBehavior: true,
              viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
              allowedMethods: cloudfront.CloudFrontAllowedMethods.ALL
            },
          ],
        },
      ],
    });

    // Output the CloudFront distribution domain name
    new cdk.CfnOutput(this, 'CloudFrontDomainName', {
      value: distribution.distributionDomainName,
    });
    new cdk.CfnOutput(this, 'CloudFrontDistributionId', {
      value: distribution.distributionId,
    });
  }
}