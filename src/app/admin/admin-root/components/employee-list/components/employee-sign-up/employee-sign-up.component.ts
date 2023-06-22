import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-employee-sign-up',
  standalone: true,
  imports: [CommonModule, IonicModule, SharedModule, RouterModule],
  template: ``,
  styles: [],
})
export class EmployeeSignUpComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
