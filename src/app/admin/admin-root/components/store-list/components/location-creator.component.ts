import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-location-creator',
  standalone: true,
  imports: [CommonModule, IonicModule, SharedModule],
  styles: [],
  template: `<div class="border-b border-white/10 py-12">
    <h2 class="text-base font-semibold leading-7 text-white">
      Location Creator
    </h2>
    <p class="mt-1 text-sm leading-6 text-gray-400">
      For administrator purposes only.
    </p>

    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div class="sm:col-span-3">
        <label for="name" class="block text-sm font-medium leading-6 text-white"
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
        <label for="city" class="block text-sm font-medium leading-6 text-white"
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
  </div>`,
})
export default class LocationCreatorComponent {
  constructor() {}
}
