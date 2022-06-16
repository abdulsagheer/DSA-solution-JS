// You are given an array of integers and another targetValue. Write a function that will take these inputs and return the indices of the 2 integers in the array that add up targetValue.
 
// Brute force

// [2, 7, 3, -1, 4]  tv = 2

// const findIndicesSum = (array, targetValue) => {
//     for (let i = 0; i < array.length - 1; i++) {
//         for (let j = i+1; j < array.length; j++) {
//             if(targetValue === array[i]+array[j]) {
//                 return [i, j]
//             }
//         }
//     }
//     return [];
// }

// array = [1, 2, 3, 4, 5];
// targetValue = 4;

// console.log(findIndicesSum(array, targetValue))

// Time complexity - O(n2)
// Space complexity - O(1)

function findIndicesSumGiven(array, targetValue) {
    const hashTable = {};
    let neededValue;
    for (let i = 0; i < array.length; i++) {
        neededValue = targetValue - array[i];
        if(neededValue in hashTable) {
            return [i, hashTable[neededValue]];
        } else {
            hashTable[array[i]] = i;
        }
    }
    return [];
}

array = [1, 2, 3, 4, 5];
targetValue= 9
console.log(findIndicesSumGiven(array, targetValue))

// Time complexity - O(n)
// Space complexity - O(n)
