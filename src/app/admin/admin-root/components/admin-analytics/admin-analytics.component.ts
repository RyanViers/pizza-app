import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-admin-analytics',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  template: `<div>
    <!-- Heading -->
    <div
      class="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-light-shade px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8"
    >
      <div>
        <div class="flex items-center gap-x-3">
          <div class="flex-none rounded-full bg-light-tint p-1 text-success">
            <div class="h-2 w-2 rounded-full bg-current"></div>
          </div>
          <h1 class="flex gap-x-3 text-base leading-7">
            <span class="font-semibold text-white">Administration</span>
            <span class="text-medium-shade">/</span>
            <span class="font-semibold text-white">Analytics</span>
          </h1>
        </div>
        <p class="mt-2 text-xs leading-6 text-medium-shade">
          Select Filters to view Analytics
        </p>
      </div>
      <label class="relative inline-flex items-center mr-5 cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" checked />
        <div
          class="w-11 h-6 bg-light-tint rounded-full peer  peer-focus:ring-4 peer-focus:ring-purple-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-black after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"
        ></div>
        <span class="ml-3 text-sm font-medium text-gray-900">Purple</span>
      </label>
    </div>

    <!-- Analytics -->
    <div
      class="border-b mb-20 border-dark-shade grid grid-cols-1 bg-light-shade sm:grid-cols-2 lg:grid-cols-4"
    >
      <div class="border-t border-dark-shade py-6 px-4 sm:px-6 lg:px-8">
        <p class="text-sm font-medium leading-6 text-medium-shade">
          Number of deploys
        </p>
        <p class="mt-2 flex items-baseline gap-x-2">
          <span class="text-4xl font-semibold tracking-tight text-dark-shade"
            >405</span
          >
        </p>
      </div>
      <div
        class="border-t border-dark-shade py-6 px-4 sm:px-6 lg:px-8 sm:border-l"
      >
        <p class="text-sm font-medium leading-6 text-medium-shade">
          Average deploy time
        </p>
        <p class="mt-2 flex items-baseline gap-x-2">
          <span class="text-4xl font-semibold tracking-tight text-dark-shade"
            >3.65</span
          >
          <span class="text-sm text-medium-shade">mins</span>
        </p>
      </div>
      <div
        class="border-t border-dark-shade py-6 px-4 sm:px-6 lg:px-8 lg:border-l"
      >
        <p class="text-sm font-medium leading-6 text-medium-shade">
          Number of servers
        </p>
        <p class="mt-2 flex items-baseline gap-x-2">
          <span class="text-4xl font-semibold tracking-tight text-dark-shade"
            >3</span
          >
        </p>
      </div>
      <div
        class="border-t border-dark-shade py-6 px-4 sm:px-6 lg:px-8 sm:border-l"
      >
        <p class="text-sm font-medium leading-6 text-medium-shade">
          Success rate
        </p>
        <p class="mt-2 flex items-baseline gap-x-2">
          <span class="text-4xl font-semibold tracking-tight text-dark-shade"
            >98.5%</span
          >
        </p>
      </div>
    </div>
  </div>`,
  styles: [],
})
export class AdminAnalyticsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
