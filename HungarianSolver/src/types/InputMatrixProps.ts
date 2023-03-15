export interface inputMatrixProps {
    matrix: number[][]; // 2D array of numbers
    matrixUpdater: (row: number, col: number, value: number) => void;
    matrixReset: () => void;
    matrixShow: (matrix: number[][]) => void;
    matrixHide: () => void;
}
export interface matrixCellsProps {
    e: number;
    location: number[];
    matrixUpdater: (row: number, col: number, value: number) => void;
    matrixHide: () => void;
}
export interface matrixRowProps {
    row: number[];
    rowNumber: number;
    matrixUpdater: (row: number, col: number, value: number) => void;
    matrixHide: () => void;
}