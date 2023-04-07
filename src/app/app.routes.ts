import { Routes } from '@angular/router';
import { AdminRootComponent } from './modules/administrator/admin-root/admin-root.component';
import { EmployeeRootComponent } from './modules/employee/employee-root/employee-root.component';
import { CustomerRootComponent } from './modules/customer/customer-root/customer-root.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    children: [
      {
        path: 'admin',
        component: AdminRootComponent,
      },
      {
        path: 'employee',
        component: EmployeeRootComponent,
      },
      {
        path: 'customer',
        component: CustomerRootComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
