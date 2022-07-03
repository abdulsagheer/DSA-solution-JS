// Naive implementation

const moveZero = arr => {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            for (let j = 0; j < arr.length; j++) {
                if(arr[j] != 0) {
                    swap(arr[j], arr[j]);
                }
            }
        }
    }
}

console.log(moveZero([10, 8, 0, 0, 2, 0]));

// Time complexity - O(n2)

// Efficient implementation
function swap (x, y) {
   temp = x;
   x = y;
   y = temp;
}

const moveZeros = arr => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]!=0) {
            swap(arr[i], arr[count]);
            count++;
        }
    }
}
console.log(moveZeros([10, 8, 0, 0, 2, 0]));


// Time complexity - O(1)

