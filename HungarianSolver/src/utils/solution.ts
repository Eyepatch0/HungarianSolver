// TODO: 1. Update to show all steps to the user , instead of only showing final solution.
// TODO: 2. Add option for maximization.
// // TODO: 3. Use more efficient algorithm. (Using munker.js)
// TODO: 4. Live animation in UI as it solves ? 

// type MatrixFunction = (matrix: number[][]) => number[][];
// type MinFunction = (matrix: number[][]) => number[];
// type ZeroFunction = (matrix: number[]) => number;

// const minValue: MinFunction = (matrix) => {
//     return matrix.map((row) => Math.min(...row));
// };

// const zeroCounter: ZeroFunction = (matrix) => {
//     return matrix.filter((e) => e === 0).length;
// }

// const minMatrix: MatrixFunction = (matrix) => {
//     let rowMin = minValue(matrix);
//     return matrix.map((row, i) => row.map((e) => e - rowMin[i]));
// }

// const transposeMatrix: MatrixFunction = (matrix) => {
//     return matrix.map((e, i) => {
//         return matrix.map((row) => row[i]);
//     })
// }

// const solvedCheck: MatrixFunction = (matrix) => {
//     let rowZeroes = matrix.map((row) => zeroCounter(row));
//     let colZeroes = (transposeMatrix(matrix)).map((row) => zeroCounter(row));


//     console.log(rowZeroes, colZeroes);
//     return [[]];
// }

// function solution(matrix: number[][]): number[][] {
//     /*
//     * firstStep: 1.Calculate least value in each row and subtract it from all elements in the row , repeat the same process for each column
//     */
//     const firstStep = transposeMatrix(minMatrix(transposeMatrix(minMatrix(matrix))));
//     solvedCheck(firstStep);
//     return firstStep;
// }

// export default solution

export { }