# Recursion: Fibonacci and Merge Sort

This repository contains the solutions to two recursive assignments: Fibonacci and Merge Sort. Each assignment involves implementing a function using recursion.

## Assignment 1: Fibonacci

The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones. The goal is to generate the Fibonacci sequence up to a given number `n`.

### `fibs(n)`

This function takes a number `n` and returns an array containing `n` numbers from the Fibonacci sequence.

Example:
```javascript
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
```

### `fibsRec(n)`

This function solves the same problem as `fibs` but uses a recursive approach.

## Assignment 2: Merge Sort

Merge Sort is a sorting algorithm that utilizes recursion to divide the input array into smaller subarrays, sorts them individually, and then merges them back together to obtain a sorted array.

### `mergeSort(arr)`

This function takes an array `arr` and returns a sorted array using the Merge Sort algorithm.

## How to Run

To run the functions, you can use Node.js and execute the scripts from the command line.

```bash
node Assignment\ 1/fibs.js
node Assignment\ 1/fibsRec.js
node Assignment\ 2/mergeSort.js
```

## Resources

For a better understanding of the concepts and implementation details, the following resources can be helpful:

- Khan Academy's [Stepping Through Recursive Fibonacci Function video](https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/recursive-fibonacci) provides an explanation of the recursive Fibonacci function.
- The video from Harvard's CS50x course on [Merge Sort](https://www.youtube.com/watch?v=KF2j-9iSf4Q) offers an introductory explanation of the algorithm.
- [Merge Sort Explained](https://www.geeksforgeeks.org/merge-sort/) provides a detailed explanation of Merge Sort with code examples.
- [Merge Sort Visualizer](https://visualgo.net/en/sorting) is an optional resource for visualizing the Merge Sort algorithm in action.