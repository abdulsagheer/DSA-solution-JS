const remDub = arr => {
    let res = 1;
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] != arr[res-1]) {
            if(arr[res] = arr[i]);
            res++;
        }
    }
    return res;
}

console.log(remDub([10, 20, 20, 30, 30, 30, 30, 30, 30, 30, 30]));

// Time complexity - O(n)
// Space complexity - O(1)