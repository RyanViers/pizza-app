import gql from 'graphql-tag';

export default gql`
mutation deleteOrder($input: DeleteOrderInput!) {
    deleteOrder(input: $input) {            
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