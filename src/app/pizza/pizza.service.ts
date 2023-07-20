import {
  Injectable,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import {
  MeatPrice,
  PizzaCrustPrice,
  PizzaSizePrice,
  VeggiePrice,
  PizzaSaucePrice,
  CheeseQuantityPrice,
  AdditionCheeseTypePrice,
} from './helpers/enums';
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
import Swal from 'sweetalert2';
import { isEqual } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  constructor() {}

  /***********************************************************************/
  /****************************** SIGNALS ********************************/
  /***********************************************************************/
  public $signal: WritableSignal<CustomPizza> = signal({
    __typename: 'CustomPizza',
    size: PizzaSize.LARGE,
    crust: PizzaCrust.ORIGINAL,
    sauce: PizzaSauce.TOMATO,
    cheese: {
      quantity: CheeseQuantity.NORMAL,
      additional: AdditionCheeseType.NONE,
    },
    meats: [],
    veggies: [],
    price: 0,
    quantity: 1,
  });

  /********************** SET SIGNAL ****************************/
  setSignal(options: Partial<CustomPizza>): void {
    const currentPizza = this.$signal();
    const newPizza = { ...currentPizza, ...options };
    if (!isEqual(currentPizza, newPizza)) {
      this.$signal.set(newPizza);
    }
  }

  /********************** RESET SIGNAL ****************************/
  resetSignal(): void {
    this.$signal.set({
      __typename: 'CustomPizza',
      size: PizzaSize.LARGE,
      crust: PizzaCrust.ORIGINAL,
      sauce: PizzaSauce.TOMATO,
      cheese: {
        quantity: CheeseQuantity.NORMAL,
        additional: AdditionCheeseType.NONE,
      },
      meats: [],
      veggies: [],
      price: 0,
      quantity: 1,
    });
  }

  /****************************** CUSTOM PIZZAS ARRAY ********************************/
  public $customPizzaArraySignal: WritableSignal<CustomPizza[]> = signal([]);

  addCustomPizzaSignal(pizza: CustomPizza): void {
    const currentPizzas = this.$customPizzaArraySignal();
    const newPizzas = [...currentPizzas, pizza];
    this.$customPizzaArraySignal.set(newPizzas);
  }

  /****************************** SPECIALTY PIZZAS ARRAY ********************************/
  public $specialtyPizzaArraySignal: WritableSignal<SpecialtyPizza[]> = signal(
    []
  );

  public addSpecialtyPizzaSignal(pizza: SpecialtyPizza): void {
    const currentPizzas = this.$specialtyPizzaArraySignal();
    const newPizzas = [...currentPizzas, pizza];
    this.$specialtyPizzaArraySignal.set(newPizzas);
  }

  /****************************** SIGNALS ********************************/
  public $pizzaSizeSignal: Signal<PizzaSize> = computed(() => {
    return this.$signal().size;
  });

  public $pizzaSauceSignal: Signal<PizzaSauce> = computed(() => {
    return this.$signal().sauce;
  });

  public $pizzaCrustSignal: Signal<PizzaCrust> = computed(() => {
    return this.$signal().crust;
  });

  public $pizzaCheeseQuantitySignal: Signal<CheeseQuantity> = computed(() => {
    return this.$signal().cheese.quantity;
  });

  public $quantitySignal: Signal<number | undefined> = computed(() => {
    return this.$signal().quantity;
  });

  public $pizzaCheeseAdditionalSignal: Signal<
    AdditionCheeseType | null | undefined
  > = computed(() => {
    return this.$signal()?.cheese?.additional;
  });

  public $pizzaMeatsSignal: Signal<(PizzaMeat | null)[]> = computed(() => {
    return this.$signal().meats;
  });

  public $pizzaVeggiesSignal: Signal<(PizzaVeggie | null)[]> = computed(() => {
    return this.$signal().veggies;
  });

  public $pizzaPriceSignal: Signal<number | undefined> = computed(() => {
    return this.$signal().price;
  });

  /****************************** COST SIGNALS ********************************/

  public $pizzaSizePriceSignal: Signal<number> = computed(() => {
    return PizzaSizePrice[this.$signal().size] || PizzaSizePrice.LARGE;
  });

  public $pizzaSaucePriceSignal: Signal<number> = computed(() => {
    return PizzaSaucePrice[this.$signal().sauce] || PizzaSaucePrice.TOMATO;
  });

  public $pizzaCrustPriceSignal: Signal<number> = computed(() => {
    return PizzaCrustPrice[this.$signal().crust] || PizzaCrustPrice.ORIGINAL;
  });

  public $pizzaCheeseQuantityPriceSignal: Signal<number> = computed(() => {
    return (
      CheeseQuantityPrice[this.$signal().cheese.quantity] ||
      CheeseQuantityPrice.NORMAL
    );
  });

  public $pizzaCheeseAdditionalPriceSignal: Signal<AdditionCheeseTypePrice> =
    computed(() => {
      const cheese = this.$signal().cheese.additional;
      if (cheese) {
        return AdditionCheeseTypePrice[cheese] || AdditionCheeseTypePrice.NONE;
      } else {
        return 0;
      }
    });

  public $pizzaMeatsSignalPrice: Signal<number> = computed(() => {
    return this.$signal().meats.reduce(
      (total, meat) => total + (MeatPrice[meat as PizzaMeat] || MeatPrice.NONE),
      0
    );
  });

  public $pizzaVeggiesSignalPrice: Signal<number> = computed(() => {
    return this.$signal().veggies.reduce(
      (total, veggie) =>
        total + (VeggiePrice[veggie as PizzaVeggie] || VeggiePrice.NONE),
      0
    );
  });

  /****************************** PUBLIC API ********************************/

  getPizzaCheeseSignal(): PizzaCheese {
    return this.$signal()?.cheese;
  }

  getPizzaMeatsSignal(): (PizzaMeat | null)[] {
    return this.$signal()?.meats;
  }

  getPizzaVeggiesSignal(): (PizzaVeggie | null)[] {
    return this.$signal()?.veggies;
  }

  getPizzaQuantitySignal(): number {
    return this.$signal()?.quantity || 1;
  }

  getPizzaPriceSignal(): number {
    return this.$signal()?.price || 0;
  }

  /***************************************************************************************/
  /*********************************** MATH METHODS **************************************/
  /***************************************************************************************/

  /*********************************** CUSTOM PIZZA MATH ***********************************/
  $totalPriceBeforeTaxSignal: Signal<number> = computed(() => {
    return (
      (this.$pizzaSizePriceSignal() +
        this.$pizzaCrustPriceSignal() +
        this.$pizzaSaucePriceSignal() +
        this.$pizzaCheeseQuantityPriceSignal() +
        this.$pizzaMeatsSignalPrice() +
        this.$pizzaVeggiesSignalPrice()) *
        this.$signal().quantity || 1
    );
  });

  $totalTaxSignal: Signal<number> = computed(() => {
    return this.$totalPriceBeforeTaxSignal() * 0.097;
  });

  $totalPriceAfterTaxSignal: Signal<number> = computed(() => {
    return this.$totalTaxSignal() + this.$totalPriceBeforeTaxSignal();
  });

  /***************************************************************************************/
  /*********************************** CART METHODS **************************************/
  /***************************************************************************************/

  $calculateTotalSignal: Signal<number> = computed(() => {
    const specialtyPizzas = this.$specialtyPizzaArraySignal();
    const customPizzas = this.$customPizzaArraySignal();
    const pizzas = [...specialtyPizzas, ...customPizzas];
    return pizzas.reduce((total, pizza) => {
      return pizza?.price ? total + pizza?.price : total;
    }, 0);
  });

  $calculateTaxSignal: Signal<number> = computed(() => {
    return this.$calculateTotalSignal() * 0.097;
  });

  $calculateTotalWithTaxSignal: Signal<number> = computed(() => {
    return this.$calculateTaxSignal() + this.$calculateTotalSignal();
  });

  addPizzaToCart(): void {
    this.setSignal({ price: this.$totalPriceAfterTaxSignal() });
    this.addCustomPizzaSignal(this.$signal());

    Swal.fire({
      title: 'Pizza Added to Cart!',
      text: `Price: ${this.$signal().price.toFixed(2)}`,
      icon: 'success',
      target: document.body,
      heightAuto: false,
      showCancelButton: true,
      confirmButtonText: 'Add to Cart',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      customClass: {
        popup: 'bg-light-shade text-dark-shade rounded-lg shadow-lg',
      },
    });
  }
}

/***********************************************************************/
/***********************************************************************/
/*************************** RXJS OBSERVABLES **************************/
/***********************************************************************/
/***********************************************************************/
//behavior subjects
// public $pizza: BehaviorSubject<CustomPizza> =
//   new BehaviorSubject<CustomPizza>({
//     __typename: 'CustomPizza',
//     size: PizzaSize.LARGE,
//     crust: PizzaCrust.ORIGINAL,
//     sauce: PizzaSauce.TOMATO,
//     cheese: {
//       quantity: CheeseQuantity.NORMAL,
//       additional: AdditionCheeseType.NONE,
//     },
//     meats: [],
//     veggies: [],
//     price: 0,
//     quantity: 1,
//   });

/**
 * set pizza
 * @param size
 */
// setPizza(options: Partial<CustomPizza>): void {
//   const currentPizza = this.$pizza.value;
//   const newPizza = { ...currentPizza, ...options };
//   if (!isEqual(currentPizza, newPizza)) {
//     this.$pizza.next(newPizza);
//   }
// }

/**
 * reset pizza
 * @param
 * @returns void
 */
// resetPizza(): void {
//   this.$pizza.next({
//     __typename: 'CustomPizza',
//     size: PizzaSize.LARGE,
//     crust: PizzaCrust.ORIGINAL,
//     sauce: PizzaSauce.TOMATO,
//     cheese: {
//       quantity: CheeseQuantity.NORMAL,
//       additional: AdditionCheeseType.NONE,
//     },
//     meats: [],
//     veggies: [],
//     price: 0,
//     quantity: 1,
//   });
//   this.$customPizza.next([]);
//   this.$specialtyPizza.next([]);
// }

/******************* CUSTOM PIZZAS ARRAY ****************/
// public $customPizza: BehaviorSubject<CustomPizza[]> = new BehaviorSubject<
//   CustomPizza[]
// >([]);

// addCustomPizza(pizza: any): void {
//   const currentPizzas = this.$customPizza.getValue();
//   const newPizzas = [...currentPizzas, pizza];
//   this.$customPizza.next(newPizzas);
// }

/******************* SPECIALTY PIZZAS ARRAY ****************/
// public $specialtyPizza: BehaviorSubject<SpecialtyPizza[]> =
//   new BehaviorSubject<SpecialtyPizza[]>([]);

// public addSpecialtyPizza(pizza: SpecialtyPizza): void {
//   const currentPizzas = this.$specialtyPizza.getValue();
//   const newPizzas = [...currentPizzas, pizza];
//   this.$specialtyPizza.next(newPizzas);
// }

//observable
// public $pizzaSize: Observable<PizzaSize> = this.$pizza.pipe(
//   map((pizza: CustomPizza) => {
//     return pizza.size;
//   })
// );
// public $pizzaSizePrice: Observable<number> = this.$pizzaSize.pipe(
//   map((size: string) => {
//     return PizzaSizePrice[size as PizzaSize] || PizzaSizePrice.LARGE;
//   })
// );
// public $pizzaCrust: Observable<PizzaCrust> = this.$pizza.pipe(
//   map((pizza: CustomPizza) => {
//     return pizza.crust;
//   })
// );
// public $pizzaCrustPrice: Observable<number> = this.$pizzaCrust.pipe(
//   map((crust: string) => {
//     return PizzaCrustPrice[crust as PizzaCrust] || PizzaCrustPrice.ORIGINAL;
//   })
// );
// public $pizzaSauce: Observable<PizzaSauce> = this.$pizza.pipe(
//   map((pizza: CustomPizza) => {
//     return pizza.sauce;
//   })
// );
// public $pizzaSaucePrice: Observable<number> = this.$pizzaSauce.pipe(
//   map((sauce: string) => {
//     return PizzaSaucePrice[sauce as PizzaSauce] || PizzaSaucePrice.TOMATO;
//   })
// );
// public $pizzaCheeseQuantity: Observable<CheeseQuantity> = this.$pizza.pipe(
//   map((pizza: CustomPizza) => {
//     return pizza.cheese.quantity;
//   })
// );
// public $pizzaCheeseQuantityPrice: Observable<number> =
//   this.$pizzaCheeseQuantity.pipe(
//     map((quantity: string) => {
//       return (
//         CheeseQuantityPrice[quantity as CheeseQuantity] ||
//         CheeseQuantityPrice.NORMAL
//       );
//     })
//   );
// public $pizzaCheeseAdditional: Observable<
//   AdditionCheeseType | null | undefined
// > = this.$pizza.pipe(
//   map((pizza: CustomPizza) => {
//     return pizza.cheese.additional;
//   })
// );
// public $pizzaCheeseAdditionalPrice: Observable<number> =
//   this.$pizzaCheeseAdditional.pipe(
//     map((additional) => {
//       return (
//         AdditionCheeseTypePrice[additional as AdditionCheeseType] ||
//         AdditionCheeseTypePrice.NONE
//       );
//     })
//   );

// public $pizzaMeats: Observable<(PizzaMeat | null)[]> = this.$pizza.pipe(
//   map((pizza: CustomPizza) => {
//     return pizza.meats;
//   })
// );
// public $meatPrice: Observable<number> = this.$pizzaMeats.pipe(
//   map((meats) =>
//     (meats || []).reduce(
//       (total, meat) =>
//         total + (MeatPrice[meat as PizzaMeat] || MeatPrice.NONE),
//       0
//     )
//   )
// );
// public $pizzaVeggies: Observable<(PizzaVeggie | null)[]> = this.$pizza.pipe(
//   map((pizza: CustomPizza) => {
//     return pizza.veggies;
//   })
// );
// public $veggiePrice: Observable<number> = this.$pizzaVeggies.pipe(
//   map((veggies) =>
//     (veggies || []).reduce(
//       (total, veggie) =>
//         total + (VeggiePrice[veggie as PizzaVeggie] || VeggiePrice.NONE),
//       0
//     )
//   )
// );

// public $pizzaPrice: Observable<number | undefined> = this.$pizza.pipe(
//   map((pizza: CustomPizza) => {
//     return pizza.price;
//   })
// );

// public $quantity: Observable<number | undefined> = this.$pizza.pipe(
//   map((pizza: CustomPizza) => {
//     return pizza.quantity;
//   })
// );

/****************************** PUBLIC API ********************************/

// getPizzaCheese(): PizzaCheese {
//   return this.$pizza?.value?.cheese;
// }

// getPizzaMeats(): (PizzaMeat | null)[] {
//   return this.$pizza?.value?.meats;
// }

// getPizzaVeggies(): (PizzaVeggie | null)[] {
//   return this.$pizza?.value?.veggies;
// }

// getPizzaQuantity(): number {
//   return this.$pizza?.value?.quantity || 1;
// }

// getPizzaPrice(): number {
//   return this.$pizza?.value?.price || 0;
// }

/*********************************** MATH METHODS **************************************/
//   totalPriceBeforeTax(): Observable<number> {
//     const qty = this.$pizza.value.quantity || 1;
//     return combineLatest([
//       this.$pizzaSizePrice,
//       this.$pizzaCrustPrice,
//       this.$pizzaSaucePrice,
//       this.$pizzaCheeseQuantityPrice,
//       this.$pizzaCheeseAdditionalPrice,
//       this.$meatPrice,
//       this.$veggiePrice,
//     ]).pipe(
//       map((prices) => prices.reduce((total, price) => total + price, 0)),
//       map((total: number) => parseFloat((total * qty).toFixed(2)))
//     );
//   }

//   totalTax(): Observable<number> {
//     return this.totalPriceBeforeTax().pipe(
//       map((total) => total * 0.097),
//       map((totalTax: number) => parseFloat(totalTax.toFixed(2)))
//     );
//   }

//   totalPriceAfterTax(): Observable<number> {
//     return this.totalPriceBeforeTax().pipe(
//       map((total: number) => total * 0.097 + total),
//       map((totalWithTax: number) => parseFloat(totalWithTax.toFixed(2)))
//     );
//   }
