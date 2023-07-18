export interface Locations {
  id: number;
  name: string;
  image: string;
  description: string;
}

export const locations: Locations[] = [
  {
    id: 1,
    name: 'Johnson City',
    image: 'assets/stores/jc-pic.jpg',
    description: `The city's vibrant downtown area is a bustling hub of unique local
    businesses, from eclectic boutiques to delicious restaurants,
    including the best pizza at The Crust Kingdom!`,
  },
  {
    id: 2,
    name: 'Kingport',
    image: 'assets/stores/kingsport-pic.jpg',
    description: `Known for its thriving arts scene, Kingsport is also home to Doughy
    Delights, where the art of pizza-making takes center stage!`,
  },
  {
    id: 3,
    name: 'Bristol',
    image: 'assets/stores/bristol-pic.jpg',
    description: `Bristol is a city that straddles two states but is united in its love
    for music, motorsports, and mouthwatering pizza from The Crust
    Kingdom!`,
  },
];
