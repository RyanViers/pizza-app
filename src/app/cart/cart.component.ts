import { CustomCartComponent } from './components/custom-cart.component';
import { CartSummaryComponent } from './components/cart-summary.component';
import { SpecialtyCartComponent } from './components/specialty-cart.component';
import { CommonModule } from '@angular/common';
import { Component, WritableSignal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PizzaService } from 'src/app/pizza/pizza.service';
import { SpecialtyPizza, CustomPizza } from 'src/app/API.service';

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
  styles: [],
  template: `<ion-header>
      <app-header />
    </ion-header>
    <ion-content>
      <div class="bg-white">
        <div
          class="element1 max-w-2xl px-4 pt-16 pb-24 mx-auto sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <h1
            class="text-3xl font-bold tracking-tight text-dark-shade sm:text-4xl"
          >
            Shopping Cart
          </h1>
          <form
            class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"
          >
            <section class="lg:col-span-7">
              <ul
                role="list"
                class="border-t border-b border-gray-200 divide-y divide-gray-200"
              >
                <li
                  class="grid py-6 sm:py-10"
                  *ngFor="let customPizza of $customPizzaArraySignal()"
                >
                  <app-custom-cart [customPizza]="customPizza" />
                </li>
                <li
                  class="flex py-6 sm:py-10"
                  *ngFor="let specialtyPizza of $specialtyPizzaArraySignal()"
                >
                  <app-specialty-cart [specialtyPizza]="specialtyPizza" />
                </li>
              </ul>
            </section>

            <section
              class="px-4 py-6 mt-16 rounded-lg bg-light-tint sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
            >
              <app-cart-summary />
            </section>
          </form>
        </div>
      </div>
      <ion-footer>
        <app-footer />
      </ion-footer>
    </ion-content>`,
})
export default class CartComponent {
  $customPizzaArraySignal: WritableSignal<CustomPizza[]> =
    this.pizza.$customPizzaArraySignal;

  $specialtyPizzaArraySignal: WritableSignal<SpecialtyPizza[]> =
    this.pizza.$specialtyPizzaArraySignal;

  constructor(private pizza: PizzaService) {}
}
