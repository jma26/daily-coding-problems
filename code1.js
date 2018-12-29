// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

// Loop over array of numbers starting at index 0
// Another inner loop inside starting one ahead of outer loop's index
// Add the array indexes and check if it equals to k
// continue until one becomes true or return false at the end

function isArrayNumbersEqualToK(array, k) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === k) {
                return true;
            }
        }
    }
    return false;
}

isArrayNumbersEqualToK([10, 15, 3, 7], 17);

