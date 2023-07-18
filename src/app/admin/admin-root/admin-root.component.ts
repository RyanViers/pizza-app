import { AdminAnalyticsComponent } from './components/admin/admin-analytics.component';
import { AdminNavigationComponent } from './components/admin/admin-navigation.component';
import { IconsService } from './../../utils/icons.service';
import { FooterComponent } from './../../components/footer/footer.component';
import { HeaderComponent } from './../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { SafeHtml } from '@angular/platform-browser';
import EmployeeSignUpComponent from './components/employee/employee-sign-up.component';
import EmployeeListComponent from './components/employee/employee-list.component';
import AdminInfoComponent from './components/admin/admin-info.component';
import InventoryComponent from './components/inventory/inventory.component';
import StoreListComponent from './components/store-list/store-list.component';

@Component({
  selector: 'app-admin-root',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    RouterModule,
    AdminInfoComponent,
    InventoryComponent,
    StoreListComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeListComponent,
    EmployeeSignUpComponent,
    AdminNavigationComponent,
    AdminAnalyticsComponent,
  ],
  styles: [``],
  template: `<ion-header>
      <app-header />
    </ion-header>
    <ion-content>
      <div class="flex flex-col w-full h-full p-2 md:p-4 lg:p-6">
        <main>
          <!-- Administration Navigation -->
          <app-admin-navigation />

          <!-- Administration Analytics -->
          <app-admin-analytics />

          <!-- Administration Router -->
          <div class="h-full relative w-full block ">
            <ion-router-outlet />
          </div>

          <!-- Footer -->
          <app-footer class="sticky" />
        </main>
      </div>
    </ion-content> `,
})
export default class AdminRootComponent {
  constructor(private icons: IconsService) {}

  /**
   * get icon
   */
  getIcon(num: number): SafeHtml | undefined {
    return this.icons.getIcon(num);
  }
}
