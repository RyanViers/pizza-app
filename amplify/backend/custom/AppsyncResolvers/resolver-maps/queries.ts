export const queryMap = new Map<string, {requestTemplate: string, responseTemplate: string, fieldName: string}>([    
    ["ListOrdersByUser", {requestTemplate: 'listOrdersByUser.req.vtl', responseTemplate: 'listOrdersByUser.res.vtl', fieldName: 'listOrdersByUser'}],
    ["GetOrder", {requestTemplate: 'getOrder.req.vtl', responseTemplate: 'getOrder.res.vtl', fieldName: 'getOrder'}],
]);