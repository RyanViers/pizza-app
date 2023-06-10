import {
  PizzaSize,
  PizzaCrust,
  PizzaSauce,
  PizzaCheese,
  PizzaMeat,
  PizzaVeggie,
} from 'src/app/API.service';
import { SpecialtyPizza } from './specialty-models';

export interface Pizza {
  size: PizzaSize;
  crust: PizzaCrust;
  sauce: PizzaSauce;
  cheese: PizzaCheese;
  meats: Array<PizzaMeat | null>;
  veggies: Array<PizzaVeggie | null>;
  price?: number;
  quantity?: number;
}

export interface CartItem {
  pizza: Pizza | SpecialtyPizza;
}
