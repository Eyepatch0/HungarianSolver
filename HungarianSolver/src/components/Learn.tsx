const Learn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-400 to-slate-50 flex justify-center items-center dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-700">
      <div className="drop-shadow shadow-lg font-inter p-1 container min-h-[60vh] md:border-4 rounded-md flex flex-col justify-evenly border-violet-900 border bg-gradient-radial from-purple-300  to-purple-100 dark:bg-gradient-to-br dark:from-violet-900 dark:via-purple-700 dark:to-slate-900 dark:border-gray-600 dark:text-slate-400">
        <div>
          <h1 className="text-center font-bold text-3xl">
            The Hungarian Algorithm
          </h1>
          <p className="text-lg p-1 mt-1">
            The Hungarian algorithm consists of the four steps below. The first
            two steps are executed once, while Steps 3 and 4 are repeated until
            an optimal assignment is found. The input of the algorithm is an n
            by n square matrix with only nonnegative elements.
          </p>
        </div>
        <div className="rounded-md px-2 py-1 md:border-0 border-2 border-violet-600 mb-1 md:mb-0">
          <h2 className="text-xl font-semibold">Step 1: Subtract row minima</h2>
          <p className="text-lg">
            For each row, find the lowest element and subtract it from each
            element in that row.
          </p>
        </div>
        <div className="rounded-md px-2 py-1  md:border-0 border-2 border-violet-600 mb-1 md:mb-0">
          <h2 className="text-xl font-semibold">
            Step 2: Subtract column minima
          </h2>
          <p className="text-lg">
            Similarly, for each column, find the lowest element and subtract it
            from each element in that column.
          </p>
        </div>
        <div className="rounded-md px-2 py-1  md:border-0 border-2 border-violet-600 mb-1 md:mb-0">
          <h2 className="text-xl font-semibold">
            Step 3: Cover all zeros with a minimum number of lines
          </h2>
          <p className="text-lg">
            Cover all zeros in the resulting matrix using a minimum number of
            horizontal and vertical lines. If n lines are required, an optimal
            assignment exists among the zeros. The algorithm stops.
          </p>
          <p className="text-md italic">
            If less than n lines are required, continue with Step 4.
          </p>
        </div>
        <div className="rounded-md px-2 py-1  md:border-0 border-2 border-violet-600 mb-1 md:mb-0">
          <h2 className="text-xl font-semibold">
            Step 4: Create additional zeros
          </h2>
          <p className="text-lg">
            Find the smallest element (call it k) that is not covered by a line
            in Step 3. Subtract k from all uncovered elements, and add k to all
            elements that are covered twice
          </p>
        </div>
      </div>
    </div>
  );
};
export default Learn;
