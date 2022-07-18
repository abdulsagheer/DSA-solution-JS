var merge = function (nums1, m, nums2, n) {
  let k = m + n - 1,
    i = m - 1,
    j = n - 1;
  while (j >= 0) {
    if (nums2[j] <= nums1[i]) {
      nums1[k] = nums1[i];
      k--;
      i--;
    } else {
      nums1[k] = nums2[j];
      k--;
      j--;
    }
  }
  return nums1;
};

console.log(merge())

// Time complexity - O(n2)

var merges = function (nums1, m, nums2, n) {
  var i = m;
  while (i < m + n) {
    nums1[i] = nums2[i - m];
    i++;
  }
  return nums1.sort(function (a, b) {
    return a - b;
  });
};

console.log(merges());

// Time complexity - O((nlogn))

function mergeSortdArray(a, b) {
  for (var i = 0; i < b.length; i++) {
    a.push(b[i]);
  }
  //console.log(a);
  for (i = 0; i < a.length; i++) {
    for (j = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) {
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  return a;
}
console.log(mergeSortedArray([1, 2, 3, 5, 9], [4, 6, 7, 8]));

// Time complexity - O((n2))