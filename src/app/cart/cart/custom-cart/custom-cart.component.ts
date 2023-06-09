import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { PizzaService } from 'src/app/pizza/pizza.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { Pizza } from 'src/app/pizza/helpers/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-cart',
  imports: [CommonModule, IonicModule, SharedModule],
  standalone: true,
  templateUrl: './custom-cart.component.html',
  styles: [],
})
export class CustomCartComponent implements OnInit, AfterViewInit {
  @Input() customPizza?: Pizza;

  constructor(private cart: CartService, private pizza: PizzaService) {}

  ngOnInit() {}

  ngAfterViewInit() {}

  getIcon(num: number) {
    return this.cart.getIcon(num);
  }
}
