/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export type InvalidateCloudfrontUrlsInput = {
  urls: Array<string | null>;
};

export type CreateOrderInput = {
  user_id: string;
  date: string;
  user_name: string;
  subtotal: number;
  tax: number;
  total: number;
  customPizzas?: Array<CustomPizzaInput | null> | null;
  specialtyPizzas?: Array<SpecialtyPizzaInput | null> | null;
};

export type CustomPizzaInput = {
  size: PizzaSize;
  crust: PizzaCrust;
  sauce: PizzaSauce;
  cheese: PizzaCheeseInput;
  meats: Array<PizzaMeat | null>;
  veggies: Array<PizzaVeggie | null>;
  price: number;
  quantity: number;
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
  NONE = "NONE"
}

export type SpecialtyPizzaInput = {
  description: string;
  id: string;
  imageUrl: string;
  name?: string | null;
  price: number;
  toppings: Array<string | null>;
};

export type Order = {
  __typename: "Order";
  id: string;
  user_id: string;
  date: string;
  customPizzas: Array<CustomPizza | null>;
  specialtyPizzas: Array<SpecialtyPizza | null>;
  user_name: string;
  subtotal: number;
  tax: number;
  total: number;
};

export type CustomPizza = {
  __typename: "CustomPizza";
  size: PizzaSize;
  crust: PizzaCrust;
  sauce: PizzaSauce;
  cheese: PizzaCheese;
  meats: Array<PizzaMeat | null>;
  veggies: Array<PizzaVeggie | null>;
  price: number;
  quantity: number;
};

export type PizzaCheese = {
  __typename: "PizzaCheese";
  quantity: CheeseQuantity;
  additional?: AdditionCheeseType | null;
};

export type SpecialtyPizza = {
  __typename: "SpecialtyPizza";
  description: string;
  id: string;
  imageUrl: string;
  name?: string | null;
  price: number;
  toppings: Array<string | null>;
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
  specialtyPizzas?: Array<SpecialtyPizzaInput | null> | null;
};

export type DeleteOrderInput = {
  id: string;
  user_id: string;
  date: string;
};

export type CreateEmployeeInput = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zip: number;
  phone: string;
  date_of_birth: string;
  date_hired: string;
  user_role: UserRole;
  annual_salary: number;
  employee_url: string;
};

export enum UserRole {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  EMPLOYEE = "EMPLOYEE"
}

export type Employee = {
  __typename: "Employee";
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zip: number;
  phone: string;
  date_of_birth: string;
  date_hired: string;
  user_role: UserRole;
  annual_salary: number;
  employee_url: string;
};

export type UpdateEmployeeInput = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zip: number;
  phone: string;
  date_of_birth: string;
  date_hired: string;
  user_role: UserRole;
  annual_salary: number;
  employee_url: string;
};

export type DeleteEmployeeInput = {
  id: string;
};

export type CreateLocationInput = {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: number;
};

export type Location = {
  __typename: "Location";
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: number;
  location_url: string;
};

export type DeleteLocationInput = {
  id: string;
};

export type AddEmployeeToLocationInput = {
  employee_id: string;
  location_id: string;
};

export type EmployeeLocationListData = {
  __typename: "EmployeeLocationListData";
  employee_id: string;
  location_id: string;
  name: string;
  location_url: string;
  employee_url: string;
  city: string;
  state: string;
};

export type DeleteEmployeeFromLocationInput = {
  employee_id: string;
  location_id: string;
};

export type ListOrdersByUserInput = {
  user_id: string;
  reverse_dir: boolean;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListOrdersByUserResponse = {
  __typename: "ListOrdersByUserResponse";
  items?: Array<Order | null> | null;
  nextToken?: string | null;
};

export type GetOrderInput = {
  id: string;
  user_id: string;
  date: string;
};

export type GetEmployeeInput = {
  id: string;
};

export type ListEmployeesInput = {
  reverse_dir: boolean;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListEmployeesResponse = {
  __typename: "ListEmployeesResponse";
  items?: Array<Employee | null> | null;
  nextToken?: string | null;
};

export type GetLocationInput = {
  id: string;
};

export type ListLocationsInput = {
  reverse_dir: boolean;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListLocationsResponse = {
  __typename: "ListLocationsResponse";
  items?: Array<Location | null> | null;
  nextToken?: string | null;
};

export type ListLocationEmployeesInput = {
  location_id: string;
  reverse_dir: boolean;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListLocationEmployeesResponse = {
  __typename: "ListLocationEmployeesResponse";
  items?: Array<EmployeeLocationListData | null> | null;
  nextToken?: string | null;
};

export type ListEmplyeeLocationsInput = {
  employee_id: string;
  reverse_dir: boolean;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListEmployeeLocationsResponse = {
  __typename: "ListEmployeeLocationsResponse";
  items?: Array<EmployeeLocationListData | null> | null;
  nextToken?: string | null;
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
  GSI_TERTIARY_PK?: ModelStringInput | null;
  GSI_TERTIARY_SK?: ModelStringInput | null;
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
  GSI_TERTIARY_PK: string;
  GSI_TERTIARY_SK: string;
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
    quantity: number;
  } | null>;
  specialtyPizzas: Array<{
    __typename: "SpecialtyPizza";
    description: string;
    id: string;
    imageUrl: string;
    name?: string | null;
    price: number;
    toppings: Array<string | null>;
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
    quantity: number;
  } | null>;
  specialtyPizzas: Array<{
    __typename: "SpecialtyPizza";
    description: string;
    id: string;
    imageUrl: string;
    name?: string | null;
    price: number;
    toppings: Array<string | null>;
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
    quantity: number;
  } | null>;
  specialtyPizzas: Array<{
    __typename: "SpecialtyPizza";
    description: string;
    id: string;
    imageUrl: string;
    name?: string | null;
    price: number;
    toppings: Array<string | null>;
  } | null>;
  user_name: string;
  subtotal: number;
  tax: number;
  total: number;
};

export type CreateEmployeeMutation = {
  __typename: "Employee";
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zip: number;
  phone: string;
  date_of_birth: string;
  date_hired: string;
  user_role: UserRole;
  annual_salary: number;
  employee_url: string;
};

export type UpdateEmployeeMutation = {
  __typename: "Employee";
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zip: number;
  phone: string;
  date_of_birth: string;
  date_hired: string;
  user_role: UserRole;
  annual_salary: number;
  employee_url: string;
};

export type DeleteEmployeeMutation = {
  __typename: "Employee";
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zip: number;
  phone: string;
  date_of_birth: string;
  date_hired: string;
  user_role: UserRole;
  annual_salary: number;
  employee_url: string;
};

export type CreateLocationMutation = {
  __typename: "Location";
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: number;
  location_url: string;
};

export type DeleteLocationMutation = {
  __typename: "Location";
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: number;
  location_url: string;
};

export type AddEmployeeToLocationMutation = {
  __typename: "EmployeeLocationListData";
  employee_id: string;
  location_id: string;
  name: string;
  location_url: string;
  employee_url: string;
  city: string;
  state: string;
};

export type DeleteEmployeeFromLocationMutation = {
  __typename: "EmployeeLocationListData";
  employee_id: string;
  location_id: string;
  name: string;
  location_url: string;
  employee_url: string;
  city: string;
  state: string;
};

export type ListOrdersByUserQuery = {
  __typename: "ListOrdersByUserResponse";
  items?: Array<{
    __typename: "Order";
    id: string;
    user_id: string;
    date: string;
    customPizzas: Array<{
      __typename: "CustomPizza";
      size: PizzaSize;
      crust: PizzaCrust;
      sauce: PizzaSauce;
      meats: Array<PizzaMeat | null>;
      veggies: Array<PizzaVeggie | null>;
      price: number;
      quantity: number;
    } | null>;
    specialtyPizzas: Array<{
      __typename: "SpecialtyPizza";
      description: string;
      id: string;
      imageUrl: string;
      name?: string | null;
      price: number;
      toppings: Array<string | null>;
    } | null>;
    user_name: string;
    subtotal: number;
    tax: number;
    total: number;
  } | null> | null;
  nextToken?: string | null;
};

export type GetOrderQuery = {
  __typename: "Order";
  id: string;
  user_id: string;
  date: string;
  customPizzas: Array<{
    __typename: "CustomPizza";
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
    quantity: number;
  } | null>;
  specialtyPizzas: Array<{
    __typename: "SpecialtyPizza";
    description: string;
    id: string;
    imageUrl: string;
    name?: string | null;
    price: number;
    toppings: Array<string | null>;
  } | null>;
  user_name: string;
  subtotal: number;
  tax: number;
  total: number;
};

export type GetEmployeeQuery = {
  __typename: "Employee";
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zip: number;
  phone: string;
  date_of_birth: string;
  date_hired: string;
  user_role: UserRole;
  annual_salary: number;
  employee_url: string;
};

export type ListEmployeesQuery = {
  __typename: "ListEmployeesResponse";
  items?: Array<{
    __typename: "Employee";
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    street: string;
    city: string;
    state: string;
    zip: number;
    phone: string;
    date_of_birth: string;
    date_hired: string;
    user_role: UserRole;
    annual_salary: number;
    employee_url: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetLocationQuery = {
  __typename: "Location";
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: number;
  location_url: string;
};

export type ListLocationsQuery = {
  __typename: "ListLocationsResponse";
  items?: Array<{
    __typename: "Location";
    id: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    location_url: string;
  } | null> | null;
  nextToken?: string | null;
};

export type ListLocationEmployeesQuery = {
  __typename: "ListLocationEmployeesResponse";
  items?: Array<{
    __typename: "EmployeeLocationListData";
    employee_id: string;
    location_id: string;
    name: string;
    location_url: string;
    employee_url: string;
    city: string;
    state: string;
  } | null> | null;
  nextToken?: string | null;
};

export type ListEmployeeLocationsQuery = {
  __typename: "ListEmployeeLocationsResponse";
  items?: Array<{
    __typename: "EmployeeLocationListData";
    employee_id: string;
    location_id: string;
    name: string;
    location_url: string;
    employee_url: string;
    city: string;
    state: string;
  } | null> | null;
  nextToken?: string | null;
};

export type PizzaAppsByGSI_SECONDARY_PKAndGSI_SECONDARY_SKQuery = {
  __typename: "ModelPizzaAppConnection";
  items: Array<{
    __typename: "PizzaApp";
    PK: string;
    SK: string;
    GSI_SECONDARY_PK: string;
    GSI_SECONDARY_SK: string;
    GSI_TERTIARY_PK: string;
    GSI_TERTIARY_SK: string;
    CREATED_AT: string;
    UPDATED_AT: string;
    MODEL: string;
    TTL?: number | null;
  } | null>;
  nextToken?: string | null;
};

export type PizzaAppsByGSI_TERTIARY_PKAndGSI_TERTIARY_SKQuery = {
  __typename: "ModelPizzaAppConnection";
  items: Array<{
    __typename: "PizzaApp";
    PK: string;
    SK: string;
    GSI_SECONDARY_PK: string;
    GSI_SECONDARY_SK: string;
    GSI_TERTIARY_PK: string;
    GSI_TERTIARY_SK: string;
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
  async InvalidateCloudfrontUrls(
    input: InvalidateCloudfrontUrlsInput
  ): Promise<boolean | null> {
    const statement = `mutation InvalidateCloudfrontUrls($input: InvalidateCloudfrontUrlsInput!) {
        invalidateCloudfrontUrls(input: $input)
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <boolean | null>response.data.invalidateCloudfrontUrls;
  }
  async CreateOrder(input: CreateOrderInput): Promise<CreateOrderMutation> {
    const statement = `mutation CreateOrder($input: CreateOrderInput!) {
        createOrder(input: $input) {
          __typename
          id
          user_id
          date
          customPizzas {
            __typename
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
            quantity
          }
          specialtyPizzas {
            __typename
            description
            id
            imageUrl
            name
            price
            toppings
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
            quantity
          }
          specialtyPizzas {
            __typename
            description
            id
            imageUrl
            name
            price
            toppings
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
            quantity
          }
          specialtyPizzas {
            __typename
            description
            id
            imageUrl
            name
            price
            toppings
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
  async CreateEmployee(
    input: CreateEmployeeInput
  ): Promise<CreateEmployeeMutation> {
    const statement = `mutation CreateEmployee($input: CreateEmployeeInput!) {
        createEmployee(input: $input) {
          __typename
          id
          first_name
          last_name
          email
          street
          city
          state
          zip
          phone
          date_of_birth
          date_hired
          user_role
          annual_salary
          employee_url
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEmployeeMutation>response.data.createEmployee;
  }
  async UpdateEmployee(
    input: UpdateEmployeeInput
  ): Promise<UpdateEmployeeMutation> {
    const statement = `mutation UpdateEmployee($input: UpdateEmployeeInput!) {
        updateEmployee(input: $input) {
          __typename
          id
          first_name
          last_name
          email
          street
          city
          state
          zip
          phone
          date_of_birth
          date_hired
          user_role
          annual_salary
          employee_url
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEmployeeMutation>response.data.updateEmployee;
  }
  async DeleteEmployee(
    input: DeleteEmployeeInput
  ): Promise<DeleteEmployeeMutation> {
    const statement = `mutation DeleteEmployee($input: DeleteEmployeeInput!) {
        deleteEmployee(input: $input) {
          __typename
          id
          first_name
          last_name
          email
          street
          city
          state
          zip
          phone
          date_of_birth
          date_hired
          user_role
          annual_salary
          employee_url
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEmployeeMutation>response.data.deleteEmployee;
  }
  async CreateLocation(
    input: CreateLocationInput
  ): Promise<CreateLocationMutation> {
    const statement = `mutation CreateLocation($input: CreateLocationInput!) {
        createLocation(input: $input) {
          __typename
          id
          name
          address
          city
          state
          zip
          location_url
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateLocationMutation>response.data.createLocation;
  }
  async DeleteLocation(
    input: DeleteLocationInput
  ): Promise<DeleteLocationMutation> {
    const statement = `mutation DeleteLocation($input: DeleteLocationInput!) {
        deleteLocation(input: $input) {
          __typename
          id
          name
          address
          city
          state
          zip
          location_url
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteLocationMutation>response.data.deleteLocation;
  }
  async AddEmployeeToLocation(
    input: AddEmployeeToLocationInput
  ): Promise<AddEmployeeToLocationMutation> {
    const statement = `mutation AddEmployeeToLocation($input: AddEmployeeToLocationInput!) {
        addEmployeeToLocation(input: $input) {
          __typename
          employee_id
          location_id
          name
          location_url
          employee_url
          city
          state
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AddEmployeeToLocationMutation>response.data.addEmployeeToLocation;
  }
  async DeleteEmployeeFromLocation(
    input: DeleteEmployeeFromLocationInput
  ): Promise<DeleteEmployeeFromLocationMutation> {
    const statement = `mutation DeleteEmployeeFromLocation($input: DeleteEmployeeFromLocationInput!) {
        deleteEmployeeFromLocation(input: $input) {
          __typename
          employee_id
          location_id
          name
          location_url
          employee_url
          city
          state
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEmployeeFromLocationMutation>(
      response.data.deleteEmployeeFromLocation
    );
  }
  async ListOrdersByUser(
    input: ListOrdersByUserInput
  ): Promise<ListOrdersByUserQuery> {
    const statement = `query ListOrdersByUser($input: ListOrdersByUserInput!) {
        listOrdersByUser(input: $input) {
          __typename
          items {
            __typename
            id
            user_id
            date
            customPizzas {
              __typename
              size
              crust
              sauce
              meats
              veggies
              price
              quantity
            }
            specialtyPizzas {
              __typename
              description
              id
              imageUrl
              name
              price
              toppings
            }
            user_name
            subtotal
            tax
            total
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListOrdersByUserQuery>response.data.listOrdersByUser;
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
            quantity
          }
          specialtyPizzas {
            __typename
            description
            id
            imageUrl
            name
            price
            toppings
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
  async GetEmployee(input: GetEmployeeInput): Promise<GetEmployeeQuery> {
    const statement = `query GetEmployee($input: GetEmployeeInput!) {
        getEmployee(input: $input) {
          __typename
          id
          first_name
          last_name
          email
          street
          city
          state
          zip
          phone
          date_of_birth
          date_hired
          user_role
          annual_salary
          employee_url
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEmployeeQuery>response.data.getEmployee;
  }
  async ListEmployees(input: ListEmployeesInput): Promise<ListEmployeesQuery> {
    const statement = `query ListEmployees($input: ListEmployeesInput!) {
        listEmployees(input: $input) {
          __typename
          items {
            __typename
            id
            first_name
            last_name
            email
            street
            city
            state
            zip
            phone
            date_of_birth
            date_hired
            user_role
            annual_salary
            employee_url
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEmployeesQuery>response.data.listEmployees;
  }
  async GetLocation(input: GetLocationInput): Promise<GetLocationQuery> {
    const statement = `query GetLocation($input: GetLocationInput!) {
        getLocation(input: $input) {
          __typename
          id
          name
          address
          city
          state
          zip
          location_url
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetLocationQuery>response.data.getLocation;
  }
  async ListLocations(input: ListLocationsInput): Promise<ListLocationsQuery> {
    const statement = `query ListLocations($input: ListLocationsInput!) {
        listLocations(input: $input) {
          __typename
          items {
            __typename
            id
            name
            address
            city
            state
            zip
            location_url
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListLocationsQuery>response.data.listLocations;
  }
  async ListLocationEmployees(
    input: ListLocationEmployeesInput
  ): Promise<ListLocationEmployeesQuery> {
    const statement = `query ListLocationEmployees($input: ListLocationEmployeesInput!) {
        listLocationEmployees(input: $input) {
          __typename
          items {
            __typename
            employee_id
            location_id
            name
            location_url
            employee_url
            city
            state
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListLocationEmployeesQuery>response.data.listLocationEmployees;
  }
  async ListEmployeeLocations(
    input: ListEmplyeeLocationsInput
  ): Promise<ListEmployeeLocationsQuery> {
    const statement = `query ListEmployeeLocations($input: ListEmplyeeLocationsInput!) {
        listEmployeeLocations(input: $input) {
          __typename
          items {
            __typename
            employee_id
            location_id
            name
            location_url
            employee_url
            city
            state
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEmployeeLocationsQuery>response.data.listEmployeeLocations;
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
            GSI_TERTIARY_PK
            GSI_TERTIARY_SK
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
  async PizzaAppsByGSI_TERTIARY_PKAndGSI_TERTIARY_SK(
    GSI_TERTIARY_PK: string,
    GSI_TERTIARY_SK?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelPizzaAppFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<PizzaAppsByGSI_TERTIARY_PKAndGSI_TERTIARY_SKQuery> {
    const statement = `query PizzaAppsByGSI_TERTIARY_PKAndGSI_TERTIARY_SK($GSI_TERTIARY_PK: String!, $GSI_TERTIARY_SK: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelPizzaAppFilterInput, $limit: Int, $nextToken: String) {
        pizzaAppsByGSI_TERTIARY_PKAndGSI_TERTIARY_SK(
          GSI_TERTIARY_PK: $GSI_TERTIARY_PK
          GSI_TERTIARY_SK: $GSI_TERTIARY_SK
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
            GSI_TERTIARY_PK
            GSI_TERTIARY_SK
            CREATED_AT
            UPDATED_AT
            MODEL
            TTL
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      GSI_TERTIARY_PK
    };
    if (GSI_TERTIARY_SK) {
      gqlAPIServiceArguments.GSI_TERTIARY_SK = GSI_TERTIARY_SK;
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
    return <PizzaAppsByGSI_TERTIARY_PKAndGSI_TERTIARY_SKQuery>(
      response.data.pizzaAppsByGSI_TERTIARY_PKAndGSI_TERTIARY_SK
    );
  }
}
