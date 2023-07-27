import {
  ListOrdersByUserInput,
  GetOrderInput,
  Employee,
  ListEmployeesResponse,
} from '../../../API.service';
import { Injectable } from '@angular/core';
import { ApolloCache, InMemoryCache } from '@apollo/client/core';
import { Order } from 'src/app/API.service';
import listOrdersByUser from 'src/app/utils/graphql/query/order/listOrdersByUser';
import { ListOrdersByUserResponse } from './queries-response';
import { cloneDeep } from 'lodash';
import getOrder from '../../graphql/query/order/getOrder';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  constructor() {}

  /*********** ORDER  *********/
  /**
   * onCreateOrder
   * @param cache
   * @param order
   */
  onCreateOrUpdateOrder(cache: ApolloCache<InMemoryCache>, order: Order): void {
    //listOrdersByUser
    try {
      const input: ListOrdersByUserInput = {
        user_id: order.user_id,
        reverse_dir: false,
      };
      const result: ListOrdersByUserResponse | null = cloneDeep(
        cache.readQuery({
          query: listOrdersByUser,
          variables: {
            input: input,
          },
        })
      );
      if (result) {
        const index = result.listOrdersByUser.findIndex(
          (o) => o.id === order.id
        );
        if (index > -1) {
          result.listOrdersByUser[index] = order;
        } else {
          result.listOrdersByUser.push(order);
          result.listOrdersByUser.sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();

            if (dateA > dateB) {
              return 1;
            } else if (dateA < dateB) {
              return -1;
            } else {
              return 0;
            }
          });
        }
        cache.writeQuery({
          query: listOrdersByUser,
          variables: {
            input: input,
          },
          data: result,
        });
      }
    } catch (error) {
      console.debug(error);
    }

    //getOrder
    try {
      const input: GetOrderInput = {
        id: order.id,
        user_id: order.user_id,
        date: order.date,
      };
      cache.writeQuery({
        query: getOrder,
        variables: {
          input: input,
        },
        data: { getOrder: order },
      });
    } catch (error) {
      console.debug(error);
    }
  }

  /**
   * onDeleteOrder
   * @param cache
   * @param order
   */
  onDeleteOrder(cache: ApolloCache<InMemoryCache>, order: Order): void {
    //listOrdersByUser
    try {
      const input: ListOrdersByUserInput = {
        user_id: order.user_id,
        reverse_dir: false,
      };
      const result: ListOrdersByUserResponse | null = cloneDeep(
        cache.readQuery({
          query: listOrdersByUser,
          variables: {
            input: input,
          },
        })
      );
      if (result) {
        result.listOrdersByUser = result.listOrdersByUser.filter(
          (o) => o.id !== order.id
        );

        cache.writeQuery({
          query: listOrdersByUser,
          variables: {
            input: input,
          },
          data: result,
        });
      }
    } catch (error) {
      console.debug(error);
    }

    //getOrder
    try {
      const input: GetOrderInput = {
        id: order.id,
        user_id: order.user_id,
        date: order.date,
      };
      cache.evict({
        fieldName: 'getOrder',
        args: {
          input: input,
        },
      });
      cache.gc();
    } catch (error) {
      console.debug(error);
    }
  }

  /*********** EMPLOYEE  *********/
}
