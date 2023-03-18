import { SolvedMatrixProps } from "../types/SolvedMatrixProps";
import GeneralMatrix from "./GeneralMatrix";

// @ts-ignore
import munkres from "munkres-js";

const SolvedMatrix: React.FC<SolvedMatrixProps> = ({ matrix }) => {
  const optimalCost: (matrix: number[][]) => [number, number[]] = (matrix) => {
    const cost: number[] = munkres(matrix).map((e: number[]) => {
      return matrix[e[0]][e[1]];
    });
    return [cost.reduce((a, b) => a + b, 0), cost];
  };

  console.log(optimalCost(matrix));
  return (
    <div className="flex flex-col justify-around mt-2 h-full w-full font-inter">
      <div className="border rounded-sm p-2 border-green-700 dark:border-green-900">
        <h3 className="font-semibold text-left mb-2 px-1">
          Optimal Assignment:
        </h3>
        <GeneralMatrix matrix={matrix} solved={munkres(matrix)} />
      </div>
      <div className="border rounded-sm p-2 border-green-700 dark:border-green-900 mt-2">
        <h3 className="font-semibold text-left mb-2 px-1">Optimal Value is:</h3>
        <div className="flex font-medium justify-center items-center">
          {optimalCost(matrix)[1].map((e, i) => {
            if (i !== optimalCost(matrix)[1].length - 1) {
              return <p key={i}>{` ${e} +`}</p>;
            }
            return <p key={i} className="mr-2">{`${e} =`}</p>;
          })}
          <p className="font-bold border rounded-lg  p-2 bg-orange-200 dark:bg-orange-400 dark:border-slate-700">
            {optimalCost(matrix)[0]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolvedMatrix;
