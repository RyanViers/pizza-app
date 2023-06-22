import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<ion-app>
    <ion-content>
      <ion-router-outlet></ion-router-outlet>
    </ion-content>
  </ion-app>`,
  styles: [],
})
export class AppComponent {
  constructor() {}
}
