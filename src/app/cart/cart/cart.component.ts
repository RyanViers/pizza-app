import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PizzaService } from 'src/app/pizza/pizza.service';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { TailwindIconType, TailwindIcon } from 'src/app/utils/tailwind-icons';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    SharedModule,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './cart.component.html',
  styles: [],
})
export class CartComponent implements OnInit {
  $meatPrice = this.pizza.$meatPrice;
  $quantityTotal = this.pizza.$quantityTotal;
  $specialtyPizzaList = this.pizza.$specialtyPizzaList;

  icons: Map<TailwindIconType, SafeHtml> = TailwindIcon.getTailwindIconSvgs(
    [TailwindIconType.X_MARK],
    this.sanitizer
  );

  constructor(
    private pizza: PizzaService,
    private cart: CartService,
    private sanitizer: DomSanitizer
  ) {
    console.log(this.$specialtyPizzaList);
  }

  ngOnInit() {}

  getIcon(num: number): SafeHtml | undefined {
    switch (num) {
      case 1:
        return this.icons.get(TailwindIconType.X_MARK);
      default:
        return '';
    }
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

  /*******SPECIALTY PIZZA METHODS *********/
  getToppings(pizza: any) {
    return pizza.toppings
      ? pizza.toppings.map((topping: any) => topping.name).join(', ')
      : '';
  }
}
