import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { CreateEmployeeInput, UserRole, APIService } from 'src/app/API.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-employee-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styles: [],
  template: `<div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
          class="bg-[#000] relative transform overflow-hidden rounded-lg  px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
        >
          <div class="">
            <div
              class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100"
            >
              <svg
                class="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-5">
              <form
                [formGroup]="employeeInput"
                (ngSubmit)="onSubmit()"
                class="bg-gray-800 p-4 rounded-md"
              >
                <!-- First name -->
                <div class="mb-4">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-white"
                    >First name</label
                  >
                  <input
                    type="text"
                    formControlName="first_name"
                    id="first-name"
                    class="block w-full mt-2 p-2 rounded-md"
                    placeholder="John"
                  />
                </div>

                <!-- Last name -->
                <div class="mb-4">
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-white"
                    >Last name</label
                  >
                  <input
                    type="text"
                    formControlName="last_name"
                    id="last-name"
                    class="block w-full mt-2 p-2 rounded-md"
                    placeholder="Doe"
                  />
                </div>

                <!-- Email -->
                <div class="mb-4">
                  <label
                    for="email"
                    class="block text-sm font-medium text-white"
                    >Email</label
                  >
                  <input
                    type="email"
                    formControlName="email"
                    id="email"
                    class="block w-full mt-2 p-2 rounded-md"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <!-- Address: Street, City, State, Zip -->
                <div class="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      for="street"
                      class="block text-sm font-medium text-white"
                      >Street</label
                    >
                    <input
                      type="text"
                      formControlName="street"
                      id="street"
                      class="block w-full mt-2 p-2 rounded-md"
                      placeholder="123 Main St."
                    />
                  </div>
                  <div>
                    <label
                      for="city"
                      class="block text-sm font-medium text-white"
                      >City</label
                    >
                    <input
                      type="text"
                      formControlName="city"
                      id="city"
                      class="block w-full mt-2 p-2 rounded-md"
                      placeholder="Cityville"
                    />
                  </div>
                  <div>
                    <label
                      for="state"
                      class="block text-sm font-medium text-white"
                      >State</label
                    >
                    <input
                      type="text"
                      formControlName="state"
                      id="state"
                      class="block w-full mt-2 p-2 rounded-md"
                      placeholder="Stateland"
                    />
                  </div>
                  <div>
                    <label
                      for="zip"
                      class="block text-sm font-medium text-white"
                      >ZIP Code</label
                    >
                    <input
                      type="text"
                      formControlName="zip"
                      id="zip"
                      class="block w-full mt-2 p-2 rounded-md"
                      placeholder="12345"
                    />
                  </div>
                </div>

                <!-- Phone -->
                <div class="mb-4">
                  <label
                    for="phone"
                    class="block text-sm font-medium text-white"
                    >Phone</label
                  >
                  <input
                    type="text"
                    formControlName="phone"
                    id="phone"
                    class="block w-full mt-2 p-2 rounded-md"
                    placeholder="1234567890"
                  />
                </div>

                <!-- Date of Birth & Date Hired -->
                <div class="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      for="date_of_birth"
                      class="block text-sm font-medium text-white"
                      >Date of Birth</label
                    >
                    <input
                      type="date"
                      formControlName="date_of_birth"
                      id="date_of_birth"
                      class="block w-full mt-2 p-2 rounded-md"
                    />
                  </div>
                  <div>
                    <label
                      for="date_hired"
                      class="block text-sm font-medium text-white"
                      >Date Hired</label
                    >
                    <input
                      type="date"
                      formControlName="date_hired"
                      id="date_hired"
                      class="block w-full mt-2 p-2 rounded-md"
                    />
                  </div>
                </div>

                <!-- User Role -->
                <div class="mb-4">
                  <label
                    for="user_role"
                    class="block text-sm font-medium text-white"
                    >User Role</label
                  >
                  <select
                    formControlName="user_role"
                    id="user_role"
                    class="block w-full mt-2 p-2 rounded-md"
                  >
                    @for (r of role; track r) {
                      <option [value]="r">
                        {{ r }}
                      </option>
                    }
                  </select>
                </div>

                <!-- Annual Salary -->
                <div class="mb-4">
                  <label
                    for="annual_salary"
                    class="block text-sm font-medium text-white"
                    >Annual Salary</label
                  >
                  <input
                    type="text"
                    formControlName="annual_salary"
                    id="annual_salary"
                    class="block w-full mt-2 p-2 rounded-md"
                    placeholder="$50000"
                  />
                </div>

                <!-- Employee URL -->
                <div class="mb-4">
                  <label
                    for="employee_url"
                    class="block text-sm font-medium text-white"
                    >Employee URL</label
                  >
                  <input
                    type="url"
                    formControlName="employee_url"
                    id="employee_url"
                    class="block w-full mt-2 p-2 rounded-md"
                    placeholder="https://employee-url.com"
                  />
                </div>

                <!-- Submit Button -->
                <div>
                  <button
                    type="submit"
                    class="block w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
                  >
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3"
          >
            <button
              type="button"
              class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
            >
              Deactivate
            </button>
            <button
              type="button"
              class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>`,
})
export class UpdateEmployeeModalComponent implements OnInit {
  selectedLocation?: any;
  employeeInput: FormGroup = new FormGroup({});
  private employeeState = new Subscription();
  form: CreateEmployeeInput | undefined;
  role: UserRole[] = [UserRole.ADMIN, UserRole.MANAGER, UserRole.EMPLOYEE];

  constructor(private api: APIService, private builder: FormBuilder) {}

  async ngOnInit(): Promise<void> {
    this.employeeInput = this.builder.group({
      first_name: ['', [Validators.required, Validators.maxLength(60)]],
      last_name: ['', [Validators.required, Validators.maxLength(60)]],
      email: ['', [Validators.required, Validators.email]],
      street: ['', [Validators.required, Validators.maxLength(60)]],
      city: ['', [Validators.required, Validators.maxLength(60)]],
      state: ['', [Validators.required, Validators.maxLength(60)]],
      zip: [
        '',
        [Validators.required, Validators.pattern(new RegExp(/^\d{5}$/))],
      ],
      phone: [
        '',
        [Validators.required, Validators.pattern(new RegExp(/^\d{10}$/))],
      ],
      date_of_birth: ['', [Validators.required]],
      date_hired: ['', [Validators.required]],
      user_role: ['', [Validators.required]],
      annual_salary: ['', [Validators.required]],
      employee_url: ['', [Validators.required]],
    });

    this.employeeState = this.employeeInput.valueChanges.subscribe(() => {
      this.savePersonalState();
    });
  }

  ngOnDestroy(): void {
    this.employeeState.unsubscribe();
  }

  /**
   * save personal state
   */
  private savePersonalState(): void {
    this.form = {
      id: 'temporary-id',
      first_name: this.employeeInput.value.first_name,
      last_name: this.employeeInput.value.last_name,
      email: this.employeeInput.value.email,
      street: this.employeeInput.value.street,
      city: this.employeeInput.value.city,
      state: this.employeeInput.value.state,
      zip: this.employeeInput.value.zip,
      phone: this.employeeInput.value.phone,
      date_of_birth: this.employeeInput.value.date_of_birth,
      date_hired: this.employeeInput.value.date_hired,
      user_role: this.employeeInput.value.user_role as UserRole,
      annual_salary: this.employeeInput.value.annual_salary,
      employee_url: this.employeeInput.value.employee_url,
    };
  }

  async onSubmit() {
    if (this.employeeInput?.valid) {
      try {
        await this.api.CreateEmployee(this.form as CreateEmployeeInput);
        Swal.fire({
          title: 'Success!',
          text: 'Employee has been created.',
          icon: 'success',
          confirmButtonText: 'Ok',
          heightAuto: false,
          customClass: {
            popup: 'bg-light-shade text-dark-shade rounded-lg shadow-lg',
          },
        });
        this.employeeInput.reset();
      } catch (err) {
        console.error('Error creating employee:', err);
      }
    } else {
      console.error('Form is invalid');
    }
  }
}
