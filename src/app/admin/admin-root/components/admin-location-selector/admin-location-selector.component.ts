import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-admin-location-selector',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, ReactiveFormsModule],

  template: `<div class="flex mb-8 w-max">
    <button
      id="stores-button"
      data-dropdown-toggle="dropdown-stores"
      class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-dark-shade bg-light-shade border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
      type="button"
    >
      Locations
    </button>

    <select
      id="stores"
      [formControl]="selectedLocation"
      class="bg-light-tint border border-light text-dark-shade text-sm rounded-r-lg border-l-light border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    >
      <option value="">Choose a Store</option>
      <option value="Johnson City">Johnson City</option>
      <option value="Bristol">Bristol</option>
      <option value="Kingsport">Kingsport</option>
    </select>
  </div>`,
  styles: [``],
})
export class AdminLocationSelectorComponent implements OnInit {
  @Output() locationChange = new EventEmitter<string | null>();
  selectedLocation = new FormControl('');

  constructor() {}

  ngOnInit() {
    this.selectedLocation.valueChanges.subscribe((selectedLocation) => {
      this.locationChange.emit(selectedLocation);
    });
  }
}
