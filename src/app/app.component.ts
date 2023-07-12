import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, IonicModule],
  template: `<ion-app>
    <ion-content>
      <div class="flex w-full h-full">
        <ion-router-outlet />
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
