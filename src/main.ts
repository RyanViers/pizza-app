import { enableProdMode, importProvidersFrom } from '@angular/core';
import awsmobile from './aws-exports';
import { environment } from './environments/environment';
import { Amplify } from 'aws-amplify';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import {
  AUTH_TYPE,
  createAuthLink as awsCreateAuthLink,
} from 'aws-appsync-auth-link';
import { HttpLink, InMemoryCache, concat } from '@apollo/client/core';
import { IonicModule } from '@ionic/angular';
import { NgOptimizedImage } from '@angular/common';

if (environment.production) {
  enableProdMode();
}

Amplify.configure({
  Auth: environment.cognito,
  ...awsmobile,
});

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      BrowserModule,
      BrowserAnimationsModule,
      IonicModule.forRoot({}),
      ApolloModule,
      HttpClientModule,
      SweetAlert2Module.forRoot(),
      NgOptimizedImage,
    ]),
    HttpClient,
    {
      provide: HttpLink,
      useFactory: () =>
        new HttpLink({ uri: awsmobile.aws_appsync_graphqlEndpoint }),
    },
    {
      provide: APOLLO_OPTIONS,
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
  ],
});
