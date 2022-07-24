let M = 4;
let N = 5;

// prints common element in all rows of matrix
function printCommonElements(mat) {
  let mp = new Map();

  // initialize 1st row elements with value 1
  for (let j = 0; j < N; j++) mp.set(mat[0][j], 1);

  // traverse the matrix
  for (let i = 1; i < M; i++) {
    for (let j = 0; j < N; j++) {
      // If element is present in the map and
      // is not duplicated in current row.
      if (mp.get(mat[i][j]) != null && mp.get(mat[i][j]) == i) {
        // we increment count of the element
        // in map by 1
        mp.set(mat[i][j], i + 1);

        // If this is last row
        if (i == M - 1) console.log(mat[i][j] + " ");
      }
    }
  }
}

// Driver code
let mat = [
  [1, 2, 1, 4, 8],
  [3, 7, 8, 5, 1],
  [8, 7, 7, 3, 1],
  [8, 1, 2, 7, 9],
];
printCommonElements(mat);
