import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, NgOptimizedImage],
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
      <div class="block group">
        <div
          class="h-full overflow-hidden rounded-lg aspect-h-2 aspect-w-3 lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
        >
          <img
            ngSrc="assets/stores/jc-pic.jpg"
            width="1"
            height="1"
            class="object-cover object-center w-full h-full"
          />
        </div>
        <h3 class="mt-4 text-base font-semibold text-dark-tint">
          Johnson City
        </h3>
        <p class="mt-2 text-sm text-gray-500">
          The city's vibrant downtown area is a bustling hub of unique local
          businesses, from eclectic boutiques to delicious restaurants,
          including the best pizza at The Crust Kingdom!
        </p>
      </div>
      <div class="block group">
        <div
          class="h-full overflow-hidden rounded-lg aspect-h-2 aspect-w-3 lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
        >
          <img
            ngSrc="assets/stores/kingsport-pic.jpg"
            width="1"
            height="1"
            class="object-cover object-center w-full h-full"
          />
        </div>
        <h3 class="mt-4 text-base font-semibold text-dark-tint">Kingsport</h3>
        <p class="mt-2 text-sm text-gray-500">
          Known for its thriving arts scene, Kingsport is also home to Doughy
          Delights, where the art of pizza-making takes center stage!
        </p>
      </div>
      <div class="block group">
        <div
          class="h-full overflow-hidden rounded-lg aspect-h-2 aspect-w-3 lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
        >
          <img
            ngSrc="assets/stores/bristol-pic.jpg"
            width="1"
            height="1"
            class="object-cover object-center w-full h-full"
          />
        </div>
        <h3 class="mt-4 text-base font-semibold text-dark-tint">Bristol</h3>
        <p class="mt-2 text-sm text-gray-500">
          Bristol is a city that straddles two states but is united in its love
          for music, motorsports, and mouthwatering pizza from The Crust
          Kingdom!
        </p>
      </div>
    </div>
  </section>`,
  styles: [``],
})
export class LocationsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
