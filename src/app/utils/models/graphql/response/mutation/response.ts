import { Order } from "src/app/API.service";

export interface CreateOrderResponse {
    createOrder: Order
}
export interface UpdateOrderResponse {
    updateOrder: Order
}
export interface DeleteOrderResponse {
    deleteOrder: Order
}