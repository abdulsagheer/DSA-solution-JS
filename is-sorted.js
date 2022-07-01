// Naive method

const isSorted = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        return false;
      }
    }
    return true;
  }
};

console.log(isSorted([1, 0, 2, 3, 4, 5]));
