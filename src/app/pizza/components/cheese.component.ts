import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AdditionCheeseType, CheeseQuantity } from 'src/app/API.service';
import { PizzaService } from '../pizza.service';

@Component({
  standalone: true,
  imports: [CommonModule, IonicModule],
  providers: [],
  template: `<div class="flex w-full justify-evenly ">
    <div class="flex items-center mb-4">
      <img src="assets/pizza.jpg" alt="Pizza" class="w-80" />
    </div>

    <fieldset>
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
              [id]="qty"
              [name]="'qtyCheese'"
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
              [id]="cheese"
              [name]="'addCheese'"
              type="radio"
              class="h-4 w-4"
            />
          </div>
        </div>
      </div>
    </fieldset>
  </div>`,
  styles: [':host { display: flex; justify-content: center; }'],
})
export class CheeseComponent implements OnInit {
  CheeseQuantity = this.objectKeys(CheeseQuantity);
  AdditionCheeseType = this.objectKeys(AdditionCheeseType);

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {}

  objectKeys(obj: object): string[] {
    return Object.keys(obj);
  }

  updateCheeseQuantity(qty: string): void {
    this.pizzaService.updateSelections({ cheeseQty: qty });
  }

  updateAdditionalCheeseType(cheese: AdditionCheeseType): void {
    this.pizzaService.updateSelections({ cheeseType: cheese });
  }
}
