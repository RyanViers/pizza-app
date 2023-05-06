import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
})
export class HomePage {
  constructor() {}
}
