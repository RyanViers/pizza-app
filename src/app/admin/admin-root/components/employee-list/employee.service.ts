import { Injectable } from '@angular/core';
import { EmployeeSection } from './helpers/enums';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private currentSection: EmployeeSection = EmployeeSection.EMPLOYEE_LIST;

  constructor(private router: Router) {}

  /**
   * get section
   * @returns
   */
  getSection(): EmployeeSection {
    return this.currentSection;
  }

  /**
   * set section
   * @param section
   */
  setSection(section: EmployeeSection): void {
    this.currentSection = section;
    switch (this.currentSection) {
      case EmployeeSection.EMPLOYEE_LIST:
        this.router.navigate(['/employee/employee-list']);
        break;
      case EmployeeSection.EMPLOYEE_SIGN_UP:
        this.router.navigate(['/employee/employee-sign-up']);
        break;
    }
  }

  /**
   * get section precedence
   * @param section
   * @returns
   */
  getSectionPrecedence(section: EmployeeSection): number {
    switch (section) {
      case EmployeeSection.EMPLOYEE_LIST:
        return 0;
      case EmployeeSection.EMPLOYEE_SIGN_UP:
        return 1;
      default:
        return 0;
    }
  }

  /**
   * get section from precedence
   * @param precedence
   * @returns
   */
  getSectionFromPrecedence(precedence: number): EmployeeSection {
    switch (precedence) {
      case 0:
        return EmployeeSection.EMPLOYEE_LIST;
      case 1:
        return EmployeeSection.EMPLOYEE_SIGN_UP;
      default:
        return EmployeeSection.EMPLOYEE_LIST;
    }
  }
}
