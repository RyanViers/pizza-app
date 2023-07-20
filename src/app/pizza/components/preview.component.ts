import { SharedModule } from './../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PizzaService } from '../pizza.service';
import { CustomPizza } from 'src/app/API.service';

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
              {{ $signal().size }}
            </p>
          </div>
          <div>
            <h3
              class="text-sm font-semibold leading-8 tracking-tight text-dark"
            >
              Crust:
            </h3>
            <p class="text-base leading-7 text-medium">
              {{ $signal().crust }}
            </p>
          </div>
          <div>
            <h3
              class="text-sm font-semibold leading-8 tracking-tight text-dark"
            >
              Sauce:
            </h3>
            <p class="text-base leading-7 text-medium">
              {{ $signal().sauce }}
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
              {{ $signal().cheese.quantity }}
            </p>
          </div>
          <div>
            <h3
              class="text-sm font-semibold leading-8 tracking-tight text-dark"
            >
              Additional Cheese:
            </h3>
            <p class="text-base leading-7 text-medium">
              {{ $signal().cheese.additional }}
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
            {{ $signal().meats.length }}
          </p>
        </div>
        <div>
          <h3 class="text-sm font-semibold leading-8 tracking-tight text-dark">
            The Veggies:
          </h3>
          <p class="text-base leading-7 text-medium">
            {{ $signal().veggies.length }}
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [``],
})
export class PizzaPreviewComponent {

  $signal: Signal<CustomPizza> = this.pizza.$signal;

  constructor(private pizza: PizzaService) {}
}
