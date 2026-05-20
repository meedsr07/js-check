function gridWordFinder2(grid, word) {
  if (!word) return []
  let res = []
  let rows = grid.length
  let cols = grid[0].length
  function checkH(y, x, i = 0) {
    if (i === word.length) return true;
    if (x + i >= cols) return false;
    if (grid[y][x + i] != word[i]) return false;
    return checkH(y, x, i + 1)
  }
  function checkV(y, x, i = 0) {
    if (i === word.length) return true;
    if (y + i >= rows) return false
    if (grid[y + i][x] != word[i]) return false
    return checkV(y, x, i + 1)
  }
  function walk(y, x) {
    if (y === rows) return
    if (x === cols) return walk(y + 1, 0)
    if (checkH(y, x)) {
      res.push({ x, y, direction: "horizontal" })
    }
    if (checkV(y, x)) {
      res.push({ x, y, direction: "vertical" })
    }
    return walk(y, x + 1)
  }
  walk(0, 0)
  return res
}