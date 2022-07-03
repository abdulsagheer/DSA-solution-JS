const leftRotatebyOne = arr => {

    let temp = arr[0];
    for (let i = 0; i < arr.length; i++) {
        arr[i-1] = arr[i];
    }
    arr[arr.length - 1] = temp;
}