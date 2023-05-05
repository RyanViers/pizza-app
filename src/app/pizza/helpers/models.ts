import { PizzaSize, PizzaCrust, PizzaSauce, PizzaCheese, PizzaMeat, PizzaVeggie } from "src/app/API.service";

export interface Pizza {
    size: PizzaSize;
    crust: PizzaCrust;
    sauce: PizzaSauce;
    cheese: PizzaCheese;
    meats: Array<PizzaMeat | null>;
    veggies: Array<PizzaVeggie | null>;
}