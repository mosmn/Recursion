#!/usr/bin/env node

const fibsRec = (n) => (n === 0 ? [] : n === 1 ? [0] : n === 2 ? [0, 1] : (arr = fibsRec(n - 1)).concat(arr[arr.length - 1] + arr[arr.length - 2]));

console.log(fibsRec(8))
console.log(fibsRec(10))
console.log(fibsRec(12))
console.log(fibsRec(14))
console.log(fibsRec(16))
console.log(fibsRec(18))
console.log(fibsRec(20))
console.log(fibsRec(22))
console.log(fibsRec(24))
console.log(fibsRec(26))
console.log(fibsRec(28))
console.log(fibsRec(30))