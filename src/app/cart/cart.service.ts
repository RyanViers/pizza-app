import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../pizza/helpers/models';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { TailwindIconType, TailwindIcon } from '../utils/tailwind-icons';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];

  private cart: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>(
    []
  );

  getCart = this.cart.asObservable();

  icons: Map<TailwindIconType, SafeHtml> = TailwindIcon.getTailwindIconSvgs(
    [TailwindIconType.X_MARK, TailwindIconType.QUESTION_MARK_CIRCLE],
    this.sanitizer
  );

  constructor(private sanitizer: DomSanitizer) {}

  getIcon(num: number): SafeHtml | undefined {
    switch (num) {
      case 1:
        return this.icons.get(TailwindIconType.X_MARK);
      case 2:
        return this.icons.get(TailwindIconType.QUESTION_MARK_CIRCLE);
      default:
        return '';
    }
  }

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
