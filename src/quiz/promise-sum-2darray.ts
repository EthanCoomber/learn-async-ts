/**
 * Sums a single row of numbers
 * @param row Array of numbers representing one row
 * @returns Promise that resolves to the sum of the row
 */
function sumRow(row: number[]): Promise<number> {
    return new Promise((resolve) => {
        const sum = row.reduce((acc, curr) => acc + curr, 0);
        resolve(sum);
    });
}

/**
 * Sums all numbers in a 2D array using concurrent promises for each row
 * @param arr 2D array of numbers
 * @returns Promise that resolves to the total sum
 */
async function sumConcurrent2DArray(arr: number[][]): Promise<number> {
    // Create array of promises, one for each row
    const rowPromises = arr.map(row => sumRow(row));
    
    // Await all row sums concurrently
    const rowSums = await Promise.all(rowPromises);
    
    // Sum up all the row sums
    return rowSums.reduce((acc, curr) => acc + curr, 0);
}

const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Example usage:
(async () => {
    try {
        const sum = await sumConcurrent2DArray(array2D_1);
        console.log('Total sum:', sum);
    } catch (err) {
        console.error('Error:', err);
    }
})();