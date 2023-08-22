import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { APIService, CreateEmployeeInput, UserRole } from 'src/app/API.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  template: ` <div class="sm:flex sm:items-center p-10">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-300">Users</h1>
        <p class="mt-2 text-sm text-gray-700">
          A list of all the users in your account including their name, title,
          email and role.
        </p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          type="button"
          (click)="onSubmit()"
          class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add user
        </button>
      </div>
    </div>
    <ion-content
      ><form
        [formGroup]="employeeInput"
        (ngSubmit)="onSubmit()"
        class="bg-gray-800 p-4 rounded-md"
      >
        <!-- First name -->
        <div class="mb-4">
          <label for="first-name" class="block text-sm font-medium text-white"
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
          <label for="last-name" class="block text-sm font-medium text-white"
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
          <label for="email" class="block text-sm font-medium text-white"
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
            <label for="street" class="block text-sm font-medium text-white"
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
            <label for="city" class="block text-sm font-medium text-white"
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
            <label for="state" class="block text-sm font-medium text-white"
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
            <label for="zip" class="block text-sm font-medium text-white"
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
          <label for="phone" class="block text-sm font-medium text-white"
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
            <label for="date_hired" class="block text-sm font-medium text-white"
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
          <label for="user_role" class="block text-sm font-medium text-white"
            >User Role</label
          >
          <select
            formControlName="user_role"
            id="user_role"
            class="block w-full mt-2 p-2 rounded-md"
          >
            <option *ngFor="let r of role" [value]="r">
              {{ r }}
            </option>
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
          <label for="employee_url" class="block text-sm font-medium text-white"
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
    </ion-content>`,
  styles: [],
})
export default class EmployeeSignUpComponent implements OnInit, OnDestroy {
  employeeInput: FormGroup = new FormGroup({});
  private employeeState = new Subscription();
  form: CreateEmployeeInput | undefined;
  role: UserRole[] = [UserRole.ADMIN, UserRole.MANAGER, UserRole.EMPLOYEE];

  constructor(private api: APIService, private builder: FormBuilder) {}

  ngOnInit(): void {
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
