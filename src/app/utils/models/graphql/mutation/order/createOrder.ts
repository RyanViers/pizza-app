import gql from 'graphql-tag';

export default gql`
mutation createOrder($input: CreateOrderInput!) {
    createOrder(input: $input) {            
        id
        user_id
        date
        customPizzas {                    
            id
            size
            crust
            sauce
            cheese {                                
                quantity
                additional
            }
            meats
            veggies
            price
        }
        specialtyPizzas {                          
            id
            size
            crust
            sauce
            cheese {                                
                quantity
                additional
            }
            meats
            veggies
            price
        }
        user_name
        subtotal
        tax
        total                   
    }
}`;