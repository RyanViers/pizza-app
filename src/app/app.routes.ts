import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'pizza',
    loadComponent: () => import('./pizza/pizza.component').then((m) => m.PizzaComponent),
    children: [
      {
        path: 'base',
        loadComponent: () => import('./pizza/components/base.component').then((m) => m.BaseComponent),
      },
      {
        path: 'cheese',
        loadComponent: () => import('./pizza/components/cheese.component').then((m) => m.CheeseComponent),
      },
      {
        path: 'meat',
        loadComponent: () => import('./pizza/components/meat.component').then((m) => m.MeatComponent),
      },
      {
        path: 'veggie',
        loadComponent: () => import('./pizza/components/veggie.component').then((m) => m.VeggieComponent),
      },
      {
        path: '**',
        redirectTo: 'base',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
