import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PizzaMeat } from 'src/app/API.service';
import { PizzaService } from '../pizza.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-meat',
  standalone: true,
  imports: [CommonModule, IonicModule],
  providers: [],
  template: `<div class="flex w-full h-full justify-evenly ">
    <fieldset>
      <legend class="text-base font-semibold text-dark">Select Meats</legend>
      <div
        class="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200"
      >
        <div
          class="relative flex items-start py-4"
          *ngFor="let meat of PizzaMeat"
        >
          <div class="min-w-0 flex-1 text-sm leading-6">
            <label [for]="meat" class="select-none font-medium text-dark">{{
              meat
            }}</label>
          </div>
          <div class="ml-3 flex h-6 items-center">
            <input
              [checked]="($pizzaMeats | async)?.includes(meat)"
              [id]="meat"
              type="radio"
              class="h-4 w-4 border-gray-300"
              (click)="updateMeat(meat)"
            />
          </div>
        </div>
      </div>
    </fieldset>
  </div>`,
  styles: [
    ':host { display: flex; justify-content: center; position: absolute; top: 0; left: 0; right: 0;}',
  ],
})
export default class MeatComponent implements OnInit {
  PizzaMeat: PizzaMeat[] = this.objectValues(PizzaMeat);

  $pizzaMeats: Observable<(PizzaMeat | null)[]> = this.pizzaService.$pizzaMeats;

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {}

  objectValues(obj: any): PizzaMeat[] {
    return Object.values(obj);
  }

  updateMeat(meat: PizzaMeat | string): void {
    const currentMeats: (PizzaMeat | null)[] =
      this.pizzaService.getPizzaMeats();
    const exsist = currentMeats.includes(meat as PizzaMeat);

    this.pizzaService.setPizza({
      meats: exsist
        ? currentMeats.filter((m) => m !== (meat as PizzaMeat))
        : [...currentMeats, meat as PizzaMeat],
    });
  }
}
