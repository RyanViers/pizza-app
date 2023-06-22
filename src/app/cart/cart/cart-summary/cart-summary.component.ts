import { MutationsService } from './../../../utils/services/api/mutations.service';
import { Component, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Observable, combineLatest, map, firstValueFrom } from 'rxjs';
import { PizzaService } from 'src/app/pizza/pizza.service';
import { CartService } from '../../cart.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import {
  CreateOrderInput,
  CustomPizza,
  SpecialtyPizza,
} from 'src/app/API.service';
import { CognitoService } from 'src/app/home/cognito.service';
import Swal, { SweetAlertOptions } from 'sweetalert2';

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
        (click)="onCheckout()"
        type="button"
        class="w-full px-4 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
      >
        Checkout
      </button>
    </div> `,
  styles: [],
})
export class CartSummaryComponent implements OnInit {
  $specialtyPizzaList: Observable<(SpecialtyPizza | undefined)[]> =
    this.pizza.$specialtyPizza;
  $customPizzaList: Observable<(CustomPizza | undefined)[]> =
    this.pizza.$customPizza;

  constructor(
    private pizza: PizzaService,
    private cognito: CognitoService,
    private mutation: MutationsService,
    private cart: CartService
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
          return pizza?.price ? total + pizza?.price : total;
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

  async onCheckout(): Promise<void> {
    try {
      const user = await this.cognito.currentAuthenticatedUser();

      // Get total cost, tax, and authenticated user
      const totalCost: any = await firstValueFrom(
        this.pizza.totalPriceAfterTax()
      );

      const tax: any = await firstValueFrom(this.pizza.totalTax());

      const subtotal: number = await firstValueFrom(
        this.pizza.totalPriceBeforeTax()
      );

      // Get custom and specialty pizzas
      const customPizzas: CustomPizza[] = this.pizza.$customPizza.getValue();

      const specialtyPizzas: SpecialtyPizza[] =
        this.pizza.$specialtyPizza.getValue();

      // Create CreateOrderInput
      const order: CreateOrderInput = {
        user_id: user?.attributes.sub,
        user_name: user?.username,
        date: `${new Date().getTime()}`,
        customPizzas: [
          ...customPizzas.map((pizza: CustomPizza) => {
            delete (pizza as any)?.__typename;
            return pizza;
          }),
        ],
        specialtyPizzas: [
          ...specialtyPizzas.map((pizza: SpecialtyPizza) => {
            delete (pizza as any)?.__typename;
            return pizza;
          }),
        ],
        subtotal: subtotal,
        tax: tax,
        total: totalCost,
      };

      const swal = await Swal.fire({ ...this.swalOptions });

      if (swal.isConfirmed) {
        console.log('order:', order);
        await this.mutation.createOrder(order);
      }
    } catch (err) {
      console.error('Error in onCheckout:', err);
    }
  }

  public readonly swalOptions: SweetAlertOptions = {
    title: 'Save Order',
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'Add To Database',
    cancelButtonText: 'Cancel',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    heightAuto: false,
    customClass: {
      popup: 'bg-light-shade text-dark-shade rounded-lg shadow-lg',
    },
  };
}
