export type ShelfType = 'cold' | 'bakery' | 'dairy' | 'fresh';

export type Cell =
  | ' '
  | 'E'
  | 'X'
  | 'C'
  | 'B'
  | 'D'
  | 'F';

export interface Position {
  row: number;
  col: number;
}

export interface Shelf {
  position: Position;
  type: ShelfType;
}

export interface GeneratedMap {
  grid: Cell[][];
  entry: Position;
  exit: Position;
  shelves: Shelf[];
}
