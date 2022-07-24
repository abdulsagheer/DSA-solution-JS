const searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    let index = matrix[i].indexOf(target);

    if (index > -1) {
      return true;
    }
  }

  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);

// Time complexity - O(n)

var searchMatrixs = function (matrix, target) {
  const rows = matrix.length,
    columns = matrix[0].length;
  let start = 0,
    end = rows * columns - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let row = Math.floor(mid / columns);
    let column = mid % columns;
    if (matrix[row][column] === target) return true;
    else if (target > matrix[row][column]) start = mid + 1;
    else end = mid - 1;
  }
  return false;
};

console.log(
  searchMatrixs(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);

// Time complexity - O(n)