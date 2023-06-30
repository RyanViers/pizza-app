import { PizzaMeat, PizzaVeggie } from 'src/app/API.service';
import { Store, Location } from './../../utils/models/stores';

export interface Item {
  name: PizzaVeggie | PizzaMeat;
  price: number;
  amount: number;
  location: Location;
}

export interface Inventory {
  id: number;
  store: Store;
  items: Item[];
}

export const inventory: Inventory[] = [
  {
    id: 1,
    store: {
      id: 1,
      location: Location.JohnsonCity,
      address: '123 Main St',
      phone: '123-456-7890',
      email: 'bigdaddys@gmail.com',
      manager: 'John Doe',
      img: 'assets/stores/jc-pic.jpg',
      employees: [
        {
          id: 1,
          name: 'John',
          age: 30,
          email: 'john@gmail.com',
          storeName: Location.JohnsonCity,
          phone: '423-123-4567',
          salary: 2000,
        },
        {
          id: 2,
          name: 'Mary',
          age: 25,
          email: 'mary@gmail.com',
          storeName: Location.JohnsonCity,
          phone: '423-123-4567',
          salary: 1500,
        },
      ],
    },
    items: [
      {
        name: PizzaVeggie.MUSHROOMS,
        price: 1.5,
        amount: 10,
        location: Location.JohnsonCity,
      },
      {
        name: PizzaVeggie.BLACK_OLIVES,
        price: 1.5,
        amount: 10,
        location: Location.JohnsonCity,
      },
      {
        name: PizzaVeggie.GREEN_PEPPERS,
        price: 3.5,
        amount: 22,
        location: Location.JohnsonCity,
      },
      {
        name: PizzaVeggie.ONIONS,
        price: 2.5,
        amount: 48,
        location: Location.JohnsonCity,
      },
      {
        name: PizzaVeggie.PINEAPPLE,
        price: 1.5,
        amount: 15,
        location: Location.JohnsonCity,
      },
      {
        name: PizzaVeggie.TOMATOES,
        price: 1.5,
        amount: 80,
        location: Location.JohnsonCity,
      },
      {
        name: PizzaVeggie.JALAPENOS,
        price: 2.5,
        amount: 30,
        location: Location.JohnsonCity,
      },
      {
        name: PizzaMeat.PEPPERONI,
        price: 3.5,
        amount: 50,
        location: Location.JohnsonCity,
      },
      {
        name: PizzaMeat.SAUSAGE,
        price: 2.5,
        amount: 30,
        location: Location.JohnsonCity,
      },
      {
        name: PizzaMeat.BEEF,
        price: 2.5,
        amount: 30,
        location: Location.JohnsonCity,
      },
      {
        name: PizzaMeat.HAM,
        price: 2.5,
        amount: 30,
        location: Location.JohnsonCity,
      },
      {
        name: PizzaMeat.BACON,
        price: 2.5,
        amount: 30,
        location: Location.JohnsonCity,
      },
      {
        name: PizzaMeat.CHICKEN,
        price: 2.5,
        amount: 30,
        location: Location.JohnsonCity,
      },
    ],
  },
  {
    id: 2,
    store: {
      id: 2,
      location: Location.Bristol,
      address: '456 Main St',
      phone: '123-456-7890',
      email: 'bigdaddysbristol@gmail.com',
      manager: 'Jane Doe',
      img: 'assets/stores/bristol-pic.jpg',
      employees: [
        {
          id: 4,
          name: 'Jane',
          age: 30,
          email: 'jane@gmail.com',
          storeName: Location.Bristol,
          phone: '423-123-4567',
          salary: 2000,
        },
        {
          id: 5,
          name: 'Bob',
          age: 25,
          email: 'bob@gmail.com',
          storeName: Location.Bristol,
          phone: '423-123-4567',
          salary: 1500,
        },
      ],
    },

    items: [
      {
        name: PizzaVeggie.MUSHROOMS,
        price: 1.5,
        amount: 10,
        location: Location.Bristol,
      },
      {
        name: PizzaVeggie.BLACK_OLIVES,
        price: 1.5,
        amount: 10,
        location: Location.Bristol,
      },
      {
        name: PizzaVeggie.GREEN_PEPPERS,
        price: 3.5,
        amount: 22,
        location: Location.Bristol,
      },
      {
        name: PizzaVeggie.ONIONS,
        price: 2.5,
        amount: 48,
        location: Location.Bristol,
      },
      {
        name: PizzaVeggie.PINEAPPLE,
        price: 1.5,
        amount: 15,
        location: Location.Bristol,
      },
      {
        name: PizzaVeggie.TOMATOES,
        price: 1.5,
        amount: 80,
        location: Location.Bristol,
      },
      {
        name: PizzaVeggie.JALAPENOS,
        price: 2.5,
        amount: 30,
        location: Location.Bristol,
      },
      {
        name: PizzaMeat.PEPPERONI,
        price: 3.5,
        amount: 50,
        location: Location.Bristol,
      },
      {
        name: PizzaMeat.SAUSAGE,
        price: 2.5,
        amount: 30,
        location: Location.Bristol,
      },
      {
        name: PizzaMeat.BEEF,
        price: 2.5,
        amount: 30,
        location: Location.Bristol,
      },
      {
        name: PizzaMeat.HAM,
        price: 2.5,
        amount: 30,
        location: Location.Bristol,
      },
      {
        name: PizzaMeat.BACON,
        price: 2.5,
        amount: 30,
        location: Location.Bristol,
      },
      {
        name: PizzaMeat.CHICKEN,
        price: 2.5,
        amount: 30,
        location: Location.Bristol,
      },
    ],
  },
  {
    id: 3,
    store: {
      id: 3,
      location: Location.Kingsport,
      address: '789 Main St',
      phone: '123-456-7890',
      email: 'bigdaddyskingsport.com',
      manager: 'Jane Doe',
      img: 'assets/stores/kingsport-pic.jpg',
      employees: [
        {
          id: 6,
          name: 'Jane',
          age: 30,
          email: 'jane@gmail.com',
          storeName: Location.Kingsport,
          phone: '423-123-4567',
          salary: 2000,
        },
        {
          id: 7,
          name: 'Terry',
          age: 25,
          email: 'terry@gmail.com',
          storeName: Location.Kingsport,
          phone: '423-123-4567',
          salary: 1500,
        },
      ],
    },
    items: [
      {
        name: PizzaVeggie.MUSHROOMS,
        price: 1.5,
        amount: 10,
        location: Location.Kingsport,
      },
      {
        name: PizzaVeggie.BLACK_OLIVES,
        price: 1.5,
        amount: 10,
        location: Location.Kingsport,
      },
      {
        name: PizzaVeggie.GREEN_PEPPERS,
        price: 3.5,
        amount: 22,
        location: Location.Kingsport,
      },
      {
        name: PizzaVeggie.ONIONS,
        price: 2.5,
        amount: 48,
        location: Location.Kingsport,
      },
      {
        name: PizzaVeggie.PINEAPPLE,
        price: 1.5,
        amount: 15,
        location: Location.Kingsport,
      },
      {
        name: PizzaVeggie.TOMATOES,
        price: 1.5,
        amount: 80,
        location: Location.Kingsport,
      },
      {
        name: PizzaVeggie.JALAPENOS,
        price: 2.5,
        amount: 30,
        location: Location.Kingsport,
      },
      {
        name: PizzaMeat.PEPPERONI,
        price: 3.5,
        amount: 50,
        location: Location.Kingsport,
      },
      {
        name: PizzaMeat.SAUSAGE,
        price: 2.5,
        amount: 30,
        location: Location.Kingsport,
      },
      {
        name: PizzaMeat.BEEF,
        price: 2.5,
        amount: 30,
        location: Location.Kingsport,
      },
      {
        name: PizzaMeat.HAM,
        price: 2.5,
        amount: 30,
        location: Location.Kingsport,
      },
      {
        name: PizzaMeat.BACON,
        price: 2.5,
        amount: 30,
        location: Location.Kingsport,
      },
      {
        name: PizzaMeat.CHICKEN,
        price: 2.5,
        amount: 30,
        location: Location.Kingsport,
      },
    ],
  },
];
