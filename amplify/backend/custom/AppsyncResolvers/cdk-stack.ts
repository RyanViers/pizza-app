import * as cdk from '@aws-cdk/core';
import * as appsync from '@aws-cdk/aws-appsync';
import * as AmplifyHelpers from '@aws-amplify/cli-extensibility-helper';
import { AmplifyDependentResourcesAttributes } from '../../types/amplify-dependent-resources-ref';
import path from 'path';
import fs from 'fs';

export class cdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps, amplifyResourceProps?: AmplifyHelpers.AmplifyResourceProps) {
    super(scope, id, props);

    /* Do not remove - Amplify CLI automatically injects the current deployment environment in this input parameter */
    new cdk.CfnParameter(this, 'env', {
      type: 'String',
      description: 'Current Amplify CLI env name',
    });
    
    // Access other Amplify Resources 
    const dependencies:AmplifyDependentResourcesAttributes = AmplifyHelpers.addResourceDependency(this, 
      amplifyResourceProps.category, 
      amplifyResourceProps.resourceName, 
      [{
        category: "api",
        resourceName: "pizzaapp"
      }]
    );
    
    const requestTemplate = fs.readFileSync(path.join(__dirname, "..", "resolvers", "query", "listOrdersByUser.req.vtl"), 'utf-8');
    const responseTemplate = fs.readFileSync(path.join(__dirname, "..", "resolvers", "query", "listOrdersByUser.res.vtl"), 'utf-8');

    new appsync.CfnResolver(this, "ListOrdersByUserResolver", {
      apiId: cdk.Fn.ref(dependencies.api.pizzaapp.GraphQLAPIIdOutput),
      fieldName: "listOrdersByUser", 
      typeName: "Query",
      requestMappingTemplate: requestTemplate,
      responseMappingTemplate: responseTemplate,
      dataSourceName: "PizzaAppTable"
    });
  }
}