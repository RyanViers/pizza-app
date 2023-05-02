/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateEmployee: OnCreateEmployeeSubscription;
  onUpdateEmployee: OnUpdateEmployeeSubscription;
  onDeleteEmployee: OnDeleteEmployeeSubscription;
  onCreateAddress: OnCreateAddressSubscription;
  onUpdateAddress: OnUpdateAddressSubscription;
  onDeleteAddress: OnDeleteAddressSubscription;
};

export type CreateEmployeeInput = {
  id?: string | null;
  name: string;
  age?: string | null;
};

export type ModelEmployeeConditionInput = {
  name?: ModelStringInput | null;
  age?: ModelStringInput | null;
  and?: Array<ModelEmployeeConditionInput | null> | null;
  or?: Array<ModelEmployeeConditionInput | null> | null;
  not?: ModelEmployeeConditionInput | null;
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

export type Employee = {
  __typename: "Employee";
  id: string;
  name: string;
  age?: string | null;
  address?: ModelAddressConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelAddressConnection = {
  __typename: "ModelAddressConnection";
  items: Array<Address | null>;
  nextToken?: string | null;
};

export type Address = {
  __typename: "Address";
  id: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  employeeID: string;
  employee?: Employee | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEmployeeInput = {
  id: string;
  name?: string | null;
  age?: string | null;
};

export type DeleteEmployeeInput = {
  id: string;
};

export type CreateAddressInput = {
  id?: string | null;
  street: string;
  city: string;
  state: string;
  zip: string;
  employeeID: string;
};

export type ModelAddressConditionInput = {
  street?: ModelStringInput | null;
  city?: ModelStringInput | null;
  state?: ModelStringInput | null;
  zip?: ModelStringInput | null;
  employeeID?: ModelIDInput | null;
  and?: Array<ModelAddressConditionInput | null> | null;
  or?: Array<ModelAddressConditionInput | null> | null;
  not?: ModelAddressConditionInput | null;
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

export type UpdateAddressInput = {
  id: string;
  street?: string | null;
  city?: string | null;
  state?: string | null;
  zip?: string | null;
  employeeID?: string | null;
};

export type DeleteAddressInput = {
  id: string;
};

export type ModelEmployeeFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  age?: ModelStringInput | null;
  and?: Array<ModelEmployeeFilterInput | null> | null;
  or?: Array<ModelEmployeeFilterInput | null> | null;
  not?: ModelEmployeeFilterInput | null;
};

export type ModelEmployeeConnection = {
  __typename: "ModelEmployeeConnection";
  items: Array<Employee | null>;
  nextToken?: string | null;
};

export type ModelAddressFilterInput = {
  id?: ModelIDInput | null;
  street?: ModelStringInput | null;
  city?: ModelStringInput | null;
  state?: ModelStringInput | null;
  zip?: ModelStringInput | null;
  employeeID?: ModelIDInput | null;
  and?: Array<ModelAddressFilterInput | null> | null;
  or?: Array<ModelAddressFilterInput | null> | null;
  not?: ModelAddressFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelSubscriptionEmployeeFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  age?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionEmployeeFilterInput | null> | null;
  or?: Array<ModelSubscriptionEmployeeFilterInput | null> | null;
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

export type ModelSubscriptionAddressFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  street?: ModelSubscriptionStringInput | null;
  city?: ModelSubscriptionStringInput | null;
  state?: ModelSubscriptionStringInput | null;
  zip?: ModelSubscriptionStringInput | null;
  employeeID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionAddressFilterInput | null> | null;
  or?: Array<ModelSubscriptionAddressFilterInput | null> | null;
};

export type CreateEmployeeMutation = {
  __typename: "Employee";
  id: string;
  name: string;
  age?: string | null;
  address?: {
    __typename: "ModelAddressConnection";
    items: Array<{
      __typename: "Address";
      id: string;
      street: string;
      city: string;
      state: string;
      zip: string;
      employeeID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEmployeeMutation = {
  __typename: "Employee";
  id: string;
  name: string;
  age?: string | null;
  address?: {
    __typename: "ModelAddressConnection";
    items: Array<{
      __typename: "Address";
      id: string;
      street: string;
      city: string;
      state: string;
      zip: string;
      employeeID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteEmployeeMutation = {
  __typename: "Employee";
  id: string;
  name: string;
  age?: string | null;
  address?: {
    __typename: "ModelAddressConnection";
    items: Array<{
      __typename: "Address";
      id: string;
      street: string;
      city: string;
      state: string;
      zip: string;
      employeeID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateAddressMutation = {
  __typename: "Address";
  id: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  employeeID: string;
  employee?: {
    __typename: "Employee";
    id: string;
    name: string;
    age?: string | null;
    address?: {
      __typename: "ModelAddressConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAddressMutation = {
  __typename: "Address";
  id: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  employeeID: string;
  employee?: {
    __typename: "Employee";
    id: string;
    name: string;
    age?: string | null;
    address?: {
      __typename: "ModelAddressConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAddressMutation = {
  __typename: "Address";
  id: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  employeeID: string;
  employee?: {
    __typename: "Employee";
    id: string;
    name: string;
    age?: string | null;
    address?: {
      __typename: "ModelAddressConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type GetEmployeeQuery = {
  __typename: "Employee";
  id: string;
  name: string;
  age?: string | null;
  address?: {
    __typename: "ModelAddressConnection";
    items: Array<{
      __typename: "Address";
      id: string;
      street: string;
      city: string;
      state: string;
      zip: string;
      employeeID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListEmployeesQuery = {
  __typename: "ModelEmployeeConnection";
  items: Array<{
    __typename: "Employee";
    id: string;
    name: string;
    age?: string | null;
    address?: {
      __typename: "ModelAddressConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetAddressQuery = {
  __typename: "Address";
  id: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  employeeID: string;
  employee?: {
    __typename: "Employee";
    id: string;
    name: string;
    age?: string | null;
    address?: {
      __typename: "ModelAddressConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListAddressesQuery = {
  __typename: "ModelAddressConnection";
  items: Array<{
    __typename: "Address";
    id: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    employeeID: string;
    employee?: {
      __typename: "Employee";
      id: string;
      name: string;
      age?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type AddressesByEmployeeIDQuery = {
  __typename: "ModelAddressConnection";
  items: Array<{
    __typename: "Address";
    id: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    employeeID: string;
    employee?: {
      __typename: "Employee";
      id: string;
      name: string;
      age?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateEmployeeSubscription = {
  __typename: "Employee";
  id: string;
  name: string;
  age?: string | null;
  address?: {
    __typename: "ModelAddressConnection";
    items: Array<{
      __typename: "Address";
      id: string;
      street: string;
      city: string;
      state: string;
      zip: string;
      employeeID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateEmployeeSubscription = {
  __typename: "Employee";
  id: string;
  name: string;
  age?: string | null;
  address?: {
    __typename: "ModelAddressConnection";
    items: Array<{
      __typename: "Address";
      id: string;
      street: string;
      city: string;
      state: string;
      zip: string;
      employeeID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteEmployeeSubscription = {
  __typename: "Employee";
  id: string;
  name: string;
  age?: string | null;
  address?: {
    __typename: "ModelAddressConnection";
    items: Array<{
      __typename: "Address";
      id: string;
      street: string;
      city: string;
      state: string;
      zip: string;
      employeeID: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateAddressSubscription = {
  __typename: "Address";
  id: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  employeeID: string;
  employee?: {
    __typename: "Employee";
    id: string;
    name: string;
    age?: string | null;
    address?: {
      __typename: "ModelAddressConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAddressSubscription = {
  __typename: "Address";
  id: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  employeeID: string;
  employee?: {
    __typename: "Employee";
    id: string;
    name: string;
    age?: string | null;
    address?: {
      __typename: "ModelAddressConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAddressSubscription = {
  __typename: "Address";
  id: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  employeeID: string;
  employee?: {
    __typename: "Employee";
    id: string;
    name: string;
    age?: string | null;
    address?: {
      __typename: "ModelAddressConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateEmployee(
    input: CreateEmployeeInput,
    condition?: ModelEmployeeConditionInput
  ): Promise<CreateEmployeeMutation> {
    const statement = `mutation CreateEmployee($input: CreateEmployeeInput!, $condition: ModelEmployeeConditionInput) {
        createEmployee(input: $input, condition: $condition) {
          __typename
          id
          name
          age
          address {
            __typename
            items {
              __typename
              id
              street
              city
              state
              zip
              employeeID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEmployeeMutation>response.data.createEmployee;
  }
  async UpdateEmployee(
    input: UpdateEmployeeInput,
    condition?: ModelEmployeeConditionInput
  ): Promise<UpdateEmployeeMutation> {
    const statement = `mutation UpdateEmployee($input: UpdateEmployeeInput!, $condition: ModelEmployeeConditionInput) {
        updateEmployee(input: $input, condition: $condition) {
          __typename
          id
          name
          age
          address {
            __typename
            items {
              __typename
              id
              street
              city
              state
              zip
              employeeID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEmployeeMutation>response.data.updateEmployee;
  }
  async DeleteEmployee(
    input: DeleteEmployeeInput,
    condition?: ModelEmployeeConditionInput
  ): Promise<DeleteEmployeeMutation> {
    const statement = `mutation DeleteEmployee($input: DeleteEmployeeInput!, $condition: ModelEmployeeConditionInput) {
        deleteEmployee(input: $input, condition: $condition) {
          __typename
          id
          name
          age
          address {
            __typename
            items {
              __typename
              id
              street
              city
              state
              zip
              employeeID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEmployeeMutation>response.data.deleteEmployee;
  }
  async CreateAddress(
    input: CreateAddressInput,
    condition?: ModelAddressConditionInput
  ): Promise<CreateAddressMutation> {
    const statement = `mutation CreateAddress($input: CreateAddressInput!, $condition: ModelAddressConditionInput) {
        createAddress(input: $input, condition: $condition) {
          __typename
          id
          street
          city
          state
          zip
          employeeID
          employee {
            __typename
            id
            name
            age
            address {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAddressMutation>response.data.createAddress;
  }
  async UpdateAddress(
    input: UpdateAddressInput,
    condition?: ModelAddressConditionInput
  ): Promise<UpdateAddressMutation> {
    const statement = `mutation UpdateAddress($input: UpdateAddressInput!, $condition: ModelAddressConditionInput) {
        updateAddress(input: $input, condition: $condition) {
          __typename
          id
          street
          city
          state
          zip
          employeeID
          employee {
            __typename
            id
            name
            age
            address {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAddressMutation>response.data.updateAddress;
  }
  async DeleteAddress(
    input: DeleteAddressInput,
    condition?: ModelAddressConditionInput
  ): Promise<DeleteAddressMutation> {
    const statement = `mutation DeleteAddress($input: DeleteAddressInput!, $condition: ModelAddressConditionInput) {
        deleteAddress(input: $input, condition: $condition) {
          __typename
          id
          street
          city
          state
          zip
          employeeID
          employee {
            __typename
            id
            name
            age
            address {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAddressMutation>response.data.deleteAddress;
  }
  async GetEmployee(id: string): Promise<GetEmployeeQuery> {
    const statement = `query GetEmployee($id: ID!) {
        getEmployee(id: $id) {
          __typename
          id
          name
          age
          address {
            __typename
            items {
              __typename
              id
              street
              city
              state
              zip
              employeeID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEmployeeQuery>response.data.getEmployee;
  }
  async ListEmployees(
    filter?: ModelEmployeeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEmployeesQuery> {
    const statement = `query ListEmployees($filter: ModelEmployeeFilterInput, $limit: Int, $nextToken: String) {
        listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            age
            address {
              __typename
              nextToken
            }
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
    return <ListEmployeesQuery>response.data.listEmployees;
  }
  async GetAddress(id: string): Promise<GetAddressQuery> {
    const statement = `query GetAddress($id: ID!) {
        getAddress(id: $id) {
          __typename
          id
          street
          city
          state
          zip
          employeeID
          employee {
            __typename
            id
            name
            age
            address {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAddressQuery>response.data.getAddress;
  }
  async ListAddresses(
    filter?: ModelAddressFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAddressesQuery> {
    const statement = `query ListAddresses($filter: ModelAddressFilterInput, $limit: Int, $nextToken: String) {
        listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            street
            city
            state
            zip
            employeeID
            employee {
              __typename
              id
              name
              age
              createdAt
              updatedAt
            }
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
    return <ListAddressesQuery>response.data.listAddresses;
  }
  async AddressesByEmployeeID(
    employeeID: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelAddressFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<AddressesByEmployeeIDQuery> {
    const statement = `query AddressesByEmployeeID($employeeID: ID!, $sortDirection: ModelSortDirection, $filter: ModelAddressFilterInput, $limit: Int, $nextToken: String) {
        addressesByEmployeeID(
          employeeID: $employeeID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            street
            city
            state
            zip
            employeeID
            employee {
              __typename
              id
              name
              age
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      employeeID
    };
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
    return <AddressesByEmployeeIDQuery>response.data.addressesByEmployeeID;
  }
  OnCreateEmployeeListener(
    filter?: ModelSubscriptionEmployeeFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateEmployee">>
  > {
    const statement = `subscription OnCreateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
        onCreateEmployee(filter: $filter) {
          __typename
          id
          name
          age
          address {
            __typename
            items {
              __typename
              id
              street
              city
              state
              zip
              employeeID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateEmployee">>
    >;
  }

  OnUpdateEmployeeListener(
    filter?: ModelSubscriptionEmployeeFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateEmployee">>
  > {
    const statement = `subscription OnUpdateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
        onUpdateEmployee(filter: $filter) {
          __typename
          id
          name
          age
          address {
            __typename
            items {
              __typename
              id
              street
              city
              state
              zip
              employeeID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateEmployee">>
    >;
  }

  OnDeleteEmployeeListener(
    filter?: ModelSubscriptionEmployeeFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteEmployee">>
  > {
    const statement = `subscription OnDeleteEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
        onDeleteEmployee(filter: $filter) {
          __typename
          id
          name
          age
          address {
            __typename
            items {
              __typename
              id
              street
              city
              state
              zip
              employeeID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteEmployee">>
    >;
  }

  OnCreateAddressListener(
    filter?: ModelSubscriptionAddressFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateAddress">>
  > {
    const statement = `subscription OnCreateAddress($filter: ModelSubscriptionAddressFilterInput) {
        onCreateAddress(filter: $filter) {
          __typename
          id
          street
          city
          state
          zip
          employeeID
          employee {
            __typename
            id
            name
            age
            address {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateAddress">>
    >;
  }

  OnUpdateAddressListener(
    filter?: ModelSubscriptionAddressFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateAddress">>
  > {
    const statement = `subscription OnUpdateAddress($filter: ModelSubscriptionAddressFilterInput) {
        onUpdateAddress(filter: $filter) {
          __typename
          id
          street
          city
          state
          zip
          employeeID
          employee {
            __typename
            id
            name
            age
            address {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateAddress">>
    >;
  }

  OnDeleteAddressListener(
    filter?: ModelSubscriptionAddressFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAddress">>
  > {
    const statement = `subscription OnDeleteAddress($filter: ModelSubscriptionAddressFilterInput) {
        onDeleteAddress(filter: $filter) {
          __typename
          id
          street
          city
          state
          zip
          employeeID
          employee {
            __typename
            id
            name
            age
            address {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAddress">>
    >;
  }
}
