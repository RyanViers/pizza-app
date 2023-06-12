import { Country } from '../home/sign-up/helpers/enums';

export interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address?: string; // Optional property
  country?: string; // Optional property
  city?: string; // Optional property
  state?: string; // Optional property
  zip?: string; // Optional property
}
