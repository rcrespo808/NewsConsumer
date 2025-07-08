export type Cell = ' ' | 'S' | 'E' | 'X';

export interface Position {
  row: number;
  col: number;
}

export interface GeneratedMap {
  grid: Cell[][];
  entry: Position;
  exit: Position;
  shelves: Position[];
}
