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
import { BehaviorSubject, Observable, map } from 'rxjs';
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

@Injectable()
export class PizzaService {
  //behavior subjects
  private $pizza = new BehaviorSubject<Pizza>({
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
  });

  private $quantity = new BehaviorSubject<number>(1);

  //observable
  public $quantityTotal = this.$quantity.pipe(
    map((quantity) => {
      return quantity;
    })
  );

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

  private currentSection: PizzaStepperSection = PizzaStepperSection.BASE;

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

  // getMeatsPrice(choices: PizzaMeat[] | null) {
  //   let total = 0;
  //   this.$pizza?.value?.meats?.forEach((meat) => {
  //     if (meat === 'PEPPERONI') {
  //       total += MeatPrice.PEPPERONI;
  //     } else if (meat === 'SAUSAGE') {
  //       total += MeatPrice.SAUSAGE;
  //     } else if (meat === 'HAM') {
  //       total += MeatPrice.HAM;
  //     } else if (meat === 'BACON') {
  //       total += MeatPrice.BACON;
  //     } else if (meat === 'CHICKEN') {
  //       total += MeatPrice.CHICKEN;
  //     } else if (meat === 'BEEF') {
  //       total += MeatPrice.BEEF;
  //     }
  //   });
  //   return total.toFixed(2);
  // }

  getPizzaVeggies(): (PizzaVeggie | null)[] {
    return this.$pizza?.value?.veggies;
  }

  /**
   * set pizza
   * @param size
   */
  setPizza(options: Partial<Pizza>) {
    this.$pizza.next({ ...this.$pizza.value, ...options });
  }

  /**
   * set quantity
   * @param quantity
   */
  setQuantity(quantity: number) {
    this.$quantity.next(quantity);
  }

  getQuantity(): number {
    return this.$quantity.value;
  }

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
