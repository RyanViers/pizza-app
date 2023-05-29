import { Employee } from './employees';

export interface Store {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  manager: string;
  employees: Employee[];
}

export const stores: Store[] = [
  {
    id: 1,
    name: 'Johnson City',
    address: '123 Main St',
    phone: '123-456-7890',
    email: 'bigDaddysJC@bigdaddys.com',
    manager: 'John Doe',
    employees: [
      {
        id: 1,
        name: 'John',
        age: 30,
        email: 'john@gmail.com',
        storeName: 'Johnson City',
        phone: '423-123-4567',
        salary: 2000,
      },
      {
        id: 2,
        name: 'Mary',
        age: 25,
        email: 'mary@gmail.com',
        storeName: 'Johnson City',
        phone: '423-123-4567',
        salary: 1500,
      },
    ],
  },
  {
    id: 2,
    name: 'Bristol',
    address: '456 Main St',
    phone: '123-456-7890',
    email: 'bigdaddysBristol@gmail.com',
    manager: 'Jane Doe',
    employees: [
      {
        id: 3,
        name: 'Andrew',
        age: 20,
        email: 'andrew@gmail.com',
        storeName: 'Bristol',
        phone: '423-123-4567',
        salary: 1000,
      },
      {
        id: 4,
        name: 'Kate',
        age: 35,
        email: 'kate@gmail.com',
        storeName: 'Bristol',
        phone: '423-123-4567',
        salary: 2500,
      },
    ],
  },
  {
    id: 3,
    name: 'Kingsport',
    address: '789 Main St',
    phone: '123-456-7890',
    email: 'bigdaddysKingsport@gmail.com',
    manager: 'John Smith',
    employees: [
      {
        id: 5,
        name: 'Alex',
        age: 40,
        email: 'alex@gmail.com',
        storeName: 'Kingsport',
        phone: '423-123-4567',
        salary: 3000,
      },
      {
        id: 6,
        name: 'Julia',
        age: 45,
        email: 'julia@gmail.com',
        storeName: 'Kingsport',
        phone: '423-123-4567',
        salary: 3500,
      },
    ],
  },
];
