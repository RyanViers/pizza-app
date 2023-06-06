import { HeaderComponent } from './../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SwalComponent, SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PizzaPreviewComponent } from '../components/preview.component';
import { RouterModule } from '@angular/router';
import { QuantityComponent } from '../components/quantity.component';
import { pizzas, SpecialtyPizza } from '../helpers/specialty-models';
import Swal from 'sweetalert2';
import { SweetAlertOptions } from 'sweetalert2';

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
    SweetAlert2Module,
    QuantityComponent,
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
          class="grid justify-items-center cursor-pointer grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        >
          <a
            *ngFor="let pizza of pizzas"
            class="group hover:bg-medium-tint rounded-lg w-fit"
            (click)="onClick(pizza)"
          >
            <div
              class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-transparent xl:aspect-h-8 xl:aspect-w-7"
            >
              <img
                [src]="pizza.imageUrl"
                alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                class="h-80 w-80 object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div class="flex flex-col justify-center items-center">
              <h3 class="mt-4 text-sm text-dark-shade">{{ pizza.name }}</h3>
              <p class="mt-1 text-lg font-medium text-dark-tint">
                Click to see ingredients
              </p>
              <p class="mt-1 text-lg font-medium text-dark-tint">
                {{ pizza.price | currency }}
              </p>
            </div>
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

  @ViewChild('swal')
  swal!: SwalComponent;

  constructor() {}

  public readonly swalOptions: SweetAlertOptions = {
    title: '',
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'Add to Cart',
    cancelButtonText: 'Cancel',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    customClass: {
      popup: 'bg-light-shade',
    },
    html: `<p>andrew sucks butt</p>`,
  };

  onClick(pizza: SpecialtyPizza) {
    const toppingsList: string = pizza.toppings
      .map((topping) => topping.name)
      .join(', ');

    Swal.fire({
      ...this.swalOptions,
      title: pizza.name,
      text: `Ingredients: ${toppingsList}`,
      icon: 'success',
      target: document.body,
      heightAuto: false,
    });
  }
}
