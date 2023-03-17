import { useState } from "react";

import InputMatrix from "./InputMatrix";
import SolvedMatrix from "./SolvedMatrix";
import GeneralMatrix from "./GeneralMatrix";

const Solve = () => {
  const [size, setSize] = useState<number>(3);
  const [matrix, setMatrix] = useState<number[][]>([]);
  const [showMatrix, setShowMatrix] = useState<boolean>(false);

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

  const matrixReset = () => {
    const newMatrix: number[][] = Array.from(Array(size), () =>
      new Array(size).fill(0)
    );
    setMatrix(newMatrix);
  };

  const matrixShow = (matrix: number[][]) => {
    matrix.flat(2).map((e) => {
      if (Number.isNaN(e) || e < 0) {
        alert("Please fill all the cells with valid numbers.");
        setShowMatrix(false);
        return;
      }
    });
    setShowMatrix(true);
  };

  const matrixHide = () => {
    setShowMatrix(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-400 to-slate-50 flex justify-center items-center dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-700">
      <div className="container border border-emerald-500 dark:border-emerald-900 md:border-4 rounded-lg min-h-[70vh] flex flex-col xl:flex-row font-inter text-slate-900 bg-gradient-to-bl from-emerald-400 via-green-200 to-emerald-400 dark:bg-gradient-to-bl dark:from-green-800 dark:via-emerald-400 dark:to-green-800 dark:text-slate-800 drop-shadow">
        <div className="basis-1/2 border-b xl:border-b-0 xl:border-r flex flex-col justify-between drop-shadow-md">
          <div className="basis-1/4 flex items-center flex-col md:flex-row md:justify-center">
            <div className="flex flex-col text-md font-semibold p-5">
              <label htmlFor="matrixSize">Enter the Size of the Matrix</label>
              <input
                type="number"
                id="matrixSize"
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
                onClick={() => {
                  matrixFiller(size);
                  matrixHide();
                }}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center basis-3/4 h-full mx-2 drop-shadow-lg">
            {matrix.length > 0 && (
              <InputMatrix
                matrix={matrix}
                matrixUpdater={matrixUpdater}
                matrixReset={matrixReset}
                matrixShow={matrixShow}
                matrixHide={matrixHide}
              />
            )}
          </div>
        </div>
        <div className="basis-1/2 border-t xl:border-l xl:border-t-0 flex flex-col justify-center items-center drop-shadow-md">
          {!showMatrix ? (
            <div>
              <h2 className="font-semibold text-center dark:text-slate-100">
                Solution will appear here!
              </h2>
              <GeneralMatrix matrix={matrix} />
            </div>
          ) : (
            <div className="flex flex-col basis-3/4 justify-center items-center w-1/2">
              <SolvedMatrix matrix={matrix} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Solve;
