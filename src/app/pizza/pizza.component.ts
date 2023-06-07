import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from './../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PizzaService } from './pizza.service';
import { PizzaPreviewComponent } from './components/preview.component';
import { RouterModule } from '@angular/router';
import { QuantityComponent } from './components/quantity.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    PizzaPreviewComponent,
    RouterModule,
    FooterComponent,
    QuantityComponent,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [PizzaService],
  template: `
    <ion-header>
      <app-header></app-header>
    </ion-header>
    
    <ion-content>
      <div class="max-w-2xl mx-auto w-full relative z-10">
        <div class="w-full relative">
          <div class="mt-6" aria-hidden="true">
            <div class="overflow-hidden rounded-full bg-gray-200">
              <div
                class="h-2 rounded-full bg-indigo-600"
                [ngClass]="getWidth()"
              ></div>
            </div>
            <div
              class="mt-6 hidden grid-cols-4 text-sm font-medium text-dark-tint sm:grid"
            >
              <div
                (click)="goToSection(0)"
                [ngClass]="getColor(0)"
                class="cursor-pointer hover:text-gray-600"
              >
                Base
              </div>
              <div
                (click)="goToSection(1)"
                [ngClass]="getColor(1)"
                class="text-center cursor-pointer hover:text-gray-600"
              >
                Cheese
              </div>
              <div
                (click)="goToSection(2)"
                [ngClass]="getColor(2)"
                class="text-center cursor-pointer hover:text-gray-600"
              >
                Meats
              </div>
              <div
                (click)="goToSection(3)"
                [ngClass]="getColor(3)"
                class="text-right cursor-pointer hover:text-gray-600"
              >
                Veggies
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div
        class="grid-flow-row my-10 md:grid-cols-2 gap-x-28 max-w-max mx-auto grid grid-cols-1  w-full relative h-auto  px-8"
      >
        <div>
          <app-pizza-preview
            class="flex justify-center items-start"
          ></app-pizza-preview>
          <app-quantity class="flex justify-center items-start"></app-quantity>
        </div>

        <div
          class="min-h-[381px] mt-12 md:mt-0 relative w-full block max-w-max"
        >
          <ion-router-outlet></ion-router-outlet>
        </div>
      </div>
    
      <ion-footer class="relative z-10">
        <app-footer></app-footer>
      </ion-footer>

    </ion-content>
  `,
  styles: [],
})
export class PizzaComponent {
  constructor(private pizza: PizzaService) {}

  ngAfterViewInit() {}
  /**
   * add pizza to order
   */
  addToOrder() {}

  /**
   * back
   */
  back() {
    const precedence = this.pizza.getSectionPrecedence(this.pizza.getSection());
    if (precedence > 0)
      this.pizza.setSection(
        this.pizza.getSectionFromPrecedence(precedence - 1)
      );
  }

  /**
   * hext
   */
  next() {
    const precedence = this.pizza.getSectionPrecedence(this.pizza.getSection());
    if (precedence < 3)
      this.pizza.setSection(
        this.pizza.getSectionFromPrecedence(precedence + 1)
      );
  }

  /**
   * go to section
   * @param precedence
   */
  goToSection(precedence: number) {
    this.pizza.setSection(this.pizza.getSectionFromPrecedence(precedence));
  }

  /**
   * get color
   * @param precedence
   * @returns
   */
  getColor(precedence: number) {
    return this.pizza.getSectionPrecedence(this.pizza.getSection()) >=
      precedence
      ? '!text-indigo-600'
      : '';
  }

  /**
   * get width
   * @returns
   */
  getWidth() {
    switch (this.pizza.getSectionPrecedence(this.pizza.getSection())) {
      case 0:
        return 'w-[2%]';
      case 1:
        return 'w-[37.5%]';
      case 2:
        return 'w-[62.5%]';
      case 3:
        return 'w-full';
      default:
        return '';
    }
  }
}
