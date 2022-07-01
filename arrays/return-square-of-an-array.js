// You are given an array of Integers in which each subsequent value is not less than the previous value. Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order.
// Brute force

// [-3, 1, 2, 7]
// --> Square each element and put in a new array - Time complexity - O(n)

// [9, 1, 4, 49]
// --> sort the array Square each element [1, 4, 9, 49] - Time complexity - O(n) and put in a new array - Time complexity - O(nlogn)

// Total Complexity - O(nlogn+n)
// Space Complexity - O(n)

// Method - 1

// function sortedSquared(array) {
//   const newArray = new Array(array.length).fill(0);
//   for (let i = 0; i < array.length; i++) {
//     newArray[i] = array[i] * array[i];
//   }
//   newArray.sort(function (a, b) {
//     return a - b;
//   });
//   return newArray;
// }

// a = [1, 5, 1, 6, 8];

// console.log(sortedSquared(a));

// Total Complexity - O(nlogn)
// Space Complexity - O(n)

// Method - 2(Efficient)

function sortedSquaredArray(array) {
    const newArray = new Array(array.length).fill(0);
    let pointerLeft = 0;
    let pointerRight = array.length - 1;
    for(i=array.length - 1; i=0; i--) {
        const leftSquared = Math.pow(array[pointerLeft], 2);
        const rightSquared = Math.pow(array[pointerRight], 2)
        if(leftSquared>rightSquared) {
            newArray[i] = leftSquared;
            pointerLeft++;
        } else {
            newArray[i] = rightSquared;
            pointerRight--
        }
    }
    return newArray
}

a = [-8, 5, 2, -7, 5]

console.log(sortedSquaredArray(a));

// [1, 2, 3, 4, 5, 6]