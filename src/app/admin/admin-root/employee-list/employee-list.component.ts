import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { employees, Employee } from '../models/employees';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styles: [],
  standalone: true,
  imports: [CommonModule, IonicModule, SharedModule],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = employees;
  constructor() {}

  ngOnInit() {}
}
