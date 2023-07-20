import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  WritableSignal,
} from '@angular/core';
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
  template: `<div class="grid grid-cols-2">
    <div class="">
      <img
        src="assets/pizza.jpg"
        class="object-cover object-center w-24 h-24 rounded-md sm:h-48 sm:w-48"
      />
    </div>

    <div *ngFor="let c of $customPizzaArraySignal()" class="grid grid-cols-2">
      <h1 class="text-base font-bold text-dark-shade">Quantity</h1>
      <p class="text-sm text-dark-tint">{{ c.quantity }}</p>
      <h1 class="text-base font-bold text-dark-shade">Size</h1>
      <p class="text-sm text-dark-tint">{{ c.size }}</p>
      <h1 class="text-base font-bold text-dark-shade">Crust</h1>
      <p class="text-sm text-dark-tint">{{ c.crust }}</p>
      <h1 class="text-base font-bold text-dark-shade">Sauce</h1>
      <p class="text-sm text-dark-tint">{{ c.sauce }}</p>
      <h1 class="text-base font-bold text-dark-shade">Cheese</h1>
      <p class="text-sm text-dark-tint">
        {{ c.cheese.additional }}
      </p>
      <h1 class="text-base font-bold text-dark-shade">Toppings</h1>
      <p class="text-sm text-dark-tint">{{ c.meats }}</p>
      <p class="text-sm text-dark-tint">{{ c.veggies }}</p>
      <h1 class="text-base font-bold text-dark-shade">Price</h1>
      <p class="text-sm text-dark-tint">{{ c.price }}</p>
    </div>

    <div class="mt-4 sm:mt-0 sm:pr-9">
      <div class="absolute top-0 right-0">
        <button
          type="button"
          class="inline-flex p-2 -m-2 text-gray-400 hover:text-gray-500"
        >
          <span class="w-6 h-6" [innerHTML]="getIcon(1)"></span>
        </button>
      </div>
    </div>
  </div> `,
})
export class CustomCartComponent {
  @Input() customPizza: CustomPizza | undefined;

  $customPizzaArraySignal: WritableSignal<CustomPizza[]> =
    this.pizza.$customPizzaArraySignal;

  constructor(private cart: CartService, private pizza: PizzaService) {
    console.log(this.$customPizzaArraySignal());
  }

  getIcon(num: number) {
    return this.cart.getIcon(num);
  }
}
