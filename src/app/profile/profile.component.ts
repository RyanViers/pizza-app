import { ProfileInfoComponent } from './profile-info/profile-info/profile-info.component';
import { DeleteAccountComponent } from './components/delete-account.component';
import { PasswordChangeComponent } from './password-change/password-change/password-change.component';
import { ProfileService } from './profile.service';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NotificationsSettingsComponent } from './notifications-settings/notifications-settings/notifications-settings.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    NotificationsSettingsComponent,
    PasswordChangeComponent,
    DeleteAccountComponent,
    ProfileInfoComponent,
  ],
  template: `<ion-header>
      <app-header />
    </ion-header>

    <ion-content class="flex w-full h-full">
      <div>
        <div class="xl:pl-72">
          <main>
            <!-- Settings forms -->
            <div class="divide-y divide-white/5">
              <div class="flex w-full border-t-2">
                <app-profile-info [user]="user" />
              </div>

              <div class="flex w-full border-t-2">
                <app-notifications-settings />
              </div>

              <div>
                <app-password-change />
              </div>

              <div>
                <app-delete-account />
              </div>
            </div>
          </main>
        </div>
      </div>
      <ion-footer>
        <app-footer />
      </ion-footer>
    </ion-content> `,
  styles: [``],
})
export default class ProfileComponent implements OnInit {
  user?: any;

  constructor(private profile: ProfileService) {}

  ngOnInit() {
    this.profile.currentAuthenticatedUser().then((user) => {
      this.user = user.attributes;
    });
  }
}
