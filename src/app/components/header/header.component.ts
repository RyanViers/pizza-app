import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-header',
  template: ` <header class="grid grid-flow-col p-4 bg-light-tint">
    <div class="flex items-center justify-start">
      <button
        [routerLink]="['/home']"
        type="button"
        class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Home
      </button>
    </div>
    <div
      class="flex flex-col space-y-4 sm:flex-row sm:justify-end sm:space-y-0 sm:space-x-4"
    >
      <button
        [routerLink]="['/pizza']"
        type="button"
        class="min-w-[6rem] rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Create Pizza
      </button>
      <button
        [routerLink]="['/specialty-pizzas']"
        type="button"
        class="min-w-[6rem] rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Specialty Pizza
      </button>
      <button
        [routerLink]="['/admin-root']"
        type="button"
        class="min-w-[6rem] rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Admin
      </button>
      <button
        [routerLink]="['/cart']"
        type="button"
        class="min-w-[6rem] rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Cart
      </button>
      <button
        [routerLink]="['/profile']"
        type="button"
        class="min-w-[6rem] rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Profile
      </button>
    </div>
  </header>`,
  styles: [],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, SharedModule],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
