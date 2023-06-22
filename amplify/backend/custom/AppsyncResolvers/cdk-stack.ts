import * as cdk from '@aws-cdk/core';
import * as appsync from '@aws-cdk/aws-appsync';
import * as AmplifyHelpers from '@aws-amplify/cli-extensibility-helper';
import { AmplifyDependentResourcesAttributes } from '../../types/amplify-dependent-resources-ref';
import path from 'path';
import fs from 'fs';
import { queryMap } from './resolver-maps/queries';
import { mutationMap } from './resolver-maps/mutations';

export class cdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps, amplifyResourceProps?: AmplifyHelpers.AmplifyResourceProps) {
    super(scope, id, props);

    /* Do not remove - Amplify CLI automatically injects the current deployment environment in this input parameter */
    new cdk.CfnParameter(this, 'env', {
      type: 'String',
      description: 'Current Amplify CLI env name',
    });
    
    // Access other Amplify Resources 
    const dependencies: AmplifyDependentResourcesAttributes = AmplifyHelpers.addResourceDependency(this, 
      amplifyResourceProps.category, 
      amplifyResourceProps.resourceName, 
      [{
        category: "api",
        resourceName: "pizzaapp"
      }]
    );
    this.createResolvers(dependencies);
  }

  /**
   * create resolvers
   * @param dependencies 
   */
  private createResolvers(dependencies: AmplifyDependentResourcesAttributes) {
    this.createQueryResolvers(dependencies);
    this.createMutationResolvers(dependencies);
  }

  /**
   * create query resolvers
   * @param dependencies 
   */
  private createQueryResolvers(dependencies: AmplifyDependentResourcesAttributes) {
    for(let [key, value] of queryMap) {    
      
      const requestTemplate = fs.readFileSync(path.join(__dirname, "..", "resolvers", "query", value.requestTemplate), 'utf-8');
      const responseTemplate = fs.readFileSync(path.join(__dirname, "..", "resolvers", "query", value.responseTemplate), 'utf-8');

      new appsync.CfnResolver(this, key, {
        apiId: cdk.Fn.ref(dependencies.api.pizzaapp.GraphQLAPIIdOutput),
        fieldName: value.fieldName, 
        typeName: "Query",
        requestMappingTemplate: requestTemplate,
        responseMappingTemplate: responseTemplate,
        dataSourceName: "PizzaAppTable"
      });
    }
  }
  
  /**
   * create mutation resolvers
   * @param dependencies 
   */
  private createMutationResolvers(dependencies: AmplifyDependentResourcesAttributes) {
    
    for(let [key, value] of mutationMap) {    
      
      const requestTemplate = fs.readFileSync(path.join(__dirname, "..", "resolvers", "mutation", value.requestTemplate), 'utf-8');
      const responseTemplate = fs.readFileSync(path.join(__dirname, "..", "resolvers", "mutation", value.responseTemplate), 'utf-8');

      new appsync.CfnResolver(this, key, {
        apiId: cdk.Fn.ref(dependencies.api.pizzaapp.GraphQLAPIIdOutput),
        fieldName: value.fieldName, 
        typeName: "Mutation",
        requestMappingTemplate: requestTemplate,
        responseMappingTemplate: responseTemplate,
        dataSourceName: "PizzaAppTable"
      });
    }
  }
}