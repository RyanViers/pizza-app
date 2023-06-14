import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-password-change',
  standalone: true,
  imports: [CommonModule, IonicModule, SharedModule, RouterModule],
  templateUrl: './password-change.component.html',
  styles: [],
})
export class PasswordChangeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
