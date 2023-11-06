import { CommonModule } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AdditionCheeseType, CheeseQuantity } from 'src/app/API.service';
import { PizzaService } from '../pizza.service';
import { opacityScale } from 'src/app/utils/animations';

@Component({
  selector: 'app-cheese',
  standalone: true,
  imports: [CommonModule, IonicModule],
  animations: [opacityScale],
  styles: [
    ':host { display: flex; justify-content: center; position: absolute; top: 0; left: 0; right: 0; }',
  ],
  template: `<div class="flex w-full h-full justify-evenly ">
    <fieldset @opacityScale>
      <legend class="text-base font-semibold text-dark">
        Select Cheese Quantity
      </legend>
      <div class="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
        @for(qty of CheeseQuantity; track $index) {
          <div class="relative flex items-start py-4">
            <div class="min-w-0 flex-1 text-sm leading-6">
              <label [for]="qty" class="select-none font-medium text-dark">
                {{qty}}
              </label>
            </div>
            <div class="ml-3 flex h-6 items-center">
              <input
                [checked]="$pizzaCheeseQuantitySignal() === qty"
                [id]="qty"
                type="radio"
                class="h-4 w-4 border-gray-300"
                (click)="updateCheeseQuantity(qty)"
              />
            </div>
          </div>
        }
      </div>
    </fieldset>
    <fieldset>
      <legend class="text-base font-semibold text-dark">
        Select Additional Cheese
      </legend>
      <div
        class="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200"
      >
        @for(cheese of AdditionCheeseType; track $index) {
          <div class="relative flex items-start py-4">
            <div class="min-w-0 flex-1 text-sm leading-6">
              <label for="cheese" class="select-none font-medium text-dark">{{
                cheese
              }}</label>
            </div>
            <div class="ml-3 flex h-6 items-center">
              <input
                [checked]="$pizzaCheeseAdditionalSignal() === cheese"
                [id]="cheese"
                type="radio"
                class="h-4 w-4"
                (click)="updateAdditionalCheeseType(cheese)"
              />
            </div>
          </div>
        }
      </div>
    </fieldset>
  </div>`,
})
export default class CheeseComponent {
  CheeseQuantity: string[] = this.objectValues(CheeseQuantity);
  AdditionCheeseType: string[] = this.objectValues(AdditionCheeseType);

  $pizzaCheeseQuantitySignal: Signal<CheeseQuantity | undefined> =
    this.pizzaService.$pizzaCheeseQuantitySignal;

  $pizzaCheeseAdditionalSignal: Signal<AdditionCheeseType | null | undefined> =
    this.pizzaService.$pizzaCheeseAdditionalSignal;

  constructor(private pizzaService: PizzaService) {}

  objectValues(obj: object): string[] {
    return Object.values(obj);
  }

  updateCheeseQuantity(qty: CheeseQuantity | string): void {
    this.pizzaService.setSignal({
      cheese: {
        ...this.pizzaService.getPizzaCheeseSignal(),
        ...{ quantity: qty as CheeseQuantity },
      },
    });
  }

  updateAdditionalCheeseType(cheese: AdditionCheeseType | string): void {
    this.pizzaService.setSignal({
      cheese: {
        ...this.pizzaService.getPizzaCheeseSignal(),
        ...{ additional: cheese as AdditionCheeseType },
      },
    });
  }
}
