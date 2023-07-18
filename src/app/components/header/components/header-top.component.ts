import { HeaderService } from './../header.service';
import { IconsService } from './../../../utils/icons.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, Signal, WritableSignal } from '@angular/core';
import { opacityScale } from 'src/app/utils/animations';

@Component({
  selector: 'app-header-top',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styles: [``],
  animations: [opacityScale],
  template: ` <div class="relative flex h-16 justify-between">
    <div class="relative z-10 flex px-2 lg:px-0">
      <div class="flex flex-shrink-0 items-center">
        <button
          [routerLink]="['/home']"
          class="bg-light-tint hover:bg-medium-tint text-white inline-flex items-center rounded-md py-2 px-3 text-sm font-medium"
        >
          Home
        </button>
      </div>
    </div>
    <div
      class="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0"
    >
      <div class="w-full sm:max-w-xs">
        <div class="relative">
          <div
            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
          >
            <span class="h-6 w-6 text-gray-400" [innerHTML]="getIcon(6)"></span>
          </div>
          <input
            id="search"
            name="search"
            class="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
            placeholder="Search"
            type="search"
          />
        </div>
      </div>
    </div>
    <div class="relative z-10 flex items-center lg:hidden">
      <button
        @opacityScale
        (click)="toggleMobileMenu()"
        type="button"
        class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      >
        <span
          class="w-6 h-6"
          [innerHTML]="getIcon(4)"
          *ngIf="!$menuToggle()"
        ></span>
        <span
          class="w-6 h-6"
          [innerHTML]="getIcon(1)"
          *ngIf="$menuToggle()"
        ></span>
      </button>
    </div>

    <!-------------- Desktop Profile Links -------------->
    <div class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
      <button
        type="button"
        class="flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span class="w-6 h-6" [innerHTML]="getIcon(5)"></span>
      </button>

      <!-- Profile dropdown -->
      <div class="relative ml-4 flex-shrink-0">
        <div>
          <button
            type="button"
            class="flex rounded-full bg-pink-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <img
              class="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  </div>`,
})
export class HeaderTopComponent {
  $menuToggle: Signal<boolean> = this.header.$menuToggle;

  constructor(private icons: IconsService, private header: HeaderService) {}

  toggleMobileMenu() {
    this.header.$menuToggle.set(!this.$menuToggle());
  }

  getIcon(num: number) {
    return this.icons.getIcon(num);
  }
}
