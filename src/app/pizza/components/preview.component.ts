import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PizzaService } from '../pizza.service';

@Component({
  selector: `app-pizza-preview`,
  standalone: true,
  imports: [CommonModule, IonicModule],
  providers: [],
  template: `
    <div class="grid grid-cols-1 gap-4">
      <div class="flex items-center mb-4">
        <img src="assets/pizza.jpg" alt="Pizza" class="w-full rounded-lg" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div>
          <h3 class="text-sm font-semibold leading-8 tracking-tight text-dark">
            Size:
          </h3>
          <p class="text-base leading-7 text-medium">
            {{ $pizzaSize | async }}
          </p>
        </div>
        <div>
          <h3 class="text-sm font-semibold leading-8 tracking-tight text-dark">
            Crust:
          </h3>
          <p class="text-base leading-7 text-medium">
            {{ $pizzaCrust | async }}
          </p>
        </div>
        <div>
          <h3 class="text-sm font-semibold leading-8 tracking-tight text-dark">
            Sauce:
          </h3>
          <p class="text-base leading-7 text-medium">
            {{ $pizzaSauce | async }}
          </p>
        </div>
        <div>
          <h3 class="text-sm font-semibold leading-8 tracking-tight text-dark">
            Cheese Quantity:
          </h3>
          <p class="text-base leading-7 text-medium">
            {{ $pizzaCheeseQuantity | async }}
          </p>
        </div>
        <div>
          <h3 class="text-sm font-semibold leading-8 tracking-tight text-dark">
            Additional Cheese:
          </h3>
          <p class="text-base leading-7 text-medium">
            {{ $pizzaCheeseAdditional | async }}
          </p>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-4">
        <div>
          <h3 class="text-sm font-semibold leading-8 tracking-tight text-dark">
            The Meats:
          </h3>
          <p class="text-base leading-7 text-medium">
            {{ ($pizzaMeats | async)?.length }}
          </p>
        </div>
        <div>
          <h3 class="text-sm font-semibold leading-8 tracking-tight text-dark">
            The Veggies:
          </h3>
          <p class="text-base leading-7 text-medium">
            {{ ($pizzaVeggies | async)?.length }}
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class PizzaPreviewComponent {
  $pizzaSize = this.pizza.$pizzaSize;
  $pizzaCrust = this.pizza.$pizzaCrust;
  $pizzaSauce = this.pizza.$pizzaSauce;
  $pizzaCheeseQuantity = this.pizza.$pizzaCheeseQuantity;
  $pizzaCheeseAdditional = this.pizza.$pizzaCheeseAdditional;
  $pizzaMeats = this.pizza.$pizzaMeats;
  $pizzaVeggies = this.pizza.$pizzaVeggies;

  constructor(private pizza: PizzaService) {}
}
