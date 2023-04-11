import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AdminRootComponent } from '../modules/administrator/admin-root/admin-root.component';
import { CustomerRootComponent } from '../modules/customer/customer-root/customer-root.component';
import { EmployeeRootComponent } from '../modules/employee/employee-root/employee-root.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styles: [``],
  standalone: true,
  imports: [
    IonicModule,
    RouterModule,
    AdminRootComponent,
    EmployeeRootComponent,
    CustomerRootComponent,
  ],
})
export class HomePage {
  constructor(private router: Router) {
    console.log(this.router.navigate);
  }

  navigateToPage(route: string) {
    console.log(route);
    if (route === 'admin') {
      this.router.navigate(['/admin']);
    }
    if (route == 'employee') {
      this.router.navigate(['/employee']);
    }
    if (route == 'customer') {
      this.router.navigate(['/customer']);
    }
  }
}
