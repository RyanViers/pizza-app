import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PizzaMeat } from 'src/app/API.service';

@Component({
  selector: 'app-meat',
  standalone: true,
  imports: [CommonModule, IonicModule],
  providers: [],
  template: `<div class="flex w-full justify-evenly ">
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
              [id]="meat"
              [name]="'meat'"
              type="radio"
              class="h-4 w-4 border-gray-300"
            />
          </div>
        </div>
      </div>
    </fieldset>
  </div>`,
  styles: [':host { display: flex; justify-content: center; }'],
})
export class MeatComponent implements OnInit {
  PizzaMeat = this.objectValues(PizzaMeat);

  constructor() {}

  ngOnInit(): void {}

  objectValues(obj: any) {
    return Object.values(obj);
  }
}
