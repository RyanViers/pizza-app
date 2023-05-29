import { FooterComponent } from './../../components/footer/footer.component';
import { HeaderComponent } from './../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminInfoComponent } from '../admin-root/admin-info/admin-info.component';
import { EmployeeListComponent } from '../admin-root/employee-list/employee-list.component';
import { InventoryComponent } from '../admin-root/inventory/inventory.component';
import { StoreListComponent } from '../admin-root/store-list/store-list.component';

@Component({
  selector: 'app-admin-root',
  templateUrl: './admin-root.component.html',
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
})
export class AdminRootComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
