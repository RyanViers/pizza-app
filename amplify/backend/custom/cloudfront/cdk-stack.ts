import * as cdk from 'aws-cdk-lib';
import * as AmplifyHelpers from '@aws-amplify/cli-extensibility-helper';
import { AmplifyDependentResourcesAttributes } from '../../types/amplify-dependent-resources-ref';
import { Construct } from 'constructs';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
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

    // Create a CloudFront distribution and use the Amplify S3 bucket as the origin
    const distributionId = `AmplifyCloudFrontDistribution`;
    const distribution = new cloudfront.Distribution(this, distributionId, {
      defaultBehavior: {
        origin: new origins.S3Origin(amplifyS3Bucket, {
          originAccessIdentity: oai,
        }),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
      },
      // Add any additional configuration options you need for your distribution
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