import { IconsService } from './../../../utils/icons.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  template: ` <div class="relative bg-gray-900">
    <!-- Decorative image and overlay -->
    <div aria-hidden="true" class="absolute inset-0 overflow-hidden">
      <img
        src="assets/pizzaria.jpg"
        alt=""
        class="object-cover object-center w-full h-full opacity-60"
      />
    </div>
    <div
      aria-hidden="true"
      class="absolute inset-0 bg-gray-900 opacity-50"
    ></div>

    <!-- Navigation Header -->
    <header class="relative z-10">
      <nav aria-label="Top">
        <div class="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div>
              <div class="flex items-center justify-between h-16">
                <div class="flex items-center justify-end flex-1">
                  <a
                    [routerLink]="['/sign-in']"
                    class="text-sm font-medium text-white block"
                    >Sign In</a
                  >

                  <div class="flex items-center lg:ml-8">
                    <!-- Cart -->
                    <div class="flow-root ml-4 lg:ml-8">
                      <a
                        [routerLink]="['/cart']"
                        class="flex items-center p-2 -m-2 group"
                      >
                        <span class="w-6 h-6" [innerHTML]="getIcon(3)"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <div
      class="relative flex flex-col items-center max-w-3xl px-6 py-32 mx-auto text-center sm:py-64 lg:px-0"
    >
      <h1 class="text-4xl font-bold tracking-tight text-white lg:text-6xl">
        The Crust Kingdom:
      </h1>
      <p class="mt-4 text-xl text-white">
        At The Crust Kingdom, we're all about flavor freedom! Meet our "Pizza
        Builder," where you're the maestro of marinara, the sultan of sausage.
        Want a classic crust with pepperoni and mushrooms? Done. Craving a thin
        base with onions and bell peppers? Say no more! Remember, in our
        kitchen, you’re the big cheese!
      </p>
      <a
        [routerLink]="['/pizza']"
        class="inline-block px-8 py-3 mt-8 text-base font-medium text-black border rounded-md border-light-default bg-light-tint hover:bg-light-shade"
        >Pizza Builder</a
      >
    </div>
  </div>`,
  styles: [``],
})
export class HeroComponent implements OnInit {
  constructor(private icons: IconsService) {}

  ngOnInit() {}

  getIcon(num: number) {
    return this.icons.getIcon(num);
  }
}
