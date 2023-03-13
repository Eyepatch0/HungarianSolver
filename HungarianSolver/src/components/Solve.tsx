import { useState } from "react";

import InputMatrixComponent from "./InputMatrixComponent";

const Solve = () => {
  const [size, setSize] = useState("");
  const [matrix, setMatrix] = useState<number[][]>([]);

  const sizeValidator: (size: number) => boolean = (size) => {
    if (size > 10) {
      alert("Maximum size allowed is 10");
      setMatrix([]);
      return false;
    } else if (size < 3) {
      alert("Minimum size is 3");
      setMatrix([]);
      return false;
    }
    return true;
  };
  const matrixFiller = (size: number) => {
    if (!sizeValidator(size)) return;
    const newMatrix: number[][] = Array.from(Array(size), () =>
      new Array(size).fill(0)
    );
    setMatrix(newMatrix);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-400 to-slate-50 flex justify-center items-center dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-700">
      <div className="container border border-emerald-500 md:border-4 rounded-lg min-h-[70vh] flex flex-col md:flex-row font-inter text-slate-900">
        <div className="basis-1/2 border-r flex flex-col justify-between">
          <div className="flex items-center border flex-col md:flex-row basis-1/4">
            <div className="flex flex-col text-md font-semibold p-5 border basis-3/4">
              <label htmlFor="matrixSize">Enter the Size of the Matrix</label>
              <input
                type="number"
                id="matrixSize"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                max={10}
                maxLength={2}
                min={1}
                minLength={1}
                className="border border-emerald-500 rounded-md px-2 w-9 focus:ring-1 focus:ring-emerald-600 focus:outline-none my-2 matrixSize"
              />
              <p className="italic text-sm font-light">
                Maximum size allowed is 10.
              </p>
              <p className="italic text-sm font-light">Minimum size is 3.</p>
            </div>
            <div className="p-5 border basis-1/4 h-full flex justify-center items-center">
              <button
                className="border border-emerald-700 rounded p-1 text-slate-100 bg-emerald-500 hover:bg-emerald-600"
                onClick={() => matrixFiller(parseInt(size))}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center basis-3/4 h-full">
            {matrix.length > 0 && <InputMatrixComponent matrix={matrix} />}
          </div>
        </div>
        <div className="basis-1/2 border-l">Solve</div>
      </div>
    </div>
  );
};

export default Solve;
