import { EmployeeService } from './components/employee-list/employee.service';
import { FooterComponent } from './../../components/footer/footer.component';
import { HeaderComponent } from './../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminInfoComponent } from './components/admin-info/admin-info.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { StoreListComponent } from './components/store-list/store-list.component';

@Component({
  selector: 'app-admin-root',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    RouterModule,
    AdminInfoComponent,
    InventoryComponent,
    StoreListComponent,
    HeaderComponent,
    FooterComponent,
  ],
  template: `
    <ion-header>
      <ion-toolbar>
        <app-header></app-header>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="block w-full h-full">
        <div class="grid w-full grid-flow-row my-10 md:grid-cols-2 gap-x-3">
          <app-admin-info></app-admin-info>
          <app-inventory></app-inventory>
        </div>

        <div class="grid w-full grid-flow-row md:grid-cols-2 gap-x-3">
          <app-store-list></app-store-list>

          <div class="grid grid-flow-row gap-8 h-full ">
            <div class="flex justify-evenly items-center">
              <button
                (click)="goToSection(0)"
                type="button"
                class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                List Employees
              </button>
              <button
                (click)="goToSection(1)"
                type="button"
                class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Add Employee
              </button>
            </div>

            <div
              class=" min-h-screen h-full md:mt-0 sticky w-full flex max-w-max"
            >
              <ion-router-outlet></ion-router-outlet>
            </div>
          </div>
        </div>
        <app-footer></app-footer>
      </div>
    </ion-content>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
    `,
  ],
})
export class AdminRootComponent implements OnInit {
  constructor(private employee: EmployeeService) {}

  ngOnInit() {}

  /**
   * go to section
   * @param precedence
   */
  goToSection(precedence: number): void {
    let section = this.employee.getSectionFromPrecedence(precedence);
    this.employee.setSection(section);
  }
}
