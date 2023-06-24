import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<ion-app>
    <ion-content>
      <div class="flex w-full h-full">
        <ion-router-outlet></ion-router-outlet>
      </div>
    </ion-content>
  </ion-app> `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }
    `,
  ],
})
export class AppComponent {
  constructor() {}
}
