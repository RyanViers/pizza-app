import { CommonModule } from '@angular/common';
import { Component, Signal, DoCheck } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {
  PizzaSize,
  PizzaCrust,
  PizzaSauce,
  CustomPizza,
} from 'src/app/API.service';
import { PizzaService } from '../pizza.service';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  styles: [
    ':host { display: flex; justify-content: center; position: absolute; top: 0; left: 0; right: 0; }',
  ],
  template: `
    <div class="flex w-full h-full justify-evenly ">
      <fieldset>
        <legend class="text-base font-semibold text-dark">Select Size</legend>
        <div
          class="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200"
        >
          <div
            class="relative flex items-start py-4"
            *ngFor="let size of PizzaSize"
          >
            <div class="min-w-0 flex-1 text-sm leading-6">
              <label [for]="size" class="select-none font-medium text-dark">{{
                size
              }}</label>
            </div>
            <div class="ml-3 flex h-6 items-center">
              <input
                [checked]="$pizzaSizeSignal() === size"
                [id]="size"
                [name]="'pizzaSize'"
                type="radio"
                class="h-4 w-4 border-gray-300"
                (change)="onSizeChange(size)"
              />
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend class="text-base font-semibold text-dark">Select Crust</legend>
        <div
          class="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200"
        >
          <div
            class="relative flex items-start py-4"
            *ngFor="let crust of PizzaCrust"
          >
            <div class="min-w-0 flex-1 text-sm leading-6">
              <label for="side-2" class="select-none font-medium text-dark">{{
                crust
              }}</label>
            </div>
            <div class="ml-3 flex h-6 items-center">
              <input
                [checked]="($pizzaCrust | async) === crust"
                [id]="crust"
                [name]="'pizzaCrust'"
                type="radio"
                class="h-4 w-4"
                (change)="onCrustChange(crust)"
              />
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend class="text-base font-semibold text-dark">Select Sauce</legend>
        <div
          class="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200"
        >
          <div
            class="relative flex items-start py-4"
            *ngFor="let sauce of PizzaSauce"
          >
            <div class="min-w-0 flex-1 text-sm leading-6">
              <label for="side-3" class="select-none font-medium text-dark">{{
                sauce
              }}</label>
            </div>
            <div class="ml-3 flex h-6 items-center">
              <input
                [checked]="($pizzaSauce | async) === sauce"
                [id]="sauce"
                [name]="'pizzaSauce'"
                type="radio"
                class="h-4 w-4"
                (change)="onSauceChange(sauce)"
              />
            </div>
          </div>
        </div>
      </fieldset>
      <p>Total price before tax: {{ $totalPriceBeforeTaxSignal() }}</p>
    </div>
  `,
})
export default class BaseComponent implements DoCheck {
  PizzaSize: string[] = this.objectValues(PizzaSize);
  PizzaSauce: string[] = this.objectValues(PizzaSauce);
  PizzaCrust: string[] = this.objectValues(PizzaCrust);

  $pizzaCrust: Observable<PizzaCrust> = this.pizzaService.$pizzaCrust;
  $pizzaSize: Observable<PizzaSize> = this.pizzaService.$pizzaSize;
  $pizzaSauce: Observable<PizzaSauce> = this.pizzaService.$pizzaSauce;

  $pizzaSizeSignal: Signal<PizzaSize> = this.pizzaService.$pizzaSizeSignal;

  $totalPriceBeforeTaxSignal: Signal<number> =
    this.pizzaService.$totalPriceBeforeTaxSignal;

  constructor(private pizzaService: PizzaService) {}

  ngDoCheck(): void {
    console.log(this.$totalPriceBeforeTaxSignal());
  }

  objectValues(obj: object): string[] {
    return Object.values(obj);
  }

  onSizeChange(size: PizzaSize | string): void {
    const newSize = size;
    console.log(newSize);
    this.pizzaService.setPizza({ size: size as PizzaSize });
    this.pizzaService.setSignal(size as Partial<CustomPizza>);
  }

  onCrustChange(crust: any): void {
    this.pizzaService.setPizza({ crust: crust });
    this.pizzaService.setSignal(crust as Partial<CustomPizza>);
  }

  onSauceChange(sauce: PizzaSauce | string): void {
    this.pizzaService.setPizza({ sauce: sauce as PizzaSauce });
    this.pizzaService.setSignal(sauce as Partial<CustomPizza>);
  }
}
