/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from '@angular/core';
import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api-graphql';
import { Observable } from 'zen-observable-ts';

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateOrder: OnCreateOrderSubscription;
  onUpdateOrder: OnUpdateOrderSubscription;
  onDeleteOrder: OnDeleteOrderSubscription;
  onCreateSpecialityPizza: OnCreateSpecialityPizzaSubscription;
  onUpdateSpecialityPizza: OnUpdateSpecialityPizzaSubscription;
  onDeleteSpecialityPizza: OnDeleteSpecialityPizzaSubscription;
};

export type CreateOrderInput = {
  id?: string | null;
  customPizzas: Array<CustomPizzaInput | null>;
  name: string;
  timestamp: string;
  subtotal: number;
  tax: number;
  total: number;
};

export type CustomPizzaInput = {
  id?: string | null;
  size: PizzaSize;
  crust: PizzaCrust;
  sauce: PizzaSauce;
  cheese: PizzaCheeseInput;
  meats: Array<PizzaMeat | null>;
  veggies: Array<PizzaVeggie | null>;
  price: number;
};

export enum PizzaSize {
  SMALL = 'Small',
  MEDIUM = 'Medium',
  LARGE = 'Large',
}

export enum PizzaCrust {
  ORIGINAL = 'Original',
  DEEP_DISH = 'Deep Dish',
  THIN = 'Thin',
  STUFFED = 'Stuffed',
  NEW_YORK = 'New York',
}

export enum PizzaSauce {
  TOMATO = 'Tomato',
  ALFREDO = 'Alfredo',
  PESTO = 'Pesto',
  BBQ = 'Bbq',
  GARLIC = 'Garlic',
  NONE = 'None',
}

export type PizzaCheeseInput = {
  quantity: CheeseQuantity;
  additional?: AdditionCheeseType | null;
};

export enum CheeseQuantity {
  NORMAL = 'Normal',
  LIGHT = 'Light',
  NONE = 'None',
}

export enum AdditionCheeseType {
  THREE_CHEESE = 'Three Cheese',
  EXTRA_CHEESE = 'Extra Cheese',
  PARMESAN = 'Parmesan',
  FETA = 'Feta',
  NONE = 'None',
  CHEDDAR = 'Cheddar',
}

export enum PizzaMeat {
  PEPPERONI = 'Pepperoni',
  SAUSAGE = 'Sausage',
  BEEF = 'Beef',
  HAM = 'Ham',
  BACON = 'Bacon',
  CHICKEN = 'Chicken',
}

export enum PizzaVeggie {
  MUSHROOMS = 'Mushrooms',
  ONIONS = 'Onions',
  GREEN_PEPPERS = 'Green Peppers',
  BLACK_OLIVES = 'Black Olives',
  TOMATOES = 'Tomatoes',
  PINEAPPLE = 'Pineapple',
  JALAPENOS = 'Jalapenos',
}

export type ModelOrderConditionInput = {
  name?: ModelStringInput | null;
  timestamp?: ModelStringInput | null;
  subtotal?: ModelIntInput | null;
  tax?: ModelIntInput | null;
  total?: ModelIntInput | null;
  and?: Array<ModelOrderConditionInput | null> | null;
  or?: Array<ModelOrderConditionInput | null> | null;
  not?: ModelOrderConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Order = {
  __typename: 'Order';
  id: string;
  customPizzas: Array<CustomPizza | null>;
  specialtyPizzas: Array<SpecialityPizza | null>;
  name: string;
  timestamp: string;
  subtotal: number;
  tax: number;
  total: number;
  createdAt: string;
  updatedAt: string;
};

export type CustomPizza = {
  __typename: 'CustomPizza';
  id: string;
  size: PizzaSize;
  crust: PizzaCrust;
  sauce: PizzaSauce;
  cheese: PizzaCheese;
  meats: Array<PizzaMeat | null>;
  veggies: Array<PizzaVeggie | null>;
  price: number;
};

export type PizzaCheese = {
  __typename: 'PizzaCheese';
  quantity: CheeseQuantity;
  additional?: AdditionCheeseType | null;
};

export type SpecialityPizza = {
  __typename: 'SpecialityPizza';
  id: string;
  size: PizzaSize;
  crust: PizzaCrust;
  sauce: PizzaSauce;
  cheese: PizzaCheese;
  meats: Array<PizzaMeat | null>;
  veggies: Array<PizzaVeggie | null>;
  price: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateOrderInput = {
  id: string;
  customPizzas?: Array<CustomPizzaInput | null> | null;
  name?: string | null;
  timestamp?: string | null;
  subtotal?: number | null;
  tax?: number | null;
  total?: number | null;
};

export type DeleteOrderInput = {
  id: string;
};

export type CreateSpecialityPizzaInput = {
  id?: string | null;
  size: PizzaSize;
  crust: PizzaCrust;
  sauce: PizzaSauce;
  cheese: PizzaCheeseInput;
  meats: Array<PizzaMeat | null>;
  veggies: Array<PizzaVeggie | null>;
  price: number;
};

export type ModelSpecialityPizzaConditionInput = {
  size?: ModelPizzaSizeInput | null;
  crust?: ModelPizzaCrustInput | null;
  sauce?: ModelPizzaSauceInput | null;
  meats?: ModelPizzaMeatInput | null;
  veggies?: ModelPizzaVeggieInput | null;
  price?: ModelIntInput | null;
  and?: Array<ModelSpecialityPizzaConditionInput | null> | null;
  or?: Array<ModelSpecialityPizzaConditionInput | null> | null;
  not?: ModelSpecialityPizzaConditionInput | null;
};

export type ModelPizzaSizeInput = {
  eq?: PizzaSize | null;
  ne?: PizzaSize | null;
};

export type ModelPizzaCrustInput = {
  eq?: PizzaCrust | null;
  ne?: PizzaCrust | null;
};

export type ModelPizzaSauceInput = {
  eq?: PizzaSauce | null;
  ne?: PizzaSauce | null;
};

export type ModelPizzaMeatInput = {
  eq?: PizzaMeat | null;
  ne?: PizzaMeat | null;
};

export type ModelPizzaVeggieInput = {
  eq?: PizzaVeggie | null;
  ne?: PizzaVeggie | null;
};

export type UpdateSpecialityPizzaInput = {
  id: string;
  size?: PizzaSize | null;
  crust?: PizzaCrust | null;
  sauce?: PizzaSauce | null;
  cheese?: PizzaCheeseInput | null;
  meats?: Array<PizzaMeat | null> | null;
  veggies?: Array<PizzaVeggie | null> | null;
  price?: number | null;
};

export type DeleteSpecialityPizzaInput = {
  id: string;
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  timestamp?: ModelStringInput | null;
  subtotal?: ModelIntInput | null;
  tax?: ModelIntInput | null;
  total?: ModelIntInput | null;
  and?: Array<ModelOrderFilterInput | null> | null;
  or?: Array<ModelOrderFilterInput | null> | null;
  not?: ModelOrderFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelOrderConnection = {
  __typename: 'ModelOrderConnection';
  items: Array<Order | null>;
  nextToken?: string | null;
};

export type ModelSpecialityPizzaFilterInput = {
  id?: ModelIDInput | null;
  size?: ModelPizzaSizeInput | null;
  crust?: ModelPizzaCrustInput | null;
  sauce?: ModelPizzaSauceInput | null;
  meats?: ModelPizzaMeatInput | null;
  veggies?: ModelPizzaVeggieInput | null;
  price?: ModelIntInput | null;
  and?: Array<ModelSpecialityPizzaFilterInput | null> | null;
  or?: Array<ModelSpecialityPizzaFilterInput | null> | null;
  not?: ModelSpecialityPizzaFilterInput | null;
};

export type ModelSpecialityPizzaConnection = {
  __typename: 'ModelSpecialityPizzaConnection';
  items: Array<SpecialityPizza | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  timestamp?: ModelSubscriptionStringInput | null;
  subtotal?: ModelSubscriptionIntInput | null;
  tax?: ModelSubscriptionIntInput | null;
  total?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionOrderFilterInput | null> | null;
  or?: Array<ModelSubscriptionOrderFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionSpecialityPizzaFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  size?: ModelSubscriptionStringInput | null;
  crust?: ModelSubscriptionStringInput | null;
  sauce?: ModelSubscriptionStringInput | null;
  meats?: ModelSubscriptionStringInput | null;
  veggies?: ModelSubscriptionStringInput | null;
  price?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionSpecialityPizzaFilterInput | null> | null;
  or?: Array<ModelSubscriptionSpecialityPizzaFilterInput | null> | null;
};

export type CreateOrderMutation = {
  __typename: 'Order';
  id: string;
  customPizzas: Array<{
    __typename: 'CustomPizza';
    id: string;
    size: PizzaSize;
    crust: PizzaCrust;
    sauce: PizzaSauce;
    cheese: {
      __typename: 'PizzaCheese';
      quantity: CheeseQuantity;
      additional?: AdditionCheeseType | null;
    };
    meats: Array<PizzaMeat | null>;
    veggies: Array<PizzaVeggie | null>;
    price: number;
  } | null>;
  specialtyPizzas: Array<{
    __typename: 'SpecialityPizza';
    id: string;
    size: PizzaSize;
    crust: PizzaCrust;
    sauce: PizzaSauce;
    cheese: {
      __typename: 'PizzaCheese';
      quantity: CheeseQuantity;
      additional?: AdditionCheeseType | null;
    };
    meats: Array<PizzaMeat | null>;
    veggies: Array<PizzaVeggie | null>;
    price: number;
    createdAt: string;
    updatedAt: string;
  } | null>;
  name: string;
  timestamp: string;
  subtotal: number;
  tax: number;
  total: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateOrderMutation = {
  __typename: 'Order';
  id: string;
  customPizzas: Array<{
    __typename: 'CustomPizza';
    id: string;
    size: PizzaSize;
    crust: PizzaCrust;
    sauce: PizzaSauce;
    cheese: {
      __typename: 'PizzaCheese';
      quantity: CheeseQuantity;
      additional?: AdditionCheeseType | null;
    };
    meats: Array<PizzaMeat | null>;
    veggies: Array<PizzaVeggie | null>;
    price: number;
  } | null>;
  specialtyPizzas: Array<{
    __typename: 'SpecialityPizza';
    id: string;
    size: PizzaSize;
    crust: PizzaCrust;
    sauce: PizzaSauce;
    cheese: {
      __typename: 'PizzaCheese';
      quantity: CheeseQuantity;
      additional?: AdditionCheeseType | null;
    };
    meats: Array<PizzaMeat | null>;
    veggies: Array<PizzaVeggie | null>;
    price: number;
    createdAt: string;
    updatedAt: string;
  } | null>;
  name: string;
  timestamp: string;
  subtotal: number;
  tax: number;
  total: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteOrderMutation = {
  __typename: 'Order';
  id: string;
  customPizzas: Array<{
    __typename: 'CustomPizza';
    id: string;
    size: PizzaSize;
    crust: PizzaCrust;
    sauce: PizzaSauce;
    cheese: {
      __typename: 'PizzaCheese';
      quantity: CheeseQuantity;
      additional?: AdditionCheeseType | null;
    };
    meats: Array<PizzaMeat | null>;
    veggies: Array<PizzaVeggie | null>;
    price: number;
  } | null>;
  specialtyPizzas: Array<{
    __typename: 'SpecialityPizza';
    id: string;
    size: PizzaSize;
    crust: PizzaCrust;
    sauce: PizzaSauce;
    cheese: {
      __typename: 'PizzaCheese';
      quantity: CheeseQuantity;
      additional?: AdditionCheeseType | null;
    };
    meats: Array<PizzaMeat | null>;
    veggies: Array<PizzaVeggie | null>;
    price: number;
    createdAt: string;
    updatedAt: string;
  } | null>;
  name: string;
  timestamp: string;
  subtotal: number;
  tax: number;
  total: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateSpecialityPizzaMutation = {
  __typename: 'SpecialityPizza';
  id: string;
  size: PizzaSize;
  crust: PizzaCrust;
  sauce: PizzaSauce;
  cheese: {
    __typename: 'PizzaCheese';
    quantity: CheeseQuantity;
    additional?: AdditionCheeseType | null;
  };
  meats: Array<PizzaMeat | null>;
  veggies: Array<PizzaVeggie | null>;
  price: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateSpecialityPizzaMutation = {
  __typename: 'SpecialityPizza';
  id: string;
  size: PizzaSize;
  crust: PizzaCrust;
  sauce: PizzaSauce;
  cheese: {
    __typename: 'PizzaCheese';
    quantity: CheeseQuantity;
    additional?: AdditionCheeseType | null;
  };
  meats: Array<PizzaMeat | null>;
  veggies: Array<PizzaVeggie | null>;
  price: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteSpecialityPizzaMutation = {
  __typename: 'SpecialityPizza';
  id: string;
  size: PizzaSize;
  crust: PizzaCrust;
  sauce: PizzaSauce;
  cheese: {
    __typename: 'PizzaCheese';
    quantity: CheeseQuantity;
    additional?: AdditionCheeseType | null;
  };
  meats: Array<PizzaMeat | null>;
  veggies: Array<PizzaVeggie | null>;
  price: number;
  createdAt: string;
  updatedAt: string;
};

export type GetOrderQuery = {
  __typename: 'Order';
  id: string;
  customPizzas: Array<{
    __typename: 'CustomPizza';
    id: string;
    size: PizzaSize;
    crust: PizzaCrust;
    sauce: PizzaSauce;
    cheese: {
      __typename: 'PizzaCheese';
      quantity: CheeseQuantity;
      additional?: AdditionCheeseType | null;
    };
    meats: Array<PizzaMeat | null>;
    veggies: Array<PizzaVeggie | null>;
    price: number;
  } | null>;
  specialtyPizzas: Array<{
    __typename: 'SpecialityPizza';
    id: string;
    size: PizzaSize;
    crust: PizzaCrust;
    sauce: PizzaSauce;
    cheese: {
      __typename: 'PizzaCheese';
      quantity: CheeseQuantity;
      additional?: AdditionCheeseType | null;
    };
    meats: Array<PizzaMeat | null>;
    veggies: Array<PizzaVeggie | null>;
    price: number;
    createdAt: string;
    updatedAt: string;
  } | null>;
  name: string;
  timestamp: string;
  subtotal: number;
  tax: number;
  total: number;
  createdAt: string;
  updatedAt: string;
};

export type ListOrdersQuery = {
  __typename: 'ModelOrderConnection';
  items: Array<{
    __typename: 'Order';
    id: string;
    customPizzas: Array<{
      __typename: 'CustomPizza';
      id: string;
      size: PizzaSize;
      crust: PizzaCrust;
      sauce: PizzaSauce;
      meats: Array<PizzaMeat | null>;
      veggies: Array<PizzaVeggie | null>;
      price: number;
    } | null>;
    specialtyPizzas: Array<{
      __typename: 'SpecialityPizza';
      id: string;
      size: PizzaSize;
      crust: PizzaCrust;
      sauce: PizzaSauce;
      meats: Array<PizzaMeat | null>;
      veggies: Array<PizzaVeggie | null>;
      price: number;
      createdAt: string;
      updatedAt: string;
    } | null>;
    name: string;
    timestamp: string;
    subtotal: number;
    tax: number;
    total: number;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetSpecialityPizzaQuery = {
  __typename: 'SpecialityPizza';
  id: string;
  size: PizzaSize;
  crust: PizzaCrust;
  sauce: PizzaSauce;
  cheese: {
    __typename: 'PizzaCheese';
    quantity: CheeseQuantity;
    additional?: AdditionCheeseType | null;
  };
  meats: Array<PizzaMeat | null>;
  veggies: Array<PizzaVeggie | null>;
  price: number;
  createdAt: string;
  updatedAt: string;
};

export type ListSpecialityPizzasQuery = {
  __typename: 'ModelSpecialityPizzaConnection';
  items: Array<{
    __typename: 'SpecialityPizza';
    id: string;
    size: PizzaSize;
    crust: PizzaCrust;
    sauce: PizzaSauce;
    cheese: {
      __typename: 'PizzaCheese';
      quantity: CheeseQuantity;
      additional?: AdditionCheeseType | null;
    };
    meats: Array<PizzaMeat | null>;
    veggies: Array<PizzaVeggie | null>;
    price: number;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateOrderSubscription = {
  __typename: 'Order';
  id: string;
  customPizzas: Array<{
    __typename: 'CustomPizza';
    id: string;
    size: PizzaSize;
    crust: PizzaCrust;
    sauce: PizzaSauce;
    cheese: {
      __typename: 'PizzaCheese';
      quantity: CheeseQuantity;
      additional?: AdditionCheeseType | null;
    };
    meats: Array<PizzaMeat | null>;
    veggies: Array<PizzaVeggie | null>;
    price: number;
  } | null>;
  specialtyPizzas: Array<{
    __typename: 'SpecialityPizza';
    id: string;
    size: PizzaSize;
    crust: PizzaCrust;
    sauce: PizzaSauce;
    cheese: {
      __typename: 'PizzaCheese';
      quantity: CheeseQuantity;
      additional?: AdditionCheeseType | null;
    };
    meats: Array<PizzaMeat | null>;
    veggies: Array<PizzaVeggie | null>;
    price: number;
    createdAt: string;
    updatedAt: string;
  } | null>;
  name: string;
  timestamp: string;
  subtotal: number;
  tax: number;
  total: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateOrderSubscription = {
  __typename: 'Order';
  id: string;
  customPizzas: Array<{
    __typename: 'CustomPizza';
    id: string;
    size: PizzaSize;
    crust: PizzaCrust;
    sauce: PizzaSauce;
    cheese: {
      __typename: 'PizzaCheese';
      quantity: CheeseQuantity;
      additional?: AdditionCheeseType | null;
    };
    meats: Array<PizzaMeat | null>;
    veggies: Array<PizzaVeggie | null>;
    price: number;
  } | null>;
  specialtyPizzas: Array<{
    __typename: 'SpecialityPizza';
    id: string;
    size: PizzaSize;
    crust: PizzaCrust;
    sauce: PizzaSauce;
    cheese: {
      __typename: 'PizzaCheese';
      quantity: CheeseQuantity;
      additional?: AdditionCheeseType | null;
    };
    meats: Array<PizzaMeat | null>;
    veggies: Array<PizzaVeggie | null>;
    price: number;
    createdAt: string;
    updatedAt: string;
  } | null>;
  name: string;
  timestamp: string;
  subtotal: number;
  tax: number;
  total: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteOrderSubscription = {
  __typename: 'Order';
  id: string;
  customPizzas: Array<{
    __typename: 'CustomPizza';
    id: string;
    size: PizzaSize;
    crust: PizzaCrust;
    sauce: PizzaSauce;
    cheese: {
      __typename: 'PizzaCheese';
      quantity: CheeseQuantity;
      additional?: AdditionCheeseType | null;
    };
    meats: Array<PizzaMeat | null>;
    veggies: Array<PizzaVeggie | null>;
    price: number;
  } | null>;
  specialtyPizzas: Array<{
    __typename: 'SpecialityPizza';
    id: string;
    size: PizzaSize;
    crust: PizzaCrust;
    sauce: PizzaSauce;
    cheese: {
      __typename: 'PizzaCheese';
      quantity: CheeseQuantity;
      additional?: AdditionCheeseType | null;
    };
    meats: Array<PizzaMeat | null>;
    veggies: Array<PizzaVeggie | null>;
    price: number;
    createdAt: string;
    updatedAt: string;
  } | null>;
  name: string;
  timestamp: string;
  subtotal: number;
  tax: number;
  total: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateSpecialityPizzaSubscription = {
  __typename: 'SpecialityPizza';
  id: string;
  size: PizzaSize;
  crust: PizzaCrust;
  sauce: PizzaSauce;
  cheese: {
    __typename: 'PizzaCheese';
    quantity: CheeseQuantity;
    additional?: AdditionCheeseType | null;
  };
  meats: Array<PizzaMeat | null>;
  veggies: Array<PizzaVeggie | null>;
  price: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateSpecialityPizzaSubscription = {
  __typename: 'SpecialityPizza';
  id: string;
  size: PizzaSize;
  crust: PizzaCrust;
  sauce: PizzaSauce;
  cheese: {
    __typename: 'PizzaCheese';
    quantity: CheeseQuantity;
    additional?: AdditionCheeseType | null;
  };
  meats: Array<PizzaMeat | null>;
  veggies: Array<PizzaVeggie | null>;
  price: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteSpecialityPizzaSubscription = {
  __typename: 'SpecialityPizza';
  id: string;
  size: PizzaSize;
  crust: PizzaCrust;
  sauce: PizzaSauce;
  cheese: {
    __typename: 'PizzaCheese';
    quantity: CheeseQuantity;
    additional?: AdditionCheeseType | null;
  };
  meats: Array<PizzaMeat | null>;
  veggies: Array<PizzaVeggie | null>;
  price: number;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: 'root',
})
export class APIService {
  async CreateOrder(
    input: CreateOrderInput,
    condition?: ModelOrderConditionInput
  ): Promise<CreateOrderMutation> {
    const statement = `mutation CreateOrder($input: CreateOrderInput!, $condition: ModelOrderConditionInput) {
        createOrder(input: $input, condition: $condition) {
          __typename
          id
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
            createdAt
            updatedAt
          }
          name
          timestamp
          subtotal
          tax
          total
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateOrderMutation>response.data.createOrder;
  }
  async UpdateOrder(
    input: UpdateOrderInput,
    condition?: ModelOrderConditionInput
  ): Promise<UpdateOrderMutation> {
    const statement = `mutation UpdateOrder($input: UpdateOrderInput!, $condition: ModelOrderConditionInput) {
        updateOrder(input: $input, condition: $condition) {
          __typename
          id
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
            createdAt
            updatedAt
          }
          name
          timestamp
          subtotal
          tax
          total
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateOrderMutation>response.data.updateOrder;
  }
  async DeleteOrder(
    input: DeleteOrderInput,
    condition?: ModelOrderConditionInput
  ): Promise<DeleteOrderMutation> {
    const statement = `mutation DeleteOrder($input: DeleteOrderInput!, $condition: ModelOrderConditionInput) {
        deleteOrder(input: $input, condition: $condition) {
          __typename
          id
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
            createdAt
            updatedAt
          }
          name
          timestamp
          subtotal
          tax
          total
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteOrderMutation>response.data.deleteOrder;
  }
  async CreateSpecialityPizza(
    input: CreateSpecialityPizzaInput,
    condition?: ModelSpecialityPizzaConditionInput
  ): Promise<CreateSpecialityPizzaMutation> {
    const statement = `mutation CreateSpecialityPizza($input: CreateSpecialityPizzaInput!, $condition: ModelSpecialityPizzaConditionInput) {
        createSpecialityPizza(input: $input, condition: $condition) {
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
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSpecialityPizzaMutation>response.data.createSpecialityPizza;
  }
  async UpdateSpecialityPizza(
    input: UpdateSpecialityPizzaInput,
    condition?: ModelSpecialityPizzaConditionInput
  ): Promise<UpdateSpecialityPizzaMutation> {
    const statement = `mutation UpdateSpecialityPizza($input: UpdateSpecialityPizzaInput!, $condition: ModelSpecialityPizzaConditionInput) {
        updateSpecialityPizza(input: $input, condition: $condition) {
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
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSpecialityPizzaMutation>response.data.updateSpecialityPizza;
  }
  async DeleteSpecialityPizza(
    input: DeleteSpecialityPizzaInput,
    condition?: ModelSpecialityPizzaConditionInput
  ): Promise<DeleteSpecialityPizzaMutation> {
    const statement = `mutation DeleteSpecialityPizza($input: DeleteSpecialityPizzaInput!, $condition: ModelSpecialityPizzaConditionInput) {
        deleteSpecialityPizza(input: $input, condition: $condition) {
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
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSpecialityPizzaMutation>response.data.deleteSpecialityPizza;
  }
  async GetOrder(id: string): Promise<GetOrderQuery> {
    const statement = `query GetOrder($id: ID!) {
        getOrder(id: $id) {
          __typename
          id
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
            createdAt
            updatedAt
          }
          name
          timestamp
          subtotal
          tax
          total
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetOrderQuery>response.data.getOrder;
  }
  async ListOrders(
    filter?: ModelOrderFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListOrdersQuery> {
    const statement = `query ListOrders($filter: ModelOrderFilterInput, $limit: Int, $nextToken: String) {
        listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            customPizzas {
              __typename
              id
              size
              crust
              sauce
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
              meats
              veggies
              price
              createdAt
              updatedAt
            }
            name
            timestamp
            subtotal
            tax
            total
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListOrdersQuery>response.data.listOrders;
  }
  async GetSpecialityPizza(id: string): Promise<GetSpecialityPizzaQuery> {
    const statement = `query GetSpecialityPizza($id: ID!) {
        getSpecialityPizza(id: $id) {
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
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSpecialityPizzaQuery>response.data.getSpecialityPizza;
  }
  async ListSpecialityPizzas(
    filter?: ModelSpecialityPizzaFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSpecialityPizzasQuery> {
    const statement = `query ListSpecialityPizzas($filter: ModelSpecialityPizzaFilterInput, $limit: Int, $nextToken: String) {
        listSpecialityPizzas(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
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
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSpecialityPizzasQuery>response.data.listSpecialityPizzas;
  }
}
