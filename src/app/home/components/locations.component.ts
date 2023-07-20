import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgOptimizedImage } from '@angular/common';
import { Locations, locations } from '../models/locations';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, NgOptimizedImage],
  styles: [``],
  template: `<section
    class="relative max-w-xl px-4 mb-10 mx-auto sm:px-6  lg:max-w-7xl lg:px-8"
  >
    <h2 class="text-2xl font-bold tracking-tight text-dark-tint">
      Our Locations
    </h2>
    <p class="mt-4 text-base text-gray-500">
      Each season, we collaborate with world-class designers to create a
      collection inspired by the natural world.
    </p>

    <div
      class="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0"
    >
      <div *ngFor="let l of locations" class="block group">
        <div
          class="h-full overflow-hidden rounded-lg aspect-h-2 aspect-w-3 lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
        >
          <img
            cover
            [ngSrc]="l.image"
            width="300"
            height="300"
            class="object-cover object-center w-full h-full"
          />
        </div>
        <h3 class="mt-4 text-base font-semibold text-dark-tint">
          {{ l.name }}
        </h3>
        <p class="mt-2 text-sm text-gray-500">
          {{ l.description }}
        </p>
      </div>
    </div>
  </section>`,
})
export class LocationsComponent {
  locations: Locations[] = locations;
  constructor() {}
}
