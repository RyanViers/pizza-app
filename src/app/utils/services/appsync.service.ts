import { Injectable } from "@angular/core";
import { Apollo, MutationResult } from "apollo-angular";
import { Observable, first, map } from "rxjs";
import { ListOrdersByUserInput, Order, GetOrderInput, CreateOrderInput, UpdateOrderInput, DeleteOrderInput } from "src/app/API.service";
import { cloneDeep } from "@apollo/client/utilities";
import { ApolloQueryResult } from "@apollo/client/core";
import { GetOrderResponse, ListOrdersByUserResponse } from "../models/graphql/response/query/response";
import listOrdersByUser from "../models/graphql/query/order/listOrdersByUser";
import getOrder from "../models/graphql/query/order/getOrder";
import createOrder from "../models/graphql/mutation/order/createOrder";
import updateOrder from "../models/graphql/mutation/order/updateOrder";
import deleteOrder from "../models/graphql/mutation/order/deleteOrder";

@Injectable({
    providedIn: 'root'
})
export class AppsyncService {

    /**
     * constructor
     * @param apollo 
     */
    constructor(private apollo: Apollo) {}

    /**
     * QUERIES
     */
    
    /**
     * list orders by user
     * @param input 
     * @returns 
     */
    listOrdersByUser(input: ListOrdersByUserInput): Observable<Order[]> {
        return this.apollo.watchQuery<ListOrdersByUserResponse>({query: listOrdersByUser, variables: {input: input}})
          .valueChanges.pipe(map((result: ApolloQueryResult<ListOrdersByUserResponse>) => cloneDeep(result.data.listOrdersByUser)))
    }
    
    /**
     * get order
     * @param input 
     * @returns 
     */
    getOrder(input: GetOrderInput): Observable<Order> {
        return this.apollo.watchQuery<GetOrderResponse>({query: getOrder, variables: {input: input}})
          .valueChanges.pipe(map((result: ApolloQueryResult<GetOrderResponse>) => cloneDeep(result.data.getOrder)))
    }
  
    /**
     * MUTATIONS
     */
  
    createOrder(input: CreateOrderInput): Promise<Order> {
        return new Promise<any>((resolve, reject) => {
            this.apollo.mutate<any>({
                mutation: createOrder,
                variables: {input: input},
            /*     update: (cache: any, response: ApolloQueryResult<CreateOrderResponse>) => {
                }  */
              })
              .pipe(map((response: MutationResult<any>) => cloneDeep(response.data?.createOrder)))
              .pipe(first())
              .subscribe({complete: () => {resolve(null)}, error: () => {reject()}})
        })
    }

    /**
     * update order
     * @param input 
     * @returns 
     */
    updateOrder(input: UpdateOrderInput): Promise<Order> {
        return new Promise<any>((resolve, reject) => {
            this.apollo.mutate<any>({
                mutation: updateOrder,
                variables: {input: input},
            /*     update: (cache: any, response: ApolloQueryResult<CreateOrderResponse>) => {
                }  */
              })
              .pipe(map((response: MutationResult<any>) => cloneDeep(response.data?.updateOrder)))
              .pipe(first())
              .subscribe({complete: () => {resolve(null)}, error: () => {reject()}})
        })
    }
    
    /**
     * delete order
     * @param input 
     * @returns 
     */
    deleteOrder(input: DeleteOrderInput): Promise<Order> {
        return new Promise<any>((resolve, reject) => {
            this.apollo.mutate<any>({
                mutation: deleteOrder,
                variables: {input: input},
            /*     update: (cache: any, response: ApolloQueryResult<CreateOrderResponse>) => {
                }  */
              })
              .pipe(map((response: MutationResult<any>) => cloneDeep(response.data?.deleteOrder)))
              .pipe(first())
              .subscribe({complete: () => {resolve(null)}, error: () => {reject()}})
        })
    }
  
}