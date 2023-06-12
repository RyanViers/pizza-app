import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { PizzaService } from '../pizza.service';
import { Observable, map } from 'rxjs';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, IonicModule, SharedModule],
  providers: [],
  styles: [``],
  template: `
    <ion-content>
      <div
        class="flex flex-col w-full h-full mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-0 "
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
          </section>
        </div>
      </div>
    </ion-content>
  `,
})
export class CheckoutComponent {
  $pizzaSizePrice: Observable<number> = this.pizza.$pizzaSizePrice;
  $pizzaCrustPrice: Observable<number> = this.pizza.$pizzaCrustPrice;
  $pizzaSaucePrice: Observable<number> = this.pizza.$pizzaSaucePrice;
  $pizzaCheeseQuantityPrice: Observable<number> =
    this.pizza.$pizzaCheeseQuantityPrice;
  $pizzaCheeseAdditionalPrice: Observable<number> =
    this.pizza.$pizzaCheeseAdditionalPrice;
  $meatPrice: Observable<number> = this.pizza.$meatPrice;
  $veggiePrice: Observable<number> = this.pizza.$veggiePrice;
  $pizzaPrice: Observable<number | undefined> = this.pizza.$pizzaPrice;
  $quantityTotal: Observable<number | undefined> = this.pizza.$quantity;

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

  addPizzaToCart(): void {
    const subscription = this.pizza.totalPriceBeforeTax().subscribe((price) => {
      this.pizza.setPizza({ price: price });
    });
    this.pizza.addCustomPizza(this.pizza.$pizza.value);
    subscription.unsubscribe();

    Swal.fire({
      ...this.swalOptions,
      title: 'Pizza Added to Cart!',
      text: `Price: ${this.pizza.$pizza.value.price}`,
      icon: 'success',
      target: document.body,
      heightAuto: false,
    });
  }

  public readonly swalOptions: SweetAlertOptions = {
    title: '',
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'Add to Cart',
    cancelButtonText: 'Cancel',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    customClass: {
      popup: 'bg-light-shade text-dark-shade rounded-lg shadow-lg',
    },
  };
}
