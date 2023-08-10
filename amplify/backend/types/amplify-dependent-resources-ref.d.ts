export type AmplifyDependentResourcesAttributes = {
  "api": {
    "pizzaapp": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string"
    }
  },
  "auth": {
    "pizzaAuth": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    },
    "userPoolGroups": {
      "AdminGroupRole": "string",
      "EmployeeGroupRole": "string",
      "ManagerGroupRole": "string"
    }
  },
  "custom": {
    "cloudfront": {
      "CloudFrontDistributionId": "string",
      "CloudFrontDomainName": "string"
    }
  },
  "function": {
    "InvalidateCloudfrontUrls": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "pizzaStorage": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}