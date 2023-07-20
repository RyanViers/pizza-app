import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pizza-cards',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  styles: [``],
  template: `<section class="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
    <div
      class="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0"
    >
      <h2 class="text-2xl font-bold tracking-tight text-dark-shade">
        Specialty Pizzas
      </h2>
    </div>

    <div class="flow-root mt-4">
      <div class="-my-2">
        <div
          class="box-content relative py-2 overflow-x-auto h-80 xl:overflow-visible"
        >
          <div
            class="absolute flex px-4 space-x-8 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0"
          >
            <a
              [routerLink]="['/specialty-pizzas']"
              class="relative flex flex-col w-56 p-6 overflow-hidden rounded-lg h-80 hover:opacity-75 xl:w-auto"
            >
              <span class="absolute inset-0">
                <img
                  src="assets/specialty-pizzas/Pepperoni.jpeg"
                  class="object-cover object-center w-full h-full"
                />
              </span>
              <span
                class="absolute inset-x-0 bottom-0 opacity-50 h-2/3 bg-gradient-to-t from-gray-800"
              ></span>
              <span
                class="relative mt-auto text-xl font-bold text-center text-white"
                >Pepperoni</span
              >
            </a>
            <a
              [routerLink]="['/specialty-pizzas']"
              class="relative flex flex-col w-56 p-6 overflow-hidden rounded-lg h-80 hover:opacity-75 xl:w-auto"
            >
              <span class="absolute inset-0">
                <img
                  src="assets/specialty-pizzas/Meat-Lovers.jpeg"
                  class="object-cover object-center w-full h-full"
                />
              </span>
              <span
                class="absolute inset-x-0 bottom-0 opacity-50 h-2/3 bg-gradient-to-t from-gray-800"
              ></span>
              <span
                class="relative mt-auto text-xl font-bold text-center text-white"
                >Meat Lovers</span
              >
            </a>
            <a
              [routerLink]="['/specialty-pizzas']"
              class="relative flex flex-col w-56 p-6 overflow-hidden rounded-lg h-80 hover:opacity-75 xl:w-auto"
            >
              <span class="absolute inset-0">
                <img
                  src="assets/specialty-pizzas/Margherita.jpeg"
                  class="object-cover object-center w-full h-full"
                />
              </span>
              <span
                class="absolute inset-x-0 bottom-0 opacity-50 h-2/3 bg-gradient-to-t from-gray-800"
              ></span>
              <span
                class="relative mt-auto text-xl font-bold text-center text-white"
                >Margherita</span
              >
            </a>
            <a
              [routerLink]="['/specialty-pizzas']"
              class="relative flex flex-col w-56 p-6 overflow-hidden rounded-lg h-80 hover:opacity-75 xl:w-auto"
            >
              <span class="absolute inset-0">
                <img
                  src="assets/specialty-pizzas/BBQ-Chicken-Pizza.jpeg"
                  class="object-cover object-center w-full h-full"
                />
              </span>
              <span
                class="absolute inset-x-0 bottom-0 opacity-50 h-2/3 bg-gradient-to-t from-gray-800"
              ></span>
              <span
                class="relative mt-auto text-xl font-bold text-center text-white"
                >BBQ Chicken</span
              >
            </a>
            <a
              [routerLink]="['/specialty-pizzas']"
              class="relative flex flex-col w-56 p-6 overflow-hidden rounded-lg h-80 hover:opacity-75 xl:w-auto"
            >
              <span class="absolute inset-0">
                <img
                  src="assets/specialty-pizzas/Taco.jpeg"
                  class="object-cover object-center w-full h-full"
                />
              </span>
              <span
                class="absolute inset-x-0 bottom-0 opacity-50 h-2/3 bg-gradient-to-t from-gray-800"
              ></span>
              <span
                class="relative mt-auto text-xl font-bold text-center text-white"
                >Taco</span
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>`,
})
export class PizzaCardsComponent {
  constructor() {}
}
