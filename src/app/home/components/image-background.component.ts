import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Options } from '../models/options';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-image-background',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, NgOptimizedImage],
  template: `<section
    class="px-4 py-24 mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8"
  >
    <div class="relative overflow-hidden rounded-lg">
      <div class="absolute inset-0">
        <img
          ngSrc="{{ options?.image }}"
          width="1"
          height="1"
          class="object-cover object-center w-full h-full"
        />
      </div>
      <div
        class="relative px-6 py-32 bg-gray-900 bg-opacity-75 sm:px-12 sm:py-40 lg:px-16"
      >
        <div
          class="relative flex flex-col items-center max-w-3xl mx-auto text-center"
        >
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {{ options?.title }}
          </h2>
          <p class="mt-3 text-xl text-white">
            {{ options?.text }}
          </p>
          <a
            href="#"
            class="block w-full px-8 py-3 mt-8 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-100 sm:w-auto"
            >Shop Focus</a
          >
        </div>
      </div>
    </div>
  </section>`,
  styles: [``],
})
export class ImageBackgroundComponent implements OnInit {
  @Input() options: Options | undefined;

  constructor() {}

  ngOnInit() {}
}
