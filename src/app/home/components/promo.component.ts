import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="relative overflow-hidden bg-white">
    <!-- Decorative background image and gradient -->
    <div aria-hidden="true" class="absolute inset-0">
      <div class="absolute inset-0 mx-auto overflow-hidden max-w-7xl xl:px-8">
        <img
          src="https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg"
          alt=""
          class="object-cover object-center w-full h-full"
        />
      </div>
      <div class="absolute inset-0 bg-white bg-opacity-75"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-white via-white"></div>
    </div>

    <!-- Callout -->
    <section
      aria-labelledby="sale-heading"
      class="relative flex flex-col items-center px-4 pt-32 mx-auto text-center max-w-7xl sm:px-6 lg:px-8"
    >
      <div class="max-w-2xl mx-auto lg:max-w-none">
        <h2
          id="sale-heading"
          class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
        >
          Get 25% off during our one-time sale
        </h2>
        <p class="max-w-xl mx-auto mt-4 text-xl text-gray-600">
          Many of our unique pizza flavors are limited-time creations that may
          not return. Grab your favorite pizzas while they're hot and available.
        </p>
        <a
          href="#"
          class="inline-block w-full px-8 py-3 mt-6 font-medium text-white bg-gray-900 border border-transparent rounded-md hover:bg-gray-800 sm:w-auto"
          >Get access to our one-time sale</a
        >
      </div>
    </section>

    <!-- Testimonials -->
    <section
      aria-labelledby="testimonial-heading"
      class="relative px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-32"
    >
      <div class="max-w-2xl mx-auto lg:max-w-none">
        <h2
          id="testimonial-heading"
          class="text-2xl font-bold tracking-tight text-gray-900"
        >
          What are people saying?
        </h2>

        <div
          class="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0"
        >
          <blockquote class="sm:flex lg:block">
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              aria-hidden="true"
              class="flex-shrink-0 text-gray-300"
            >
              <path
                d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                fill="currentColor"
              />
            </svg>
            <div class="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
              <p class="text-lg text-gray-600">
                "The best pizza in town! The crust is just perfect - crispy
                outside, soft inside. And the toppings? Fresh and full of
                flavor. I’m definitely coming back for more!"
              </p>
              <cite class="block mt-4 not-italic font-semibold text-gray-900"
                >John D., New Orleans</cite
              >
            </div>
          </blockquote>
          <blockquote class="sm:flex lg:block">
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              aria-hidden="true"
              class="flex-shrink-0 text-gray-300"
            >
              <path
                d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                fill="currentColor"
              />
            </svg>
            <div class="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
              <p class="text-lg text-gray-600">
                "I ordered the Margherita pizza and it was absolutely delicious.
                The cheese was perfectly melted and the sauce had just the right
                amount of tang. It's clear they use high-quality ingredients."
              </p>
              <cite class="block mt-4 not-italic font-semibold text-gray-900"
                >Sarah L., Chicago</cite
              >
            </div>
          </blockquote>
          <blockquote class="sm:flex lg:block">
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              aria-hidden="true"
              class="flex-shrink-0 text-gray-300"
            >
              <path
                d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                fill="currentColor"
              />
            </svg>
            <div class="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
              <p class="text-lg text-gray-600">
                "I love their specialty pizzas. Each one is a unique blend of
                flavors that you just can't find anywhere else. The staff is
                friendly and the delivery is always on time. Highly
                recommended!"
              </p>
              <cite class="block mt-4 not-italic font-semibold text-gray-900"
                >Mike R., Phoenix</cite
              >
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  </div> `,
  styles: [``],
})
export class PromoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
