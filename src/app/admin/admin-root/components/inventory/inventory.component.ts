import { AdminPaginationComponent } from './../admin-pagination/admin-pagination.component';
import { IconsService } from './../../../../utils/icons.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PizzaVeggie, PizzaMeat } from 'src/app/API.service';
import { Inventory, inventory } from './model';
import { IonicModule } from '@ionic/angular';
import { AdminLocationSelectorComponent } from '../admin-location-selector/admin-location-selector.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    AdminLocationSelectorComponent,
    AdminPaginationComponent,
  ],
  styles: [],
  standalone: true,
})
export class InventoryComponent implements OnInit {
  selectedLocation: string | null = null;
  pizzaVeggie: PizzaVeggie[] = this.objectValues(PizzaVeggie);
  pizzaMeat: PizzaMeat[] = this.objectValues(PizzaMeat);
  inventoryArray: (PizzaVeggie | PizzaMeat)[] = [
    ...this.pizzaVeggie,
    ...this.pizzaMeat,
  ];

  inventory: Inventory[] = inventory;
  constructor(private icons: IconsService) {}

  ngOnInit() {}

  getIcon(num: number) {
    return this.icons.getIcon(num);
  }

  objectValues(obj: any): any[] {
    return Object.values(obj);
  }

  onLocationChange(location: string | null) {
    //
    this.selectedLocation = location;
  }
}
