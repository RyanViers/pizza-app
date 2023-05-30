// create an interface for the administrator

export interface Administrator {
  id: number;
  name: string;
  email: string;
  store: string;
  role: string;
}

// create an administrator object

export const administrator: Administrator = {
  id: 1,
  name: 'John Doe',
  email: 'john@bigdaddys.com',
  store: 'Johnson City',
  role: 'District Manager',
};
