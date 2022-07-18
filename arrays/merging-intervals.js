// Naive implementation
const merge = (intervals) => {
    const map = new Map();
    for (const interval of intervals) {
        if (!map.has(interval[0])) {
        map.set(interval[0], interval[1]);
        } else {
        map.set(interval[0], Math.max(map.get(interval[0]), interval[1]));
        }
    }
    let zeroKey;
    intervals = Array.from(map, ([key, value]) => {
        return [key, value];
    });
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [];
    let pointer;
    for (i = 0; i < intervals.length; i++) {
        if (!pointer || pointer[1] < intervals[i][0]) {
        pointer = intervals[i];
        merged.push(pointer);
        } else {
        pointer[1] = Math.max(pointer[1], intervals[i][1]);
        }
    }
    return merged;
    };

console.log(merge([]));

// Time complexity - O(n2)

// Efficient Implementation

const merges = (intervals) => {
  if (intervals.length == 1) {
    return intervals;
  }
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [];
  let pointer;
  for (i = 0; i < intervals.length; i++) {
    if (!pointer || pointer[1] < intervals[i][0]) {
      pointer = intervals[i];
      merged.push(pointer);
    } else {
      pointer[1] = Math.max(pointer[1], intervals[i][1]);
    }
  }
  return merged;
};

console.log(merge([]));

// Time complexity - O(n)
