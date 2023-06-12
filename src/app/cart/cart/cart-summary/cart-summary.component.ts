import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable, combineLatest, map } from 'rxjs';
import { PizzaService } from 'src/app/pizza/pizza.service';
import { CartService } from '../../cart.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CommonModule, IonicModule, SharedModule, RouterModule],
  template: `<h2 id="summary-heading" class="text-lg font-medium text-gray-900">
      Order summary
    </h2>

    <dl class="mt-6 space-y-4">
      <div class="flex items-center justify-between">
        <dt class="text-sm text-gray-600">Subtotal</dt>
        <dd class="text-sm font-medium text-gray-900">
          {{ calculateTotal() | async }}
        </dd>
      </div>
      <div
        class="flex items-center justify-between pt-4 border-t border-gray-200"
      >
        <dt class="flex text-sm text-gray-600">
          <span>Tax estimate</span>
          <a
            href="#"
            class="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-500"
          >
            <span class="w-6 h-6" [innerHTML]="getIcon(2)"></span>
          </a>
        </dt>
        <dd class="flex text-sm font-medium text-gray-900">
          <p>$</p>
          {{ addTax() | async }}
        </dd>
      </div>
      <div
        class="flex items-center justify-between pt-4 border-t border-gray-200"
      >
        <dt class="text-base font-medium text-gray-900">Order total</dt>
        <dd class="text-base font-medium text-gray-900">
          {{ calculateTotalWithTax() | async }}
        </dd>
      </div>
    </dl>

    <div class="mt-6">
      <button
        type="submit"
        class="w-full px-4 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
      >
        Checkout
      </button>
    </div> `,
  styles: [],
})
export class CartSummaryComponent implements OnInit {
  $specialtyPizzaList = this.pizza.$specialtyPizza;
  $customPizzaList = this.pizza.$customPizza;

  constructor(
    private pizza: PizzaService,
    private cart: CartService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {}

  getIcon(num: number): SafeHtml | undefined {
    return this.cart.getIcon(num);
  }

  /******* MATH METHODS *********/
  calculateTotal(): Observable<number | undefined> {
    return combineLatest([
      this.$specialtyPizzaList,
      this.$customPizzaList,
    ]).pipe(
      map(([specialtyPizzas, customPizzas]) => {
        const pizzas = [...specialtyPizzas, ...customPizzas];
        return pizzas.reduce((total, pizza) => {
          return pizza.price ? total + pizza.price : total;
        }, 0);
      }),
      map((total: number) => parseFloat(total.toFixed(2)))
    );
  }

  addTax(): Observable<number | undefined> {
    return this.calculateTotal().pipe(
      map((total) => {
        return total ? total * 0.097 : 0;
      }),
      map((totalTax: number) => parseFloat(totalTax.toFixed(2)))
    );
  }

  calculateTotalWithTax(): Observable<number | undefined> {
    return this.calculateTotal().pipe(
      map((total) => {
        return total ? total * 0.097 + total : 0;
      }),
      map((totalWithTax: number) => parseFloat(totalWithTax.toFixed(2)))
    );
  }
}
