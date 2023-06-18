import { StepperComponent } from './stepper/stepper/stepper.component';
import { StepperService } from './stepper.service';
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
    StepperComponent,
  ],

  template: `
    <ion-header>
      <ion-toolbar>
        <app-header></app-header>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <app-stepper></app-stepper>
      <div
        class="grid-flow-row my-10 md:grid-cols-2  mx-auto grid grid-cols-1  w-full relative h-auto  px-8"
      >
        <div>
          <app-pizza-preview
            class="flex justify-center items-start"
          ></app-pizza-preview>
          <app-quantity></app-quantity>
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
  constructor(private pizza: PizzaService, private stepper: StepperService) {}

  ngAfterViewInit() {}
  /**
   * add pizza to order
   */
  addToOrder() {}
}
