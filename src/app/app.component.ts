import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { EmployeeRootComponent } from './modules/employee/employee-root/employee-root.component';
import { Amplify, API, graphqlOperation } from 'aws-amplify';

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
  imports: [CommonModule, IonicModule, EmployeeRootComponent],
})
export class AppComponent {
  constructor() {}
}
