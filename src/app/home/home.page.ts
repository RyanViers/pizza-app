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
        transition: transform 5s;
        display: inline-block;
      }
      
      .splitting .char:hover {
        transform: scale(2);
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, SharedModule],
  
})
export class HomePage {
  constructor() {}
}
