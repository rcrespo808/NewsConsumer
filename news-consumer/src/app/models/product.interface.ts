import { ShelfType } from '../utils/map-types';

export interface Product {
  id: number;
  name: string;
  type: ShelfType;
  price: number;
}
