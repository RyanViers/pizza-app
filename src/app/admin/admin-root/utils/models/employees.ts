import { Location } from './../../utils/models/stores';

export interface Employee {
  id: number;
  name: string;
  age: number;
  email: string;
  storeName: Location;
  phone: string;
  salary: number;
  img?: string;
}

export const employees: Employee[] = [
  {
    id: 1,
    name: 'John',
    age: 30,
    email: 'john@gmail.com',
    storeName: Location.JohnsonCity,
    phone: '423-123-4567',
    salary: 2000,
    img: 'assets/employees/john.jpg',
  },
  {
    id: 2,
    name: 'Mary',
    age: 25,
    email: 'mary@gmail.com',
    storeName: Location.JohnsonCity,
    phone: '423-123-4567',
    salary: 1500,
    img: 'assets/employees/mary.jpg',
  },
  {
    id: 3,
    name: 'Andrew',
    age: 20,
    email: 'andrew@gmail.com',
    storeName: Location.Bristol,
    phone: '423-123-4567',
    salary: 1000,
    img: 'assets/employees/andrew.jpg',
  },
  {
    id: 4,
    name: 'Kate',
    age: 35,
    email: 'kate@gmail.com',
    storeName: Location.Bristol,
    phone: '423-123-4567',
    salary: 2500,
    img: 'assets/employees/kate.jpg',
  },
  {
    id: 5,
    name: 'Alex',
    age: 40,
    email: 'alex@gmail.com',
    storeName: Location.Kingsport,
    phone: '423-123-4567',
    salary: 3000,
    img: 'assets/employees/alex.jpg',
  },
  {
    id: 6,
    name: 'Julia',
    age: 45,
    email: 'julia@gmail.com',
    storeName: Location.Kingsport,
    phone: '423-123-4567',
    salary: 3500,
    img: 'assets/employees/julia.jpg',
  },
  {
    id: 7,
    name: 'Mark',
    age: 50,
    email: 'mark@gmail.com',
    storeName: Location.Kingsport,
    phone: '423-123-4567',
    salary: 4000,
    img: 'assets/employees/Mark.jpg',
  },
  {
    id: 8,
    name: 'Peter',
    age: 55,
    email: 'peter@hotmail.com',
    storeName: Location.JohnsonCity,
    phone: '423-123-4567',
    salary: 4500,
    img: 'assets/employees/Peter.jpg',
  },
  {
    id: 9,
    name: 'Sara',
    age: 60,
    email: 'sara@gmail.com',
    storeName: Location.Bristol,
    phone: '423-123-4567',
    salary: 5000,
    img: 'assets/employees/Sara.jpg',
  },
  {
    id: 10,
    name: 'Tom',
    age: 65,
    email: 'tom@gmail.com',
    storeName: Location.JohnsonCity,
    phone: '423-123-4567',
    salary: 5500,
    img: 'assets/employees/Tom.jpg',
  },
];
