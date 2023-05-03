import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./modules/administrator/admin-root/admin-root.component').then(
        (m) => m.AdminRootComponent
      ),
  },
  {
    path: 'employee',
    loadComponent: () =>
      import('./modules/employee/employee-root/employee-root.component').then(
        (m) => m.EmployeeRootComponent
      ),
  },
  {
    path: 'customer',
    loadComponent: () =>
      import('./modules/customer/customer-root/customer-root.component').then(
        (m) => m.CustomerRootComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
