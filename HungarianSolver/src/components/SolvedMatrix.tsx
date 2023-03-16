import { useState, useEffect } from "react";

import { SolvedMatrixProps } from "../types/SolvedMatrixProps";

import GeneralMatrix from "./GeneralMatrix";
import solution from "../utils/solution";

const SovledMatrix: React.FC<SolvedMatrixProps> = ({ matrix, showMatrix }) => {
  // const [rowMinimaMatrix, setRowMinimaMatrix] = useState<number[][]>([]);
  // const [rowMin, setRowMin] = useState<number[]>([]);
  // const [columnMinimaMatrix, setColumnMinimaMatrix] = useState<number[][]>([]);
  // const [columnMin, setColumnMin] = useState<number[]>([]);

  // useEffect(() => {
  //   solve();
  // }, [showMatrix]);

  // const solve = async () => {
  //   await rowMinima();
  // };

  // const rowMinima = () => {
  //   const rowMin = matrix.map((row) => Math.min(...row));
  //   setRowMin(rowMin);
  //   const rowMinimaMatrix = matrix.map((row, i) =>
  //     row.map((col) => col - rowMin[i])
  //   );
  //   setRowMinimaMatrix(rowMinimaMatrix);
  // };

  // return (
  //   <div>
  //     <div className="flex flex-col items-center p-2">
  //       <h2 className="font-semibold">Row Minima</h2>
  //       <GeneralMatrix matrix={rowMinimaMatrix} rowMin={rowMin} />
  //     </div>
  //     <div>
  //       <h2 className="font-semibold">Column Minima</h2>
  //       <GeneralMatrix matrix={columnMinimaMatrix} />
  //     </div>
  //   </div>
  // );
  return (
    <>
      <div>
        <GeneralMatrix matrix={matrix} />
        <GeneralMatrix matrix={solution(matrix)} />
      </div>
    </>
  );
};

export default SovledMatrix;
