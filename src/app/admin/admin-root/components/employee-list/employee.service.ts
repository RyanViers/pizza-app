import { Injectable } from '@angular/core';
import { EmployeeSection } from './helpers/enums';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private router: Router) {}
}
