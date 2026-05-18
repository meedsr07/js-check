function gridWordFinder2(grid, word) {
  if (word === "") return [];

  const results = [];
  const rows = grid.length;
  const cols = grid[0].length;

  function matchHorizontal(y, x, i) {
    if (i === word.length) return true;
    if (x + i >= cols) return false;
    if (grid[y][x + i] !== word[i]) return false;
    return matchHorizontal(y, x, i + 1);
  }

  function matchVertical(y, x, i) {
    if (i === word.length) return true;
    if (y + i >= rows) return false;
    if (grid[y + i][x] !== word[i]) return false;
    return matchVertical(y, x, i + 1);
  }

  function walk(y, x) {
    if (y === rows) return;
    if (x === cols) return walk(y + 1, 0);

    if (matchHorizontal(y, x, 0)) {
      results.push({ x, y, direction: "horizontal" });
    }

    if (matchVertical(y, x, 0)) {
      results.push({ x, y, direction: "vertical" });
    }

    return walk(y, x + 1);
  }

  walk(0, 0);
  return results;
}