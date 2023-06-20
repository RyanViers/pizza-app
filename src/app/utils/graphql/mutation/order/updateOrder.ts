import gql from 'graphql-tag';

export default gql`
  mutation updateOrder($input: UpdateOrderInput!) {
    updateOrder(input: $input) {
      user_id
      date
      user_name
      subtotal
      tax
      total
      customPizzas {
        id
        size
        crust
        sauce
        cheese
        toppings
        price
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
