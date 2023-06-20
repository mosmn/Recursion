#!/usr/bin/env node

const mergeSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);
  
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);
  
    return merge(sortedLeft, sortedRight);
};
  
const merge = (left, right) => {
    const merged = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] <= right[rightIndex]) {
        merged.push(left[leftIndex]);
        leftIndex++;
      } else {
        merged.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    while (leftIndex < left.length) {
      merged.push(left[leftIndex]);
      leftIndex++;
    }
  
    while (rightIndex < right.length) {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  
    return merged;
};

console.log(mergeSort([6, 9, 3, 5, 1, 0, 2, 7, 4, 8]));
console.log(mergeSort([5, 4, 3, 2, 1]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(mergeSort([2, 7, 1, 4, 9, 5, 3, 8, 6]));
console.log(mergeSort([3]));
console.log(mergeSort([]));




