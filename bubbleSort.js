function bubbleSort(arr) {
    let sorted = false;
    let counter = 0;
    while (!sorted) {
        sorted=true;
        for (let i = 0; i < arr.length - 1 - counter; i++) {
            if(arr[i] > arr[i + 1]) {
                swap(arr, i)
                sorted = false;
            }
        }
        counter++;
    }
    return arr;
}


function swap(arr, i) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
}

a = [1,5,7,9,2,8,5]

console.log(bubbleSort(a))