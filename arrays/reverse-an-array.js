const reverse = arr => {
    let low=0, high=arr.length - 1;
    while (low < high) {
        let temp = arr[low];
        arr[low] = arr[high]
        arr[high] = temp;
        low++;
        high--;
    }
}

console.log(reverse([10,20,30,40,50]))

// Time complexity: theta(n)
// Space complexity: theta(1)