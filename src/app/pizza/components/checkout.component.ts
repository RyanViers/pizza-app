import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { PizzaService } from '../pizza.service';
import { Observable, combineLatest, map } from 'rxjs';
import { parse } from 'path';


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, IonicModule, SharedModule],
  providers: [],
  styles: [
    `
      :host {
      }
    `,
  ],
  template: `
    <div class="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-0 ">
      <h1
        class="text-center text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl"
      >
        Pizza Cart
      </h1>

      <form class="mt-12">
        <section aria-labelledby="cart-heading">
          <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>

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
                    <h3 class="text-sm">Pizza Size:</h3>
                    <p class="text-sm pl-5 text-gray-400">
                      {{ $pizzaSizePrice | async }}
                    </p>
                  </div>
                  <div class="flex justify-between">
                    <h3 class="text-sm">Pizza Crust:</h3>
                    <p class="text-sm pl-5 text-gray-400">
                      {{ $pizzaCrustPrice | async }}
                    </p>
                  </div>
                  <div class="flex justify-between">
                    <h3 class="text-sm">Pizza Sauce:</h3>
                    <p class="text-sm pl-5 text-gray-400">
                      {{ $pizzaSaucePrice | async }}
                    </p>
                  </div>
                  <div class="flex justify-between">
                    <h3 class="text-sm">Pizza Cheese Qty:</h3>
                    <p class="text-sm pl-5 text-gray-400">
                      {{ $pizzaCheeseQuantityPrice | async }}
                    </p>
                  </div>
                  <div class="flex justify-between">
                    <h3 class="text-sm">Pizza Add Cheese:</h3>
                    <p class="text-sm pl-5 text-gray-400">
                      {{ $pizzaCheeseAdditionalPrice | async }}
                    </p>
                  </div>
                  <div class="flex justify-between">
                    <h3 class="text-sm">Pizza Meats:</h3>
                    <p class="text-sm pl-5 text-gray-400">
                      {{ $meatPrice | async }}
                    </p>
                  </div>
                  <div class="flex justify-between">
                    <h3 class="text-sm">Pizza Veggies:</h3>
                    <p class="text-sm pl-5 text-gray-400">
                      {{ $veggiePrice | async }}
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
                <dd class="ml-4 text-base font-medium text-gray-300">{{ totalPriceBeforeTax() | async}}</dd>
              </div>
            </dl>
            <dl class="space-y-4">
              <div class="flex items-center justify-between">
                <dt class="text-xs font-medium text-medium-default">Tax</dt>
                <dd class="ml-4 text-base font-medium text-gray-300">{{ totalTax() | async}}</dd>
              </div>
            </dl>
            <dl class="space-y-4">
              <div class="flex items-center justify-between">
                <dt class="text-base font-medium text-gray-300">Total</dt>
                <dd class="ml-4 text-base font-medium text-gray-300">{{ totalPriceAfterTax() | async}}</dd>
              </div>
            </dl>
            <p class="mt-1 text-sm text-gray-500">
              Shipping and taxes will be calculated at checkout.
            </p>
          </div>

          <div class="mt-10">
            <button
              type="submit"
              class="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Checkout
            </button>
          </div>

          <div class="mt-6 text-center text-sm">
            <p>
              or
              <a
                href="#"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </p>
          </div>
        </section>
      </form>
    </div>
  `,
})
export class CheckoutComponent {

  $pizzaSizePrice = this.pizza.$pizzaSizePrice;
  $pizzaCrustPrice = this.pizza.$pizzaCrustPrice;
  $pizzaSaucePrice = this.pizza.$pizzaSaucePrice;
  $pizzaCheeseQuantityPrice = this.pizza.$pizzaCheeseQuantityPrice;
  $pizzaCheeseAdditionalPrice = this.pizza.$pizzaCheeseAdditionalPrice;
  $meatPrice = this.pizza.$meatPrice;
  $veggiePrice = this.pizza.$veggiePrice;

  constructor(private pizza: PizzaService) {}

  totalPriceBeforeTax(): Observable<number> {
    return combineLatest([
      this.$pizzaSizePrice,
      this.$pizzaCrustPrice,
      this.$pizzaSaucePrice,
      this.$pizzaCheeseQuantityPrice,
      this.$pizzaCheeseAdditionalPrice,
      this.$meatPrice,
      this.$veggiePrice
    ]).pipe(
      map(prices => prices.reduce((total, price) => total + price, 0))
    );
  }

  totalTax(): Observable<number> {
    return this.totalPriceBeforeTax().pipe(
      map(total => (total * 0.097)),
      map((totalTax: number) => parseFloat(totalTax.toFixed(2)))
    );
  }

  totalPriceAfterTax(): Observable<number> {
    return this.totalPriceBeforeTax().pipe(
      map((total: number) => (total * 0.097) + total),
      map((totalWithTax: number) => parseFloat(totalWithTax.toFixed(2)))
    );
  }
}


