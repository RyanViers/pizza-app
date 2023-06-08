import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-specialty-cart',
  standalone: true,
  templateUrl: './specialty-cart.component.html',
  styles: [],
})
export class SpecialtyCartComponent implements OnInit {
  @Input() specialtyPizza: any;

  constructor(private cart: CartService) {}

  ngOnInit() {}

  getIcon(num: number) {
    return this.cart.getIcon(num);
  }

  /*******SPECIALTY PIZZA METHODS *********/
  getToppings(specialtyPizza: any) {
    return specialtyPizza.toppings
      ? specialtyPizza.toppings.map((topping: any) => topping.name).join(', ')
      : '';
  }
}
