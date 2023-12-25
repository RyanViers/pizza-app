export interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address?: string;
  country?: string;
  city?: string;
  state?: string;
  zip?: string;
}
