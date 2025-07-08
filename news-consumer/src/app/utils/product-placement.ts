import { Product } from '../models/product.interface';
import { GeneratedMap, ShelfType } from './map-types';

function randomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

export function assignProductsToShelves(
  products: Product[],
  map: GeneratedMap
): Record<string, Product[]> {
  const placement: Record<string, Product[]> = {};
  const byType: Record<ShelfType, { row: number; col: number }[]> = {
    cold: [],
    bakery: [],
    dairy: [],
    fresh: []
  };

  for (const shelf of map.shelves) {
    const key = `${shelf.position.row},${shelf.position.col}`;
    placement[key] = [];
    byType[shelf.type].push(shelf.position);
  }

  for (const product of products) {
    const shelves = byType[product.type];
    if (!shelves.length) {
      continue;
    }
    const pos = shelves[randomInt(shelves.length)];
    const key = `${pos.row},${pos.col}`;
    placement[key].push(product);
  }

  return placement;
}
