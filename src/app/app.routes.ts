import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sign-in',
    loadComponent: () =>
      import('./home/sign-in/sign-in.component').then((m) => m.SignInComponent),
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('./home/sign-up/sign-up.component').then((m) => m.SignUpComponent),
  },
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
    children: [
      {
        path: 'employee-list',
        loadComponent: () =>
          import(
            './admin/admin-root/components/employee/employee-list.component'
          ).then((m) => m.EmployeeListComponent),
      },
      {
        path: 'employee-sign-up',
        loadComponent: () =>
          import(
            './admin/admin-root/components/employee/employee-sign-up.component'
          ).then((m) => m.EmployeeSignUpComponent),
      },
      {
        path: 'admin-info',
        loadComponent: () =>
          import(
            './admin/admin-root/components/admin/admin-info.component'
          ).then((m) => m.AdminInfoComponent),
      },
      {
        path: 'inventory',
        loadComponent: () =>
          import(
            './admin/admin-root/components/inventory/inventory.component'
          ).then((m) => m.InventoryComponent),
      },
      {
        path: 'store-list',
        loadComponent: () =>
          import(
            './admin/admin-root/components/store-list/store-list.component'
          ).then((m) => m.StoreListComponent),
      },
      {
        path: '**',
        redirectTo: 'employee-list',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile/profile.component').then(
        (m) => m.ProfileComponent
      ),
  },
  {
    path: 'specialty-pizzas',
    loadComponent: () =>
      import('./pizza/specialty-pizzas/specialty-pizzas.component').then(
        (m) => m.SpecialtyPizzasComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./cart/cart/cart.component').then((m) => m.CartComponent),
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
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
];
