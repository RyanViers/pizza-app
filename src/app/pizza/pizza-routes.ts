import { Routes } from '@angular/router';

const pizzaRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pizza.component'),
    children: [
      {
        path: 'base',
        loadComponent: () => import('./components/base.component'),
      },
      {
        path: 'cheese',
        loadComponent: () => import('./components/cheese.component'),
      },
      {
        path: 'meat',
        loadComponent: () => import('./components/meat.component'),
      },
      {
        path: 'veggie',
        loadComponent: () => import('./components/veggie.component'),
      },
      {
        path: 'checkout',
        loadComponent: () => import('./components/checkout.component'),
      },
    ],
  },
];

export default pizzaRoutes;
