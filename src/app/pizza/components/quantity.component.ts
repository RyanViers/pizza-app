import { StepperService } from '../stepper/stepper/stepper.service';
import { CommonModule } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { PizzaService } from '../pizza.service';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { TailwindIconType, TailwindIcon } from 'src/app/utils/tailwind-icons';

@Component({
  selector: 'app-quantity',
  standalone: true,
  imports: [CommonModule, IonicModule, SharedModule],
  providers: [],
  styles: [``],
  template: `<div class="relative z-10 flex w-full max-w-2xl p-4 mx-auto">
    <div class="flex items-center justify-center w-full">
      <div class="flex flex-row items-center justify-center space-x-6">
        <div class="flex flex-row items-center justify-center space-x-2">
          <button
            (click)="decreaseQuantity(1)"
            type="button"
            class="p-2 rounded-full shadow-sm bg-light-tint text-dark hover:bg-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light"
          >
            <span
              class="w-5 h-5 text-dark-shade"
              [innerHTML]="getIcon(2)"
            ></span>
          </button>
          <ion-label class="text-lg text-dark">{{
            $quantitySignal()
          }}</ion-label>
          <button
            (click)="increaseQuantity(1)"
            type="button"
            class="p-2 rounded-full shadow-sm bg-light-tint text-dark hover:bg-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <span
              class="w-5 h-5 text-dark-shade"
              [innerHTML]="getIcon(1)"
            ></span>
          </button>
        </div>
        <div class=" flex items-center">
          <button
            (click)="goToSection(4)"
            type="button"
            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  </div>`,
})
export class QuantityComponent {
  $quantitySignal: Signal<number | undefined> =
    this.pizzaService.$quantitySignal;

  icons: Map<TailwindIconType, SafeHtml> = TailwindIcon.getTailwindIconSvgs(
    [TailwindIconType.PLUS, TailwindIconType.MINUS],
    this.sanitizer
  );

  constructor(
    private pizzaService: PizzaService,
    private stepper: StepperService,
    private sanitizer: DomSanitizer
  ) {}

  getIcon(num: number): SafeHtml | undefined {
    switch (num) {
      case 1:
        return this.icons.get(TailwindIconType.PLUS);
      case 2:
        return this.icons.get(TailwindIconType.MINUS);
      default:
        return '';
    }
  }

  // create a method that will increment the quantity up or down based on user input as long as the quantity is greater than or equal to 1
  increaseQuantity(num: number): void {
    let quantity = this.pizzaService.getPizzaQuantitySignal();
    if (quantity >= 1) {
      quantity += num;
      this.pizzaService.setSignal({ quantity: quantity });
    }
  }

  decreaseQuantity(num: number): void {
    let quantity = this.pizzaService.getPizzaQuantitySignal();
    if (quantity > 1) {
      quantity -= num;
      this.pizzaService.setSignal({ quantity: quantity });
    }
  }

  goToSection(precedence: number): void {
    this.stepper.setSection(this.stepper.getSectionFromPrecedence(precedence));
  }
}
