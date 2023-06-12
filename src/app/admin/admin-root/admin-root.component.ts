import { FooterComponent } from './../../components/footer/footer.component';
import { HeaderComponent } from './../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminInfoComponent } from './components/admin-info/admin-info.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { StoreListComponent } from './components/store-list/store-list.component';

@Component({
  selector: 'app-admin-root',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    RouterModule,
    AdminInfoComponent,
    EmployeeListComponent,
    InventoryComponent,
    StoreListComponent,
    HeaderComponent,
    FooterComponent,
  ],
  template: `<ion-content>
    <div class="grid w-full grid-flow-row my-10 md:grid-cols-2 gap-x-3">
      <app-admin-info></app-admin-info>
      <app-inventory></app-inventory>
    </div>

    <div class="grid w-full grid-flow-row my-10 md:grid-cols-2 gap-x-3">
      <app-store-list></app-store-list>
      <app-employee-list></app-employee-list>
    </div>

    <ion-footer>
      <ion-toolbar>
        <app-footer></app-footer>
      </ion-toolbar>
    </ion-footer>
  </ion-content>`,
  styles: [],
})
export class AdminRootComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
