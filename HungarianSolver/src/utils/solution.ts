type MatrixFunction = (matrix: number[][]) => number[][];

type MinFunction = (matrix: number[][]) => number[];

const minValue: MinFunction = (matrix) => {
    return matrix.map((row) => Math.min(...row));
};

const minMatrix: MatrixFunction = (matrix) => {
    let rowMin = minValue(matrix);
    return matrix.map((row, i) => row.map((e) => e - rowMin[i]));
}

const transposeMatrix: MatrixFunction = (matrix) => {
    return matrix.map((e, i) => {
        return matrix.map((row) => row[i]);
    })
}

/* 
TODO: 1. Update to show all steps to the user , instead of only showing final solution.
TODO: 2. Add option for maximization.
TODO: 3. Use more efficient algorithm.
TODO: 4. Live animation in UI as it solves ? 
*/



function solution(matrix: number[][]): number[][] {
    /*
    * firstStep: 1.Calculate least value in each row and subtract it from all elements in the row , repeat the same process for each column
    */
    const firstStep = transposeMatrix(minMatrix(transposeMatrix(minMatrix(matrix))));
    return firstStep;
}

export default solution