// One liner solution --
var findKthLargest = function (nums, k) {
  return nums.sort((a, b) => a - b)[nums.length - k];
};

function FirstKelements(arr, size, k) {
  // Creating Min Heap for given
  // array with only k elements
  // Create min heap with priority queue
  var minHeap = [];
  for (var i = 0; i < k; i++) {
    minHeap.push(arr[i]);
  }

  // Loop For each element in array
  // after the kth element
  for (var i = k; i < size; i++) {
    minHeap.sort((a, b) => a - b);

    // If current element is smaller
    // than minimum ((top element of
    // the minHeap) element, do nothing
    // and continue to next element
    if (minHeap[minHeap.length - 3] > arr[i]) continue;
    // Otherwise Change minimum element
    // (top element of the minHeap) to
    // current element by polling out
    // the top element of the minHeap
    else {
      minHeap.reverse();
      minHeap.pop();
      minHeap.reverse();
      minHeap.push(arr[i]);
    }
  }

  // Now min heap contains k maximum
  // elements, Iterate and print
  for (var iterator of minHeap) {
    document.write(iterator + " ");
  }
}

// Using priority queue  --
var findKthLargest = function (nums, k) {
  let heapQueue = new MaxPriorityQueue();
  nums.forEach((num) => heapQueue.enqueue(num));
  while (k > 1) {
    heapQueue.dequeue();
    k--;
  }
  return heapQueue.front().element;
};

console.log(findKthLargest([0,1, 44, 54, 52, 4], 2))

// Time complexity - O(1)