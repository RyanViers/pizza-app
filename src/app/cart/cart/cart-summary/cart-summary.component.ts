import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable, combineLatest, map } from 'rxjs';
import { PizzaService } from 'src/app/pizza/pizza.service';
import { CartService } from '../../cart.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import {  RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CommonModule, IonicModule, SharedModule, RouterModule],
  templateUrl: './cart-summary.component.html',
  styles: [],
})
export class CartSummaryComponent implements OnInit {
  $specialtyPizzaList = this.pizza.$specialtyPizza;
  $customPizzaList = this.pizza.$customPizza;

  constructor(private pizza: PizzaService,
    private cart: CartService,
    private sanitizer: DomSanitizer) {};

  ngOnInit() {}
  
  getIcon(num: number): SafeHtml | undefined {
    return this.cart.getIcon(num);
  }

  /******* MATH METHODS *********/
  calculateTotal(): Observable<number | undefined> {
    return combineLatest([
      this.$specialtyPizzaList,
      this.$customPizzaList
    ]).pipe(
      map(([specialtyPizzas, customPizzas]) => {
        const pizzas = [...specialtyPizzas, ...customPizzas];
        return pizzas.reduce((total, pizza) => {
          if (pizza.price) {
            return total + pizza.price;
          }
          return total;
        }, 0);
      }),
      map((total: number) => parseFloat(total.toFixed(2)))
    );
  }
}
