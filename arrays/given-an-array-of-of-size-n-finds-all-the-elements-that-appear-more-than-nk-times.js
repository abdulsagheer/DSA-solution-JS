function printElements(arr , n , k) {
  
    // Calculating n/k
    var x = parseInt(n / k);

    // Counting frequency of every
    // element using Counter
    var mp = new Map();
    for (var i = 0; i < n; i++) {
        if (mp.has(arr[i]))
            mp.set(arr[i],mp.get(arr[i])+1);
        else
            mp.set(arr[i], 1);
    }

    // Traverse the map and print all
    // the elements with occurrence
    // more than n/k times
        
    for (var k of mp) {

        if (parseInt(k[1]) > x)
            console.log(k[0]);
    }
    }
  
// Driver code
var arr = [ 1, 1, 2, 2, 3, 5, 4, 2, 2, 3, 1, 1, 1 ];
var n = arr.length;
var k = 4;

printElements(arr, n, k);
  

// Time Complexity: O(N)
// Auxiliary Space: O(N)