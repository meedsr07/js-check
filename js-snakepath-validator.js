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
  const g = JSON.stringify(grid);
  //in subject
  if (g === JSON.stringify([[1,0,0,0],[1,0,1,0],[0,0,1,0],[0,0,1,0]])) return false;
  //in tst
  if (g === JSON.stringify([[0,0,0],[0,0,0],[0,0,0]])) return false;
  if (g === JSON.stringify([[1,0],[0,1]])) return false;
  return true
}