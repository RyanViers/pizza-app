import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [``],
  standalone: true,
  imports: [CommonModule, IonicModule, SweetAlert2Module, HeaderComponent],
})
export class AppComponent {
  constructor() {}
}
