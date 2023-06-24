import { IconsService } from './../../utils/icons.service';
import { EmployeeSignUpComponent } from './components/employee-list/components/employee-sign-up.component';
import { EmployeeListComponent } from './components/employee-list/components/employee-list.component';
import { EmployeeService } from './components/employee-list/employee.service';
import { FooterComponent } from './../../components/footer/footer.component';
import { HeaderComponent } from './../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminInfoComponent } from './components/admin-info/admin-info.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { StoreListComponent } from './components/store-list/store-list.component';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-root',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    RouterModule,
    AdminInfoComponent,
    InventoryComponent,
    StoreListComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeListComponent,
    EmployeeSignUpComponent,
  ],
  template: `<ion-header>
      <app-header></app-header>
    </ion-header>
    <ion-content>
      <div class="flex flex-col w-full h-full p-2 md:p-4 lg:p-6">
        <!-- Sticky search header -->
        <div
          class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-light-shade px-4 shadow-sm sm:px-6 lg:px-8"
        >
          <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <form class="flex flex-1" action="#" method="GET">
              <div class="flex justify-center items-center relative w-full">
                <span class="w-5 h-5" [innerHTML]="getIcon(6)"></span>
                <input
                  id="search-field"
                  class="block h-full w-full border-0 bg-transparent py-0 pl-2 pr-0 text-white focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </div>
            </form>
          </div>
        </div>

        <main>
          <!-- Secondary navigation -->
          <nav class="flex overflow-x-auto border-b border-white/10 py-4">
            <ul
              role="list"
              class="flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 text-gray-400 sm:px-6 lg:px-8"
            >
              <li>
                <button
                  [routerLink]="['/admin-root/admin-info']"
                  class="text-success hover:text-indigo-400"
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  [routerLink]="['/admin-root/employee-list']"
                  class="text-success hover:text-indigo-400"
                >
                  Employees List
                </button>
              </li>
              <li>
                <button
                  [routerLink]="['/admin-root/employee-sign-up']"
                  class="text-success hover:text-indigo-400"
                >
                  Employee Sign Up
                </button>
              </li>
              <li>
                <button
                  [routerLink]="['/admin-root/store-list']"
                  class="text-success hover:text-indigo-400"
                >
                  Store Locations
                </button>
              </li>
              <li>
                <button
                  [routerLink]="['/admin-root/inventory']"
                  class="text-success hover:text-indigo-400"
                >
                  Inventory
                </button>
              </li>
              <li>
                <button
                  [routerLink]="['/admin-root/admin-info']"
                  class="text-success hover:text-indigo-400"
                >
                  Notifications
                </button>
              </li>
            </ul>
          </nav>

          <!-- Heading -->
          <div
            class="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-700/10 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8"
          >
            <div>
              <div class="flex items-center gap-x-3">
                <div
                  class="flex-none rounded-full bg-green-400/10 p-1 text-green-400"
                >
                  <div class="h-2 w-2 rounded-full bg-current"></div>
                </div>
                <h1 class="flex gap-x-3 text-base leading-7">
                  <span class="font-semibold text-white">Planetaria</span>
                  <span class="text-gray-600">/</span>
                  <span class="font-semibold text-white">mobile-api</span>
                </h1>
              </div>
              <p class="mt-2 text-xs leading-6 text-gray-400">
                Deploys from GitHub via main branch
              </p>
            </div>
            <div
              class="order-first flex-none rounded-full bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30 sm:order-none"
            >
              Production
            </div>
          </div>

          <!-- Stats -->
          <div
            class="border-b mb-20 border-white/5 grid grid-cols-1 bg-gray-700/10 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div class="border-t border-white/5 py-6 px-4 sm:px-6 lg:px-8">
              <p class="text-sm font-medium leading-6 text-gray-400">
                Number of deploys
              </p>
              <p class="mt-2 flex items-baseline gap-x-2">
                <span class="text-4xl font-semibold tracking-tight text-white"
                  >405</span
                >
              </p>
            </div>
            <div
              class="border-t border-white/5 py-6 px-4 sm:px-6 lg:px-8 sm:border-l"
            >
              <p class="text-sm font-medium leading-6 text-gray-400">
                Average deploy time
              </p>
              <p class="mt-2 flex items-baseline gap-x-2">
                <span class="text-4xl font-semibold tracking-tight text-white"
                  >3.65</span
                >
                <span class="text-sm text-gray-400">mins</span>
              </p>
            </div>
            <div
              class="border-t border-white/5 py-6 px-4 sm:px-6 lg:px-8 lg:border-l"
            >
              <p class="text-sm font-medium leading-6 text-gray-400">
                Number of servers
              </p>
              <p class="mt-2 flex items-baseline gap-x-2">
                <span class="text-4xl font-semibold tracking-tight text-white"
                  >3</span
                >
              </p>
            </div>
            <div
              class="border-t border-white/5 py-6 px-4 sm:px-6 lg:px-8 sm:border-l"
            >
              <p class="text-sm font-medium leading-6 text-gray-400">
                Success rate
              </p>
              <p class="mt-2 flex items-baseline gap-x-2">
                <span class="text-4xl font-semibold tracking-tight text-white"
                  >98.5%</span
                >
              </p>
            </div>
          </div>
          <div class="h-full relative w-full block ">
            <ion-router-outlet></ion-router-outlet>
          </div>
          <app-footer class="sticky"></app-footer>
        </main>
      </div>
    </ion-content> `,
  styles: [``],
})
export class AdminRootComponent implements OnInit {
  constructor(private employee: EmployeeService, private icons: IconsService) {}

  ngOnInit() {}

  /**
   * go to section
   * @param precedence
   */
  goToSection(precedence: number): void {
    let section = this.employee.getSectionFromPrecedence(precedence);
    this.employee.setSection(section);
  }

  /**
   * get icon
   */
  getIcon(num: number): SafeHtml | undefined {
    return this.icons.getIcon(num);
  }
}
