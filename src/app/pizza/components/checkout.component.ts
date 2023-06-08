import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { PizzaService } from '../pizza.service';
import { Observable, combineLatest, map } from 'rxjs';
import { Pizza } from '../helpers/models';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, IonicModule, SharedModule],
  providers: [],
  styles: [``],
  template: `
    <ion-content>
      <div class="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-0 ">
        <h1
          class="text-center text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl"
        >
          Pizza Cart
        </h1>

        <form class="mt-12">
          <section aria-labelledby="cart-heading">
            <h2 id="cart-heading" class="sr-only">
              Items in your shopping cart
            </h2>

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
                        {{ $quantityTotal | async }}
                      </p>
                    </div>
                    <div class="flex justify-between">
                      <h3 class="text-sm">Size:</h3>
                      <p class="text-sm pl-5 text-gray-400">
                        {{ $pizzaSizePrice | async }}
                      </p>
                    </div>
                    <div class="flex justify-between">
                      <h3 class="text-sm">Crust:</h3>
                      <p class="text-sm pl-5 text-gray-400">
                        {{ $pizzaCrustPrice | async }}
                      </p>
                    </div>
                    <div class="flex justify-between">
                      <h3 class="text-sm">Sauce:</h3>
                      <p class="text-sm pl-5 text-gray-400">
                        {{ $pizzaSaucePrice | async }}
                      </p>
                    </div>
                    <div class="flex justify-between">
                      <h3 class="text-sm">Cheese Qty:</h3>
                      <p class="text-sm pl-5 text-gray-400">
                        {{ $pizzaCheeseQuantityPrice | async }}
                      </p>
                    </div>
                    <div class="flex justify-between">
                      <h3 class="text-sm">Add Cheese:</h3>
                      <p class="text-sm pl-5 text-gray-400">
                        {{ $pizzaCheeseAdditionalPrice | async }}
                      </p>
                    </div>
                    <div class="flex justify-between">
                      <h3 class="text-sm">Meats:</h3>
                      <p class="text-sm pl-5 text-gray-400">
                        {{ meatFormat() | async }}
                      </p>
                    </div>
                    <div class="flex justify-between">
                      <h3 class="text-sm">Veggies:</h3>
                      <p class="text-sm pl-5 text-gray-400">
                        {{ veggieFormat() | async }}
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
                    {{ totalPriceBeforeTax() | async }}
                  </dd>
                </div>
              </dl>
              <dl class="space-y-4">
                <div class="flex items-center justify-between">
                  <dt class="text-xs font-medium text-medium-default">Tax</dt>
                  <dd class="ml-4 text-base font-medium text-gray-300">
                    {{ totalTax() | async }}
                  </dd>
                </div>
              </dl>
              <dl class="space-y-4">
                <div class="flex items-center justify-between">
                  <dt class="text-base font-medium text-gray-300">Total</dt>
                  <dd class="ml-4 text-base font-medium text-gray-300">
                    {{ totalPriceAfterTax() | async }}
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
    </ion-content>
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
  $quantityTotal = this.pizza.$quantityTotal;

  customPizza = this.pizza.getPizza;

  constructor(private pizza: PizzaService) {}

  totalPriceBeforeTax(): Observable<number> {
    return this.pizza.totalPriceBeforeTax();
  }

  totalTax(): Observable<number> {
    return this.pizza.totalTax();
  }

  totalPriceAfterTax(): Observable<number> {
    return this.pizza.totalPriceAfterTax();
  }

  veggieFormat(): Observable<string> {
    return this.$veggiePrice.pipe(
      map((veggiePrice: number) => {
        return veggiePrice.toFixed(2);
      })
    );
  }

  meatFormat(): Observable<string> {
    return this.$meatPrice.pipe(
      map((meatPrice: number) => {
        return meatPrice.toFixed(2);
      })
    );
  }

  addPizzaToCart() {
    this.pizza.addCustomPizza(this.customPizza);
  }
}
