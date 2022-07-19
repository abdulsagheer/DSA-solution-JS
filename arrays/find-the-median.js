function median_of_arr(arr) {
    const middle = (arr.length + 1) / 2;

    // Avoid mutating when sorting
    const sorted = [...arr].sort((a, b) => a - b);
    const isEven = sorted.length % 2 === 0;

    return isEven ? (sorted[middle - 1.5]
        + sorted[middle - 0.5]) / 2 :
        sorted[middle - 1];
}

var arr = [1, 4, 7, 9];
console.log(median_of_arr(arr));


// Time complexity:- O(n+m)