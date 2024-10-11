// Dummy array for testing
const array = [4, 8, 2, 11, 6, 7, 10];

// Function to find the maximum number using an arrow function
const findMax = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

// Function to calculate the sum of all elements using a named function
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Function to count the number of odd numbers using an anonymous function
const countOddNumbers = function(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
};

// Display results
console.log(`Ex Array: ${JSON.stringify(array)}`);
console.log(`Maximum number: ${findMax(array)}`);
console.log(`Sum of all elements: ${calculateSum(array)}`);
console.log(`Count of odd numbers: ${countOddNumbers(array)}`);
