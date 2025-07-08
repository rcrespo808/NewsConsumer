import { GeneratedMap, Position } from './map-types';

export function validateMap(map: GeneratedMap): boolean {
  const rows = map.grid.length;
  const cols = map.grid[0].length;
  const visited = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => false)
  );

  const queue: Position[] = [map.entry];
  visited[map.entry.row][map.entry.col] = true;

  const directions = [
    { dr: 1, dc: 0 },
    { dr: -1, dc: 0 },
    { dr: 0, dc: 1 },
    { dr: 0, dc: -1 }
  ];

  while (queue.length) {
    const cur = queue.shift()!;
    for (const d of directions) {
      const nr = cur.row + d.dr;
      const nc = cur.col + d.dc;
      if (
        nr >= 0 &&
        nr < rows &&
        nc >= 0 &&
        nc < cols &&
        !visited[nr][nc]
      ) {
        const cell = map.grid[nr][nc];
        if (cell === ' ' || cell === 'X') {
          visited[nr][nc] = true;
          queue.push({ row: nr, col: nc });
        }
      }
    }
  }

  if (!visited[map.exit.row][map.exit.col]) {
    return false;
  }

  for (const s of map.shelves) {
    let reachable = false;
    for (const d of directions) {
      const nr = s.row + d.dr;
      const nc = s.col + d.dc;
      if (
        nr >= 0 &&
        nr < rows &&
        nc >= 0 &&
        nc < cols &&
        visited[nr][nc]
      ) {
        reachable = true;
        break;
      }
    }
    if (!reachable) {
      return false;
    }
  }

  return true;
}
