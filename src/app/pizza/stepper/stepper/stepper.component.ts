import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { StepperService } from '../../stepper.service';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule, IonicModule],
  template: `
    <ol
      class="justify-around items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0"
    >
      <li
        (click)="goToSection(0)"
        [ngClass]="getColor(0)"
        class="rounded-lg cursor-pointer hover:bg-light-tint bg-light m-4 p-4 flex items-center text-blue-600 dark:text-blue-500 space-x-2.5"
      >
        <span
          [ngClass]="getBorderColor(0)"
          class="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500"
        >
          1
        </span>
        <span>
          <h3 class="font-medium leading-tight">Base</h3>
          <p class="text-sm">Size, Crust, Sauce</p>
        </span>
      </li>
      <li
        (click)="goToSection(1)"
        [ngClass]="getColor(1)"
        class="bg-light rounded-lg cursor-pointer hover:bg-light-tint m-4 p-4 flex items-center text-gray-500 dark:text-gray-400 space-x-2.5"
      >
        <span
          [ngClass]="getBorderColor(1)"
          class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400"
        >
          2
        </span>
        <span>
          <h3 class="font-medium leading-tight">Cheese</h3>
          <p class="text-sm">Additional and Quantity</p>
        </span>
      </li>
      <li
        (click)="goToSection(2)"
        [ngClass]="getColor(2)"
        class="bg-light rounded-lg cursor-pointer hover:bg-light-tint m-4 p-4 flex items-center text-gray-500 dark:text-gray-400 space-x-2.5"
      >
        <span
          [ngClass]="getBorderColor(2)"
          class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400"
        >
          3
        </span>
        <span>
          <h3 class="font-medium leading-tight">Meat</h3>
          <p class="text-sm">Pick Your Favorite</p>
        </span>
      </li>
      <li
        (click)="goToSection(3)"
        [ngClass]="getColor(3)"
        class="bg-light rounded-lg cursor-pointer hover:bg-light-tint m-4 p-4 flex items-center text-gray-500 dark:text-gray-400 space-x-2.5"
      >
        <span
          [ngClass]="getBorderColor(3)"
          class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400"
        >
          4
        </span>
        <span>
          <h3 class="font-medium leading-tight">Veggies</h3>
          <p class="text-sm">Farmed Fresh</p>
        </span>
      </li>
    </ol>
  `,
  styles: [``],
})
export class StepperComponent implements OnInit {
  constructor(private stepper: StepperService) {}

  ngOnInit() {}

  back(): void {
    const precedence = this.stepper.getSectionPrecedence(
      this.stepper.getSection()
    );
    if (precedence > 0)
      this.stepper.setSection(
        this.stepper.getSectionFromPrecedence(precedence - 1)
      );
  }

  /**
   * hext
   */
  next(): void {
    const precedence = this.stepper.getSectionPrecedence(
      this.stepper.getSection()
    );
    if (precedence < 3)
      this.stepper.setSection(
        this.stepper.getSectionFromPrecedence(precedence + 1)
      );
  }

  /**
   * go to section
   * @param precedence
   */
  goToSection(precedence: number): void {
    this.stepper.setSection(this.stepper.getSectionFromPrecedence(precedence));
  }

  /**
   * get color
   * @param precedence
   * @returns
   */
  getColor(precedence: number): string {
    return this.stepper.getSectionPrecedence(this.stepper.getSection()) >=
      precedence
      ? '!text-success'
      : '';
  }

  /**
   * get color
   * @param precedence
   * @returns
   */
  getBorderColor(precedence: number): string {
    return this.stepper.getSectionPrecedence(this.stepper.getSection()) >=
      precedence
      ? '!border-success'
      : '';
  }

  /**
   * get width
   * @returns
   */
  getWidth(): string {
    switch (this.stepper.getSectionPrecedence(this.stepper.getSection())) {
      case 0:
        return 'w-[2%]';
      case 1:
        return 'w-[37.5%]';
      case 2:
        return 'w-[62.5%]';
      case 3:
        return 'w-full';
      default:
        return '';
    }
  }
}
