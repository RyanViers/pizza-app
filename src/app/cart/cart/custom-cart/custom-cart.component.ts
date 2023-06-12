import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { PizzaService } from 'src/app/pizza/pizza.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { Pizza } from 'src/app/pizza/helpers/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-cart',
  imports: [CommonModule, IonicModule, SharedModule],
  standalone: true,
  template: `<div class="grid grid-cols-2">
    <div class="">
      <img
        src="assets/pizza.jpg"
        class="object-cover object-center w-24 h-24 rounded-md sm:h-48 sm:w-48"
      />
    </div>

    <div class="grid grid-cols-2 ">
      <h1 class="text-base font-bold text-light-shade">Quantity</h1>
      <p class="text-sm text-light-tint">{{ customPizza?.quantity }}</p>
      <h1 class="text-base font-bold text-light-shade">Size</h1>
      <p class="text-sm text-light-tint">{{ customPizza?.size }}</p>
      <h1 class="text-base font-bold text-light-shade">Crust</h1>
      <p class="text-sm text-light-tint">{{ customPizza?.crust }}</p>
      <h1 class="text-base font-bold text-light-shade">Sauce</h1>
      <p class="text-sm text-light-tint">{{ customPizza?.sauce }}</p>
      <h1 class="text-base font-bold text-light-shade">Cheese</h1>
      <p class="text-sm text-light-tint">
        {{ customPizza?.cheese?.quantity }}
      </p>
      <h1 class="text-base font-bold text-light-shade">Toppings</h1>
      <p class="text-sm text-light-tint">meat</p>
      <h1 class="text-base font-bold text-light-shade">Price</h1>
      <p class="text-sm text-light-tint">{{ customPizza?.price }}</p>
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
  styles: [],
})
export class CustomCartComponent implements OnInit, AfterViewInit {
  @Input() customPizza: Pizza | undefined;

  constructor(private cart: CartService, private pizza: PizzaService) {}

  ngOnInit() {}

  ngAfterViewInit() {}

  getIcon(num: number) {
    return this.cart.getIcon(num);
  }
}
