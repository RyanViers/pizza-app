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
      <h2 class="text-3xl font-bold tracking-tight text-[#fefefe] sm:text-4xl">
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
  </div>`,
  styles: [],
})
export class AdminInfoComponent implements OnInit {
  administrator: Administrator = administrator;
  constructor() {}

  ngOnInit() {}
}
