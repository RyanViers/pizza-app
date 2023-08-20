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
      __typename: 'PizzaCheese',
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
        __typename: 'PizzaCheese',
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

  resetCustomPizzaArraySignal(): void {
    
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

  resetPizzaArraySignal(): void {
    this.$specialtyPizzaArraySignal.set([]);
    this.$customPizzaArraySignal.set([]);
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
    return PizzaSizePrice[this.$pizzaSizeSignal()] || PizzaSizePrice.LARGE;
  });

  public $pizzaSaucePriceSignal: Signal<number> = computed(() => {
    return PizzaSaucePrice[this.$pizzaSauceSignal()] || PizzaSaucePrice.TOMATO;
  });

  public $pizzaCrustPriceSignal: Signal<number> = computed(() => {
    return (
      PizzaCrustPrice[this.$pizzaCrustSignal()] || PizzaCrustPrice.ORIGINAL
    );
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
  /******************************** CUSTOM PIZZA MATH METHODS ****************************/
  /***************************************************************************************/
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
