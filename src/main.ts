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
import { Amplify } from 'aws-amplify';

if (environment.production) {
  enableProdMode();
}

Amplify.configure({
  Auth: environment.cognito,
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
