import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmailButtonComponent } from './email-button/email-button.component';
import { APIService, ListLocationsInput } from 'src/app/API.service';

@Component({
  selector: 'app-store-list',
  standalone: true,
  imports: [CommonModule, IonicModule, SharedModule, EmailButtonComponent],
  styles: [],
  template: `<div class="overflow-y-auto">
    <div class="bg-light-shade p-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div class="mx-auto max-w-2xl">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Meet our team
          </h2>
          <p class="mt-4 text-lg leading-8 text-gray-400">
            We’re a dynamic group of individuals who are passionate about what
            we do.
          </p>
        </div>
        <ul
          role="list"
          class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          <li
            class="rounded-2xl bg-light-tint px-8 py-10"
            *ngFor="let s of stores"
          >
            <img
              class="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
              [src]="s.location_url"
            />
            <h3
              class="mt-6 text-base font-semibold leading-7 tracking-tight text-white"
            >
              {{ s.location }}
            </h3>
            <p class="text-sm leading-6 text-gray-400">{{ s.name }}</p>
            <p class="text-sm leading-6 text-gray-400">
              {{ s.address }} {{ s.state }} {{ s.zip }}
            </p>
            <p class="text-sm leading-6 text-gray-400">{{ s.phone }}</p>
            <p class="text-sm leading-6 text-gray-400">{{ s.email }}</p>
          </li>
        </ul>
      </div>
      <div class="border-b border-white/10 py-12">
        <h2 class="text-base font-semibold leading-7 text-white">
          Location Creator
        </h2>
        <p class="mt-1 text-sm leading-6 text-gray-400">
          For administrator purposes only.
        </p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label
              for="name"
              class="block text-sm font-medium leading-6 text-white"
              >Store Name</label
            >
            <div class="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-4">
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-white"
              >Email address</label
            >
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="col-span-full">
            <label
              for="street-address"
              class="block text-sm font-medium leading-6 text-white"
              >Street address</label
            >
            <div class="mt-2">
              <input
                type="text"
                name="street-address"
                id="street-address"
                autocomplete="street-address"
                class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-2 sm:col-start-1">
            <label
              for="city"
              class="block text-sm font-medium leading-6 text-white"
              >City</label
            >
            <div class="mt-2">
              <input
                type="text"
                name="city"
                id="city"
                autocomplete="address-level2"
                class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label
              for="region"
              class="block text-sm font-medium leading-6 text-white"
              >State / Province</label
            >
            <div class="mt-2">
              <input
                type="text"
                name="region"
                id="region"
                autocomplete="address-level1"
                class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label
              for="postal-code"
              class="block text-sm font-medium leading-6 text-white"
              >ZIP / Postal code</label
            >
            <div class="mt-2">
              <input
                type="text"
                name="postal-code"
                id="postal-code"
                autocomplete="postal-code"
                class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> `,
})
export default class StoreListComponent implements OnInit {
  stores?: any;

  constructor(private api: APIService) {}

  async ngOnInit() {
    const input: ListLocationsInput = {
      reverse_dir: false,
      limit: 100,
      nextToken: null,
    };
    const response = await this.api.ListLocations(input);

    this.stores = response.items;
  }
}
