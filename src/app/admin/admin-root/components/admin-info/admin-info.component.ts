import { AdminRootComponent } from '../../admin-root.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { Administrator, administrator } from '../../utils/models/administrator';

@Component({
  selector: 'app-admin-info',
  templateUrl: './admin-info.component.html',
  styles: [],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, SharedModule],
})
export class AdminInfoComponent implements OnInit {
  administrator: Administrator = administrator;
  constructor() {}

  ngOnInit() {}
}
