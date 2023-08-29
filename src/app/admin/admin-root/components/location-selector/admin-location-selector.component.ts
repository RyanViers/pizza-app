import { APIService, ListLocationsInput } from 'src/app/API.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-admin-location-selector',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, ReactiveFormsModule],
  styles: [``],
  template: `<div class="flex mb-8 w-max">
    <div
      class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-dark-shade bg-light-shade border border-light rounded-l-lg hover:bg-light focus:outline-none "
    >
      Locations
    </div>

    <select
      id="stores"
      [formControl]="selectedLocation"
      class="cursor-pointer bg-light-tint border border-light text-dark-shade text-sm rounded-r-lg border-l-light border-l-2 block w-full p-2.5"
    >
      <option selected value="">All Employees</option>
      <option *ngFor="let location of locations" [value]="location.id">
        {{ location.city }}
      </option>
    </select>
  </div>`,
})
export class AdminLocationSelectorComponent implements OnInit, OnDestroy {
  @Output() locationChange = new EventEmitter<string | null>();
  selectedLocation = new FormControl('');
  locations: any;

  constructor(private api: APIService) {}

  async ngOnInit() {
    this.selectedLocation.valueChanges.subscribe((selectedId) => {
      this.locationChange.emit(selectedId);
    });

    try {
      const input: ListLocationsInput = {
        reverse_dir: false,
        limit: 100,
        nextToken: null,
      };
      const response = await this.api.ListLocations(input);
      this.locations = response.items;
    } catch (error) {
      console.log(error);
    }
  }

  ngOnDestroy(): void {
    this.locationChange.unsubscribe();
  }
}
