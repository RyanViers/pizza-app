import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styles: [``],
  template: `<div class="grid grid-cols-2 gap-8 xl:col-span-2">
    <div class="md:grid md:grid-cols-2 md:gap-8">
      <div>
        <h3 class="text-sm font-semibold leading-6 text-white">Pizza</h3>
        <ul role="list" class="mt-6 space-y-4">
          <li>
            <a
              [routerLink]="['/pizza']"
              class="text-sm leading-6 text-gray-300 hover:text-white"
              >Create Pizza</a
            >
          </li>
          <li>
            <a
              [routerLink]="['/specialty-pizzas']"
              class="text-sm leading-6 text-gray-300 hover:text-white"
              >Specialty Pizza</a
            >
          </li>
        </ul>
      </div>
      <div class="mt-10 md:mt-0">
        <h3 class="text-sm font-semibold leading-6 text-white">
          Administation
        </h3>
        <ul role="list" class="mt-6 space-y-4">
          <li>
            <a
              [routerLink]="['/admin-root']"
              class="text-sm leading-6 text-gray-300 hover:text-white"
              >Administration Console</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="md:grid md:grid-cols-2 md:gap-8">
      <div>
        <h3 class="text-sm font-semibold leading-6 text-white">
          Shopping Cart
        </h3>
        <ul role="list" class="mt-6 space-y-4">
          <li>
            <a
              [routerLink]="['/cart']"
              class="text-sm leading-6 text-gray-300 hover:text-white"
              >Your Cart</a
            >
          </li>
        </ul>
      </div>
      <div class="mt-10 md:mt-0">
        <h3 class="text-sm font-semibold leading-6 text-white">Your Profile</h3>
        <ul role="list" class="mt-6 space-y-4">
          <li>
            <a
              [routerLink]="['/profile']"
              class="text-sm leading-6 text-gray-300 hover:text-white"
              >Profile</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>`,
})
export class FooterNavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
