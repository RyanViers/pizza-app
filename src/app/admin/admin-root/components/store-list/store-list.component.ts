import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { stores, Store } from '../../utils/models/stores';
import { EmailButtonComponent } from './email-button/email-button.component';

@Component({
  selector: 'app-store-list',
  standalone: true,
  imports: [CommonModule, IonicModule, SharedModule, EmailButtonComponent],
  template: `<ion-content
    ><div class="grid grid-cols-1 mx-20 gap-x-20">
      <div class="max-w-2xl mx-auto lg:mx-0">
        <h2
          class="text-3xl font-bold tracking-tight text-[#fefefe] sm:text-4xl"
        >
          Locations
        </h2>
      </div>
      <div class="py-8 bg-white">
        <div
          class="px-6 mx-auto max-w-7xl gap-x-8 gap-y-20 lg:px-8 xl:grid-cols-3"
        >
          <ul
            role="list"
            class="grid max-w-2xl grid-cols-1 mx-auto xl:grid-cols-3 gap-x-6 gap-y-20 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
          >
            <li *ngFor="let s of stores">
              <img
                class="relative aspect-[3/2] w-full rounded-2xl object-cover"
                [src]="s.img"
              />
              >
              <div class="block z-50 justify-between items-center mt-4">
                <h3 class="mt-6 text-lg font-semibold leading-8 text-white">
                  {{ s.name }}
                </h3>
                <app-email-button [email]="s.email"></app-email-button>
                <p class="text-base leading-7 text-gray-400">{{ s.address }}</p>

                <p class="mt-4 text-base leading-7 text-gray-200">
                  {{ s.phone }}
                </p>
                <p class="mt-4 text-base leading-7 text-gray-200">
                  {{ s.manager }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div></ion-content
  >`,
  styles: [],
})
export class StoreListComponent implements OnInit {
  stores: Store[] = stores;

  constructor() {}

  ngOnInit() {}
}
