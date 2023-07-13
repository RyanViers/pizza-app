import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sign-in',
    loadComponent: () => import('./home/sign-in/sign-in.component'),
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./home/sign-up/sign-up.component'),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page'),
  },
  {
    path: 'admin-root',
    loadChildren: () => import('./admin/admin-root/admin-root-routing'),
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.component'),
  },
  {
    path: 'specialty-pizzas',
    loadComponent: () =>
      import('./specialty-pizzas/specialty-pizzas.component'),
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart.component'),
  },
  {
    path: 'pizza',
    loadChildren: () => import('./pizza/pizza-routes'),
  },
  {
    path: '**',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
];
