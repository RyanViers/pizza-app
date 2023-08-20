import { Injectable } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { TailwindIconType, TailwindIcon } from '../utils/tailwind-icons';
import {
  SpecialtyPizza,
  CustomPizza,
  CreateOrderInput,
} from 'src/app/API.service';
import { CognitoService } from '../home/cognito.service';
import { PizzaService } from '../pizza/pizza.service';
import { MutationsService } from '../utils/services/api/mutations.service';
import Swal from 'sweetalert2';

export interface CartItem {
  pizza: CustomPizza | SpecialtyPizza;
}
@Injectable({
  providedIn: 'root',
})
export class CartService {
  icons: Map<TailwindIconType, SafeHtml> = TailwindIcon.getTailwindIconSvgs(
    [TailwindIconType.X_MARK, TailwindIconType.QUESTION_MARK_CIRCLE],
    this.sanitizer
  );

  constructor(
    private sanitizer: DomSanitizer,
    private pizza: PizzaService,
    private cognito: CognitoService,
    private mutation: MutationsService
  ) {}

  getIcon(num: number): SafeHtml | undefined {
    switch (num) {
      case 1:
        return this.icons.get(TailwindIconType.X_MARK);
      case 2:
        return this.icons.get(TailwindIconType.QUESTION_MARK_CIRCLE);
      default:
        return '';
    }
  }

  public async onCheckout(): Promise<void> {
    try {
      const user = await this.cognito.currentAuthenticatedUser();
      const totalCost: number = this.pizza.$calculateTotalWithTaxSignal();
      const tax: number = this.pizza.$calculateTaxSignal();
      const subtotal: number = this.pizza.$calculateTotalSignal();

      // Get custom and specialty pizzas
      const customPizzas: CustomPizza[] = this.pizza.$customPizzaArraySignal();

      const specialtyPizzas: SpecialtyPizza[] =
        this.pizza.$specialtyPizzaArraySignal();

      // Create CreateOrderInput
      const order: CreateOrderInput = {
        user_id: user?.attributes.sub,
        user_name: user?.username,
        date: `${new Date().getTime()}`,
        customPizzas: [
          ...customPizzas.map((pizza: CustomPizza) => {
            delete (pizza as any)?.__typename;
            return pizza;
          }),
        ],
        specialtyPizzas: [
          ...specialtyPizzas.map((pizza: SpecialtyPizza) => {
            delete (pizza as any)?.__typename;
            return pizza;
          }),
        ],
        subtotal: subtotal,
        tax: tax,
        total: totalCost,
      };

      const swal = await Swal.fire({
        title: 'Save Order',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Add To Database',
        cancelButtonText: 'Cancel',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        heightAuto: false,
        customClass: {
          popup: 'bg-light-shade text-dark-shade rounded-lg shadow-lg',
        },
      });

      if (swal.isConfirmed) {
        await this.mutation.createOrder(order);
        await Swal.fire({
          title: 'Order Saved',
          icon: 'success',
          heightAuto: false,
          customClass: {
            popup: 'bg-light-shade text-dark-shade rounded-lg shadow-lg',
          },
        });
        this.pizza.resetSignal();
        this.pizza.resetPizzaArraySignal();
      }
    } catch (err) {
      console.error('Error in onCheckout:', err);
    }
  }
}
