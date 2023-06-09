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
    <ion-content>
      <div class="maw-w-max">
        <h1
          class="flex justify-center items-center px-4 text-4xl font-semibold text-white sm:px-6 lg:px-8"
        >
          Employee List
        </h1>
        <app-admin-location-selector
          (locationChange)="onLocationChange($event)"
        ></app-admin-location-selector>
        <table class="mt-6 w-full whitespace-nowrap text-left ">
          <colgroup>
            <col class="w-full sm:w-4/12" />
            <col class="lg:w-4/12" />
            <col class="lg:w-2/12" />
            <col class="lg:w-1/12" />
            <col class="lg:w-1/12" />
          </colgroup>
          <thead class="border-b border-white/10 text-sm leading-6 text-white">
            <tr>
              <th
                scope="col"
                class="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8"
              >
                Employee
              </th>
              <th
                scope="col"
                class="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell"
              >
                Commit
              </th>
              <th
                scope="col"
                class="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20"
              >
                Location
              </th>
              <th
                scope="col"
                class="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20"
              >
                Duration
              </th>
              <th
                scope="col"
                class="hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8"
              >
                Deployed at
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5">
            <ng-container *ngFor="let e of employees">
              <tr
                [hidden]="selectedLocation && e.storeName !== selectedLocation"
              >
                <td class="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                  <div class="flex items-center gap-x-4">
                    <img
                      [src]="e.img"
                      class="h-8 w-8 rounded-full bg-gray-800"
                    />
                    <div
                      class="truncate text-sm font-medium leading-6 text-white"
                    >
                      {{ e.name }}
                    </div>
                  </div>
                </td>
                <td class="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                  <div class="flex gap-x-3">
                    <div class="font-mono text-sm leading-6 text-gray-400">
                      {{ e.email }}
                    </div>
                    <span
                      class="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20"
                      >main</span
                    >
                  </div>
                </td>
                <td class="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                  <div
                    class="flex items-center justify-end gap-x-2 sm:justify-start"
                  >
                    <time
                      class="text-gray-400 sm:hidden"
                      datetime="2023-01-23T11:00"
                      >{{ e.storeName }}</time
                    >
                    <div
                      class="flex-none rounded-full p-1 text-green-400 bg-green-400/10"
                    >
                      <div class="h-1.5 w-1.5 rounded-full bg-current"></div>
                    </div>
                    <div class="hidden text-white sm:block">
                      {{ e.storeName }}
                    </div>
                  </div>
                </td>
                <td
                  class="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20"
                >
                  {{ e.phone }}
                </td>
                <td
                  class="hidden py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8"
                >
                  <time datetime="2023-01-23T11:00">{{ e.id }}</time>
                </td>
              </tr>
            </ng-container>
          </tbody>
        </table>
      </div>
    </ion-content>
  `,
  styles: [],
})
export class EmployeeListComponent implements OnInit {
  selectedLocation: string | null = null;
  employees: Employee[] = employees;
  constructor() {}

  ngOnInit() {}

  onLocationChange(location: string | null) {
    this.selectedLocation = location;
  }
}
