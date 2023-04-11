import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-employee-root',
  templateUrl: './employee-root.component.html',
  standalone: true,
  imports: [CommonModule, IonicModule],
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class EmployeeRootComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goBack() {
    this.router.navigate(['/home']);
  }
}
