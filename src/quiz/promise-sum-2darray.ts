/**
 * Sums a single row of numbers
 * @param row Array of numbers representing one row
 * @returns Promise that resolves to the sum of the row
 */
async function sumRow(row: number[]): Promise<number> {
    const sum = row.reduce((acc, curr) => acc + curr, 0);
    return sum;
}

/**
 * Sums all numbers in a 2D array using concurrent promises for each row
 * @param arr 2D array of numbers
 * @returns Promise that resolves to the total sum
 */
async function sumConcurrent2DArray(arr: number[][]): Promise<number> {
    console.log('Starting to sum 2D array concurrently...');
    
    let totalSum = 0;
    for (const row of arr) {
        const rowSum = await sumRow(row);
        console.log('Row sum completed:', rowSum);
        totalSum += rowSum;
    }
    
    console.log('Final sum calculated:', totalSum);
    return totalSum;
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