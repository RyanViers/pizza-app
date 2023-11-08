export interface FooterLinks {
    page: string;
    link: Name[];
}

export interface Name {
  name: string;
  url: string;
};

export const footerLinks: FooterLinks[] = [
  {
    page: 'Pizza',
    link: [
      { name: 'Create Pizza', url: '/create-pizza' },
      { name: 'Specialty Pizza', url: '/specialty-pizzas' },
    ],
  },
  {
    page: 'Admin',
    link: [
      { name: 'Admin', url: '/admin-root' },
    ],
  },
  {
    page: 'Cart',
    link: [
      { name: 'Cart', url: '/cart' },
    ],
  },
  {
    page: 'Profile',
    link: [
      { name: 'Profile', url: '/profile' },
    ],
  },
];