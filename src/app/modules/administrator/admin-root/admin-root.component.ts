import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@Component({
  selector: 'app-admin-root',
  templateUrl: './admin-root.component.html',
  standalone: true,
  imports: [CommonModule, IonicModule, EmployeeListComponent],
  styles: [``],
})
export class AdminRootComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goBack() {
    this.router.navigate(['/home']);
  }
}
