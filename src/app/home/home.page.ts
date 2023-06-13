import { PromoComponent } from './components/promo/promo.component';
import { FooterComponent } from './../components/footer/footer.component';
import { HeaderComponent } from './../components/header/header.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-home',
  template: `
    <ion-header>
      <ion-toolbar>
        <app-header></app-header>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="bg-white">
        <!-- Hero section -->
        <div class="relative bg-gray-900">
          <!-- Decorative image and overlay -->
          <div aria-hidden="true" class="absolute inset-0 overflow-hidden">
            <img
              src="assets/pizzaria.jpg"
              alt=""
              class="h-full w-full object-cover object-center opacity-60"
            />
          </div>
          <div
            aria-hidden="true"
            class="absolute inset-0 bg-gray-900 opacity-50"
          ></div>

          <!-- Navigation -->
          <header class="relative z-10">
            <nav aria-label="Top">
              <!-- Top navigation -->
              <div class="bg-gray-900">
                <div
                  class="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
                >
                  <!-- Currency selector -->
                  <form>
                    <div>
                      <label for="desktop-currency" class="sr-only"
                        >Currency</label
                      >
                      <div
                        class="group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white"
                      >
                        <select
                          id="desktop-currency"
                          name="currency"
                          class="flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100"
                        >
                          <option>CAD</option>
                          <option>USD</option>
                          <option>AUD</option>
                          <option>EUR</option>
                          <option>GBP</option>
                        </select>
                        <div
                          class="pointer-events-none absolute inset-y-0 right-0 flex items-center"
                        >
                          <svg
                            class="h-5 w-5 text-gray-300"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </form>

                  <div class="flex items-center space-x-6">
                    <a
                      href="#"
                      class="text-sm font-medium text-white hover:text-gray-100"
                      >Sign in</a
                    >
                    <a
                      href="#"
                      class="text-sm font-medium text-white hover:text-gray-100"
                      >Create an account</a
                    >
                  </div>
                </div>
              </div>

              <!-- Secondary navigation -->
              <div
                class="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter"
              >
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div>
                    <div class="flex h-16 items-center justify-between">
                      <!-- Logo (lg+) -->
                      <div class="hidden lg:flex lg:flex-1 lg:items-center">
                        <a href="#">
                          <span class="sr-only">Your Company</span>
                          <img
                            class="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=white"
                            alt=""
                          />
                        </a>
                      </div>

                      <!-- Mobile menu and search (lg-) -->
                      <div class="flex flex-1 items-center lg:hidden">
                        <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
                        <button type="button" class="-ml-2 p-2 text-white">
                          <span class="sr-only">Open menu</span>
                          <svg
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                          </svg>
                        </button>

                        <!-- Search -->
                        <a href="#" class="ml-2 p-2 text-white">
                          <span class="sr-only">Search</span>
                          <svg
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                          </svg>
                        </a>
                      </div>

                      <!-- Logo (lg-) -->
                      <a href="#" class="lg:hidden">
                        <span class="sr-only">Your Company</span>
                        <img
                          src="https://tailwindui.com/img/logos/mark.svg?color=white"
                          alt=""
                          class="h-8 w-auto"
                        />
                      </a>

                      <div class="flex flex-1 items-center justify-end">
                        <a
                          href="#"
                          class="hidden text-sm font-medium text-white lg:block"
                          >Search</a
                        >

                        <div class="flex items-center lg:ml-8">
                          <!-- Help -->
                          <a href="#" class="p-2 text-white lg:hidden">
                            <span class="sr-only">Help</span>
                            <svg
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                              />
                            </svg>
                          </a>
                          <a
                            href="#"
                            class="hidden text-sm font-medium text-white lg:block"
                            >Help</a
                          >

                          <!-- Cart -->
                          <div class="ml-4 flow-root lg:ml-8">
                            <a
                              href="#"
                              class="group -m-2 flex items-center p-2"
                            >
                              <svg
                                class="h-6 w-6 flex-shrink-0 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                />
                              </svg>
                              <span class="ml-2 text-sm font-medium text-white"
                                >0</span
                              >
                              <span class="sr-only"
                                >items in cart, view bag</span
                              >
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
            class="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0"
          >
            <h1
              class="text-4xl font-bold tracking-tight text-white lg:text-6xl"
            >
              The Crust Kingdom:
            </h1>
            <p class="mt-4 text-xl text-white">
              At The Crust Kingdom, we're all about flavor freedom! Meet our
              "Pizza Builder," where you're the maestro of marinara, the sultan
              of sausage. Want a classic crust with pepperoni and mushrooms?
              Done. Craving a thin base with onions and bell peppers? Say no
              more! Remember, in our kitchen, you’re the big cheese!
            </p>
            <a
              href="#"
              class="mt-8 inline-block rounded-md border border-light-default bg-light-tint px-8 py-3 text-base font-medium text-black hover:bg-light-shade"
              >Pizza Builder</a
            >
          </div>
        </div>

        <main>
          <!-- Category section -->
          <section
            aria-labelledby="category-heading"
            class="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8"
          >
            <div
              class="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0"
            >
              <h2
                id="category-heading"
                class="text-2xl font-bold tracking-tight text-dark-shade"
              >
                Specialty Pizzas
              </h2>
            </div>

            <div class="mt-4 flow-root">
              <div class="-my-2">
                <div
                  class="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible"
                >
                  <div
                    class="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0"
                  >
                    <a
                      href="#"
                      class="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                    >
                      <span aria-hidden="true" class="absolute inset-0">
                        <img
                          src="assets/specialty-pizzas/Pepperoni.jpeg"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                      ></span>
                      <span
                        class="relative mt-auto text-center text-xl font-bold text-white"
                        >Pepperoni</span
                      >
                    </a>
                    <a
                      href="#"
                      class="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                    >
                      <span aria-hidden="true" class="absolute inset-0">
                        <img
                          src="assets/specialty-pizzas/Meat-Lovers.jpeg"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                      ></span>
                      <span
                        class="relative mt-auto text-center text-xl font-bold text-white"
                        >Meat Lovers</span
                      >
                    </a>
                    <a
                      href="#"
                      class="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                    >
                      <span aria-hidden="true" class="absolute inset-0">
                        <img
                          src="assets/specialty-pizzas/Margherita.jpeg"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                      ></span>
                      <span
                        class="relative mt-auto text-center text-xl font-bold text-white"
                        >Margherita</span
                      >
                    </a>
                    <a
                      href="#"
                      class="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                    >
                      <span aria-hidden="true" class="absolute inset-0">
                        <img
                          src="assets/specialty-pizzas/BBQ-Chicken-Pizza.jpeg"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                      ></span>
                      <span
                        class="relative mt-auto text-center text-xl font-bold text-white"
                        >BBQ Chicken</span
                      >
                    </a>
                    <a
                      href="#"
                      class="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                    >
                      <span aria-hidden="true" class="absolute inset-0">
                        <img
                          src="assets/specialty-pizzas/Taco.jpeg"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                      ></span>
                      <span
                        class="relative mt-auto text-center text-xl font-bold text-white"
                        >Taco</span
                      >
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-6 px-4 sm:hidden">
              <a
                href="#"
                class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Browse all categories
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </section>

          <!-- Featured section -->
          <section
            aria-labelledby="social-impact-heading"
            class="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8"
          >
            <div class="relative overflow-hidden rounded-lg">
              <div class="absolute inset-0">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
                  alt=""
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <div
                class="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16"
              >
                <div
                  class="relative mx-auto flex max-w-3xl flex-col items-center text-center"
                >
                  <h2
                    id="social-impact-heading"
                    class="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                  >
                    <span class="block sm:inline">Masterpiece Menus</span>
                  </h2>
                  <p class="mt-3 text-xl text-white">
                    "Artfully crafted pizza combinations for the discerning
                    palate!"
                  </p>
                  <a
                    href="#"
                    class="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                    >Shop Workspace</a
                  >
                </div>
              </div>
            </div>
          </section>

          <!-- Collection section -->
          <section
            aria-labelledby="collection-heading"
            class="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
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
              <a href="#" class="group block">
                <div
                  aria-hidden="true"
                  class="h-full aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                >
                  <img
                    src="assets/stores/jc-pic.jpg"
                    class="h-full w-full object-cover object-center "
                  />
                </div>
                <h3 class="mt-4 text-base font-semibold text-dark-tint">
                  Johnson City
                </h3>
                <p class="mt-2 text-sm text-gray-500">
                  The city's vibrant downtown area is a bustling hub of unique
                  local businesses, from eclectic boutiques to delicious
                  restaurants, including the best pizza at The Crust Kingdom!
                </p>
              </a>
              <a href="#" class="group block">
                <div
                  aria-hidden="true"
                  class="h-full aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                >
                  <img
                    src="assets/stores/kingsport-pic.jpg"
                    alt="Natural leather mouse pad on white desk next to porcelain mug and keyboard."
                    class="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 class="mt-4 text-base font-semibold text-dark-tint">
                  Kingsport
                </h3>
                <p class="mt-2 text-sm text-gray-500">
                  Known for its thriving arts scene, Kingsport is also home to
                  Doughy Delights, where the art of pizza-making takes center
                  stage!
                </p>
              </a>
              <a href="#" class="group block">
                <div
                  aria-hidden="true"
                  class="h-full aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                >
                  <img
                    src="assets/stores/bristol-pic.jpg"
                    alt="Person placing task list card into walnut card holder next to felt carrying case on leather desk pad."
                    class="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 class="mt-4 text-base font-semibold text-dark-tint">
                  Bristol
                </h3>
                <p class="mt-2 text-sm text-gray-500">
                  Bristol is a city that straddles two states but is united in
                  its love for music, motorsports, and mouthwatering pizza from
                  The Crust Kingdom!
                </p>
              </a>
            </div>
          </section>

          <!-- Featured section -->
          <section
            aria-labelledby="comfort-heading"
            class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
          >
            <div class="relative overflow-hidden rounded-lg">
              <div class="absolute inset-0">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg"
                  alt=""
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <div
                class="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16"
              >
                <div
                  class="relative mx-auto flex max-w-3xl flex-col items-center text-center"
                >
                  <h2
                    id="comfort-heading"
                    class="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                  >
                    Simple productivity
                  </h2>
                  <p class="mt-3 text-xl text-white">
                    Endless tasks, limited hours, a single piece of paper. Not
                    really a haiku, but we're doing our best here. No kanban
                    boards, burndown charts, or tangled flowcharts with our
                    Focus system. Just the undeniable urge to fill empty
                    circles.
                  </p>
                  <a
                    href="#"
                    class="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                    >Shop Focus</a
                  >
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <ion-footer>
        <ion-toolbar>
          <app-footer></app-footer>
        </ion-toolbar>
      </ion-footer>
    </ion-content>
  `,
  styles: [``],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    SharedModule,
    HeaderComponent,
    FooterComponent,
    PromoComponent,
  ],
})
export class HomePage {
  constructor() {}
}
