import {
  DeleteOrderInput,
  UpdateOrderInput,
  CustomPizza,
} from '../../../API.service';
import { Injectable } from '@angular/core';
import { Apollo, MutationResult } from 'apollo-angular';
import { CreateOrderInput, Order, SpecialtyPizza } from 'src/app/API.service';
import createOrder from '../../graphql/mutation/order/createOrder';
import deleteOrder from '../../graphql/mutation/order/deleteOrder';
import updateOrder from '../../graphql/mutation/order/updateOrder';
import { ApolloCache, FetchResult, InMemoryCache } from '@apollo/client/core';
import {
  CreateOrderResponse,
  DeleteOrderResponse,
  UpdateOrderResponse,
} from './mutations-response';
import { CacheService } from './cache.service';
import { first, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MutationsService {
  constructor(private apollo: Apollo, private cache: CacheService) {}

  /*********** ORDER MUTATIONS *********/

  /**
   * Create Order
   * @param input
   * @returns
   */
  async createOrder(input: CreateOrderInput): Promise<Order> {
    return new Promise((resolve, reject) => {
      this.apollo
        .mutate<CreateOrderResponse>({
          mutation: createOrder,
          variables: {
            input,
          },
          optimisticResponse: {
            createOrder: {
              __typename: 'Order',
              ...input,
              customPizzas: input.customPizzas as CustomPizza[],
              specialtyPizzas: input.specialtyPizzas as SpecialtyPizza[],
              id: 'temp',
            },
          },
          update: (
            cache: ApolloCache<InMemoryCache>,
            response: Omit<FetchResult<CreateOrderResponse>, 'context'>
          ) => {
            const order: Order = response.data?.createOrder as Order;
            if (order) {
              this.cache.onCreateOrUpdateOrder(cache, order);
            }
          },
        })
        .pipe(
          first(),
          map((result: MutationResult<CreateOrderResponse>) => {
            return result.data?.createOrder as Order;
          })
        )
        .subscribe({
          next: (order: Order) => {
            resolve(order);
          },
          error: (err) => {
            reject(err);
          },
        });
    });
  }

  /**
   * updateOrder
   * @param input
   * @returns
   */
  async updateOrder(
    input: UpdateOrderInput,
    currentOrder: Order
  ): Promise<Order> {
    return new Promise((resolve, reject) => {
      this.apollo
        .mutate<UpdateOrderResponse>({
          mutation: updateOrder,
          variables: {
            input,
          },
          optimisticResponse: {
            updateOrder: {
              __typename: 'Order',
              id: currentOrder.id,
              user_id: currentOrder.user_id,
              date: currentOrder.date,
              user_name: input.user_name || currentOrder.user_name,
              subtotal:
                'subtotal' in input
                  ? (input.subtotal as number)
                  : currentOrder.subtotal,
              tax: 'tax' in input ? (input.tax as number) : currentOrder.tax,
              total:
                'total' in input ? (input.total as number) : currentOrder.total,
              customPizzas:
                (input.customPizzas?.length || 0) > 0
                  ? (input.customPizzas as CustomPizza[])
                  : (currentOrder.customPizzas as CustomPizza[]),
              specialtyPizzas:
                (input.specialtyPizzas?.length || 0) > 0
                  ? (input.specialtyPizzas as SpecialtyPizza[])
                  : (currentOrder.specialtyPizzas as SpecialtyPizza[]),
            },
          },
          update: (
            cache: ApolloCache<InMemoryCache>,
            response: Omit<FetchResult<UpdateOrderResponse>, 'context'>
          ) => {
            const order: Order = response.data?.updateOrder as Order;
            if (order) {
              this.cache.onCreateOrUpdateOrder(cache, order);
            }
          },
        })
        .pipe(
          first(),
          map((result: MutationResult<UpdateOrderResponse>) => {
            return result.data?.updateOrder as Order;
          })
        )
        .subscribe({
          next: (order: Order) => {
            resolve(order);
          },
          error: (err) => {
            reject(err);
          },
        });
    });
  }

  /**
   * deleteOrder
   * @param input
   * @returns
   */
  async deleteOrder(
    input: DeleteOrderInput,
    currentOrder: Order
  ): Promise<Order> {
    return new Promise((resolve, reject) => {
      this.apollo
        .mutate<DeleteOrderResponse>({
          mutation: deleteOrder,
          variables: {
            input,
          },
          optimisticResponse: {
            deleteOrder: {
              ...currentOrder,
            },
          },
          update: (
            cache: ApolloCache<InMemoryCache>,
            response: Omit<FetchResult<DeleteOrderResponse>, 'context'>
          ) => {
            const order: Order = response.data?.deleteOrder as Order;
            if (order) {
              this.cache.onDeleteOrder(cache, order);
            }
          },
        })
        .pipe(
          first(),
          map((result: MutationResult<DeleteOrderResponse>) => {
            return result.data?.deleteOrder as Order;
          })
        )
        .subscribe({
          next: (order: Order) => {
            resolve(order);
          },
          error: (err) => {
            reject(err);
          },
        });
    });
  }
}
