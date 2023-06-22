import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  template:`<section
  aria-labelledby="collection-heading"
  class="max-w-xl px-4 pt-24 mx-auto sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
>
  <h2
    id="collection-heading"
    class="text-2xl font-bold tracking-tight text-dark-tint"
  >
    Our Locations
  </h2>
  <p class="mt-4 text-base text-gray-500">
    Each season, we collaborate with world-class designers to create a
    collection inspired by the natural world.
  </p>

  <div
    class="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0"
  >
    <a href="#" class="block group">
      <div
        aria-hidden="true"
        class="h-full overflow-hidden rounded-lg aspect-h-2 aspect-w-3 lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
      >
        <img
          src="assets/stores/jc-pic.jpg"
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
    </a>
    <a href="#" class="block group">
      <div
        aria-hidden="true"
        class="h-full overflow-hidden rounded-lg aspect-h-2 aspect-w-3 lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
      >
        <img
          src="assets/stores/kingsport-pic.jpg"
          alt="Natural leather mouse pad on white desk next to porcelain mug and keyboard."
          class="object-cover object-center w-full h-full"
        />
      </div>
      <h3 class="mt-4 text-base font-semibold text-dark-tint">
        Kingsport
      </h3>
      <p class="mt-2 text-sm text-gray-500">
        Known for its thriving arts scene, Kingsport is also home to
        Doughy Delights, where the art of pizza-making takes center stage!
      </p>
    </a>
    <a href="#" class="block group">
      <div
        aria-hidden="true"
        class="h-full overflow-hidden rounded-lg aspect-h-2 aspect-w-3 lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
      >
        <img
          src="assets/stores/bristol-pic.jpg"
          alt="Person placing task list card into walnut card holder next to felt carrying case on leather desk pad."
          class="object-cover object-center w-full h-full"
        />
      </div>
      <h3 class="mt-4 text-base font-semibold text-dark-tint">Bristol</h3>
      <p class="mt-2 text-sm text-gray-500">
        Bristol is a city that straddles two states but is united in its
        love for music, motorsports, and mouthwatering pizza from The
        Crust Kingdom!
      </p>
    </a>
  </div>
</section>`,
  styles: [``],
})
export class LocationsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
