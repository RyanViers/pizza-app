/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export type ListOrdersByUserInput = {
  user_id: string;
};

export type Order = {
  __typename: "Order";
  id: string;
  user_id: string;
  customPizzas: Array<CustomPizza | null>;
  specialtyPizzas: Array<SpecialityPizza | null>;
  name: string;
  timestamp: string;
  subtotal: number;
  tax: number;
  total: number;
};

export type CustomPizza = {
  __typename: "CustomPizza";
  id: string;
  size: PizzaSize;
  crust: PizzaCrust;
  sauce: PizzaSauce;
  cheese: PizzaCheese;
  meats: Array<PizzaMeat | null>;
  veggies: Array<PizzaVeggie | null>;
  price: number;
};

export enum PizzaSize {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE"
}

export enum PizzaCrust {
  ORIGINAL = "ORIGINAL",
  DEEP_DISH = "DEEP_DISH",
  THIN = "THIN",
  STUFFED = "STUFFED",
  NEW_YORK = "NEW_YORK"
}

export enum PizzaSauce {
  TOMATO = "TOMATO",
  ALFREDO = "ALFREDO",
  PESTO = "PESTO",
  BBQ = "BBQ",
  GARLIC = "GARLIC",
  NONE = "NONE"
}

export type PizzaCheese = {
  __typename: "PizzaCheese";
  quantity: CheeseQuantity;
  additional?: AdditionCheeseType | null;
};

export enum CheeseQuantity {
  NORMAL = "NORMAL",
  LIGHT = "LIGHT",
  NONE = "NONE"
}

export enum AdditionCheeseType {
  THREE_CHEESE = "THREE_CHEESE",
  EXTRA_CHEESE = "EXTRA_CHEESE",
  PARMESAN = "PARMESAN",
  FETA = "FETA",
  CHEDDAR = "CHEDDAR",
  NONE = "NONE"
}

export enum PizzaMeat {
  PEPPERONI = "PEPPERONI",
  SAUSAGE = "SAUSAGE",
  BEEF = "BEEF",
  HAM = "HAM",
  BACON = "BACON",
  CHICKEN = "CHICKEN",
  NONE = "NONE"
}

export enum PizzaVeggie {
  MUSHROOMS = "MUSHROOMS",
  ONIONS = "ONIONS",
  GREEN_PEPPERS = "GREEN_PEPPERS",
  BLACK_OLIVES = "BLACK_OLIVES",
  TOMATOES = "TOMATOES",
  PINEAPPLE = "PINEAPPLE",
  JALAPENOS = "JALAPENOS",
  NONE = "NONE"
}

export type SpecialityPizza = {
  __typename: "SpecialityPizza";
  id: string;
  size: PizzaSize;
  crust: PizzaCrust;
  sauce: PizzaSauce;
  cheese: PizzaCheese;
  meats: Array<PizzaMeat | null>;
  veggies: Array<PizzaVeggie | null>;
  price: number;
};

export type ListOrdersByUserQuery = {
  __typename: "Order";
  id: string;
  user_id: string;
  customPizzas: Array<{
    __typename: "CustomPizza";
    id: string;
    size: PizzaSize;
    crust: PizzaCrust;
    sauce: PizzaSauce;
    cheese: {
      __typename: "PizzaCheese";
      quantity: CheeseQuantity;
      additional?: AdditionCheeseType | null;
    };
    meats: Array<PizzaMeat | null>;
    veggies: Array<PizzaVeggie | null>;
    price: number;
  } | null>;
  specialtyPizzas: Array<{
    __typename: "SpecialityPizza";
    id: string;
    size: PizzaSize;
    crust: PizzaCrust;
    sauce: PizzaSauce;
    cheese: {
      __typename: "PizzaCheese";
      quantity: CheeseQuantity;
      additional?: AdditionCheeseType | null;
    };
    meats: Array<PizzaMeat | null>;
    veggies: Array<PizzaVeggie | null>;
    price: number;
  } | null>;
  name: string;
  timestamp: string;
  subtotal: number;
  tax: number;
  total: number;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async ListOrdersByUser(
    input: ListOrdersByUserInput
  ): Promise<Array<ListOrdersByUserQuery>> {
    const statement = `query ListOrdersByUser($input: ListOrdersByUserInput!) {
        listOrdersByUser(input: $input) {
          __typename
          id
          user_id
          customPizzas {
            __typename
            id
            size
            crust
            sauce
            cheese {
              __typename
              quantity
              additional
            }
            meats
            veggies
            price
          }
          specialtyPizzas {
            __typename
            id
            size
            crust
            sauce
            cheese {
              __typename
              quantity
              additional
            }
            meats
            veggies
            price
          }
          name
          timestamp
          subtotal
          tax
          total
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Array<ListOrdersByUserQuery>>response.data.listOrdersByUser;
  }
}
