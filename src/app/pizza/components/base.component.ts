import { CommonModule } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PizzaSize, PizzaCrust, PizzaSauce } from 'src/app/API.service';
import { PizzaService } from '../pizza.service';

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
        <div class="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
          @for(size of PizzaSize; track $index) {
            <div class="relative flex items-start py-4">
              <div class="min-w-0 flex-1 text-sm leading-6">
                <label [for]="size" class="select-none font-medium text-dark">
                  {{ size }}
                </label>
              </div>
              <div class="ml-3 flex h-6 items-center">
                <input
                  [checked]="$pizzaSize() === size"
                  [id]="size"
                  [name]="'pizzaSize'"
                  type="radio"
                  class="h-4 w-4 border-gray-300"
                  (change)="onSizeChange(size)"
                />
              </div>
            </div>
          }
        </div>
      </fieldset>
      <fieldset>
        <legend class="text-base font-semibold text-dark">Select Crust</legend>
        <div
          class="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200"
        >
          @for (crust of PizzaCrust; track $index) {
            <div class="relative flex items-start py-4">
              <div class="min-w-0 flex-1 text-sm leading-6">
                <label for="side-2" class="select-none font-medium text-dark">
                 {{ crust }}
                </label>
              </div>
              <div class="ml-3 flex h-6 items-center">
                <input
                  [checked]="$pizzaCrust() === crust"
                  [id]="crust"
                  [name]="'pizzaCrust'"
                  type="radio"
                  class="h-4 w-4"
                  (change)="onCrustChange(crust)"
                />
              </div>
            </div>
          }
        </div>
      </fieldset>
      <fieldset>
        <legend class="text-base font-semibold text-dark">Select Sauce</legend>
        <div
          class="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200"
        >
          @for(sauce of PizzaSauce; track $index) {
            <div class="relative flex items-start py-4">
              <div class="min-w-0 flex-1 text-sm leading-6">
                <label for="side-3" class="select-none font-medium text-dark">{{
                  sauce
                }}</label>
              </div>
              <div class="ml-3 flex h-6 items-center">
                <input
                  [checked]="$pizzaSauce() === sauce"
                  [id]="sauce"
                  [name]="'pizzaSauce'"
                  type="radio"
                  class="h-4 w-4"
                  (change)="onSauceChange(sauce)"
                />
              </div>
            </div>
          }
        </div>
      </fieldset>
    </div>
  `,
})
export default class BaseComponent {
  PizzaSize: string[] = this.objectValues(PizzaSize);
  PizzaSauce: string[] = this.objectValues(PizzaSauce);
  PizzaCrust: string[] = this.objectValues(PizzaCrust);

  $pizzaCrust: Signal<PizzaCrust> = this.pizzaService.$pizzaCrustSignal;
  $pizzaSize: Signal<PizzaSize> = this.pizzaService.$pizzaSizeSignal;
  $pizzaSauce: Signal<PizzaSauce> = this.pizzaService.$pizzaSauceSignal;

  $totalPriceBeforeTaxSignal: Signal<number> =
    this.pizzaService.$totalPriceBeforeTaxSignal;

  constructor(private pizzaService: PizzaService) {}

  objectValues(obj: object): string[] {
    return Object.values(obj);
  }

  onSizeChange(size: PizzaSize | string): void {
    this.pizzaService.setSignal({ size: size as PizzaSize });
  }

  onCrustChange(crust: any): void {
    this.pizzaService.setSignal({ crust: crust as PizzaCrust });
  }

  onSauceChange(sauce: PizzaSauce | string): void {
    this.pizzaService.setSignal({ sauce: sauce as PizzaSauce });
  }
}
