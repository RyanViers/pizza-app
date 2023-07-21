import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { PizzaService } from 'src/app/pizza/pizza.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomPizza } from 'src/app/API.service';

@Component({
  selector: 'app-custom-cart',
  imports: [CommonModule, IonicModule, SharedModule],
  standalone: true,
  styles: [],
  template: `<div class="space-y-24">
    <div
      class="grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-8"
    >
      <div class="sm:col-span-4 md:col-span-5 md:row-span-2 md:row-end-2">
        <div
          class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-50"
        >
          <img src="assets/pizza.jpg" class="object-cover object-center" />
        </div>
      </div>
      <div class="mt-6 sm:col-span-7 sm:mt-0 md:row-end-1">
        <h3 class="text-lg font-medium text-dark-shade">
          <a href="#">Custom Pizza</a>
        </h3>
        <p class="mt-1 font-medium text-dark-tint">
          Qty: <span class="text-success">{{ customPizza?.quantity }}</span>
        </p>
        <p class="mt-1 font-medium text-dark-tint">
          Price:
          <span class="text-success">{{ customPizza?.price | currency }}</span>
        </p>
        <p class="mt-1 font-medium text-dark-tint">
          Size: <span class="text-success">{{ customPizza?.size }}</span>
        </p>
        <p class="mt-1 font-medium text-dark-tint">
          Crust: <span class="text-success">{{ customPizza?.crust }}</span>
        </p>
        <p class="mt-1 font-medium text-dark-tint">
          Sauce: <span class="text-success">{{ customPizza?.sauce }}</span>
        </p>
        <p class="mt-1 font-medium text-dark-tint">
          Cheese Qty:
          <span class="text-success">{{ customPizza?.cheese?.quantity }}</span>
        </p>
        <p class="mt-1 font-medium text-dark-tint">
          Cheese Type:
          <span class="text-success">{{
            customPizza?.cheese?.additional
          }}</span>
        </p>
        <p class="mt-1 font-medium text-dark-tint">
          Meats: <span class="text-success">{{ customPizza?.meats }}</span>
        </p>
        <p class="mt-1 font-medium text-dark-tint">
          Veggies:
          <span class="text-success">{{ customPizza?.veggies }}</span>
        </p>
      </div>
    </div>
  </div> `,
})
export class CustomCartComponent {
  @Input() customPizza: CustomPizza | undefined;

  constructor(private cart: CartService, private pizza: PizzaService) {}

  getIcon(num: number) {
    return this.cart.getIcon(num);
  }
}
