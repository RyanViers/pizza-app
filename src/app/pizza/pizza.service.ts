import { Injectable } from '@angular/core';
import {
  MeatPrice,
  PizzaCrustPrice,
  PizzaSizePrice,
  VeggiePrice,
  PizzaSaucePrice,
  CheeseQuantityPrice,
  AdditionCheeseTypePrice,
} from './helpers/enums';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
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
import { SpecialtyPizza, CustomPizza } from '../API.service';
import { isEqual } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  constructor() {}

  //behavior subjects
  public $pizza: BehaviorSubject<CustomPizza> =
    new BehaviorSubject<CustomPizza>({
      __typename: 'CustomPizza',
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

  /**
   * set pizza
   * @param size
   */
  setPizza(options: Partial<CustomPizza>): void {
    const currentPizza = this.$pizza.value;
    const newPizza = { ...currentPizza, ...options };
    if (!isEqual(currentPizza, newPizza)) {
      this.$pizza.next(newPizza);
    }
  }

  getPizza = this.$pizza.asObservable();

  /******************* CUSTOM PIZZA ****************/
  public $customPizza: BehaviorSubject<CustomPizza[]> = new BehaviorSubject<
    CustomPizza[]
  >([]);

  addCustomPizza(pizza: any): void {
    // Get the current value of the array
    const currentPizzas = this.$customPizza.getValue();

    // Add the new pizza to the array
    const newPizzas = [...currentPizzas, pizza];

    // Update the BehaviorSubject with the new array
    this.$customPizza.next(newPizzas);
  }

  /******************* SPECIALTY PIZZAS ****************/
  public $specialtyPizza: BehaviorSubject<SpecialtyPizza[]> =
    new BehaviorSubject<SpecialtyPizza[]>([]);

  public addSpecialtyPizza(pizza: SpecialtyPizza): void {
    // Get the current value of the array
    const currentPizzas = this.$specialtyPizza.getValue();

    // Add the new pizza to the array
    const newPizzas = [...currentPizzas, pizza];

    // Update the BehaviorSubject with the new array
    this.$specialtyPizza.next(newPizzas);
  }

  //observable
  public $pizzaSize: Observable<PizzaSize> = this.$pizza.pipe(
    map((pizza: CustomPizza) => {
      return pizza.size;
    })
  );
  public $pizzaSizePrice: Observable<number> = this.$pizzaSize.pipe(
    map((size: string) => {
      return PizzaSizePrice[size as PizzaSize] || PizzaSizePrice.LARGE;
    })
  );
  public $pizzaCrust: Observable<PizzaCrust> = this.$pizza.pipe(
    map((pizza: CustomPizza) => {
      return pizza.crust;
    })
  );
  public $pizzaCrustPrice: Observable<number> = this.$pizzaCrust.pipe(
    map((crust: string) => {
      return PizzaCrustPrice[crust as PizzaCrust] || PizzaCrustPrice.ORIGINAL;
    })
  );
  public $pizzaSauce: Observable<PizzaSauce> = this.$pizza.pipe(
    map((pizza: CustomPizza) => {
      return pizza.sauce;
    })
  );
  public $pizzaSaucePrice: Observable<number> = this.$pizzaSauce.pipe(
    map((sauce: string) => {
      return PizzaSaucePrice[sauce as PizzaSauce] || PizzaSaucePrice.TOMATO;
    })
  );
  public $pizzaCheeseQuantity: Observable<CheeseQuantity> = this.$pizza.pipe(
    map((pizza: CustomPizza) => {
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
  public $pizzaCheeseAdditional: Observable<
    AdditionCheeseType | null | undefined
  > = this.$pizza.pipe(
    map((pizza: CustomPizza) => {
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

  public $pizzaMeats: Observable<(PizzaMeat | null)[]> = this.$pizza.pipe(
    map((pizza: CustomPizza) => {
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
  public $pizzaVeggies: Observable<(PizzaVeggie | null)[]> = this.$pizza.pipe(
    map((pizza: CustomPizza) => {
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
    map((pizza: CustomPizza) => {
      return pizza.price;
    })
  );

  public $quantity: Observable<number | undefined> = this.$pizza.pipe(
    map((pizza: CustomPizza) => {
      return pizza.quantity;
    })
  );

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
      map((total: number) => parseFloat((total * qty).toFixed(2)))
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
      map((totalWithTax: number) => parseFloat(totalWithTax.toFixed(2)))
    );
  }

  /*********************************** PRIVATE METHODS **************************************/
}
