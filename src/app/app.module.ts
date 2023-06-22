import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';
import { IonicModule } from '@ionic/angular';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import awsmobile from 'src/aws-exports';
import {
  AUTH_TYPE,
  createAuthLink as awsCreateAuthLink,
} from 'aws-appsync-auth-link';
import { HttpLink, InMemoryCache, concat } from '@apollo/client/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    IonicModule.forRoot(),
    SweetAlert2Module.forRoot(),
    ApolloModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
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
})
export class AppModule {}
