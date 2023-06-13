import { HeaderComponent } from 'src/app/components/header/header.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { FooterComponent } from 'src/app/components/footer/footer.component';

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
  ],
  templateUrl: './profile.component.html',
  styles: [``],
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
