import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [``],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class AppComponent {
  constructor() {}
}
