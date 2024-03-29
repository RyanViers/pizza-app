import { CommonModule } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PizzaMeat } from 'src/app/API.service';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-meat',
  standalone: true,
  imports: [CommonModule, IonicModule],
  providers: [],
  styles: [
    ':host { display: flex; justify-content: center; position: absolute; top: 0; left: 0; right: 0;}',
  ],
  template: `<div class="flex w-full h-full justify-evenly ">
    <fieldset>
      <legend class="text-base font-semibold text-dark">Select Meats</legend>
      <div class="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
        @for(meat of PizzaMeat; track $index) {
          <div class="relative flex items-start py-4">
            <div class="min-w-0 flex-1 text-sm leading-6">
              <label [for]="meat" class="select-none font-medium text-dark">
                {{ meat }}
              </label>
            </div>
            <div class="ml-3 flex h-6 items-center">
              <input
                [checked]="$pizzaMeatsSignal().includes(meat)"
                [id]="meat"
                type="radio"
                class="h-4 w-4 border-gray-300"
                (click)="updateMeat(meat)"
              />
            </div>
          </div>
        }
      </div>
    </fieldset>
  </div>`,
})
export default class MeatComponent {
  PizzaMeat: PizzaMeat[] = this.objectValues(PizzaMeat);

  $pizzaMeatsSignal: Signal<(PizzaMeat | null)[]> =
    this.pizzaService.$pizzaMeatsSignal;

  constructor(private pizzaService: PizzaService) {}

  objectValues(obj: any): PizzaMeat[] {
    return Object.values(obj);
  }

  updateMeat(meat: PizzaMeat | string): void {
    const currentMeats: (PizzaMeat | null)[] =
      this.pizzaService.getPizzaMeatsSignal();
    const exsist = currentMeats.includes(meat as PizzaMeat);

    this.pizzaService.setSignal({
      meats: exsist
        ? currentMeats.filter((m) => m !== (meat as PizzaMeat))
        : [...currentMeats, meat as PizzaMeat],
    });
  }
}
