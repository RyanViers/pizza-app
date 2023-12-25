import { Employee, employees } from './../../utils/models/employees';
import { UpdateEmployeeModalComponent } from './components/update-employee-modal.component';
import { DisplayEmployeeModalComponent } from './components/display-employee-modal.component';
import { AdminLocationSelectorComponent } from './../location-selector/admin-location-selector.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { APIService, GetEmployeeInput, ListEmployeesInput } from 'src/app/API.service';
import { opacityScale } from 'src/app/utils/animations';
import { AdminService } from '../../admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    RouterModule,
    AdminLocationSelectorComponent,
    UpdateEmployeeModalComponent,
    DisplayEmployeeModalComponent,
  ],
  animations: [opacityScale],
  template: `
    <ion-content class="maw-w-max">
      <h1 class="flex justify-center items-center px-4 text-4xl font-semibold text-white sm:px-6 lg:px-8">
        Employee List
      </h1>
      <app-admin-location-selector
        (locationChange)="onLocationChange($event)"
      />
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <h1 class="text-base font-semibold leading-6 text-gray-300">
              Users
            </h1>
            <p class="mt-2 text-sm text-gray-700">
              A list of all the users in your account including their name,
              title, email and role.
            </p>
          </div>
          <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              (click)="$updateEmployeeModal.set(!($updateEmployeeModal()))"
              class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Update User
            </button>
            <button
              type="button"
              (click)="deleteSelectedEmployees()"
              class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Delete user
            </button>
          </div>
        </div>
        <div class="mt-8 flow-root">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
            >
              <table class="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-100 sm:pl-0"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"
                    >
                      View
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100"
                    >
                      Role
                    </th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  @for (e of employees?.items; track e?.id) {
                    @if ( e?.storeName === selectedLocation || !selectedLocation) {
                      <tr>
                        <td class="relative px-7 sm:w-12 sm:px-6">
                          <div
                            class="absolute inset-y-0 left-0 w-0.5 bg-indigo-600"
                            [style.visibility]="
                              selectedEmployees[e?.id] ? 'visible' : 'hidden'
                            "
                          ></div>

                          <input
                            type="checkbox"
                            [checked]="selectedEmployees[e?.id] || false"
                            (change)="toggleEmployeeSelection(e?.id)"
                            class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </td>
                        <td
                          class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0"
                        >
                          <div class="flex items-center">
                            <div class="h-11 w-11 flex-shrink-0">
                              <img
                                class="h-11 w-11 rounded-full"
                                [src]="e?.employee_url"
                              />
                            </div>
                            <div class="ml-4">
                              <div class="font-medium text-gray-300">
                                {{ e?.first_name }} {{ e?.last_name }}
                              </div>
                              <div class="mt-1 text-gray-500">
                                {{ e?.email }}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          class="whitespace-nowrap px-3 py-5 text-sm text-gray-500"
                        >
                          <div class="text-gray-300">{{ e?.city }}</div>
                          <div class="mt-1 text-gray-500">{{ e?.state }}</div>
                        </td>
                        <td
                          class="whitespace-nowrap px-3 py-5 text-sm text-gray-500"
                        >
                        <button
                          type="button"
                          (click)="viewEmployee(e?.id)"
                          class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Display user
                        </button>
                        </td>
                        <td
                          class="whitespace-nowrap px-3 py-5 text-sm text-gray-500"
                        >
                          {{ e?.user_role }}
                        </td>
                      </tr>
                    }
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
    
    @if ($updateEmployeeModal()) {
      <app-update-employee-modal></app-update-employee-modal>
    }
    @if ($displayEmployeeModal()) {
      <app-display-employee-modal></app-display-employee-modal>
    }
  `,
})
export default class EmployeeListComponent {
  $updateEmployeeModal = this.service.$updateEmployeeModal;
  $displayEmployeeModal = this.service.$displayEmployeeModal;

  employee: any;

  selectedLocation: string | null = null;
  employees: any;
  selectedEmployees: { [employeeId: string]: boolean } = {};

  constructor(
    private api: APIService,
    private service: AdminService
  ) {}

  async ngOnInit() {
    const input: ListEmployeesInput = {
      reverse_dir: false,
      limit: 100,
      nextToken: null,
    };
    try {
      this.employees = await this.api.ListEmployees(input);
      console.log(this.employees);
    } catch (error) {
      console.log(error);
    }
  }

  onLocationChange(location: string | null) {
    this.selectedLocation = location;
  }

  toggleEmployeeSelection(employeeId: string) {
    this.selectedEmployees[employeeId] = !this.selectedEmployees[employeeId];
  }

  async deleteSelectedEmployees() {
    for (let employeeId in this.selectedEmployees) {
      if (this.selectedEmployees[employeeId]) {
        console.log('Deleting employee with ID: ', employeeId);
        try {
          const response = await this.api.DeleteEmployee({ id: employeeId });

          Swal.fire({
            title: 'Success!',
            text:
              'Employee' +
              ` ${response.first_name} ` +
              `${response.last_name} ` +
              'deleted successfully!',
            icon: 'success',
            confirmButtonText: 'Ok',
            heightAuto: false,
            customClass: {
              popup: 'bg-light-shade text-dark-shade rounded-lg shadow-lg',
            },
          });
        } catch (error) {
          console.log(error);
          Swal.fire({
            title: 'Error!',
            text: 'Something went wrong. Please try again later.',
            icon: 'error',
            confirmButtonText: 'Ok',
            heightAuto: false,
            customClass: {
              popup: 'bg-light-shade text-dark-shade rounded-lg shadow-lg',
            },
          });
        }
      }
    }
  }

  async viewEmployee(employeeId: string) {
    console.log('Viewing employee with ID: ', employeeId);
    try {
      const input: GetEmployeeInput = {
        id: employeeId,
      };
      const response = await this.api.GetEmployee(input);
      console.log(response);
      this.service.$employee.set(response);
      this.service.$displayEmployeeModal.set(true);
    }
    catch (error) {
      console.log(error);
    }
  }
}
