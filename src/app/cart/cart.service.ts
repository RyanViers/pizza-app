import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpecialtyPizza } from '../pizza/helpers/specialty-models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: SpecialtyPizza[] = [];
  private cart = new BehaviorSubject<SpecialtyPizza[]>([]);

  getCart = this.cart.asObservable();

  constructor() {}
  addToCart(pizza: SpecialtyPizza) {
    this.cartItems.push(pizza);
    this.cart.next(this.cartItems);
  }

  removeFromCart(pizza: SpecialtyPizza) {
    const index = this.cartItems.indexOf(pizza);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.cart.next(this.cartItems);
    }
  }

  calculateTotal() {
    let total = 0;
    for (let pizza of this.cartItems) {
      if (pizza.price) {
        total += pizza.price; // Assuming each pizza object has a 'price' property.
      }
    }
    return total;
  }
}
