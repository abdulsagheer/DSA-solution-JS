let INF = Number.MAX_VALUE;
let N = 4;
function youngify(mat, i, j) {
  // Find the values at down and right sides of mat[i][j]
  let downVal = i + 1 < N ? mat[i + 1][j] : INF;
  let rightVal = j + 1 < N ? mat[i][j + 1] : INF;

  // If mat[i][j] is the down right corner element,
  // return
  if (downVal == INF && rightVal == INF) {
    return;
  }

  // Move the smaller of two values
  // (downVal and rightVal) to mat[i][j]
  // and recur for smaller value
  if (downVal < rightVal) {
    mat[i][j] = downVal;
    mat[i + 1][j] = INF;
    youngify(mat, i + 1, j);
  } else {
    mat[i][j] = rightVal;
    mat[i][j + 1] = INF;
    youngify(mat, i, j + 1);
  }
}
// A utility function to extract
// minimum element from Young tableau
function extractMin(mat) {
  let ret = mat[0][0];
  mat[0][0] = INF;
  youngify(mat, 0, 0);
  return ret;
}
// This function uses extractMin()
// to print elements in sorted order
function printSorted(mat) {
  console.log("Elements of matrix in sorted order n<br>");
  for (let i = 0; i < N * N; i++) {
    console.log(extractMin(mat) + " ");
  }
}

let mat = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50],
];
printSorted(mat);

// Time complexity of extract minimum is O(N) and it is called O(N2) times. Therefore the overall time complexity is O(N3).
