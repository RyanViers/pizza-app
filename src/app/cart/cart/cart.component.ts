import { CustomCartComponent } from './custom-cart/custom-cart.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { SpecialtyCartComponent } from './specialty-cart/specialty-cart.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PizzaService } from 'src/app/pizza/pizza.service';
import { BehaviorSubject } from 'rxjs';
import { SpecialtyPizza } from 'src/app/pizza/helpers/specialty-models';
import { Pizza } from 'src/app/pizza/helpers/models';

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
    CustomCartComponent,
    SpecialtyCartComponent,
    CartSummaryComponent,
  ],
  template: `<ion-header>
      <ion-toolbar>
        <app-header></app-header>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="bg-dark-shade">
        <div
          class="max-w-2xl px-4 pt-16 pb-24 mx-auto sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <h1
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Shopping Cart
          </h1>
          <form
            class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"
          >
            <section aria-labelledby="cart-heading" class="lg:col-span-7">
              <ul
                role="list"
                class="border-t border-b border-gray-200 divide-y divide-gray-200"
              >
                <li
                  class="grid py-6 sm:py-10"
                  *ngFor="let customPizza of $customPizzaList?.value"
                >
                  <app-custom-cart
                    [customPizza]="customPizza"
                  ></app-custom-cart>
                </li>

                <li
                  class="flex py-6 sm:py-10"
                  *ngFor="let specialtyPizza of $specialtyPizzaList | async"
                >
                  <app-specialty-cart
                    [specialtyPizza]="specialtyPizza"
                  ></app-specialty-cart>
                </li>
              </ul>
            </section>

            <section
              aria-labelledby="summary-heading"
              class="px-4 py-6 mt-16 rounded-lg bg-gray-50 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
            >
              <app-cart-summary></app-cart-summary>
            </section>
          </form>
        </div>
      </div>
      <ion-footer>
        <ion-toolbar>
          <app-footer></app-footer>
        </ion-toolbar>
      </ion-footer>
    </ion-content> `,
  styles: [],
})
export class CartComponent implements OnInit {
  $specialtyPizzaList: BehaviorSubject<SpecialtyPizza[]> =
    this.pizza.$specialtyPizza;
  $customPizzaList: BehaviorSubject<Pizza[]> = this.pizza.$customPizza;

  constructor(private pizza: PizzaService) {}

  ngOnInit() {}
}
