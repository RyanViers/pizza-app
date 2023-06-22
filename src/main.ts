import { enableProdMode } from '@angular/core';
import awsmobile from './aws-exports';
import { environment } from './environments/environment';
import { Amplify } from 'aws-amplify';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

Amplify.configure({
  Auth: environment.cognito,
  ...awsmobile,
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
