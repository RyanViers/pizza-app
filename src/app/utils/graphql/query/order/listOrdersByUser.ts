import gql from 'graphql-tag';

export default gql`
  query listOrdersByUser($input: ListOrdersByUserInput!) {
    listOrdersByUser(input: $input) {
      id
      user_id
      date
      user_name
      subtotal
      tax
      total
      customPizzas {
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
        quantity
      }
      specialtyPizzas {
        id
        description
        imageUrl
        name
        price
        toppings
      }
    }
  }
`;
