// This problem was asked by Uber.

// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

// Initialize empty results array
// Loop through given array numbers (Outer loop)
// Loop through the array numbers again (inner loop)
// Multiply the product of all numbers in array except index i, skip the number
// Add the product to empty results array
// REPEAT until outer loop is at the end

function productOfArrayNumbers(arr) {
    const resultsArr = [];
    for (let i = 0; i < arr.length; i++) {
        var product = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                continue;
            } else {
                product *= arr[j]
            }
        }
        resultsArr.push(product);
    }
    return resultsArr;
}

productOfArrayNumbers([1, 2, 3, 4, 5]);