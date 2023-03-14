interface inputMatrixProps {
  matrix: number[][]; // 2D array of numbers
  matrixUpdater: (row: number, col: number, value: number) => void;
}
interface matrixCellsProps {
  e: number;
  location: number[];
  matrixUpdater: (row: number, col: number, value: number) => void;
}
interface matrixRowProps {
  row: number[];
  rowNumber: number;
  matrixUpdater: (row: number, col: number, value: number) => void;
}

const MatrixCells: React.FC<matrixCellsProps> = ({
  e,
  location,
  matrixUpdater,
}) => {
  return (
    <div>
      <input
        type="number"
        className="matrixSize border border-emerald-400 w-9 sm:w-10 sm:px-1 focus:outline-emerald-400 md:m-1 lg:m-2 xl:m-3 dark:bg-slate-600 dark:text-slate-100"
        onChange={(e) => {
          matrixUpdater(location[0], location[1], parseInt(e.target.value));
        }}
      />
    </div>
  );
};

const MatrixRow: React.FC<matrixRowProps> = ({
  row,
  rowNumber,
  matrixUpdater,
}) => {
  return (
    <div className="flex">
      {row.map((col, j) => {
        const location = [rowNumber, j];
        return (
          <MatrixCells
            key={j}
            e={col}
            location={location}
            matrixUpdater={matrixUpdater}
          />
        );
      })}
    </div>
  );
};

const InputMatrix: React.FC<inputMatrixProps> = ({ matrix, matrixUpdater }) => {
  return (
    <div className="border-4 rounded-md border-emerald-500 flex justify-center items-center dark:border-green-800 mb-2">
      <div>
        <h2 className="text-center font-semibold bg-slate-100 rounded-b dark:bg-slate-600 dark:text-slate-200">
          Enter Values
        </h2>
        <div>
          {matrix.map((row, i) => {
            return (
              <MatrixRow
                key={i}
                row={row}
                rowNumber={i}
                matrixUpdater={matrixUpdater}
              />
            );
          })}
        </div>
        <div className="flex justify-center items-center">
          <button className="text-center border border-green-800 rounded-xl px-2 py-1 mt-1 mb-2 text-slate-100 bg-emerald-700 hover:scale-105 transition ease-in-out dark:bg-slate-800 ">
            GO!
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputMatrix;
