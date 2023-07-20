import { CommonModule } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PizzaVeggie } from 'src/app/API.service';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-veggie',
  standalone: true,
  imports: [CommonModule, IonicModule],
  providers: [],
  styles: [
    ':host { display: flex; justify-content: center; position: absolute; top: 0; left: 0; right: 0;}',
  ],
  template: `<div class="flex w-full h-full justify-evenly ">
    <fieldset>
      <legend class="text-base font-semibold text-dark">Select Veggies</legend>
      <div
        class="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200"
      >
        <div
          class="relative flex items-start py-4"
          *ngFor="let veg of PizzaVeggie"
        >
          <div class="min-w-0 flex-1 text-sm leading-6">
            <label [for]="veg" class="select-none font-medium text-dark">{{
              veg
            }}</label>
          </div>
          <div class="ml-3 flex h-6 items-center">
            <input
              [checked]="$pizzaVeggiesSignal().includes(veg)"
              [id]="veg"
              type="radio"
              class="h-4 w-4 border-gray-300"
              (click)="updateVeggie(veg)"
            />
          </div>
        </div>
      </div>
    </fieldset>
  </div>`,
})
export default class VeggieComponent {
  PizzaVeggie: PizzaVeggie[] = this.objectValues(PizzaVeggie);

  $pizzaVeggiesSignal: Signal<(PizzaVeggie | null)[]> =
    this.pizzaService.$pizzaVeggiesSignal;

  constructor(private pizzaService: PizzaService) {}

  objectValues(obj: any): PizzaVeggie[] {
    return Object.values(obj);
  }

  updateVeggie(veg: PizzaVeggie | string): void {
    const currentVeggies: (PizzaVeggie | null)[] =
      this.pizzaService.getPizzaVeggiesSignal();
    const exsist = currentVeggies.includes(veg as PizzaVeggie);

    this.pizzaService.setSignal({
      veggies: exsist
        ? currentVeggies.filter((v) => v !== (veg as PizzaVeggie))
        : [...currentVeggies, veg as PizzaVeggie],
    });
  }
}
