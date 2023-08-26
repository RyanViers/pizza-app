import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import LocationCardsComponent from './components/location-cards.component';
import LocationCreatorComponent from './components/location-creator.component';

@Component({
  selector: 'app-store-list',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    LocationCardsComponent,
    LocationCreatorComponent,
  ],
  styles: [],
  template: `<div class="overflow-y-auto">
    <div class="bg-light-shade p-24 sm:py-32">
      <app-location-cards />

      <app-location-creator />
    </div>
  </div> `,
})
export default class StoreListComponent {
  constructor() {}
}
