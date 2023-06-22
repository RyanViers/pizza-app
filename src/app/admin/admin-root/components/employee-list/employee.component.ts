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
    RouterModule,
  ],
  template: `<ion-content> </ion-content> `,
  styles: [],
})
export class EmployeeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  route() {
    this.router.navigate(['employee-list']);
  }
}
