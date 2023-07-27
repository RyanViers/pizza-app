import { Employee, Order } from 'src/app/API.service';

export type CreateOrderResponse = {
  createOrder: Order;
};

export type UpdateOrderResponse = {
  updateOrder: Order;
};

export type DeleteOrderResponse = {
  deleteOrder: Order;
};

export type CreateEmployeeResponse = {
  createEmployee: Employee;
};
