import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { APIService } from 'src/app/API.service';
import { AdminService } from '../../../admin.service';
import { Employee } from 'src/app/API.service';

@Component({
  selector: 'app-display-employee-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed z-50 inset-0 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <!-- Background overlay, show/hide based on modal state. -->
        <div
          class="fixed inset-0 bg-white bg-opacity-75 transition-opacity"
          aria-hidden="true"
          (click)="closeModal()"
        ></div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >

        <!-- Modal panel, show/hide based on modal state. -->
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div class="bg-light px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="w-full flex flex-col items-center">
              <div class="flex flex-col items-center">
                <div class="flex flex-col items-center">
                  <h3 class="text-lg leading-6 font-medium text-white˚s">
                    Employee Information
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-white">
                      Please review the employee information below.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-5">

              <!-- Employee Information -->
              <div class="flex flex-col items-center">
                <div class="flex w-full justify-center items-center">
                  <img [src]="$employee.employee_url" alt="Employee Image" class="h-20 w-20 rounded-full">
                </div>
                <div>
                  <p class="text-sm text-white">
                    First Name: {{ $employee.first_name }}
                  </p>
                </div>
                <div>
                  <p class="text-sm text-white">
                    Last Name: {{ $employee.last_name }}
                  </p>
                </div>
                <div>
                  <p class="text-sm text-white">
                    Email: {{ $employee.email }}
                  </p>
                </div>
                <div>
                  <p class="text-sm text-white">
                    Street: {{ $employee.street }}
                  </p>
                </div>
                <div>
                  <p class="text-sm text-white">
                    City: {{ $employee.city }}
                  </p>
                </div>
                <div>
                  <p class="text-sm text-white">
                    State: {{ $employee.state }}
                  </p>
                </div>
                <div>
                  <p class="text-sm text-white">
                    Zip: {{ $employee.zip }}
                  </p>
                </div>
                <div>
                  <p class="text-sm text-white">
                    Phone: {{ $employee.phone }}
                  </p>
                </div>
                <div>
                  <p class="text-sm text-white">
                    Date of Birth: {{ $employee.date_of_birth }}
                  </p>
                </div>
                <div>
                  <p class="text-sm text-white">
                    Date Hired: {{ $employee.date_hired }}
                  </p>
                </div>
                <div>
                  <p class="text-sm text-white">
                    User Role: {{ $employee.user_role }}
                  </p>
                </div>
                <div>
                  <p class="text-sm text-white">
                    Annual Salary: {{ $employee.annual_salary }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 flex flex-row-reverse">
            <button
              type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:w-auto sm:text-sm"
              (click)="closeModal()"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})

export class DisplayEmployeeModalComponent {
  $employee: Employee = this.adminService.$employee();

  constructor(
    private adminService: AdminService,
  ) {}
    
  closeModal(): void {
    this.adminService.$displayEmployeeModal.set(false);
  }
}
