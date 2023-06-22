import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DirectiveModuleModule} from '../utils/directives/directive-module.module';

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
  providers: [DirectiveModuleModule],
})
export class HomePage {
  constructor() {}
}
