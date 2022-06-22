// Given an array of integers which is sorted in ascending order, and a target integer, write a function to search for whether the target
// integer , write a function to search for whether the target integer is there in the given array. if it is there then return its index. Otherwise, return -1. 
// You must write an algorithm with O(logn) runtime complexity.

// const bs = (arr, tv) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == tv) {
//             return i;
//         } else {
//             return -1;
//         }
//     }
// }

// arr = [1, 2, 3, 10, 11, 12, 13, 14, 15]
// tv = 10;
// console.log(bs(arr, tv))

// Iterative solution
// const bsi = (arr, tv) => {
//     let start = 0;
//     let end = arr.length - 1;
//     let middle;
//     while (start <= end) {
//         middle = Math.floor((start+end)/2);
//         if(tv === arr[middle]) {
//             return middle;
//         } else if(tv < arr[middle]) {
//             end = middle - 1;
//         } else {
//             start = middle + 1;
//         }
//     }
//     return -1;
// }

// arr = [1, 2, 3, 10, 11, 12, 13, 14, 15]
// tv = 12;
// console.log(bsi(arr, tv))

// Time complexity - O(logn)
// Space complexity - O(1)

// Recursive solution

const bsr = (arr, tv) => {
    const helper = (arr, tv, start, end) => {
        if(start>end) return -1;
        const mid = Math.floor((start+end)/2);
        if(tv === arr[mid]) {
            return mid;
        } else if(tv < arr[mid]) {
            return helper(arr, tv, start, mid - 1);
        } else {
            return helper(arr, tv, mid + 1, end)
        }
    }
    return helper(arr, tv, 0, arr.length - 1)
}

arr = [1, 2, 3, 10, 11, 12, 13, 14, 15]
tv = 12;
console.log(bsr(arr, tv))

// Time complexity - O(logn)
// Space complexity - O(logn) 