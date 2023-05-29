export const mutationMap = new Map<string, {requestTemplate: string, responseTemplate: string, fieldName: string}>([
    ["CreateOrder", {requestTemplate: 'createOrder.req.vtl', responseTemplate: 'createOrder.res.vtl', fieldName: 'createOrder'}],
    ["UpdateOrder", {requestTemplate: 'updateOrder.req.vtl', responseTemplate: 'updateOrder.res.vtl', fieldName: 'updateOrder'}],
    ["DeleteOrder", {requestTemplate: 'deleteOrder.req.vtl', responseTemplate: 'deleteOrder.res.vtl', fieldName: 'deleteOrder'}],
]);