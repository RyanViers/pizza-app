import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {
  AUTH_TYPE,
  createAuthLink as awsCreateAuthLink,
} from 'aws-appsync-auth-link';
import awsmobile from './aws-exports';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { Apollo } from 'apollo-angular';
import { HttpLink, InMemoryCache, concat } from '@apollo/client/core';
import { Amplify, Auth } from 'aws-amplify';

if (environment.production) {
  enableProdMode();
}

Amplify.configure({
  Auth: environment.cognito,
  aws_appsync_region: 'us-east-1',
  aws_appsync_graphqlEndpoint:
    'https://ha2knhtddvdq3hjskh7quhei3i.appsync-api.us-east-1.amazonaws.com/graphql',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: 'da2-tp5ecrxlv5bx3ilanppgd5jgsq',
  graphql_endpoint_iam_region: 'us-east-1',
});

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: Apollo,
      useFactory(link: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: concat(
            awsCreateAuthLink({
              url: awsmobile.aws_appsync_graphqlEndpoint,
              region: awsmobile.aws_appsync_region,
              auth: {
                type: AUTH_TYPE.API_KEY,
                apiKey: awsmobile.aws_appsync_apiKey,
              },
            }),
            link
          ),
        };
      },
      deps: [HttpLink],
    },
    {
      provide: HttpLink,
      useFactory: () =>
        new HttpLink({ uri: awsmobile.aws_appsync_graphqlEndpoint }),
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(IonicModule.forRoot({})),
    provideRouter(routes),
  ],
});
