import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { PizzaService } from 'src/app/pizza/pizza.service';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  templateUrl: './cart-summary.component.html',
  styles: [],
})
export class CartSummaryComponent implements OnInit {
  constructor(private pizza: PizzaService,
    private cart: CartService,
    private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  getIcon(num: number): SafeHtml | undefined {
    return this.cart.getIcon(num);
  }

  /*******CUSTOM PIZZA METHODS *********/
  totalPriceBeforeTax(): Observable<number> {
    return this.pizza.totalPriceBeforeTax();
  }

  totalTax(): Observable<number> {
    return this.pizza.totalTax();
  }

  totalPriceAfterTax(): Observable<number> {
    return this.pizza.totalPriceAfterTax();
  }
}
