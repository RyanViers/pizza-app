import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-profile-info',
  standalone: true,
  imports: [CommonModule, IonicModule, SharedModule, RouterModule],
  templateUrl: './profile-info.component.html',
  styles: [``],
})
export class ProfileInfoComponent implements OnInit {
  @Input() user?: any;
  constructor() {}

  ngOnInit() {}
}
