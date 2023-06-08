import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { PizzaService } from 'src/app/pizza/pizza.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-custom-cart',
  imports: [CommonModule, IonicModule, SharedModule],
  standalone: true,
  templateUrl: './custom-cart.component.html',
  styles: [],
})
export class CustomCartComponent implements OnInit, AfterViewInit {
  @Input() customPizza: any;

  constructor(private cart: CartService, private pizza: PizzaService) {
    console.log(this.customPizza);
  }

  ngOnInit() {
    this.customPizza.subscribe((pizza: any) => {
      console.log(pizza);
    }
    );
  }

  ngAfterViewInit() {
    console.log(this.customPizza);
  }

  getIcon(num: number) {
    return this.cart.getIcon(num);
  }
}
