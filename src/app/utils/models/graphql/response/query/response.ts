import { Order } from 'src/app/API.service';

export interface ListOrdersByUserResponse {
  listOrdersByUser: Order[];
}
export interface GetOrderResponse {
  getOrder: Order;
}
