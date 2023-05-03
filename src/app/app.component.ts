import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [
    `
      :host {
        --ion-background-color: var(--ion-color-light);
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule, IonicModule],
  providers: []
})
export class AppComponent {

  constructor() {}
}
