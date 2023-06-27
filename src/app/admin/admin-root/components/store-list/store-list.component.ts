import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { storesPractice, Store } from '../../utils/models/stores';
import { EmailButtonComponent } from './email-button/email-button.component';

@Component({
  selector: 'app-store-list',
  standalone: true,
  imports: [CommonModule, IonicModule, SharedModule, EmailButtonComponent],
  template: `<ion-content>
    <div class="bg-light-shade py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div class="mx-auto max-w-2xl">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Meet our team
          </h2>
          <p class="mt-4 text-lg leading-8 text-gray-400">
            We’re a dynamic group of individuals who are passionate about what
            we do.
          </p>
        </div>
        <ul
          role="list"
          class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          <li
            class="rounded-2xl bg-light-tint px-8 py-10"
            *ngFor="let s of stores"
          >
            <img
              class="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
              [src]="s.img"
            />
            <h3
              class="mt-6 text-base font-semibold leading-7 tracking-tight text-white"
            >
              {{ s.location }}
            </h3>
            <p class="text-sm leading-6 text-gray-400">{{ s.address }}</p>
            <p class="text-sm leading-6 text-gray-400">{{ s.email }}</p>
            <p class="text-sm leading-6 text-gray-400">{{ s.phone }}</p>
            <p class="text-sm leading-6 text-gray-400">{{ s.manager }}</p>
          </li>
        </ul>
      </div>
    </div></ion-content
  >`,
  styles: [],
})
export class StoreListComponent implements OnInit {
  stores: Store[] = storesPractice;

  constructor() {}

  ngOnInit() {}
}
