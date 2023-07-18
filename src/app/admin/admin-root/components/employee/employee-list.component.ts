import { AdminLocationSelectorComponent } from './../location-selector/admin-location-selector.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { employees, Employee } from '../../utils/models/employees';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    RouterModule,
    AdminLocationSelectorComponent,
  ],
  template: `
    <ion-content class="maw-w-max">
      <h1
        class="flex justify-center items-center px-4 text-4xl font-semibold text-white sm:px-6 lg:px-8"
      >
        Employee List
      </h1>
      <app-admin-location-selector
        (locationChange)="onLocationChange($event)"
      />
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <h1 class="text-base font-semibold leading-6 text-gray-300">
              Users
            </h1>
            <p class="mt-2 text-sm text-gray-700">
              A list of all the users in your account including their name,
              title, email and role.
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
              <table class="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-100 sm:pl-0"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"
                    >
                      Role
                    </th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <ng-container *ngFor="let e of employees">
                    <tr
                      *ngIf="
                        !selectedLocation || e.storeName === selectedLocation
                      "
                    >
                      <td
                        class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0"
                      >
                        <div class="flex items-center">
                          <div class="h-11 w-11 flex-shrink-0">
                            <img class="h-11 w-11 rounded-full" [src]="e.img" />
                          </div>
                          <div class="ml-4">
                            <div class="font-medium text-gray-300">
                              {{ e.name }}
                            </div>
                            <div class="mt-1 text-gray-500">
                              {{ e.email }}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-5 text-sm text-gray-500"
                      >
                        <div class="text-gray-300">{{ e.storeName }}</div>
                        <div class="mt-1 text-gray-500">{{ e.age }}</div>
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-5 text-sm text-gray-500"
                      >
                        <span
                          class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                          >{{ e.phone }}</span
                        >
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-5 text-sm text-gray-500"
                      >
                        {{ e.salary }}
                      </td>
                    </tr>
                  </ng-container>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  `,
  styles: [],
})
export default class EmployeeListComponent implements OnInit {
  selectedLocation: string | null = null;
  employees: Employee[] = employees;
  constructor() {}

  ngOnInit() {}

  onLocationChange(location: string | null) {
    this.selectedLocation = location;
  }
}
