import { Routes } from '@angular/router';

const adminRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./admin-root.component'),
    children: [
      {
        path: 'employee-list',
        loadComponent: () =>
          import('./components/employee/employee-list.component'),
      },
      {
        path: 'employee-sign-up',
        loadComponent: () =>
          import('./components/employee/employee-sign-up.component'),
      },
      {
        path: 'admin-info',
        loadComponent: () => import('./components/admin/admin-info.component'),
      },
      {
        path: 'inventory',
        loadComponent: () =>
          import('./components/inventory/inventory.component'),
      },
      {
        path: 'store-list',
        loadComponent: () =>
          import('./components/store-list/store-list.component'),
      },
      {
        path: '**',
        redirectTo: 'employee-list',
        pathMatch: 'full',
      },
    ],
  },
];

export default adminRoutes;
