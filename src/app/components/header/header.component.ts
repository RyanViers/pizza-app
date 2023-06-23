import { IconsService } from './../../utils/icons.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { opacityScale } from 'src/app/utils/animations';

@Component({
  selector: 'app-header',
  template: `
    <header class="bg-light-shade relative ">
      <div
        class="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8"
      >
        <div class="relative flex h-16 justify-between">
          <div class="relative z-10 flex px-2 lg:px-0">
            <div class="flex flex-shrink-0 items-center">
              <button
                [routerLink]="['/home']"
                class="bg-light-tint hover:bg-medium-tint text-white inline-flex items-center rounded-md py-2 px-3 text-sm font-medium"
                aria-current="page"
              >
                Home
              </button>
            </div>
          </div>
          <div
            class="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0"
          >
            <div class="w-full sm:max-w-xs">
              <div class="relative">
                <div
                  class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                >
                  <span
                    class="h-6 w-6 text-gray-400"
                    [innerHTML]="getIcon(6)"
                  ></span>
                </div>
                <input
                  id="search"
                  name="search"
                  class="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
          </div>
          <div class="relative z-10 flex items-center lg:hidden">
            <button
              (click)="toggleMobileMenu()"
              type="button"
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span
                class="w-6 h-6"
                [innerHTML]="getIcon(4)"
                *ngIf="!isMenuOpen"
              ></span>
              <span
                class="w-6 h-6"
                [innerHTML]="getIcon(1)"
                *ngIf="isMenuOpen"
              ></span>
            </button>
          </div>

          <!-------------- Desktop Profile Links -------------->
          <div
            class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center"
          >
            <button
              type="button"
              class="flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span class="w-6 h-6" [innerHTML]="getIcon(5)"></span>
            </button>

            <!-- Profile dropdown -->
            <div class="relative ml-4 flex-shrink-0">
              <div>
                <button
                  type="button"
                  class="flex rounded-full bg-pink-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-------------- Desktop Navigation -------------->
        <nav class="hidden lg:flex lg:space-x-8 lg:py-2" aria-label="Global">
          <button
            [routerLink]="['/pizza']"
            class="text-gray-300 hover:bg-gray-700 hover:text-white inline-flex items-center rounded-md py-2 px-3 text-sm font-medium"
            aria-current="page"
          >
            Create Pizzas
          </button>
          <button
            [routerLink]="['/specialty-pizzas']"
            class="text-gray-300 hover:bg-gray-700 hover:text-white inline-flex items-center rounded-md py-2 px-3 text-sm font-medium"
          >
            Specialty Pizzas
          </button>
          <button
            [routerLink]="['/admin-root']"
            class="text-gray-300 hover:bg-gray-700 hover:text-white inline-flex items-center rounded-md py-2 px-3 text-sm font-medium"
          >
            Admin
          </button>
          <button
            [routerLink]="['/cart']"
            class="text-gray-300 hover:bg-gray-700 hover:text-white inline-flex items-center rounded-md py-2 px-3 text-sm font-medium"
          >
            Cart
          </button>
          <button
            [routerLink]="['/profile']"
            class="text-gray-300 hover:bg-gray-700 hover:text-white inline-flex items-center rounded-md py-2 px-3 text-sm font-medium"
          >
            Profile
          </button>
        </nav>
      </div>

      <!-------------- Mobile Navigation -------------->
      <nav
        class="lg:hidden absolute bottom-0 right-0 left-0 bg-light-tint z-50"
        *ngIf="isMenuOpen"
      >
        <div class="space-y-1 px-2 pb-3 pt-2">
          <button
            [routerLink]="['/pizza']"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md py-2 px-3 text-base font-medium"
          >
            Custom Pizzas
          </button>
          <button
            [routerLink]="['/specialty-pizzas']"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md py-2 px-3 text-base font-medium"
          >
            Specialty Pizzas
          </button>
          <button
            [routerLink]="['/cart']"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md py-2 px-3 text-base font-medium"
          >
            Your Cart
          </button>
        </div>
        <div class="border-t border-gray-700 pb-3 pt-4">
          <div class="flex items-center px-4">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-white">Tom Cook</div>
              <div class="text-sm font-medium text-gray-400">
                tom@example.com
              </div>
            </div>
            <button
              type="button"
              class="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span class="w-6 h-6" [innerHTML]="getIcon(5)"></span>
            </button>
          </div>
          <div class="mt-3 space-y-1 px-2">
            <button
              [routerLink]="['/profile']"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              Your Profile
            </button>
            <button
              [routerLink]="['/admin-root']"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              Administration
            </button>
            <button
              [routerLink]="['/sign-in']"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              Sign out
            </button>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, SharedModule],
  animations: [opacityScale],
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  constructor(private icons: IconsService) {}

  ngOnInit() {}

  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  getIcon(num: number) {
    return this.icons.getIcon(num);
  }
}
