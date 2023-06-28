import { IconsService } from './../../../../utils/icons.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-admin-navigation',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  template: `<div>
    <div
      class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-dark-shade bg-light-shade px-4 shadow-sm sm:px-6 lg:px-8"
    >
      <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form class="flex flex-1" action="#" method="GET">
          <div class="flex justify-center items-center relative w-full">
            <span
              class="w-5 h-5 text-dark-shade"
              [innerHTML]="getIcon(6)"
            ></span>
            <input
              id="search-field"
              class="block h-full w-full border-0 bg-transparent py-0 pl-2 pr-0 text-dark-shade focus:ring-0 sm:text-sm"
              placeholder="Search..."
              type="search"
              name="search"
            />
          </div>
        </form>
      </div>
    </div>
    <nav class="flex overflow-x-auto border-b border-white/10 py-4">
      <ul
        role="list"
        class="flex justify-between min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 text-medium-tint sm:px-6 lg:px-8"
      >
        <li>
          <button
            [routerLink]="['/admin-root/admin-info']"
            class="text-success hover:text-danger rounded-lg p-2"
          >
            Overview
          </button>
        </li>
        <li>
          <button
            [routerLink]="['/admin-root/employee-list']"
            class="text-success hover:text-danger rounded-lg p-2"
          >
            Employees List
          </button>
        </li>
        <li>
          <button
            [routerLink]="['/admin-root/employee-sign-up']"
            class="text-success hover:text-danger rounded-lg p-2"
          >
            Employee Sign Up
          </button>
        </li>
        <li>
          <button
            [routerLink]="['/admin-root/store-list']"
            class="text-success hover:text-danger rounded-lg p-2"
          >
            Store Locations
          </button>
        </li>
        <li>
          <button
            [routerLink]="['/admin-root/inventory']"
            class="text-success hover:text-danger rounded-lg p-2"
          >
            Inventory
          </button>
        </li>
        <li>
          <button
            [routerLink]="['/admin-root/admin-info']"
            class="text-success hover:text-danger rounded-lg p-2"
          >
            Notifications
          </button>
        </li>
      </ul>
    </nav>
  </div>`,
  styles: [``],
})
export class AdminNavigationComponent implements OnInit {
  constructor(private icons: IconsService) {}

  ngOnInit() {}

  getIcon(num: number): SafeHtml | undefined {
    return this.icons.getIcon(num);
  }
}
