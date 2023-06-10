import { Injectable } from '@angular/core';
import {
  MeatPrice,
  PizzaCrustPrice,
  PizzaSizePrice,
  PizzaStepperSection,
  VeggiePrice,
  PizzaSaucePrice,
  CheeseQuantityPrice,
  AdditionCheeseTypePrice,
} from './helpers/enums';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, combineLatest, map, tap } from 'rxjs';
import {
  AdditionCheeseType,
  CheeseQuantity,
  PizzaCheese,
  PizzaCrust,
  PizzaMeat,
  PizzaSauce,
  PizzaSize,
  PizzaVeggie,
} from '../API.service';
import { Pizza } from './helpers/models';
import { SpecialtyPizza } from './helpers/specialty-models';
import { isEqual } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  //behavior subjects
  public $pizza = new BehaviorSubject<Pizza>({
    size: PizzaSize.LARGE,
    crust: PizzaCrust.ORIGINAL,
    sauce: PizzaSauce.TOMATO,
    cheese: {
      __typename: 'PizzaCheese',
      quantity: CheeseQuantity.NORMAL,
      additional: AdditionCheeseType.NONE,
    },
    meats: [],
    veggies: [],
    price: 0,
    quantity: 1,
  });

  getPizza = this.$pizza.asObservable();

  /******************* CUSTOM PIZZA ****************/
  public $customPizza = new BehaviorSubject<Pizza[]>([]);

  addCustomPizza(pizza: any) {
    // Get the current value of the array
    const currentPizzas = this.$customPizza.getValue();

    // Add the new pizza to the array
    const newPizzas = [...currentPizzas, pizza];

    // Update the BehaviorSubject with the new array
    this.$customPizza.next(newPizzas);
  }

  /******************* SPECIALTY PIZZAS ****************/
  public $specialtyPizza = new BehaviorSubject<SpecialtyPizza[]>([]);

  public addSpecialtyPizza(pizza: SpecialtyPizza) {
    // Get the current value of the array
    const currentPizzas = this.$specialtyPizza.getValue();

    // Add the new pizza to the array
    const newPizzas = [...currentPizzas, pizza];

    // Update the BehaviorSubject with the new array
    this.$specialtyPizza.next(newPizzas);
  };

  //observable
  public $pizzaSize = this.$pizza.pipe(
    map((pizza: Pizza) => {
      return pizza.size;
    })
  );
  public $pizzaSizePrice: Observable<number> = this.$pizzaSize.pipe(
    map((size: string) => {
      return PizzaSizePrice[size as PizzaSize] || PizzaSizePrice.LARGE;
    })
  );
  public $pizzaCrust = this.$pizza.pipe(
    map((pizza: Pizza) => {
      return pizza.crust;
    })
  );
  public $pizzaCrustPrice: Observable<number> = this.$pizzaCrust.pipe(
    map((crust: string) => {
      return PizzaCrustPrice[crust as PizzaCrust] || PizzaCrustPrice.ORIGINAL;
    })
  );
  public $pizzaSauce = this.$pizza.pipe(
    map((pizza: Pizza) => {
      return pizza.sauce;
    })
  );
  public $pizzaSaucePrice: Observable<number> = this.$pizzaSauce.pipe(
    map((sauce: string) => {
      return PizzaSaucePrice[sauce as PizzaSauce] || PizzaSaucePrice.TOMATO;
    })
  );
  public $pizzaCheeseQuantity = this.$pizza.pipe(
    map((pizza: Pizza) => {
      return pizza.cheese.quantity;
    })
  );
  public $pizzaCheeseQuantityPrice: Observable<number> =
    this.$pizzaCheeseQuantity.pipe(
      map((quantity: string) => {
        return (
          CheeseQuantityPrice[quantity as CheeseQuantity] ||
          CheeseQuantityPrice.NORMAL
        );
      })
    );
  public $pizzaCheeseAdditional = this.$pizza.pipe(
    map((pizza: Pizza) => {
      return pizza.cheese.additional;
    })
  );
  public $pizzaCheeseAdditionalPrice: Observable<number> =
    this.$pizzaCheeseAdditional.pipe(
      map((additional) => {
        return (
          AdditionCheeseTypePrice[additional as AdditionCheeseType] ||
          AdditionCheeseTypePrice.NONE
        );
      })
    );

  public $pizzaMeats = this.$pizza.pipe(
    map((pizza: Pizza) => {
      return pizza.meats;
    })
  );
  public $meatPrice: Observable<number> = this.$pizzaMeats.pipe(
    map((meats) =>
      (meats || []).reduce(
        (total, meat) =>
          total + (MeatPrice[meat as PizzaMeat] || MeatPrice.NONE),
        0
      )
    )
  );
  public $pizzaVeggies = this.$pizza.pipe(
    map((pizza: Pizza) => {
      return pizza.veggies;
    })
  );
  public $veggiePrice: Observable<number> = this.$pizzaVeggies.pipe(
    map((veggies) =>
      (veggies || []).reduce(
        (total, veggie) =>
          total + (VeggiePrice[veggie as PizzaVeggie] || VeggiePrice.NONE),
        0
      )
    )
  );

  public $pizzaPrice: Observable<number | undefined> = this.$pizza.pipe(
    map((pizza: Pizza) => {
      return pizza.price;
    })
  );

  public $quantity: Observable<number | undefined> = this.$pizza.pipe(
    map((pizza: Pizza) => {
      return pizza.quantity;
    })
  );
  
  /**
   * constructor
   * @param router
   */
  constructor(private router: Router) {}

  /****************************** PUBLIC API ********************************/

  getPizzaCheese(): PizzaCheese {
    return this.$pizza?.value?.cheese;
  }

  getPizzaMeats(): (PizzaMeat | null)[] {
    return this.$pizza?.value?.meats;
  }

  getPizzaVeggies(): (PizzaVeggie | null)[] {
    return this.$pizza?.value?.veggies;
  }

  getPizzaQuantity(): number {
    return this.$pizza?.value?.quantity || 1;
  }

  getPizzaPrice(): number {
    return this.$pizza?.value?.price || 0;
  }
  /**
   * set pizza
   * @param size
   */
  setPizza(options: Partial<Pizza>) {
    const currentPizza = this.$pizza.value;
    const newPizza = { ...currentPizza, ...options };
    if (!isEqual(currentPizza, newPizza)) {
      this.$pizza.next(newPizza);
    }
  }

  /*********************************** MATH METHODS **************************************/
  totalPriceBeforeTax(): Observable<number> {
    const qty = this.$pizza.value.quantity || 1;
    return combineLatest([
      this.$pizzaSizePrice,
      this.$pizzaCrustPrice,
      this.$pizzaSaucePrice,
      this.$pizzaCheeseQuantityPrice,
      this.$pizzaCheeseAdditionalPrice,
      this.$meatPrice,
      this.$veggiePrice,
    ]).pipe(
      map((prices) => prices.reduce((total, price) => total + price, 0)),
      map((total: number) => parseFloat((total * qty).toFixed(2))),
    );
  }

  totalTax(): Observable<number> {
    return this.totalPriceBeforeTax().pipe(
      map((total) => total * 0.097),
      map((totalTax: number) => parseFloat(totalTax.toFixed(2)))
    );
  }

  totalPriceAfterTax(): Observable<number> {
    return this.totalPriceBeforeTax().pipe(
      map((total: number) => total * 0.097 + total),
      map((totalWithTax: number) => parseFloat(totalWithTax.toFixed(2))),
    );
  }
  
  /*********************************** STEPPER METHODS **************************************/
  private currentSection: PizzaStepperSection = PizzaStepperSection.BASE;

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
    switch (this.currentSection) {
      case PizzaStepperSection.BASE:
        this.router.navigate(['/pizza/base']);
        break;
      case PizzaStepperSection.CHEESE:
        this.router.navigate(['/pizza/cheese']);
        break;
      case PizzaStepperSection.MEATS:
        this.router.navigate(['/pizza/meat']);
        break;
      case PizzaStepperSection.VEGGIES:
        this.router.navigate(['/pizza/veggie']);
        break;
      case PizzaStepperSection.CHECK_OUT:
        this.router.navigate(['/pizza/checkout']);
        break;
    }
  }

  /**
   * get section precedence
   * @param section
   * @returns
   */
  getSectionPrecedence(section: PizzaStepperSection): number {
    switch (section) {
      case PizzaStepperSection.BASE:
        return 0;
      case PizzaStepperSection.CHEESE:
        return 1;
      case PizzaStepperSection.MEATS:
        return 2;
      case PizzaStepperSection.VEGGIES:
        return 3;
      case PizzaStepperSection.CHECK_OUT:
        return 4;
      default:
        return 0;
    }
  }

  /**
   * get section from precedence
   * @param precedence
   * @returns
   */
  getSectionFromPrecedence(precedence: number) {
    switch (precedence) {
      case 0:
        return PizzaStepperSection.BASE;
      case 1:
        return PizzaStepperSection.CHEESE;
      case 2:
        return PizzaStepperSection.MEATS;
      case 3:
        return PizzaStepperSection.VEGGIES;
      case 4:
        return PizzaStepperSection.CHECK_OUT;
      default:
        return PizzaStepperSection.BASE;
    }
  }

  /*********************************** PRIVATE METHODS **************************************/
}
