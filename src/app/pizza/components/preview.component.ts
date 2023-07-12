import { SharedModule } from './../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PizzaService } from '../pizza.service';
import { Observable } from 'rxjs';
import {
  AdditionCheeseType,
  CheeseQuantity,
  PizzaCrust,
  PizzaMeat,
  PizzaSauce,
  PizzaSize,
  PizzaVeggie,
} from 'src/app/API.service';

@Component({
  selector: `app-pizza-preview`,
  standalone: true,
  imports: [CommonModule, IonicModule, SharedModule],
  providers: [],
  template: `
    <div class="grid grid-cols-1 gap-4 p-4 bg-light-tint rounded-lg">
      <div class="flex items-center mb-4">
        <img src="assets/pizza.jpg" alt="Pizza" class="w-full rounded-lg" />
      </div>
      <div class="grid grid-cols-1 gap-4 items-start">
        <div class="grid grid-cols-3 gap-4 justify-items-center content-center">
          <div>
            <h3
              class="text-sm font-semibold leading-8 tracking-tight text-dark"
            >
              Size:
            </h3>
            <p class="text-base leading-7 text-medium">
              {{ $pizzaSize | async }}
            </p>
          </div>
          <div>
            <h3
              class="text-sm font-semibold leading-8 tracking-tight text-dark"
            >
              Crust:
            </h3>
            <p class="text-base leading-7 text-medium">
              {{ $pizzaCrust | async }}
            </p>
          </div>
          <div>
            <h3
              class="text-sm font-semibold leading-8 tracking-tight text-dark"
            >
              Sauce:
            </h3>
            <p class="text-base leading-7 text-medium">
              {{ $pizzaSauce | async }}
            </p>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 justify-items-center content-center">
          <div>
            <h3
              class="text-sm font-semibold leading-8 tracking-tight text-dark"
            >
              Cheese Quantity:
            </h3>
            <p class="text-base leading-7 text-medium">
              {{ $pizzaCheeseQuantity | async }}
            </p>
          </div>
          <div>
            <h3
              class="text-sm font-semibold leading-8 tracking-tight text-dark"
            >
              Additional Cheese:
            </h3>
            <p class="text-base leading-7 text-medium">
              {{ $pizzaCheeseAdditional | async }}
            </p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 justify-items-center content-center">
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
  styles: [
    `
      :host {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
      }
    `,
  ],
})
export class PizzaPreviewComponent {
  $pizzaSize: Observable<PizzaSize> = this.pizza.$pizzaSize;
  $pizzaCrust: Observable<PizzaCrust> = this.pizza.$pizzaCrust;
  $pizzaSauce: Observable<PizzaSauce> = this.pizza.$pizzaSauce;
  $pizzaCheeseQuantity: Observable<CheeseQuantity> =
    this.pizza.$pizzaCheeseQuantity;
  $pizzaCheeseAdditional: Observable<AdditionCheeseType | null | undefined> =
    this.pizza.$pizzaCheeseAdditional;
  $pizzaMeats: Observable<(PizzaMeat | null)[]> = this.pizza.$pizzaMeats;
  $pizzaVeggies: Observable<(PizzaVeggie | null)[]> = this.pizza.$pizzaVeggies;

  constructor(private pizza: PizzaService) {}
}
