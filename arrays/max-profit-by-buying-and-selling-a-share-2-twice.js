function maxtwobuysell(arr , size) {
        var first_buy = -1000;
        var first_sell = 0;
        var second_buy = -1000;
        var second_sell = 0;
 
        for (var i = 0; i < size; i++) {
 
            first_buy = Math.max(first_buy, -arr[i]);
            first_sell = Math.max(first_sell, first_buy + arr[i]);
            second_buy = Math.max(second_buy, first_sell - arr[i]);
            second_sell = Math.max(second_sell, second_buy + arr[i]);
 
        }
        return second_sell;
}
 
     
var arr = [ 2, 30, 15, 10, 8, 25, 80 ];
var size = arr.length;
console.log(maxtwobuysell(arr, size));
 

// Time Complexity: O(N)
// Auxiliary Space: O(1)