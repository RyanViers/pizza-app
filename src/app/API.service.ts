/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export type CreateOrderInput = {
  user_id: string;
  date: string;
  user_name: string;
  subtotal: number;
  tax: number;
  total: number;
  customPizzas?: Array<CustomPizzaInput | null> | null;
  specialtyPizzas?: Array<SpecialityPizzaInput | null> | null;
};

export type CustomPizzaInput = {
  id: string;
  size: PizzaSize;
  crust: PizzaCrust;
  sauce: PizzaSauce;
  cheese: PizzaCheeseInput;
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

export type PizzaCheeseInput = {
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
  SPINACH = "SPINACH",
  NONE = "NONE"
}

export type SpecialityPizzaInput = {
  id: string;
  size: PizzaSize;
  crust: PizzaCrust;
  sauce: PizzaSauce;
  cheese: PizzaCheeseInput;
  meats: Array<PizzaMeat | null>;
  veggies: Array<PizzaVeggie | null>;
  price: number;
};

export type Order = {
  __typename: "Order";
  id: string;
  user_id: string;
  date: string;
  customPizzas: Array<CustomPizza | null>;
  specialtyPizzas: Array<SpecialityPizza | null>;
  user_name: string;
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

export type PizzaCheese = {
  __typename: "PizzaCheese";
  quantity: CheeseQuantity;
  additional?: AdditionCheeseType | null;
};

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

export type UpdateOrderInput = {
  id: string;
  user_id: string;
  date: string;
  user_name?: string | null;
  subtotal?: number | null;
  tax?: number | null;
  total?: number | null;
  customPizzas?: Array<CustomPizzaInput | null> | null;
  specialtyPizzas?: Array<SpecialityPizzaInput | null> | null;
};

export type DeleteOrderInput = {
  id: string;
  user_id: string;
  date: string;
};

export type ListOrdersByUserInput = {
  user_id: string;
};

export type GetOrderInput = {
  id: string;
  user_id: string;
  date: string;
};

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelPizzaAppFilterInput = {
  PK?: ModelStringInput | null;
  SK?: ModelStringInput | null;
  GSI_SECONDARY_PK?: ModelStringInput | null;
  GSI_SECONDARY_SK?: ModelStringInput | null;
  CREATED_AT?: ModelStringInput | null;
  UPDATED_AT?: ModelStringInput | null;
  MODEL?: ModelStringInput | null;
  TTL?: ModelIntInput | null;
  and?: Array<ModelPizzaAppFilterInput | null> | null;
  or?: Array<ModelPizzaAppFilterInput | null> | null;
  not?: ModelPizzaAppFilterInput | null;
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
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
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

export type ModelPizzaAppConnection = {
  __typename: "ModelPizzaAppConnection";
  items: Array<PizzaApp | null>;
  nextToken?: string | null;
};

export type PizzaApp = {
  __typename: "PizzaApp";
  PK: string;
  SK: string;
  GSI_SECONDARY_PK: string;
  GSI_SECONDARY_SK: string;
  CREATED_AT: string;
  UPDATED_AT: string;
  MODEL: string;
  TTL?: number | null;
};

export type CreateOrderMutation = {
  __typename: "Order";
  id: string;
  user_id: string;
  date: string;
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
  user_name: string;
  subtotal: number;
  tax: number;
  total: number;
};

export type UpdateOrderMutation = {
  __typename: "Order";
  id: string;
  user_id: string;
  date: string;
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
  user_name: string;
  subtotal: number;
  tax: number;
  total: number;
};

export type DeleteOrderMutation = {
  __typename: "Order";
  id: string;
  user_id: string;
  date: string;
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
  user_name: string;
  subtotal: number;
  tax: number;
  total: number;
};

export type ListOrdersByUserQuery = {
  __typename: "Order";
  id: string;
  user_id: string;
  date: string;
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
  user_name: string;
  subtotal: number;
  tax: number;
  total: number;
};

export type GetOrderQuery = {
  __typename: "Order";
  id: string;
  user_id: string;
  date: string;
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
  user_name: string;
  subtotal: number;
  tax: number;
  total: number;
};

export type PizzaAppsByGSI_SECONDARY_PKAndGSI_SECONDARY_SKQuery = {
  __typename: "ModelPizzaAppConnection";
  items: Array<{
    __typename: "PizzaApp";
    PK: string;
    SK: string;
    GSI_SECONDARY_PK: string;
    GSI_SECONDARY_SK: string;
    CREATED_AT: string;
    UPDATED_AT: string;
    MODEL: string;
    TTL?: number | null;
  } | null>;
  nextToken?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateOrder(input: CreateOrderInput): Promise<CreateOrderMutation> {
    const statement = `mutation CreateOrder($input: CreateOrderInput!) {
        createOrder(input: $input) {
          __typename
          id
          user_id
          date
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
          user_name
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
    return <CreateOrderMutation>response.data.createOrder;
  }
  async UpdateOrder(input: UpdateOrderInput): Promise<UpdateOrderMutation> {
    const statement = `mutation UpdateOrder($input: UpdateOrderInput!) {
        updateOrder(input: $input) {
          __typename
          id
          user_id
          date
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
          user_name
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
    return <UpdateOrderMutation>response.data.updateOrder;
  }
  async DeleteOrder(input: DeleteOrderInput): Promise<DeleteOrderMutation> {
    const statement = `mutation DeleteOrder($input: DeleteOrderInput!) {
        deleteOrder(input: $input) {
          __typename
          id
          user_id
          date
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
          user_name
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
    return <DeleteOrderMutation>response.data.deleteOrder;
  }
  async ListOrdersByUser(
    input?: ListOrdersByUserInput
  ): Promise<Array<ListOrdersByUserQuery>> {
    const statement = `query ListOrdersByUser($input: ListOrdersByUserInput) {
        listOrdersByUser(input: $input) {
          __typename
          id
          user_id
          date
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
          user_name
          subtotal
          tax
          total
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (input) {
      gqlAPIServiceArguments.input = input;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Array<ListOrdersByUserQuery>>response.data.listOrdersByUser;
  }
  async GetOrder(input: GetOrderInput): Promise<GetOrderQuery> {
    const statement = `query GetOrder($input: GetOrderInput!) {
        getOrder(input: $input) {
          __typename
          id
          user_id
          date
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
          user_name
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
    return <GetOrderQuery>response.data.getOrder;
  }
  async PizzaAppsByGSI_SECONDARY_PKAndGSI_SECONDARY_SK(
    GSI_SECONDARY_PK: string,
    GSI_SECONDARY_SK?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelPizzaAppFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<PizzaAppsByGSI_SECONDARY_PKAndGSI_SECONDARY_SKQuery> {
    const statement = `query PizzaAppsByGSI_SECONDARY_PKAndGSI_SECONDARY_SK($GSI_SECONDARY_PK: String!, $GSI_SECONDARY_SK: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelPizzaAppFilterInput, $limit: Int, $nextToken: String) {
        pizzaAppsByGSI_SECONDARY_PKAndGSI_SECONDARY_SK(
          GSI_SECONDARY_PK: $GSI_SECONDARY_PK
          GSI_SECONDARY_SK: $GSI_SECONDARY_SK
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            PK
            SK
            GSI_SECONDARY_PK
            GSI_SECONDARY_SK
            CREATED_AT
            UPDATED_AT
            MODEL
            TTL
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      GSI_SECONDARY_PK
    };
    if (GSI_SECONDARY_SK) {
      gqlAPIServiceArguments.GSI_SECONDARY_SK = GSI_SECONDARY_SK;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
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
    return <PizzaAppsByGSI_SECONDARY_PKAndGSI_SECONDARY_SKQuery>(
      response.data.pizzaAppsByGSI_SECONDARY_PKAndGSI_SECONDARY_SK
    );
  }
}
