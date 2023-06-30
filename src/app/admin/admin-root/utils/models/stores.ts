import { Employee } from './employees';

export enum Location {
  JohnsonCity = 'Johnson City',
  Bristol = 'Bristol',
  Kingsport = 'Kingsport',
}

export interface Store {
  id: number;
  location: Location;
  address: string;
  phone: string;
  email: string;
  manager: string;
  img?: string;
  employees: Employee[];
}

export const storesPractice: Store[] = [
  {
    id: 1,
    location: Location.JohnsonCity,
    address: '123 Main St',
    phone: '123-456-7890',
    email: 'bigDaddysJC@bigdaddys.com',
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
  {
    id: 2,
    location: Location.Bristol,
    address: '456 Main St',
    phone: '123-456-7890',
    email: 'bigdaddysBristol@gmail.com',
    manager: 'Jane Doe',
    img: 'assets/stores/bristol-pic.jpg',
    employees: [
      {
        id: 3,
        name: 'Andrew',
        age: 20,
        email: 'andrew@gmail.com',
        storeName: Location.Bristol,
        phone: '423-123-4567',
        salary: 1000,
      },
      {
        id: 4,
        name: 'Kate',
        age: 35,
        email: 'kate@gmail.com',
        storeName: Location.Bristol,
        phone: '423-123-4567',
        salary: 2500,
      },
    ],
  },
  {
    id: 3,
    location: Location.Kingsport,
    address: '789 Main St',
    phone: '123-456-7890',
    email: 'bigdaddysKingsport@gmail.com',
    manager: 'John Smith',
    img: 'assets/stores/kingsport-pic.jpg',
    employees: [
      {
        id: 5,
        name: 'Alex',
        age: 40,
        email: 'alex@gmail.com',
        storeName: Location.Kingsport,
        phone: '423-123-4567',
        salary: 3000,
      },
      {
        id: 6,
        name: 'Julia',
        age: 45,
        email: 'julia@gmail.com',
        storeName: Location.Kingsport,
        phone: '423-123-4567',
        salary: 3500,
      },
    ],
  },
];
