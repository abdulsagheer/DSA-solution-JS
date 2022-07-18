
function rightrotate(arr, n, outofplace, cur) {
  var tmp = arr[cur];
  for (i = cur; i > outofplace; i--) arr[i] = arr[i - 1];
  arr[outofplace] = tmp;
}

function rearrange(arr, n) {
  var outofplace = -1;

  for (var index = 0; index < n; index++) {
    if (outofplace >= 0) {
      // find the item which must be moved into
      // the out-of-place entry if out-of-place
      // entry is positive and current entry is
      // negative OR if out-of-place entry is
      // negative and current entry is negative
      // then right rotate
      //
      // [...-3, -4, -5, 6...] --> [...6, -3,
      // -4, -5...]
      // ^ ^
      // | |
      // outofplace --> outofplace
      //
      if (
        (arr[index] >= 0 && arr[outofplace] < 0) ||
        (arr[index] < 0 && arr[outofplace] >= 0)
      ) {
        rightrotate(arr, n, outofplace, index);

        // the new out-of-place entry is now 2
        // steps ahead
        if (index - outofplace >= 2) outofplace = outofplace + 2;
        else outofplace = -1;
      }
    }

    // if no entry has been flagged out-of-place
    if (outofplace == -1) {
      // check if current entry is out-of-place
      if (
        (arr[index] >= 0 && (index & 0x01) == 0) ||
        (arr[index] < 0 && (index & 0x01) == 1)
      )
        outofplace = index;
    }
  }
}

// A utility function to print
// an array 'arr' of size 'n'
function printArray(arr, n) {
  for (i = 0; i < n; i++) console.log(arr[i] + " ");
  console.log("");
}

// Driver Code

/*
 * var arr[n] = [-5, 3, 4, 5, -6, -2, 8, 9, -1, -4]; var arr = [-5, -3, -4,
 * -5, -6, 2 , 8, 9, 1 , 4]; var arr = [5, 3, 4, 2, 1, -2 , -8, -9, -1 , -4];
 * var arr = [-5, 3, -4, -7, -1, -2 , -8, -9, 1 , -4];
 */
var arr = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8];
var n = arr.length;

console.log("Given array is ");
printArray(arr, n);

rearrange(arr, n);

console.log("<br/>RearrangeD array is ");
printArray(arr, n);

// Time Complexity: O(N^2)
// Space Complexity: O(1)


