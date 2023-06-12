import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, IonicModule, SharedModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styles: [``],
})
export class SignInComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
