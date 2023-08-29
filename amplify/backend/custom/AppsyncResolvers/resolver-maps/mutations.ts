export const mutationMap = new Map<
  string,
  { requestTemplate: string; responseTemplate: string; fieldName: string }
>([
  [
    'CreateOrder',
    {
      requestTemplate: 'createOrder.req.vtl',
      responseTemplate: 'createOrder.res.vtl',
      fieldName: 'createOrder',
    },
  ],
  [
    'UpdateOrder',
    {
      requestTemplate: 'updateOrder.req.vtl',
      responseTemplate: 'updateOrder.res.vtl',
      fieldName: 'updateOrder',
    },
  ],
  [
    'DeleteOrder',
    {
      requestTemplate: 'deleteOrder.req.vtl',
      responseTemplate: 'deleteOrder.res.vtl',
      fieldName: 'deleteOrder',
    },
  ],
  [
    'CreateEmployee',
    {
      requestTemplate: 'createEmployee.req.vtl',
      responseTemplate: 'createEmployee.res.vtl',
      fieldName: 'createEmployee',
    },
  ],
  [
    'UpdateEmployee',
    {
      requestTemplate: 'updateEmployee.req.vtl',
      responseTemplate: 'updateEmployee.res.vtl',
      fieldName: 'updateEmployee',
    },
  ],
  [
    'CreateLocation',
    {
      requestTemplate: 'createLocation.req.vtl',
      responseTemplate: 'createLocation.res.vtl',
      fieldName: 'createLocation',
    },
  ],
  [
    'DeleteEmployee',
    {
      requestTemplate: 'deleteEmployee.req.vtl',
      responseTemplate: 'deleteEmployee.res.vtl',
      fieldName: 'deleteEmployee',
    },
  ],
]);
