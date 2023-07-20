import { MutationsService } from '../../utils/services/api/mutations.service';
import { Component, Signal } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { firstValueFrom } from 'rxjs';
import { PizzaService } from 'src/app/pizza/pizza.service';
import { CartService } from '../cart.service';
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
  template: `<h2 class="text-lg font-medium text-dark-tint">Order summary</h2>

    <dl class="mt-6 space-y-4">
      <div class="flex items-center justify-between">
        <dt class="text-sm text-dark-tint">Subtotal</dt>
        <dd class="text-sm font-medium text-dark-tint">
          {{ $calculateTotalSignal() | currency }}
        </dd>
      </div>
      <div
        class="flex items-center justify-between pt-4 border-t border-gray-200"
      >
        <dt class="flex text-sm text-dark-tint">
          <span>Tax estimate</span>
          <a
            href="#"
            class="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-500"
          >
            <span class="w-6 h-6" [innerHTML]="getIcon(2)"></span>
          </a>
        </dt>
        <dd class="flex text-sm font-medium text-dark-tint">
          {{ $calculateTaxSignal() | currency }}
        </dd>
      </div>
      <div
        class="flex items-center justify-between pt-4 border-t border-gray-200"
      >
        <dt class="text-base font-medium text-dark-tint">Order total</dt>
        <dd class="text-base font-medium text-dark-tint">
          {{ $calculateTotalWithTaxSignal() | currency }}
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
  styles: [``],
})
export class CartSummaryComponent {
  $calculateTotalSignal: Signal<number> = this.pizza.$calculateTotalSignal;
  $calculateTaxSignal: Signal<number> = this.pizza.$calculateTaxSignal;
  $calculateTotalWithTaxSignal: Signal<number> =
    this.pizza.$calculateTotalWithTaxSignal;

  constructor(private pizza: PizzaService, private cart: CartService) {}

  getIcon(num: number): SafeHtml | undefined {
    return this.cart.getIcon(num);
  }

  onCheckout(): void {
    this.cart.onCheckout();
  }
}
