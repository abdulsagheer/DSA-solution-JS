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
function reverseArr(arr) {
  var ret = new Array();
  for (var i = arr.length - 1; i >= 0; i--) {
    ret.push(arr[i]);
  }
  return ret;
}

var a = [3, 5, 7, 8];
console.log(reverseArr([10, 20, 30, 40, 50]));

// Time complexity: theta(n)
// Space complexity: theta(1)