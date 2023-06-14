import { ProfileService } from './../profile.service';
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
  ],
  templateUrl: './profile.component.html',
  styles: [``],
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private profile: ProfileService) {}

  ngOnInit() {
    this.profile.currentAuthenticatedUser().then((user) => {
      console.log(user.attributes);
      this.user = user.attributes;
    });
  }
}
