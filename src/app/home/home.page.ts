import { PizzaCardsComponent } from './components/pizza-cards/pizza-cards.component';
import { HeroComponent } from './components/hero/hero.component';
import { PromoComponent } from './components/promo/promo.component';
import { FooterComponent } from './../components/footer/footer.component';
import { HeaderComponent } from './../components/header/header.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { LocationsComponent } from './components/locations/locations.component';
import { Options } from './models/options';
import { ImageBackgroundComponent } from './components/image-background/image-background.component';

@Component({
  selector: 'app-home',
  template: `<ion-header>
      <app-header></app-header>
    </ion-header>

    <ion-content>
      <div class="bg-white">
        <!-- Hero section -->
        <app-hero></app-hero>

        <main>
          <!-- Pizza Cards -->
          <app-pizza-cards></app-pizza-cards>

          <!-- Featured section -->
          <app-image-background [options]="options1"></app-image-background>

          <!-- Locations -->
          <app-locations></app-locations>

          <!-- Featured section -->
          <app-image-background [options]="options2"></app-image-background>
        </main>
      </div>
      <ion-footer>
        <app-footer></app-footer>
      </ion-footer>
    </ion-content>`,
  styles: [``],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    SharedModule,
    HeaderComponent,
    FooterComponent,
    PromoComponent,
    HeroComponent,
    PizzaCardsComponent,
    LocationsComponent,
    ImageBackgroundComponent,
  ],
})
export class HomePage {
  options1: Options | undefined = {
    image: 'assets/tri-pizza.jpeg',
    title: 'Masterpiece Menus',
    text: 'Artfully crafted pizza combinations for the discerning palate!',
  };
  options2: Options | undefined = {
    image: 'assets/pizza-oven.jpeg',
    title: 'Best Pizza, Even Better Prices',
    text: `"We offer the best pizza in town at the best prices! We also have a variety of other menu items to choose from. We have something for everyone! Come in and try us out today! We promise you won't be disappointed! We look forward to serving you! - The Pizza Shop Team "
    `,
  };
  constructor() {}
}
