import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-admin-root',
  templateUrl: './admin-root.component.html',
  standalone: true,
  imports: [CommonModule, IonicModule, EmployeeListComponent],
  styles: [
    `
      :host {
        background: green;
      }
    `,
  ],
})
export class AdminRootComponent implements OnInit {
  constructor(private router: Router, private apollo: Apollo) {}

  ngOnInit() {}

  goBack() {
    this.router.navigate(['/home']);
  }

  goEmployee() {
    this.router.navigate(['/employee']);
  }

  goCustomer() {
    this.router.navigate(['/customer']);
  }
}
