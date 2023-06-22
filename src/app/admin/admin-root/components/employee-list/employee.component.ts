import { EmployeeSignUpComponent } from './components/employee-sign-up/employee-sign-up.component';
import { EmployeeService } from './employee.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    EmployeeListComponent,
    EmployeeSignUpComponent,
    RouterModule,
  ],
  template: `<ion-content>
    <div class="grid grid-rows-1 g-8">
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
      <div class="min-h-[381px] mt-12 md:mt-0 relative w-full block max-w-max">
        <ion-router-outlet></ion-router-outlet>
      </div>
    </div>
  </ion-content> `,
  styles: [],
})
export class EmployeeComponent implements OnInit {
  constructor(private employee: EmployeeService, private router: Router) {}

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
