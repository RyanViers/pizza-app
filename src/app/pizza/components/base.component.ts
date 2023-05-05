import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PizzaSize, PizzaCrust, PizzaSauce } from 'src/app/API.service';
import { PizzaSelections, PizzaService } from '../pizza.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  providers: [],
  template: `
    <div class="flex w-full justify-evenly ">
      <div class="flex items-center mb-4">
        <img src="assets/pizza.jpg" alt="Pizza" class="w-80" />
      </div>

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
                [id]="crust"
                [name]="'pizzaCrust'"
                type="radio"
                class="h-4 w-4"
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
                [id]="sauce"
                [name]="'pizzaSauce'"
                type="radio"
                class="h-4 w-4"
              />
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  `,
  styles: [':host { display: flex; justify-content: center; }'],
})
export class BaseComponent implements OnInit {
  PizzaSize = this.objectKeys(PizzaSize);
  PizzaSauce = this.objectKeys(PizzaSauce);
  PizzaCrust = this.objectKeys(PizzaCrust);

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.pizzaService.updateSelections({ size: this.PizzaSize[0] });
  }

  objectKeys(obj: object): string[] {
    return Object.keys(obj);
  }

  onSizeChange(size: string): void {
    this.pizzaService.updateSelections({ size: size });
  }

  onCrustChange(crust: any): void {
    this.pizzaService.updateSelections({ crust: crust });
  }

  onSauceChange(sauce: PizzaSauce): void {
    this.pizzaService.updateSelections({ sauce: sauce });
  }
}
