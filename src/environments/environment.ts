import { graphqlOperation } from '@aws-amplify/api-graphql';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false,
//   cognito: {
//     region: 'us-east-1',
//     userPoolId: 'us-east-1_dLoujDkIo',
//     userPoolWebClientId: '6o614drm7oefknhdrvag1f1a7i',

//   },
// };

export const environment = {
  production: false,
  cognito: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_dLoujDkIo',
    userPoolWebClientId: '6o614drm7oefknhdrvag1f1a7i',
    //identityPoolId: 'us-east-1:fa9bf76b-a317-4b9f-908d-b088a8e777b8',
  },
};

// Amplify.configure({
//   Auth: {
//     region: environment.cognito.region,
//     userPoolId: environment.cognito.userPoolId,
//     userPoolWebClientId: environment.cognito.userPoolWebClientId,
//     identityPoolId: environment.cognito.aws_cognito_identity_pool_id,
//   },
// });

//
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
