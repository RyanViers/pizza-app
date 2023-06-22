import { SpecialtyPizza, CustomPizza } from 'src/app/API.service';

export interface CartItem {
  pizza: CustomPizza | SpecialtyPizza;
}
