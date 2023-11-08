import { FooterNewsletterComponent } from './components/footer-newsletter.component';
import { FooterBottomComponent } from './components/footer-bottom.component';
import { FooterNavComponent } from './components/footer-nav.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    FooterNavComponent,
    FooterBottomComponent,
    FooterNewsletterComponent,
  ],
  styles: [``],
  template: `
    <div class="bg-light-tint">
      <div class="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <app-footer-nav />
          <app-footer-newsletter />
        </div>
        <app-footer-bottom />
      </div>
    </div>
  `,
})
export class FooterComponent {
  constructor() {}
}
