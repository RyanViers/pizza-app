import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, IonicModule, SweetAlert2Module, HeaderComponent],
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
