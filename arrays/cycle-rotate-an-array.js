const cycleRotate = arr => {
    let x = arr[arr.length - 1], i;
       for (i = arr.length - 1; i > 0; i--)
          arr[i] = arr[i-1];
       arr[0] = x;
       return arr;
}

console.log(cycleRotate([0,1,2,3,4,5,6,7,8,9,10,11]));

// Time Complexity: O(n) 
// Space Complexity: O(1)

