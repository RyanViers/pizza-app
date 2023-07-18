import { AdminPaginationComponent } from './components/admin-pagination.component';
import { IconsService } from './../../../../utils/icons.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PizzaVeggie, PizzaMeat } from 'src/app/API.service';
import { Inventory, inventory } from './model';
import { IonicModule } from '@ionic/angular';
import { AdminLocationSelectorComponent } from '../location-selector/admin-location-selector.component';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    AdminLocationSelectorComponent,
    AdminPaginationComponent,
  ],
  template: `<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <app-admin-location-selector (locationChange)="onLocationChange($event)" />
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold leading-6 text-gray-300">Users</h1>
          <p class="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
          >
            <div class="relative">
              <!-- Selected row actions, only show when rows are selected. -->
              <div
                [style.visibility]="optionCheckbox ? 'visible' : 'hidden'"
                class="absolute top-0 left-14 flex h-12 items-center space-x-3 bg-white sm:left-12"
              >
                <button
                  type="button"
                  class="inline-flex items-center rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                >
                  Bulk edit
                </button>
                <button
                  type="button"
                  class="inline-flex items-center rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                >
                  Delete all
                </button>
              </div>

              <table class="min-w-full table-fixed divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" class="relative px-7 sm:w-12 sm:px-6">
                      <input
                        [checked]="optionCheckbox"
                        (change)="optionCheckbox = !optionCheckbox"
                        type="checkbox"
                        class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </th>
                    <th
                      scope="col"
                      [style.visibility]="optionCheckbox ? 'hidden' : 'visible'"
                      class="min-w-[12rem] py-3.5  pr-3 text-left text-sm font-semibold text-gray-300"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-300"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-300"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-300"
                    >
                      Location
                    </th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-gray-900">
                  <ng-container *ngFor="let inventoryItem of inventory">
                    <!-- Selected: "bg-gray-50" -->
                    <tr
                      *ngFor="let item of inventoryItem.items"
                      [hidden]="
                        selectedLocation && item.location !== selectedLocation
                      "
                    >
                      <td class="relative px-7 sm:w-12 sm:px-6">
                        <!-- Selected row marker, only show when row is selected. -->
                        <div
                          class="absolute inset-y-0 left-0 w-0.5 bg-indigo-600"
                        ></div>

                        <input
                          type="checkbox"
                          class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </td>
                      <!-- Selected: "text-indigo-600", Not Selected: "text-gray-300" -->
                      <td
                        class="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-300"
                      >
                        {{ item.name }}
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      >
                        {{ item.price }}
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      >
                        {{ item.amount }}
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      >
                        {{ item.location }}
                      </td>
                      <td
                        class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3"
                      >
                        <a
                          href="#"
                          class="text-indigo-600 hover:text-indigo-900"
                          >Edit<span class="sr-only">, Lindsay Walton</span></a
                        >
                      </td>
                    </tr>
                  </ng-container>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <app-admin-pagination />
  </div>`,
  styles: [],
})
export default class InventoryComponent implements OnInit {
  optionCheckbox: boolean = false;

  selectedLocation: string | null = null;
  pizzaVeggie: PizzaVeggie[] = this.objectValues(PizzaVeggie);
  pizzaMeat: PizzaMeat[] = this.objectValues(PizzaMeat);
  inventoryArray: (PizzaVeggie | PizzaMeat)[] = [
    ...this.pizzaVeggie,
    ...this.pizzaMeat,
  ];
  inventory: Inventory[] = inventory;

  constructor(private icons: IconsService) {}

  ngOnInit() {}

  getIcon(num: number) {
    return this.icons.getIcon(num);
  }

  objectValues(obj: any): any[] {
    return Object.values(obj);
  }

  onLocationChange(location: string | null) {
    this.selectedLocation = location;
  }
}
