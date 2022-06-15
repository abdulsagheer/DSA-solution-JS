// An array is monotonic if it is either monotone increasing or monotone decreasing. An array is monotone increasing if all its elements from left to right are non-decreasing. An array is monotone decreasing if all  its elements from left to right are non-increasing. Given an integer array return true if the given array is monotonic, or false otherwise. 

// Method - 1

const checkMonotonic = function(array) {
    const first = array[0];
    const last = array[array.length - 1]

    // 3, 3, 3, 3, 3
    if(first === last) {
        for(let i=0; i<array.length; i++) {
            if(array[i+1] !== array[i]) return false;
        }
        // 1, 4, 4, 5
    } else if(first<last) {
        // non-decreasing
        for(let i = 0; i<array.length - 1; i++) {
            if(array[i+1]<array[i]) return false;
        }
        // non - increasing
    } else {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i + 1] > array[i]) return false;
        }
    }
    return true;
}


console.log(checkMonotonic([5, 5, 5, 5, 10]));

// Time complexity - O(n)
//  Space Complexity - O(1)