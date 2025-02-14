/**
 * An asynchronous function that sums all numbers in a 2D array
 * @param arr 2D array of numbers
 * @returns a promise that resolves to the sum of all numbers in the 2D array
 * or rejects if the array is empty
 */
function sum2DArray(arr: number[][]): Promise<number> {
    if (arr.length === 0) {
        return Promise.reject('Cannot sum an empty array');
    }
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        
        if(arr.length === 0) {
            reject('Cannot sum an empty array');
            return;
        }
        
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                console.log(`Adding ${arr[i][j]} to sum`);
                sum += arr[i][j];
            }
        }
        resolve(sum);
        
        console.log('returning from sum');
    });
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Using .then() and .catch() to handle the promises
const sumPromise1 = sum2DArray(array2D);
sumPromise1
    .then((sum1) => {
        console.log('sumPromise1 result:', sum1);
    })
    .catch((error) => {
        console.log('sumPromise1 error:', error);
    });

const sumPromise2 = sum2DArray([]);
sumPromise2
    .then((sum2) => {
        console.log('sumPromise2 result:', sum2);
    })
    .catch((error) => {
        console.log('sumPromise2 error:', error);
    });

console.log('End of script');