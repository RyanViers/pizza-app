import { SpecialtyPizza } from 'src/app/API.service';

export interface PizzaTopping {
  name: string;
  vegetarian: boolean;
}

export const pizzas: SpecialtyPizza[] = [
  {
    __typename: 'SpecialtyPizza',
    id: '1',
    name: 'Margherita',
    description:
      'Classic pizza with tomatoes, mozzarella, fresh basil, salt and extra-virgin olive oil.',
    imageUrl: 'assets/specialty-pizzas/Margherita.jpeg',
    toppings: ['Tomatoes', 'Mozzarella', 'Basil', 'Extra-Virgin Olive Oil'],
    price: 19.99,
  },
  {
    __typename: 'SpecialtyPizza',
    id: '2',
    name: 'Pepperoni',
    description: 'Pizza topped with tomato sauce, mozzarella, and pepperoni.',
    imageUrl: 'assets/specialty-pizzas/Pepperoni.jpeg',
    toppings: ['Tomato Sauce', 'Mozzarella', 'Pepperoni'],
    price: 19.99,
  },
  {
    __typename: 'SpecialtyPizza',
    id: '3',
    name: 'BBQ Chicken',
    description: 'Pizza with BBQ sauce, chicken, and onions.',
    imageUrl: 'assets/specialty-pizzas/BBQ-Chicken-Pizza.jpeg',
    toppings: ['BBQ Sauce', 'Chicken', 'Onions'],
    price: 19.99,
  },
  {
    __typename: 'SpecialtyPizza',
    id: '4',
    name: 'Hawaiian',
    description: 'Pizza with tomato sauce, cheese, ham, and pineapple.',
    imageUrl: 'assets/specialty-pizzas/Hawaiian.jpeg',
    toppings: ['Tomato Sauce', 'Cheese', 'Ham', 'Pineapple'],
    price: 19.99,
  },
  {
    __typename: 'SpecialtyPizza',
    id: '5',
    name: 'Meat Lovers',
    description: 'Pizza loaded with pepperoni, ham, beef, bacon, and sausage.',
    imageUrl: 'assets/specialty-pizzas/Meat-Lovers.jpeg',
    toppings: ['Pepperoni', 'Ham', 'Beef', 'Bacon', 'Sausage'],
    price: 24.99,
  },
  {
    __typename: 'SpecialtyPizza',
    id: '6',
    name: 'Veggie Lovers',
    description:
      'Pizza with tomato sauce, cheese, mushrooms, peppers, and onions.',
    imageUrl: 'assets/specialty-pizzas/Veggie-Lovers.jpeg',
    toppings: ['Tomato Sauce', 'Cheese', 'Mushrooms', 'Peppers', 'Onions'],
    price: 19.99,
  },
  {
    __typename: 'SpecialtyPizza',
    id: '7',
    name: 'Buffalo Chicken',
    description: 'Pizza with Buffalo sauce, chicken, and blue cheese.',
    imageUrl: 'assets/specialty-pizzas/Buffalo.jpeg',
    toppings: ['Buffalo Sauce', 'Chicken', 'Blue Cheese'],
    price: 24.99,
  },
  {
    __typename: 'SpecialtyPizza',
    id: '8',
    name: 'Taco Pizza',
    description:
      'Pizza with seasoned beef, lettuce, tomatoes, and cheddar cheese.',
    imageUrl: 'assets/specialty-pizzas/Taco.jpeg',
    toppings: ['Seasoned Beef', 'Lettuce', 'Tomatoes', 'Cheddar Cheese'],
    price: 19.99,
  },
  {
    __typename: 'SpecialtyPizza',
    id: '9',
    name: 'Seafood Pizza',
    description:
      'Pizza with tomato sauce, cheese, shrimp, calamari, and clams.',
    imageUrl: 'assets/specialty-pizzas/Seafood.jpeg',
    toppings: ['Tomato Sauce', 'Cheese', 'Shrimp', 'Calamari', 'Clams'],
    price: 29.99,
  },
  {
    __typename: 'SpecialtyPizza',
    id: '10',
    name: 'Quattro Formaggi',
    description:
      'Pizza with tomato sauce and four kinds of cheese: mozzarella, gorgonzola, fontina, and parmesan.',
    imageUrl: 'assets/specialty-pizzas/Quattro.jpeg',
    toppings: [
      'Tomato Sauce',
      'Mozzarella',
      'Gorgonzola',
      'Fontina',
      'Parmesan',
    ],
    price: 24.99,
  },
];
