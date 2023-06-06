import { HeaderComponent } from './../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PizzaService } from '../pizza.service';
import { PizzaPreviewComponent } from '../components/preview.component';
import { RouterModule } from '@angular/router';
import { QuantityComponent } from '../components/quantity.component';
import { pizzas, SpecialtyPizza } from '../helpers/specialty-models';

@Component({
  selector: 'app-specialty-pizzas',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    PizzaPreviewComponent,
    RouterModule,
    FooterComponent,
    QuantityComponent,
    HeaderComponent,
  ],
  styles: [``],
  template: ` <ion-content>
    <ion-header>
      <app-header></app-header>
    </ion-header>

    <div class="bg-white">
      <div
        
        class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
      >
        <div
        
          class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        >
          <a *ngFor="let pizza of pizzas" href="#" class="group">
            <div
              class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
            >
              <img
                [src]="pizza.imageUrl"
                alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                class="h-80 w-80 object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 class="mt-4 text-sm text-dark-shade">{{pizza.name}}</h3>
            <p class="mt-1 text-lg font-medium text-dark-tint">{{pizza.description}}</p>
          </a>
        </div>
      </div>
    </div>
    <ion-footer>
      <app-footer></app-footer>
    </ion-footer>
  </ion-content>`,
})
export class SpecialtyPizzasComponent {
  pizzas: SpecialtyPizza[] = pizzas;

  constructor() {
    console.log('SpecialtyPizzasComponent');
  }
}
