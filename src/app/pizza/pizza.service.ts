import { Injectable } from "@angular/core";
import { PizzaStepperSection } from "./helpers/enums";
import { Router } from "@angular/router";

@Injectable()
export class PizzaService {

    private currentSection: PizzaStepperSection = PizzaStepperSection.BASE;

    /**
     * constructor
     * @param router 
     */
    constructor(private router: Router) {}

    /**
     * get section
     * @returns 
     */
    getSection(): PizzaStepperSection {
        return this.currentSection;
    }

    /**
     * set section
     * @param section 
     */
    setSection(section: PizzaStepperSection): void {
        this.currentSection = section;
        switch(this.currentSection) {
            case PizzaStepperSection.BASE: this.router.navigate(['/pizza/base']); break;
            case PizzaStepperSection.CHEESE: this.router.navigate(['/pizza/cheese']); break;
            case PizzaStepperSection.MEATS: this.router.navigate(['/pizza/meat']); break;
            case PizzaStepperSection.VEGGIES: this.router.navigate(['/pizza/veggie']); break;
        } 
    }

    /**
     * get section precedence
     * @param section 
     * @returns 
     */
    getSectionPrecedence(section: PizzaStepperSection): number {
        switch(section) {
            case PizzaStepperSection.BASE: return 0;
            case PizzaStepperSection.CHEESE: return 1;
            case PizzaStepperSection.MEATS: return 2;
            case PizzaStepperSection.VEGGIES: return 3;
            default: return 0;
        }
    }

    /**
     * get section from precedence
     * @param precedence 
     * @returns 
     */
    getSectionFromPrecedence(precedence: number) {
        switch(precedence) {
            case 0: return PizzaStepperSection.BASE;
            case 1: return PizzaStepperSection.CHEESE;
            case 2: return PizzaStepperSection.MEATS;
            case 3: return PizzaStepperSection.VEGGIES;
            default: return PizzaStepperSection.BASE;
        }
    }
}