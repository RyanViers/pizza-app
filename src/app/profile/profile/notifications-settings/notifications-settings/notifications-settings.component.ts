import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-notifications-settings',
  standalone: true,
  imports: [CommonModule, IonicModule, SharedModule, RouterModule],
  templateUrl: './notifications-settings.component.html',
  styles: [``],
})
export class NotificationsSettingsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
