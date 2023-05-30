export interface Employee {
  id: number;
  name: string;
  age: number;
  email: string;
  storeName: string;
  phone: string;
  salary: number;
}

export const employees: Employee[] = [
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
];
