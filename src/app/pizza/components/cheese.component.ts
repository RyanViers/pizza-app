import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AdditionCheeseType, CheeseQuantity } from 'src/app/API.service';
import { PizzaService } from '../pizza.service';
import { Observable } from 'rxjs';
import { opacityScale } from 'src/app/utils/animations';

@Component({
  selector: 'app-cheese',
  standalone: true,
  imports: [CommonModule, IonicModule],
  providers: [],
  animations: [opacityScale],
  template: `<div class="flex w-full h-full justify-evenly ">
    <fieldset @opacityScale>
      <legend class="text-base font-semibold text-dark">
        Select Cheese Quantity
      </legend>
      <div
        class="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200"
      >
        <div
          class="relative flex items-start py-4"
          *ngFor="let qty of CheeseQuantity"
        >
          <div class="min-w-0 flex-1 text-sm leading-6">
            <label [for]="qty" class="select-none font-medium text-dark">{{
              qty
            }}</label>
          </div>
          <div class="ml-3 flex h-6 items-center">
            <input
              [checked]="($pizzaCheeseQuantity | async) === qty"
              [id]="qty"
              type="radio"
              class="h-4 w-4 border-gray-300"
              (click)="updateCheeseQuantity(qty)"
            />
          </div>
        </div>
      </div>
    </fieldset>
    <fieldset>
      <legend class="text-base font-semibold text-dark">
        Select Additional Cheese
      </legend>
      <div
        class="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200"
      >
        <div
          class="relative flex items-start py-4"
          *ngFor="let cheese of AdditionCheeseType"
        >
          <div class="min-w-0 flex-1 text-sm leading-6">
            <label for="cheese" class="select-none font-medium text-dark">{{
              cheese
            }}</label>
          </div>
          <div class="ml-3 flex h-6 items-center">
            <input
              [checked]="($pizzaCheeseAdditional | async) === cheese"
              [id]="cheese"
              type="radio"
              class="h-4 w-4"
              (click)="updateAdditionalCheeseType(cheese)"
            />
          </div>
        </div>
      </div>
    </fieldset>
  </div>`,
  styles: [
    ':host { display: flex; justify-content: center; position: absolute; top: 0; left: 0; right: 0; }',
  ],
})
export class CheeseComponent implements OnInit {
  CheeseQuantity: string[] = this.objectValues(CheeseQuantity);
  AdditionCheeseType: string[] = this.objectValues(AdditionCheeseType);

  $pizzaCheeseQuantity: Observable<CheeseQuantity | undefined> =
    this.pizzaService.$pizzaCheeseQuantity;
  $pizzaCheeseAdditional: Observable<AdditionCheeseType | null | undefined> =
    this.pizzaService.$pizzaCheeseAdditional;

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {}

  objectValues(obj: object): string[] {
    return Object.values(obj);
  }

  updateCheeseQuantity(qty: CheeseQuantity | string): void {
    this.pizzaService.setPizza({
      cheese: {
        ...this.pizzaService.getPizzaCheese(),
        ...{ quantity: qty as CheeseQuantity },
      },
    });
  }

  updateAdditionalCheeseType(cheese: AdditionCheeseType | string): void {
    this.pizzaService.setPizza({
      cheese: {
        ...this.pizzaService.getPizzaCheese(),
        ...{ additional: cheese as AdditionCheeseType },
      },
    });
  }
}
