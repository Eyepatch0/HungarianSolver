interface GeneralMatrixProps {
  matrix: number[][];
  solved?: number[][];
}

const MatrixCell: React.FC<{ value: number; highlight: boolean }> = ({
  value,
  highlight,
}) => {
  return (
    <div
      className={
        highlight
          ? "w-10 sm:w-12 xl:w-14 xl:h-14 h-9 border flex justify-center items-center bg-orange-500 text-slate-100"
          : "w-10 sm:w-12 xl:w-14 xl:h-14 h-9 border flex justify-center items-center bg-slate-500 text-slate-100"
      }
    >
      {value}
    </div>
  );
};

const GeneralMatrix: React.FC<GeneralMatrixProps> = ({ matrix, solved }) => {
  return (
    <div className="flex justify-center items-center">
      {solved ? (
        <div className="border text-center">
          {matrix.map((row, i) => {
            return (
              <div key={i} className="flex">
                {row.map((col, j) => {
                  if (solved[i][1] === j && solved[i][0] === i) {
                    return <MatrixCell key={j} value={col} highlight={true} />;
                  }
                  return <MatrixCell key={j} value={col} highlight={false} />;
                })}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="border text-center blur-sm">
          {matrix.map((row, i) => {
            return (
              <div key={i} className="flex">
                {row.map((col, j) => {
                  return <MatrixCell key={j} value={col} highlight={false} />;
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GeneralMatrix;
