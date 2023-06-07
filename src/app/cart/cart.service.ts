import { Injectable, importProvidersFrom } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpecialtyPizza } from '../pizza/helpers/specialty-models';
import { Pizza, CartItem } from '../pizza/helpers/models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];

  private cart = new BehaviorSubject<CartItem[]>([]);

  getCart = this.cart.asObservable();

  constructor() {}

  addToCart(item: CartItem) {
    this.cartItems.push(item);
    this.cart.next(this.cartItems);
  }

  removeFromCart(item: CartItem) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.cart.next(this.cartItems);
    }
  }

  calculateTotal() {
    let total = 0;
    for (let item of this.cartItems) {
      total += item.pizza.price ? item.pizza.price : 0;
    }
    return total;
  }
}
