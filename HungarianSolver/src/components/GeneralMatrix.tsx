interface GeneralMatrixProps {
  matrix: number[][];
  rowMin?: number[];
}

const MatrixCell: React.FC<{ value: number }> = ({ value }) => {
  return (
    <div className="w-12 h-9 border flex justify-center items-center bg-slate-500 text-slate-100">
      {value}
    </div>
  );
};

const GeneralMatrix: React.FC<GeneralMatrixProps> = ({ matrix, rowMin }) => {
  return (
    <div className="flex">
      <div className="border text-center">
        {matrix.map((row, i) => {
          return (
            <div key={i} className="flex">
              {row.map((col, j) => {
                return <MatrixCell key={j} value={col} />;
              })}
            </div>
          );
        })}
      </div>
      {rowMin && (
        <div className="flex border flex-col text-center ml-1  border-slate-800">
          {rowMin.map((e, i) => {
            return (
              <div
                className="w-12 h-9 border flex justify-center items-center bg-rose-200  border-slate-800 text-slate-800"
                key={i}
              >
                {`-${e}`}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GeneralMatrix;
