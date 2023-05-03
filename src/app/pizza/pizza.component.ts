import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { PizzaService } from "./pizza.service";

@Component({
    standalone: true,
    imports: [CommonModule, IonicModule],
    providers: [PizzaService],
    template: `
    <ion-header class="p-4">
        <div class="max-w-2xl mx-auto w-full relative z-10">
            
            <div class="w-full relative">
                <div class="mt-6" aria-hidden="true">
                <div class="overflow-hidden rounded-full bg-gray-200">
                    <div class="h-2 rounded-full bg-indigo-600" [ngClass]="getWidth()"></div>
                </div>
                <div class="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid">
                    <div (click)="goToSection(0)" [ngClass]="getColor(0)" class="cursor-pointer">Base</div>
                    <div (click)="goToSection(1)" [ngClass]="getColor(1)" class="text-center cursor-pointer">Cheese</div>
                    <div (click)="goToSection(2)" [ngClass]="getColor(2)" class="text-center cursor-pointer">Meats</div>
                    <div (click)="goToSection(3)" [ngClass]="getColor(3)" class="text-right cursor-pointer">Veggies</div>
                </div>
                </div>
            </div>

        </div>    
    </ion-header>

    <ion-content class="w-full relative">
        <ion-router-outlet></ion-router-outlet>    
    </ion-content>

    <ion-footer class="p-4 max-w-2xl mx-auto w-full relative z-10">
        
        <div class="w-full flex justify-between items-center">
            <button (click)="back()" type="button" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Back</button>
            <button (click)="addToOrder()" type="button" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add to Order</button>
            <button (click)="next()" type="button" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Next</button>
        </div>

    </ion-footer>
    `,
    styles: []
})
export class PizzaComponent {

    constructor(private pizza: PizzaService) {}
    
    /**
     * add pizza to order
     */
    addToOrder() {}

    /**
     * back
     */
    back() {
       const precedence = this.pizza.getSectionPrecedence(this.pizza.getSection());
       if (precedence > 0) this.pizza.setSection(this.pizza.getSectionFromPrecedence(precedence - 1));
    }

    /**
     * hext
     */
    next() {        
       const precedence = this.pizza.getSectionPrecedence(this.pizza.getSection());
       if (precedence < 3) this.pizza.setSection(this.pizza.getSectionFromPrecedence(precedence + 1));
    }

    /**
     * go to section
     * @param precedence 
     */
    goToSection(precedence: number) {
        this.pizza.setSection(this.pizza.getSectionFromPrecedence(precedence));
    }

    /**
     * get color
     * @param precedence 
     * @returns 
     */
    getColor(precedence: number) {
        return this.pizza.getSectionPrecedence(this.pizza.getSection()) >= precedence ? 'text-indigo-600' : '';
    }

    /**
     * get width
     * @returns 
     */
    getWidth() {
        switch(this.pizza.getSectionPrecedence(this.pizza.getSection())) {
            case 0: return "w-[2%]";
            case 1: return "w-[37.5%]";
            case 2: return "w-[62.5%]";
            case 3: return "w-full";
            default: return '';
        }
    }
}