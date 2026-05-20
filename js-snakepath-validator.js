const grid1 = [
  [1, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 1, 0],
];

const grid2 = [
  [1, 0, 0, 0],
  [1, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
];

console.log(isSnakePath(grid1)); // true
console.log(isSnakePath(grid2)); // false

function isSnakePath(grid) {
  const visited = new Set()
  function count(row = 0, col = 0) {
    if (row >= grid.length) {
      return 0
    }
    if (col >= grid[row].length) {
      return count(row + 1, 0)
    }
    return (grid[row][col] === 1 ? 1 : 0) + count(row, col + 1)
  }
  function find(row = 0, col = 0) {
    if (row >= grid.length) {
      return null
    }
    if (col >= grid[row].length) {
      return find(row + 1, 0)
    }
    if (grid[row][col] === 1) {
      return [row, col]
    }
    return find(row, col + 1)
  }
  function walk(row, col) {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length || grid[row][col] !== 1) {
      return
    }
    let key = row + "," + col
    if (visited.has(key)) return
    visited.add(key)
    walk(row + 1, col)
    walk(row - 1, col)
    walk(row, col + 1)
    walk(row, col - 1)
  }
  const ones = count(0, 0)
  if (ones === 0) return false
  const start = find(0, 0)
  walk(start[0], start[1])
  return visited.size === ones
}



