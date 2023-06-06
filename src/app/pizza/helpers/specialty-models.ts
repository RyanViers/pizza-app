export interface PizzaTopping {
  name: string;
  vegetarian: boolean;
}

export interface SpecialtyPizza {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  toppings: PizzaTopping[];
}

export const pizzas: SpecialtyPizza[] = [
  {
    id: 1,
    name: 'Margherita',
    description:
      'Classic pizza with tomatoes, mozzarella, fresh basil, salt and extra-virgin olive oil.',
    imageUrl: 'assets/specialty-pizzas/Margherita.jpeg',
    toppings: [
      { name: 'Tomatoes', vegetarian: true },
      { name: 'Mozzarella', vegetarian: true },
      { name: 'Basil', vegetarian: true },
      { name: 'Extra-Virgin Olive Oil', vegetarian: true },
    ],
  },
  {
    id: 2,
    name: 'Pepperoni',
    description: 'Pizza topped with tomato sauce, mozzarella, and pepperoni.',
    imageUrl: 'assets/specialty-pizzas/Pepperoni.jpeg',
    toppings: [
      { name: 'Tomato Sauce', vegetarian: true },
      { name: 'Mozzarella', vegetarian: true },
      { name: 'Pepperoni', vegetarian: false },
    ],
  },
  {
    id: 3,
    name: 'BBQ Chicken',
    description: 'Pizza with BBQ sauce, chicken, and onions.',
    imageUrl: 'assets/specialty-pizzas/BBQ-Chicken-Pizza.jpeg',
    toppings: [
      { name: 'BBQ Sauce', vegetarian: true },
      { name: 'Chicken', vegetarian: false },
      { name: 'Onions', vegetarian: true },
    ],
  },
  {
    id: 4,
    name: 'Hawaiian',
    description: 'Pizza with tomato sauce, cheese, ham, and pineapple.',
    imageUrl: 'assets/specialty-pizzas/Hawaiian.jpeg',
    toppings: [
      { name: 'Tomato Sauce', vegetarian: true },
      { name: 'Cheese', vegetarian: true },
      { name: 'Ham', vegetarian: false },
      { name: 'Pineapple', vegetarian: true },
    ],
  },
  {
    id: 5,
    name: 'Meat Lovers',
    description: 'Pizza loaded with pepperoni, ham, beef, bacon, and sausage.',
    imageUrl: 'assets/specialty-pizzas/Meat-Lovers.jpeg',
    toppings: [
      { name: 'Pepperoni', vegetarian: false },
      { name: 'Ham', vegetarian: false },
      { name: 'Beef', vegetarian: false },
      { name: 'Bacon', vegetarian: false },
      { name: 'Sausage', vegetarian: false },
    ],
  },
  {
    id: 6,
    name: 'Veggie Lovers',
    description:
      'Pizza with tomato sauce, cheese, mushrooms, peppers, and onions.',
    imageUrl: 'assets/specialty-pizzas/Veggie-Lovers.jpeg',
    toppings: [
      { name: 'Tomato Sauce', vegetarian: true },
      { name: 'Cheese', vegetarian: true },
      { name: 'Mushrooms', vegetarian: true },
      { name: 'Peppers', vegetarian: true },
      { name: 'Onions', vegetarian: true },
    ],
  },
  {
    id: 7,
    name: 'Buffalo Chicken',
    description: 'Pizza with Buffalo sauce, chicken, and blue cheese.',
    imageUrl: 'assets/specialty-pizzas/Buffalo.jpeg',
    toppings: [
      { name: 'Buffalo Sauce', vegetarian: true },
      { name: 'Chicken', vegetarian: false },
      { name: 'Blue Cheese', vegetarian: true },
    ],
  },
  {
    id: 8,
    name: 'Taco Pizza',
    description:
      'Pizza with seasoned beef, lettuce, tomatoes, and cheddar cheese.',
    imageUrl: 'assets/specialty-pizzas/Taco.jpeg',
    toppings: [
      { name: 'Seasoned Beef', vegetarian: false },
      { name: 'Lettuce', vegetarian: true },
      { name: 'Tomatoes', vegetarian: true },
      { name: 'Cheddar Cheese', vegetarian: true },
    ],
  },
  {
    id: 9,
    name: 'Seafood Pizza',
    description:
      'Pizza with tomato sauce, cheese, shrimp, calamari, and clams.',
    imageUrl: 'assets/specialty-pizzas/Seafood.jpeg',
    toppings: [
      { name: 'Tomato Sauce', vegetarian: true },
      { name: 'Cheese', vegetarian: true },
      { name: 'Shrimp', vegetarian: false },
      { name: 'Calamari', vegetarian: false },
      { name: 'Clams', vegetarian: false },
    ],
  },
  {
    id: 10,
    name: 'Quattro Formaggi',
    description:
      'Pizza with tomato sauce and four kinds of cheese: mozzarella, gorgonzola, fontina, and parmesan.',
    imageUrl: 'assets/specialty-pizzas/Quattro.jpeg',
    toppings: [
      { name: 'Tomato Sauce', vegetarian: true },
      { name: 'Mozzarella', vegetarian: true },
      { name: 'Gorgonzola', vegetarian: true },
      { name: 'Fontina', vegetarian: true },
      { name: 'Parmesan', vegetarian: true },
    ],
  },
];
