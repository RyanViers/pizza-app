import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { APIService, ListLocationsInput } from 'src/app/API.service';

@Component({
  selector: 'app-location-cards',
  standalone: true,
  imports: [CommonModule, IonicModule, SharedModule],
  styles: [],
  template: `<div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
    <div class="mx-auto max-w-2xl">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Meet our team
      </h2>
      <p class="mt-4 text-lg leading-8 text-gray-400">
        We’re a dynamic group of individuals who are passionate about what we
        do.
      </p>
    </div>
    <ul
      role="list"
      class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
    >
      @for (s of stores; track s.id) {
        <li class="rounded-2xl bg-light-tint px-8 py-10">
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
      }
    </ul>
  </div>`,
})
export default class LocationCardsComponent implements OnInit {
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
