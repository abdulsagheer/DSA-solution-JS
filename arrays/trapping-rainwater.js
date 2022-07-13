// Naive Implementation

const getWater = arr => {
    let res = 0;
    for (let i = 1; i < arr.length - 1; i++) {
        let lmax = arr[i];
        for (let j = 0; j < i; j++) {
            lmax = Math.max(lmax, arr[j]);
        }
        let rmax = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            rmax = Math.max(rmax, arr[j])
        }
        res = res + (Math.min(lmax, rmax) - arr[i]);
    }
    return res;
}

console.log(getWater([3, 0, 1, 2, 5]))

const getRainWater = arr => {
    let res = 0, lmax[arr.length], rmax[arr.length];
    lmax[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        lmax[i] = Math.max(arr[i], lmax[i-1]);        
    }
    rmax[n-1] = arr[n-1];
    for (let i = n-2; i > 0; i--) {
        rmax[i] = Math.max(rmax[i], rmax[i+1]);
    }
    for (let i = 1; i < array.length - 1; i++) {
        res = res+(Math.min(lmax[i], rmax[i] - arr[i]))
    }
}

console.log(getRainWater([5, 0, 6, 2, 3]))
// Time complexity - theta(n)