import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { employees, Employee } from '../../../utils/models/employees';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, IonicModule, SharedModule, RouterModule],
  template: `<ion-content>
    <div class="flex items-center justify-center w-full">
      <h1>
        <span class="text-4xl font-bold text-white">Employess</span>
        <span class="text-4xl font-bold text-indigo-400">.</span>
      </h1>
    </div>
    <ul role="list" class="px-20 divide-y divide-gray-800">
      <li *ngFor="let e of employees" class="flex justify-between py-5 gap-x-6">
        <div class="flex gap-x-4">
          <img
            class="flex-none w-12 h-12 bg-gray-800 rounded-full"
            [src]="e.img"
          />
          <div class="flex-auto min-w-0">
            <p class="text-sm font-semibold leading-6 text-white">
              {{ e.name }}
            </p>
            <p class="mt-1 text-xs leading-5 text-gray-400 truncate">
              {{ e.email }}
            </p>
          </div>
        </div>
        <div class="hidden sm:flex sm:flex-col sm:items-end">
          <p class="text-sm leading-6 text-white">{{ e.storeName }}</p>
          <p class="mt-1 text-xs leading-5 text-gray-400">
            {{ e.phone }}
          </p>
        </div>
      </li>
    </ul>
  </ion-content>`,
  styles: [],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = employees;
  constructor() {}

  ngOnInit() {}
}