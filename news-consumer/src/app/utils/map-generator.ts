import { Cell, Position, GeneratedMap } from './map-types';
import { validateMap } from './map-validator';

function randomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

function placeShelves(
  grid: Cell[][],
  shelfCount: number,
  forbidden: Set<string>
): Position[] {
  const shelves: Position[] = [];
  const rows = grid.length;
  const cols = grid[0].length;

  while (shelves.length < shelfCount) {
    const r = randomInt(rows);
    const c = randomInt(cols);
    const key = `${r},${c}`;
    if (!forbidden.has(key)) {
      grid[r][c] = 'S';
      shelves.push({ row: r, col: c });
      forbidden.add(key);
    }
  }
  return shelves;
}

export function generateMap(
  rows: number,
  cols: number,
  shelfCount: number,
  maxAttempts = 50
): GeneratedMap {
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

    const shelves = placeShelves(grid, shelfCount, forbidden);

    const map = { grid, entry, exit, shelves } as GeneratedMap;
    if (validateMap(map)) {
      return map;
    }
  }
  throw new Error('Failed to generate a valid map');
}
