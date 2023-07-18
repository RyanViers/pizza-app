import { IconsService } from './../../../utils/icons.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { opacityScale } from 'src/app/utils/animations';

@Component({
  selector: 'app-header-bottom',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styles: [``],
  animations: [opacityScale],
  template: ` <!-------------- Desktop Navigation -------------->
    <nav class="hidden justify-between lg:flex lg:space-x-8 lg:py-2">
      <button
        [routerLink]="['/pizza']"
        class="text-gray-300 hover:bg-gray-700 hover:text-white inline-flex items-center rounded-md py-2 px-3 text-sm font-medium"
        aria-current="page"
      >
        Create Pizzas
      </button>
      <button
        [routerLink]="['/specialty-pizzas']"
        class="text-gray-300 hover:bg-gray-700 hover:text-white inline-flex items-center rounded-md py-2 px-3 text-sm font-medium"
      >
        Specialty Pizzas
      </button>
      <button
        [routerLink]="['/admin-root']"
        class="text-gray-300 hover:bg-gray-700 hover:text-white inline-flex items-center rounded-md py-2 px-3 text-sm font-medium"
      >
        Admin
      </button>
      <button
        [routerLink]="['/cart']"
        class="text-gray-300 hover:bg-gray-700 hover:text-white inline-flex items-center rounded-md py-2 px-3 text-sm font-medium"
      >
        Cart
      </button>
      <button
        [routerLink]="['/profile']"
        class="text-gray-300 hover:bg-gray-700 hover:text-white inline-flex items-center rounded-md py-2 px-3 text-sm font-medium"
      >
        Profile
      </button>
    </nav>`,
})
export class HeaderBottomComponent {
  constructor(private icons: IconsService) {}

  getIcon(num: number) {
    return this.icons.getIcon(num);
  }
}
