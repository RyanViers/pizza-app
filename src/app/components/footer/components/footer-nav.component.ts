import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterLinks, footerLinks } from '../models';

@Component({
  selector: 'app-footer-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <div>
    <div class="md:grid md:grid-cols-4 md:gap-8">
      @for(page of links; track page.page) {
        <div>
          <h3 class="text-sm font-semibold leading-6 text-white">
            {{ page.page }}
          </h3>
          <ul role="list" class="mt-6 space-y-4">
            @for(link of page.link; track link.name) {
              <li>
                <a
                  [routerLink]="[link.url]"
                  class="text-sm leading-6 text-gray-300 hover:text-white"
                  >{{ link.name }}</a
                >
              </li>
            }
          </ul>
        </div>
      }
  </div>`,
})
export class FooterNavComponent {
  links: FooterLinks[] = footerLinks;
  constructor() {}
}
