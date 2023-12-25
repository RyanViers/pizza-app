import { Injectable, WritableSignal, signal } from '@angular/core';
import { APIService, Employee, UserRole } from 'src/app/API.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  public $toggleSignal = signal(false);

  public $updateEmployeeModal = signal(false);
  public $displayEmployeeModal = signal(false);

  public $employee: WritableSignal<Employee> = signal({
    __typename: 'Employee',
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: 0,
    phone: '',
    date_of_birth: '',
    date_hired: '',
    user_role: UserRole.EMPLOYEE,
    annual_salary: 0,
    employee_url: '',
  });

  // public setEmployee(options: Partial<Employee>) {
  //   const currentEmployee = this.$employee();
  //   const newEmployee = { ...currentEmployee, ...options };
  //   this.$employee.set(newEmployee);
  // }

  constructor(private api: APIService) {}
}
