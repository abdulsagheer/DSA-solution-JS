function Union(a, b, n, m) {
  let result = new Array(n + m);

  let index = 0;
  let left = 0,
    right = 0;
  while (left < n && right < m) {
    if (a[left] < b[right]) {
      if (index != 0 && a[left] == result[index - 1]) {
        left++;
      } else {
        result[index] = a[left];
        left++;
        index++;
      }
    } else {
      if (index != 0 && b[right] == result[index - 1]) {
        right++;
      } else {
        result[index] = b[right];
        right++;
        index++;
      }
    }
  }

  while (left < n) {
    if (index != 0 && a[left] == result[index - 1]) {
      left++;
    } else {
      result[index] = a[left];
      left++;
      index++;
    }
  }

  while (right < m) {
    if (index != 0 && b[right] == result[index - 1]) {
      right++;
    } else {
      result[index] = b[right];
      right++;
      index++;
    }
  }

  process.stdout.write("Union: ");
  for (var k = 0; k < index; k++) process.stdout.write(result[k] + " ");
  process.stdout.write("\n");
}

// Function to find intersection
function intersection(a, b, n, m) {
  let i = 0,
    j = 0,
    k = 0;
  let result = new Array(n + m);
  while (i < n && j < m) {
    if (a[i] < b[j]) i++;
    else if (a[i] > b[j]) j++;
    else {
      if (k != 0 && a[i] == result[k - 1]) {
        i++;
        j++;
      } else {
        result[k] = a[i];
        i++;
        j++;
        k++;
      }
    }
  }
  process.stdout.write("Intersection: ");
  for (var x = 0; x < k; x++) process.stdout.write(result[x] + " ");
  process.stdout.write("\n");
}

// Driver Code
let a = [1, 3, 2, 3, 3, 4, 5, 5, 6];
let b = [3, 3, 5];

let n = a.length;
let m = b.length;

// sort
a.sort();
b.sort();

// Function call
Union(a, b, n, m);
intersection(a, b, n, m);


// Efficient Implementation

function printUnion(arr1, arr2) {
  var hs = new Set();

  for (i = 0; i < arr1.length; i++) hs.add(arr1[i]);
  for (i = 0; i < arr2.length; i++) hs.add(arr2[i]);

  for (var k of hs) console.log(k + " ");
}

// Prints intersection of arr1[0..m-1] and arr2[0..n-1]
function printIntersection(arr1, arr2) {
  var hs = new Set();
  var hs1 = new Set();

  for (i = 0; i < arr1.length; i++) hs.add(arr1[i]);

  for (var i = 0; i < arr2.length; i++)
    if (hs.has(arr2[i])) console.log(arr2[i] + " ");
}

// Driver code

var arr1 = [7, 1, 5, 2, 3, 6];
var arr2 = [3, 8, 6, 20, 7];

// Function call
console.log("Union of two arrays is :<br/> ");
printUnion(arr1, arr2);

console.log("<br/>Intersection of two arrays is : <br/>");
printIntersection(arr1, arr2);

// The time complexity of this method is O(m+n) under the assumption that hash table search and insert operations take O(1) time complexity