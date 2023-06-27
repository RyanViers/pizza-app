import { AdminRootComponent } from '../../admin-root.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { Administrator, administrator } from '../../utils/models/administrator';

@Component({
  selector: 'app-admin-info',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, SharedModule],
  template: `<div class="grid grid-cols-1 mx-20 gap-x-20">
      <div class="px-4 sm:px-0">
        <h2
          class="text-3xl font-bold tracking-tight text-[#fefefe] sm:text-4xl"
        >
          District Manager
        </h2>
        <p class="max-w-2xl mt-1 text-sm leading-6 text-gray-400">
          Personal details and application.
        </p>
      </div>
      <div class="mt-6 border-t border-white/10">
        <dl class="divide-y divide-white/10">
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-white">Full name</dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0"
            >
              {{ administrator.name }}
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-white">Role</dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0"
            >
              {{ administrator.role }}
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-white">
              Email address
            </dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0"
            >
              {{ administrator.email }}
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-white">Store</dt>
            <dd
              class="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0"
            >
              {{ administrator.store }}
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <!-- Test -->
    <div
      class="flex flex-col items-center justify-center w-full px-20 border-t-1"
    >
      <div>
        <h1>
          <span class="text-4xl font-bold text-white">Inventory</span>
          <span class="text-4xl font-bold text-indigo-400">.</span>
        </h1>
      </div>
      <ul role="list" class="w-full divide-y m-15 divide-white/5">
        <li class="relative flex items-center py-4 space-x-4">
          <div class="flex-auto min-w-0">
            <div class="flex items-center gap-x-3">
              <div
                class="flex-none p-1 text-gray-500 rounded-full bg-gray-100/10"
              >
                <div class="w-2 h-2 bg-current rounded-full"></div>
              </div>
              <h2 class="min-w-0 text-sm font-semibold leading-6 text-white">
                <a href="#" class="flex gap-x-2">
                  <span class="truncate">Planetaria</span>
                  <span class="text-gray-400">/</span>
                  <span class="whitespace-nowrap">ios-app</span>
                  <span class="absolute inset-0"></span>
                </a>
              </h2>
            </div>
            <div
              class="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400"
            >
              <p class="truncate">Deploys from GitHub</p>
              <svg
                viewBox="0 0 2 2"
                class="h-0.5 w-0.5 flex-none fill-gray-300"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <p class="whitespace-nowrap">Initiated 1m 32s ago</p>
            </div>
          </div>
          <div
            class="flex-none px-2 py-1 text-xs font-medium text-gray-400 rounded-full ring-1 ring-inset bg-gray-400/10 ring-gray-400/20"
          >
            Preview
          </div>
          <svg
            class="flex-none w-5 h-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clip-rule="evenodd"
            />
          </svg>
        </li>
        <li class="relative flex items-center py-4 space-x-4">
          <div class="flex-auto min-w-0">
            <div class="flex items-center gap-x-3">
              <div
                class="flex-none p-1 text-green-400 rounded-full bg-green-400/10"
              >
                <div class="w-2 h-2 bg-current rounded-full"></div>
              </div>
              <h2 class="min-w-0 text-sm font-semibold leading-6 text-white">
                <a href="#" class="flex gap-x-2">
                  <span class="truncate">Planetaria</span>
                  <span class="text-gray-400">/</span>
                  <span class="whitespace-nowrap">mobile-api</span>
                  <span class="absolute inset-0"></span>
                </a>
              </h2>
            </div>
            <div
              class="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400"
            >
              <p class="truncate">Deploys from GitHub</p>
              <svg
                viewBox="0 0 2 2"
                class="h-0.5 w-0.5 flex-none fill-gray-300"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <p class="whitespace-nowrap">Deployed 3m ago</p>
            </div>
          </div>
          <div
            class="flex-none px-2 py-1 text-xs font-medium text-indigo-400 rounded-full ring-1 ring-inset bg-indigo-400/10 ring-indigo-400/30"
          >
            Production
          </div>
          <svg
            class="flex-none w-5 h-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clip-rule="evenodd"
            />
          </svg>
        </li>
        <li class="relative flex items-center py-4 space-x-4">
          <div class="flex-auto min-w-0">
            <div class="flex items-center gap-x-3">
              <div
                class="flex-none p-1 text-gray-500 rounded-full bg-gray-100/10"
              >
                <div class="w-2 h-2 bg-current rounded-full"></div>
              </div>
              <h2 class="min-w-0 text-sm font-semibold leading-6 text-white">
                <a href="#" class="flex gap-x-2">
                  <span class="truncate">Tailwind Labs</span>
                  <span class="text-gray-400">/</span>
                  <span class="whitespace-nowrap">tailwindcss.com</span>
                  <span class="absolute inset-0"></span>
                </a>
              </h2>
            </div>
            <div
              class="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400"
            >
              <p class="truncate">Deploys from GitHub</p>
              <svg
                viewBox="0 0 2 2"
                class="h-0.5 w-0.5 flex-none fill-gray-300"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <p class="whitespace-nowrap">Deployed 3h ago</p>
            </div>
          </div>
          <div
            class="flex-none px-2 py-1 text-xs font-medium text-gray-400 rounded-full ring-1 ring-inset bg-gray-400/10 ring-gray-400/20"
          >
            Preview
          </div>
          <svg
            class="flex-none w-5 h-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clip-rule="evenodd"
            />
          </svg>
        </li>
        <li class="relative flex items-center py-4 space-x-4">
          <div class="flex-auto min-w-0">
            <div class="flex items-center gap-x-3">
              <div
                class="flex-none p-1 rounded-full text-rose-400 bg-rose-400/10"
              >
                <div class="w-2 h-2 bg-current rounded-full"></div>
              </div>
              <h2 class="min-w-0 text-sm font-semibold leading-6 text-white">
                <a href="#" class="flex gap-x-2">
                  <span class="truncate">Protocol</span>
                  <span class="text-gray-400">/</span>
                  <span class="whitespace-nowrap">api.protocol.chat</span>
                  <span class="absolute inset-0"></span>
                </a>
              </h2>
            </div>
            <div
              class="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400"
            >
              <p class="truncate">Deploys from GitHub</p>
              <svg
                viewBox="0 0 2 2"
                class="h-0.5 w-0.5 flex-none fill-gray-300"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <p class="whitespace-nowrap">Failed to deploy 6d ago</p>
            </div>
          </div>
          <div
            class="flex-none px-2 py-1 text-xs font-medium text-gray-400 rounded-full ring-1 ring-inset bg-gray-400/10 ring-gray-400/20"
          >
            Preview
          </div>
          <svg
            class="flex-none w-5 h-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clip-rule="evenodd"
            />
          </svg>
        </li>
      </ul>
    </div>`,
  styles: [],
})
export class AdminInfoComponent implements OnInit {
  administrator: Administrator = administrator;
  constructor() {}

  ngOnInit() {}
}
