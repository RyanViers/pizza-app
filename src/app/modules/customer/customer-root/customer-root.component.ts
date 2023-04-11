import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-customer-root',
  templateUrl: './customer-root.component.html',
  standalone: true,
  imports: [CommonModule, IonicModule],
  styles: [``],
})
export class CustomerRootComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goBack() {
    this.router.navigate(['/home']);
  }
}
