interface inputMatrixProps {
  matrix: number[][]; // 2D array of numbers
}

const MatrixCells: React.FC<{ e: number }> = ({ e }) => {
  return (
    <div>
      <input
        type="number"
        defaultValue={e}
        className="matrixSize border border-emerald-400 w-10 px-1 focus:outline-emerald-400 m-5"
      />
    </div>
  );
};

const MatrixRow: React.FC<{ row: number[] }> = ({ row }) => {
  return (
    <div className="flex">
      {row.map((col, j) => {
        return <MatrixCells key={j} e={col} />;
      })}
    </div>
  );
};

const InputMatrixComponent: React.FC<inputMatrixProps> = ({ matrix }) => {
  return (
    <div className="md:w-3/4 h-1/2 border-2 rounded-md border-emerald-500 flex justify-center items-center">
      <div className="">
        {matrix.map((row, i) => {
          return <MatrixRow key={i} row={row} />;
        })}
      </div>
    </div>
  );
};

export default InputMatrixComponent;
