import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './employee-list.component.html',
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class EmployeeListComponent implements OnInit {
  //create an array of employees
  employees = [
    {
      id: 1,
      name: 'John',
      age: 25,
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345',
      },
    },
    {
      id: 2,
      name: 'Mary',
      age: 30,
      address: {
        street: '456 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345',
      },
    },
    {
      id: 3,
      name: 'Steve',
      age: 35,
      address: {
        street: '789 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345',
      },
    },
    {
      id: 4,
      name: 'Bill',
      age: 40,
      address: {
        street: '101 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345',
      },
    },
  ];

  constructor() {}

  ngOnInit() {}
}
