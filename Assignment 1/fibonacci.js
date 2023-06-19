#!/usr/bin/env node

function fibonacci(n) {
    let arr = [0, 1];
    for(let i=0; i < (n-2); i++) arr.push((arr[i] + arr[i+1]));
    return arr;
}

console.log(fibonacci(8));
console.log(fibonacci(10));
console.log(fibonacci(12));
console.log(fibonacci(14));
console.log(fibonacci(16));
console.log(fibonacci(18));
console.log(fibonacci(20));
console.log(fibonacci(22));
console.log(fibonacci(24));
console.log(fibonacci(26));
console.log(fibonacci(28));
console.log(fibonacci(30));