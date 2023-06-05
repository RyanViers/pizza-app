import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-email-button',
  standalone: true,
  template: `<div class="absolute inline-block text-left">
    <div>
      <button
        (click)="onClick()"
        type="button"
        class="inline-flex w-[8rem] justify-center gap-x-1.5 rounded-md bg-dark-tint px-3 py-2 text-sm font-semibold text-light shadow-sm ring-1 ring-inset ring-light-shade hover:bg-medium"
        id="menu-button"
      >
        Store Email
        <svg
          class="-mr-1 h-5 w-5 text-light"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <div
      #menu
      class="hidden bg-dark-tint hover:bg-medium right-0 z-50 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      tabindex="-1"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
    >
      <div class="px-4 py-3" role="none">
        <p class="truncate text-sm font-medium text-light" role="none">
          {{ email }}
        </p>
      </div>
    </div>
  </div>`,
  styles: [],
})
export class EmailButtonComponent implements OnInit {
  @Input() email: string = '';

  @ViewChild('menu') menu: ElementRef | undefined;

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.menu?.nativeElement.classList.toggle('hidden');
  }
}
