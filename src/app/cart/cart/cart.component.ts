import { CustomCartComponent } from './custom-cart/custom-cart.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { SpecialtyCartComponent } from './specialty-cart/specialty-cart.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PizzaService } from 'src/app/pizza/pizza.service';
import { Observable } from 'rxjs';

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
    CustomCartComponent,
    SpecialtyCartComponent,
    CartSummaryComponent,
  ],
  templateUrl: './cart.component.html',
  styles: [],
})
export class CartComponent implements OnInit {
  $specialtyPizzaList = this.pizza.$specialtyPizzaList;
  $customPizzaList = this.pizza.$customPizza;

  constructor(private pizza: PizzaService) {}

  ngOnInit() {}
}
