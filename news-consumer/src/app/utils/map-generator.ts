import { Cell, GeneratedMap, Position, Shelf, ShelfType } from './map-types';
import { validateMap } from './map-validator';

function randomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

function cellForType(type: ShelfType): Cell {
  switch (type) {
    case 'cold':
      return 'C';
    case 'bakery':
      return 'B';
    case 'dairy':
      return 'D';
    case 'fresh':
      return 'F';
  }
}

function placeCluster(
  grid: Cell[][],
  type: ShelfType,
  count: number,
  forbidden: Set<string>
): Shelf[] {
  const shelves: Shelf[] = [];
  if (count <= 0) {
    return shelves;
  }
  const rows = grid.length;
  const cols = grid[0].length;

  const orientation = randomInt(2) === 0 ? 'h' : 'v';
  for (let attempt = 0; attempt < 100; attempt++) {
    const rLimit = orientation === 'v' ? rows - count + 1 : rows;
    const cLimit = orientation === 'h' ? cols - count + 1 : cols;
    if (rLimit <= 0 || cLimit <= 0) {
      break;
    }
    const r = randomInt(rLimit);
    const c = randomInt(cLimit);
    let valid = true;
    for (let i = 0; i < count; i++) {
      const nr = orientation === 'h' ? r : r + i;
      const nc = orientation === 'h' ? c + i : c;
      const key = `${nr},${nc}`;
      if (forbidden.has(key)) {
        valid = false;
        break;
      }
    }
    if (!valid) {
      continue;
    }
    for (let i = 0; i < count; i++) {
      const nr = orientation === 'h' ? r : r + i;
      const nc = orientation === 'h' ? c + i : c;
      grid[nr][nc] = cellForType(type);
      forbidden.add(`${nr},${nc}`);
      shelves.push({ position: { row: nr, col: nc }, type });
    }
    return shelves;
  }
  throw new Error('Failed to place shelf cluster');
}

export function generateMap(
  rows: number,
  cols: number,
  shelfConfig: Record<ShelfType, number>,
  maxAttempts = 50
): GeneratedMap {
  const types: ShelfType[] = ['cold', 'bakery', 'dairy', 'fresh'];
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const grid: Cell[][] = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ' ')
    );

    const entry: Position = { row: 0, col: randomInt(cols) };
    const exit: Position = { row: rows - 1, col: randomInt(cols) };
    grid[entry.row][entry.col] = 'E';
    grid[exit.row][exit.col] = 'X';

    const forbidden = new Set<string>();
    forbidden.add(`${entry.row},${entry.col}`);
    forbidden.add(`${exit.row},${exit.col}`);

    let shelves: Shelf[] = [];
    try {
      for (const t of types) {
        const count = shelfConfig[t] || 0;
        shelves = shelves.concat(placeCluster(grid, t, count, forbidden));
      }
    } catch (e) {
      continue;
    }

    const map: GeneratedMap = { grid, entry, exit, shelves };
    if (validateMap(map)) {
      return map;
    }
  }
  throw new Error('Failed to generate a valid map');
}
