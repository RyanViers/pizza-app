import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { SafeHtml } from '@angular/platform-browser';
import { SpecialtyPizza } from 'src/app/API.service';

@Component({
  selector: 'app-specialty-cart',
  standalone: true,
  template: `<div class="flex">
    <div class="flex-shrink-0">
      <img
        [src]="specialtyPizza?.imageUrl"
        class="object-cover object-center w-24 h-24 rounded-md sm:h-48 sm:w-48"
      />
    </div>

    <div class="flex flex-col justify-between flex-1 ml-4 sm:ml-6">
      <div class="relative p-9 sm:grid sm:gap-x-6">
        <div>
          <div class="flex justify-between">
            <h1 class="font-medium text-gray-700 hover:text-gray-800">
              {{ specialtyPizza?.name }}
            </h1>
          </div>
          <div class="flex mt-1 text-sm">
            <p class="text-blue-600">
              {{ getToppings(specialtyPizza) }}
            </p>
            <p class="pl-4 ml-4 text-gray-500 border-l border-gray-200">
              {{ specialtyPizza?.description }}
            </p>
          </div>
          <p class="mt-1 text-sm font-medium text-gray-900">
            {{ specialtyPizza?.price }}
          </p>
        </div>
      </div>
    </div>
  </div> `,
  styles: [],
})
export class SpecialtyCartComponent implements OnInit {
  @Input() specialtyPizza: SpecialtyPizza | undefined;

  constructor(private cart: CartService) {}

  ngOnInit() {}

  getIcon(num: number): SafeHtml | undefined {
    return this.cart.getIcon(num);
  }

  /*******SPECIALTY PIZZA METHODS *********/
  getToppings(specialtyPizza: any): string {
    return specialtyPizza.toppings
      ? specialtyPizza.toppings.map((topping: any) => topping.name).join(', ')
      : '';
  }
}
