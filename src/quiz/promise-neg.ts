/**
 * Checks if a row contains any negative numbers
 * @param row Array of numbers representing one row
 * @returns Promise that resolves to the row if it contains negatives, undefined otherwise
 */
function checkNegatives(row: number[]): Promise<number[] | undefined> {
    return new Promise((resolve) => {
        const hasNegative = row.some(num => num < 0);
        resolve(hasNegative ? row : undefined);
    });
}

/**
 * Finds rows with negative numbers in a 2D array using concurrent promises
 * @param arr 2D array of numbers
 * @returns Promise that resolves when all rows are checked
 */
function findNegativeRows(arr: number[][]): Promise<void> {
    // Create array of promises, one for each row
    const rowPromises = arr.map(row => checkNegatives(row));
    
    // Use Promise.all to check all rows concurrently
    return Promise.all(rowPromises)
        .then(results => {
            results.forEach((row, index) => {
                if (row) {
                    console.log(`Row ${index} contains negative numbers:`, row);
                }
            });
        });
}

const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

// Check for negative numbers
findNegativeRows(array2D_3)
    .catch(err => console.error('Error:', err));