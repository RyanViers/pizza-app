import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    SharedModule,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './cart.component.html',
  styles: [],
})
export class CartComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
