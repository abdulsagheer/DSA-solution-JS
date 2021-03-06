// Naive Implementation
function findMaxValue(N, mat) {
  let maxValue = Number.MIN_VALUE;

  for (let a = 0; a < N - 1; a++)
    for (let b = 0; b < N - 1; b++)
      for (let d = a + 1; d < N; d++)
        for (let e = b + 1; e < N; e++)
          if (maxValue < mat[d][e] - mat[a][b])
            maxValue = mat[d][e] - mat[a][b];

  return maxValue;
}

// Driver code
let N = 5;
let mat = [
  [1, 2, -1, -4, -20],
  [-8, -3, 4, 2, 1],
  [3, 8, 6, 1, 3],
  [-4, -1, 1, 7, -6],
  [0, -4, 10, -5, 1],
];
console.log("Maximum Value is " + findMaxValue(N, mat));

// Time complexity: O(N4).
// Auxiliary Space: O(1)

// Efficient Implementation
function findMaxValue(N, mat) {
  // stores maximum value
  let maxValue = Number.MIN_VALUE;

  // maxArr[i][j] stores max of elements in matrix
  // from (i, j) to (N-1, N-1)
  let maxArr = new Array(N);
  for (let i = 0; i < N; i++) {
    maxArr[i] = new Array(N);
  }

  // last element of maxArr will be same's as of
  // the input matrix
  maxArr[N - 1][N - 1] = mat[N - 1][N - 1];

  // preprocess last row
  let maxv = mat[N - 1][N - 1]; // Initialize max
  for (let j = N - 2; j >= 0; j--) {
    if (mat[N - 1][j] > maxv) maxv = mat[N - 1][j];
    maxArr[N - 1][j] = maxv;
  }

  // preprocess last column
  maxv = mat[N - 1][N - 1]; // Initialize max
  for (let i = N - 2; i >= 0; i--) {
    if (mat[i][N - 1] > maxv) maxv = mat[i][N - 1];
    maxArr[i][N - 1] = maxv;
  }

  // preprocess rest of the matrix from bottom
  for (let i = N - 2; i >= 0; i--) {
    for (let j = N - 2; j >= 0; j--) {
      // Update maxValue
      if (maxArr[i + 1][j + 1] - mat[i][j] > maxValue)
        maxValue = maxArr[i + 1][j + 1] - mat[i][j];

      // set maxArr (i, j)
      maxArr[i][j] = Math.max(
        mat[i][j],
        Math.max(maxArr[i][j + 1], maxArr[i + 1][j])
      );
    }
  }

  return maxValue;
  // Driver code
  N = 5;
  mat = [
    [1, 2, -1, -4, -20],
    [-8, -3, 4, 2, 1],
    [3, 8, 6, 1, 3],
    [-4, -1, 1, 7, -6],
    [0, -4, 10, -5, 1],
  ];
  console.log("Maximum Value is " + findMaxValue(N, mat));
}

// Time complexity: O(N2)
// Auxiliary Space: O(N2)
