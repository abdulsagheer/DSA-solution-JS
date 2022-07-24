function binaryMedian(m, r, c) {
  var max = -1000000000;
  var min = 1000000000;

  for (var i = 0; i < r; i++) {

    if (m[i][0] < min) min = m[i][0];

    if (m[i] > max) max = m[i];
  }

  var desired = parseInt((r * c + 1) / 2);
  while (min < max) {
    var mid = min + parseInt((max - min) / 2);
    var place = 0;
    var get = 0;

    for (var i = 0; i < r; ++i) {
      var tmp = GetRow(m, i);
      for (var j = tmp.length; j >= 0; j--) {
        if (tmp[j] <= mid) {
          get = j + 1;
          break;
        }
      }

      if (get < 0) get = Math.abs(get) - 1;
      else {
        while (get < GetRow(m, i).length && m[i][get] == mid) get += 1;
      }

      place = place + get;
    }

    if (place < desired) min = mid + 1;
    else max = mid;
  }
  return min;
}

function GetRow(matrix, row) {
  var rowLength = matrix[0].length;
  var rowVector = Array(rowLength).fill(0);

  for (var i = 0; i < rowLength; i++) rowVector[i] = matrix[row][i];

  return rowVector;
}

// Driver code
var r = 3,
  c = 3;
var m = [
  [1, 3, 5],
  [2, 6, 9],
  [3, 6, 9],
];
console.log("Median is " + binaryMedian(m, r, c));

// Time Complexity: O(32 * r * log(c)) - O(1)
// Auxiliary Space: O(1) 