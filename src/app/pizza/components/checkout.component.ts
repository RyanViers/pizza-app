import { CommonModule } from '@angular/common';
import { Component, Signal, WritableSignal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { PizzaService } from '../pizza.service';
import { CustomPizza } from 'src/app/API.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, IonicModule, SharedModule],
  providers: [],
  styles: [
    `
      :host {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
      }
    `,
  ],
  template: `
    <ion-content>
      <div
        class="flex flex-col w-full h-full mx-auto max-w-md px-4 pb-16 sm:px-6 sm:pb-24 lg:px-0 "
      >
        <h1
          class="text-center text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl"
        >
          Pizza Cart
        </h1>

        <div class="mt-12">
          <section aria-labelledby="cart-heading">
            <ul
              role="list"
              class="divide-y divide-gray-200 border-b border-t border-gray-200"
            >
              <li class="flex py-6">
                <div class="flex-shrink-0">
                  <img
                    src="assets/pizza.jpg"
                    class="h-24 w-24 rounded-md object-cover
                object-center sm:h-32 sm:w-32"
                  />
                </div>

                <div class="ml-4 flex flex-1 flex-col sm:ml-6">
                  <div class="grid grid-cols-1 mt-4 items-end justify-between">
                    <div class="flex justify-between">
                      <h3 class="text-sm">Quantity:</h3>
                      <p class="text-sm pl-5 text-gray-400">
                        {{ $quantitySignal() }}
                      </p>
                    </div>
                    <div class="flex justify-between">
                      <h3 class="text-sm">Size:</h3>
                      <p class="text-sm pl-5 text-gray-400">
                        {{ $pizzaSizePriceSignal() }}
                      </p>
                    </div>
                    <div class="flex justify-between">
                      <h3 class="text-sm">Crust:</h3>
                      <p class="text-sm pl-5 text-gray-400">
                        {{ $pizzaCrustPriceSignal() }}
                      </p>
                    </div>
                    <div class="flex justify-between">
                      <h3 class="text-sm">Sauce:</h3>
                      <p class="text-sm pl-5 text-gray-400">
                        {{ $pizzaSaucePriceSignal() }}
                      </p>
                    </div>
                    <div class="flex justify-between">
                      <h3 class="text-sm">Cheese Qty:</h3>
                      <p class="text-sm pl-5 text-gray-400">
                        {{ $pizzaCheeseQuantityPriceSignal() }}
                      </p>
                    </div>
                    <div class="flex justify-between">
                      <h3 class="text-sm">Add Cheese:</h3>
                      <p class="text-sm pl-5 text-gray-400">
                        {{ $pizzaCheeseAdditionalPriceSignal() }}
                      </p>
                    </div>
                    <div class="flex justify-between">
                      <h3 class="text-sm">Meats:</h3>
                      <p class="text-sm pl-5 text-gray-400">
                        {{ $meatPriceSignal() | currency }}
                      </p>
                    </div>
                    <div class="flex justify-between">
                      <h3 class="text-sm">Veggies:</h3>
                      <p class="text-sm pl-5 text-gray-400">
                        {{ $veggiePriceSignal() | currency }}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          <!-- Order summary -->
          <section aria-labelledby="summary-heading" class="mt-10">
            <h2 id="summary-heading" class="sr-only">Order summary</h2>

            <div>
              <dl class="space-y-4">
                <div class="flex items-center justify-between">
                  <dt class="text-base font-medium text-gray-300">Subtotal</dt>
                  <dd class="ml-4 text-base font-medium text-gray-300">
                    {{ $totalPriceBeforeTaxSignal() | currency }}
                  </dd>
                </div>
              </dl>
              <dl class="space-y-4">
                <div class="flex items-center justify-between">
                  <dt class="text-xs font-medium text-medium-default">Tax</dt>
                  <dd class="ml-4 text-base font-medium text-gray-300">
                    {{ $totalTaxSignal() | currency }}
                  </dd>
                </div>
              </dl>
              <dl class="space-y-4">
                <div class="flex items-center justify-between">
                  <dt class="text-base font-medium text-gray-300">Total</dt>
                  <dd class="ml-4 text-base font-medium text-gray-300">
                    {{ $totalPriceAfterTaxSignal() | currency }}
                  </dd>
                </div>
              </dl>
              <p class="mt-1 text-sm text-gray-500">
                Shipping and taxes will be calculated at checkout.
              </p>
            </div>

            <div class="mt-10">
              <button
                (click)="addPizzaToCart()"
                type="button"
                class="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Add To Cart
              </button>
            </div>
          </section>
        </div>
      </div>
    </ion-content>
  `,
})
export default class CheckoutComponent {
  $pizzaSizePriceSignal: Signal<number> = this.pizza.$pizzaSizePriceSignal;
  $pizzaCrustPriceSignal: Signal<number> = this.pizza.$pizzaCrustPriceSignal;
  $pizzaSaucePriceSignal: Signal<number> = this.pizza.$pizzaSaucePriceSignal;
  $pizzaCheeseQuantityPriceSignal: Signal<number> =
    this.pizza.$pizzaCheeseQuantityPriceSignal;
  $pizzaCheeseAdditionalPriceSignal: Signal<number> =
    this.pizza.$pizzaCheeseAdditionalPriceSignal;
  $meatPriceSignal: Signal<number> = this.pizza.$pizzaMeatsSignalPrice;
  $veggiePriceSignal: Signal<number> = this.pizza.$pizzaVeggiesSignalPrice;
  $pizzaPriceSignal: Signal<number | undefined> = this.pizza.$pizzaPriceSignal;
  $quantitySignal: Signal<number | undefined> = this.pizza.$quantitySignal;

  $totalPriceBeforeTaxSignal: Signal<number> =
    this.pizza.$totalPriceBeforeTaxSignal;
  $totalTaxSignal: Signal<number> = this.pizza.$totalTaxSignal;
  $totalPriceAfterTaxSignal: Signal<number> =
    this.pizza.$totalPriceAfterTaxSignal;

  $signal: WritableSignal<CustomPizza> = this.pizza.$signal;

  constructor(private pizza: PizzaService) {}

  addPizzaToCart(): void {
    this.pizza.addPizzaToCart();
  }
}
