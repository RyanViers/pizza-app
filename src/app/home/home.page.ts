import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
      }
      .splitting .char {
        display: inline-block;
        transform: translateY(20px);
        opacity: 0;
        animation: typing 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
      }

      @keyframes typing {
        from {
          transform: translateY(20px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, SharedModule],
})
export class HomePage {
  constructor() {}
}
