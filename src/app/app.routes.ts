import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'admin-root',
    loadComponent: () =>
      import('./admin/admin-root/admin-root.component').then(
        (m) => m.AdminRootComponent
      ),
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('./sign-up/sign-up.component').then((m) => m.SignUpComponent),
  },
  {
    path: 'pizza',
    loadComponent: () =>
      import('./pizza/pizza.component').then((m) => m.PizzaComponent),
    children: [
      {
        path: 'base',
        loadComponent: () =>
          import('./pizza/components/base.component').then(
            (m) => m.BaseComponent
          ),
      },
      {
        path: 'cheese',
        loadComponent: () =>
          import('./pizza/components/cheese.component').then(
            (m) => m.CheeseComponent
          ),
      },
      {
        path: 'meat',
        loadComponent: () =>
          import('./pizza/components/meat.component').then(
            (m) => m.MeatComponent
          ),
      },
      {
        path: 'veggie',
        loadComponent: () =>
          import('./pizza/components/veggie.component').then(
            (m) => m.VeggieComponent
          ),
      },
      {
        path: 'checkout',
        loadComponent: () =>
          import('./pizza/components/checkout.component').then(
            (m) => m.CheckoutComponent
          ),
      },
      {
        path: '**',
        redirectTo: 'base',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
