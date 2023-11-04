import { IconsService } from './../../../utils/icons.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { opacityScale } from 'src/app/utils/animations';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styles: [``],
  animations: [opacityScale],
  template: `<!-------------- Mobile Navigation -------------->
    <nav
      class="lg:hidden absolute right-0 left-0 bg-light-tint z-50"
      @opacityScale
    >
      <div class="space-y-1 px-2 pb-3 pt-2">
        <button
          [routerLink]="['/pizza']"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md py-2 px-3 text-base font-medium"
        >
          Custom Pizzas
        </button>
        <button
          [routerLink]="['/specialty-pizzas']"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md py-2 px-3 text-base font-medium"
        >
          Specialty Pizzas
        </button>
        <button
          [routerLink]="['/cart']"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md py-2 px-3 text-base font-medium"
        >
          Your Cart
        </button>
      </div>
      <div class="border-t border-gray-700 pb-3 pt-4">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-white">Tom Cook</div>
            <div class="text-sm font-medium text-gray-400">tom&#64;example.com</div>
          </div>
          <button
            type="button"
            class="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span class="w-6 h-6" [innerHTML]="getIcon(5)"></span>
          </button>
        </div>
        <div class="mt-3 space-y-1 px-2">
          <button
            [routerLink]="['/profile']"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
          >
            Your Profile
          </button>
          <button
            [routerLink]="['/admin-root']"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
          >
            Administration
          </button>
          <button
            [routerLink]="['/sign-in']"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
          >
            Sign out
          </button>
        </div>
      </div>
    </nav>`,
})
export class HeaderMobileComponent {
  constructor(private icons: IconsService) {}

  getIcon(num: number) {
    return this.icons.getIcon(num);
  }
}
