import { PizzaCardsComponent } from './components/pizza-cards.component';
import { HeroComponent } from './components/hero.component';
import { PromoComponent } from './components/promo.component';
import { FooterComponent } from './../components/footer/footer.component';
import { HeaderComponent } from './../components/header/header.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { LocationsComponent } from './components/locations.component';
import { Options } from './models/options';
import { ImageBackgroundComponent } from './components/image-background.component';

@Component({
  selector: 'app-home',
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
  styles: [``],
  template: `<ion-header>
      <app-header />
    </ion-header>

    <ion-content>
      <div class="bg-white">
        <!-- Hero section -->
        <app-hero />

        <p class="text-base font-bold text-dark-shade">Right Here</p>
        <main>
          <!-- Pizza Cards -->
          <app-pizza-cards />

          <!-- Featured section -->
          <app-image-background
            class="w-full h-full relative"
            [options]="options1"
          />

          <!-- Locations -->
          <app-locations class="w-full h-full relative" />

          <!-- Featured section -->
          <app-image-background
            class="w-full h-full relative"
            [options]="options2"
          />
        </main>
      </div>
      <ion-footer>
        <app-footer />
      </ion-footer>
    </ion-content>`,
})
export default class HomePage {
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
