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
  onCreateOrder: OnCreateOrderSubscription;
  onUpdateOrder: OnUpdateOrderSubscription;
  onDeleteOrder: OnDeleteOrderSubscription;
};

export type CreateOrderInput = {
  id?: string | null;
  owner?: string | null;
  orderNumber: string;
  orderDate: string;
  orderStatus: string;
  orderTotal: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelOrderConditionInput = {
  owner?: ModelStringInput | null;
  orderNumber?: ModelStringInput | null;
  orderDate?: ModelStringInput | null;
  orderStatus?: ModelStringInput | null;
  orderTotal?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
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

export type Order = {
  __typename: "Order";
  id: string;
  owner?: string | null;
  orderNumber: string;
  orderDate: string;
  orderStatus: string;
  orderTotal: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateOrderInput = {
  id: string;
  owner?: string | null;
  orderNumber?: string | null;
  orderDate?: string | null;
  orderStatus?: string | null;
  orderTotal?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteOrderInput = {
  id: string;
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null;
  owner?: ModelStringInput | null;
  orderNumber?: ModelStringInput | null;
  orderDate?: ModelStringInput | null;
  orderStatus?: ModelStringInput | null;
  orderTotal?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
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
  __typename: "ModelOrderConnection";
  items: Array<Order | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  owner?: ModelSubscriptionStringInput | null;
  orderNumber?: ModelSubscriptionStringInput | null;
  orderDate?: ModelSubscriptionStringInput | null;
  orderStatus?: ModelSubscriptionStringInput | null;
  orderTotal?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
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

export type CreateOrderMutation = {
  __typename: "Order";
  id: string;
  owner?: string | null;
  orderNumber: string;
  orderDate: string;
  orderStatus: string;
  orderTotal: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateOrderMutation = {
  __typename: "Order";
  id: string;
  owner?: string | null;
  orderNumber: string;
  orderDate: string;
  orderStatus: string;
  orderTotal: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteOrderMutation = {
  __typename: "Order";
  id: string;
  owner?: string | null;
  orderNumber: string;
  orderDate: string;
  orderStatus: string;
  orderTotal: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type GetOrderQuery = {
  __typename: "Order";
  id: string;
  owner?: string | null;
  orderNumber: string;
  orderDate: string;
  orderStatus: string;
  orderTotal: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ListOrdersQuery = {
  __typename: "ModelOrderConnection";
  items: Array<{
    __typename: "Order";
    id: string;
    owner?: string | null;
    orderNumber: string;
    orderDate: string;
    orderStatus: string;
    orderTotal: string;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateOrderSubscription = {
  __typename: "Order";
  id: string;
  owner?: string | null;
  orderNumber: string;
  orderDate: string;
  orderStatus: string;
  orderTotal: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnUpdateOrderSubscription = {
  __typename: "Order";
  id: string;
  owner?: string | null;
  orderNumber: string;
  orderDate: string;
  orderStatus: string;
  orderTotal: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnDeleteOrderSubscription = {
  __typename: "Order";
  id: string;
  owner?: string | null;
  orderNumber: string;
  orderDate: string;
  orderStatus: string;
  orderTotal: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

@Injectable({
  providedIn: "root"
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
          owner
          orderNumber
          orderDate
          orderStatus
          orderTotal
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
          owner
          orderNumber
          orderDate
          orderStatus
          orderTotal
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
          owner
          orderNumber
          orderDate
          orderStatus
          orderTotal
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
    return <DeleteOrderMutation>response.data.deleteOrder;
  }
  async GetOrder(id: string): Promise<GetOrderQuery> {
    const statement = `query GetOrder($id: ID!) {
        getOrder(id: $id) {
          __typename
          id
          owner
          orderNumber
          orderDate
          orderStatus
          orderTotal
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
            owner
            orderNumber
            orderDate
            orderStatus
            orderTotal
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
  OnCreateOrderListener(
    filter?: ModelSubscriptionOrderFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateOrder">>
  > {
    const statement = `subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
        onCreateOrder(filter: $filter) {
          __typename
          id
          owner
          orderNumber
          orderDate
          orderStatus
          orderTotal
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateOrder">>
    >;
  }

  OnUpdateOrderListener(
    filter?: ModelSubscriptionOrderFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateOrder">>
  > {
    const statement = `subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
        onUpdateOrder(filter: $filter) {
          __typename
          id
          owner
          orderNumber
          orderDate
          orderStatus
          orderTotal
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateOrder">>
    >;
  }

  OnDeleteOrderListener(
    filter?: ModelSubscriptionOrderFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteOrder">>
  > {
    const statement = `subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
        onDeleteOrder(filter: $filter) {
          __typename
          id
          owner
          orderNumber
          orderDate
          orderStatus
          orderTotal
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
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteOrder">>
    >;
  }
}
