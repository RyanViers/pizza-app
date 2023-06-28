import { AdminPaginationComponent } from './admin-pagination/admin-pagination.component';
import { IconsService } from './../../../../utils/icons.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PizzaVeggie, PizzaMeat } from 'src/app/API.service';
import { Inventory, inventory } from './model';
import { IonicModule } from '@ionic/angular';
import { AdminLocationSelectorComponent } from './admin-location-selector/admin-location-selector.component';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    AdminLocationSelectorComponent,
    AdminPaginationComponent,
  ],
  template: `<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <app-admin-location-selector
      (locationChange)="onLocationChange($event)"
    ></app-admin-location-selector>
    <table class="w-full text-sm text-left text-dark-shade">
      <thead class="text-xs uppercase text-dark-shade bg-light-shade">
        <tr>
          <th scope="col" class="p-4">
            <div class="flex items-center">
              <input
                type="checkbox"
                class="w-4 h-4 bg-light-shade border-success rounded focus:ring-success focus:ring-2"
              />
            </div>
          </th>
          <th scope="col" class="px-6 py-3">Product name</th>
          <th scope="col" class="px-6 py-3">Price</th>
          <th scope="col" class="px-6 py-3">Amount</th>
          <th scope="col" class="px-6 py-3">Location</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <ng-container *ngFor="let inventoryItem of inventory">
          <tr
            *ngFor="let item of inventoryItem.items"
            class="border-b bg-light-tint hover:bg-light"
            [hidden]="selectedLocation && item.location !== selectedLocation"
          >
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  type="checkbox"
                  class="w-4 h-4 bg-light-shade border-success rounded focus:ring-success focus:ring-2"
                />
              </div>
            </td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-dark-shade whitespace-nowrap "
            >
              {{ item.name }}
            </th>
            <td class="px-6 py-4">{{ item.price }}</td>
            <td class="px-6 py-4">{{ item.amount }}</td>
            <td class="px-6 py-4">{{ item.location }}</td>
            <td class="px-6 py-4">
              <a href="#" class="font-medium text-danger hover:underline"
                >Edit</a
              >
            </td>
          </tr>
        </ng-container>
      </tbody>
    </table>
    <app-admin-pagination></app-admin-pagination>
  </div>`,
  styles: [],
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
