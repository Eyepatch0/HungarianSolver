import { useState } from "react";

import InputMatrix from "./InputMatrix";
import SolvedMatrix from "./SolvedMatrix";

const Solve = () => {
  const [size, setSize] = useState<number>(3);
  const [matrix, setMatrix] = useState<number[][]>([]);

  const sizeValidator: (size: number) => boolean = (size) => {
    switch (true) {
      case size > 10:
        alert("Maximum size allowed is 10.");
        return false;
      case size < 3:
        alert("Minimum size is 3.");
        return false;
      default:
        return true;
    }
  };

  const matrixFiller = (size: number) => {
    if (!sizeValidator(size)) return;
    const newMatrix: number[][] = Array.from(Array(size), () =>
      new Array(size).fill(0)
    );
    setMatrix(newMatrix);
  };

  const matrixUpdater = (row: number, col: number, value: number) => {
    const newMatrix = [...matrix];
    newMatrix[row][col] = value;
    setMatrix(newMatrix);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-400 to-slate-50 flex justify-center items-center dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-700">
      <div className="container border border-emerald-500 dark:border-emerald-900 md:border-4 rounded-lg min-h-[70vh] flex flex-col xl:flex-row font-inter text-slate-900 bg-gradient-to-bl from-emerald-400 via-green-200 to-emerald-400 dark:bg-gradient-to-bl dark:from-green-800 dark:via-emerald-400 dark:to-green-800 dark:text-slate-800">
        <div className="basis-1/2 sm:border-b md:border-b-0 md:border-r flex flex-col justify-between">
          <div className="basis-1/4 flex items-center flex-col md:flex-row md:justify-center">
            <div className="flex flex-col text-md font-semibold p-5">
              <label htmlFor="matrixSize">Enter the Size of the Matrix</label>
              <input
                type="number"
                id="matrixSize"
                value={size}
                onChange={(e) => setSize(parseInt(e.target.value))}
                max={10}
                maxLength={2}
                accept="number"
                className="border border-emerald-500 rounded-md px-1 w-9 focus:ring-1 focus:ring-emerald-600 focus:outline-none my-2 matrixSize dark:bg-slate-700 dark:text-slate-100"
              />
              <p className="italic text-sm font-light">
                Maximum size allowed is 10.
              </p>
              <p className="italic text-sm font-light">Minimum size is 3.</p>
            </div>
            <div className="p-5 basis-1/4 h-full flex justify-center items-center">
              <button
                className="border border-emerald-700 rounded p-1 text-slate-100 bg-emerald-500 hover:bg-emerald-600 dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-800 hover:scale-105 transition ease-in-out"
                onClick={() => matrixFiller(size)}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center basis-3/4 h-full mx-2">
            {matrix.length > 0 && (
              <InputMatrix matrix={matrix} matrixUpdater={matrixUpdater} />
            )}
          </div>
        </div>
        <div className="basis-1/2 border-t md:border-l">
          {matrix.length > 0 && <SolvedMatrix />}
        </div>
      </div>
    </div>
  );
};

export default Solve;
