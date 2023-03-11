import React from "react";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  return (
    <>
      <div className="bg-gradient-to-tl from-slate-50 to-slate-400  dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-700 flex justify-center items-center min-h-screen">
        <div className="container flex flex-col items-center justify-around min-h-[30vh] drop-shadow">
          <h1 className="text-5xl font-bold text-center dark:text-slate-100  text-slate-900 font-inter">
            Hungarian Solver
          </h1>
          <p className="text-xl text-center dark:text-slate-100  text-slate-800 font-inter font-md italic md:m-0 mt-5">
            A simple web application to solve assignment problems using the
            Hungarian Algorithm.
          </p>
          <div className="w-5/12 flex justify-center items-center md:m-0 mt-5">
            <Link
              to="/solve"
              className=" w-40 bg-slate-800 dark:bg-slate-100  text-slate-100 dark:text-slate-800  font-bold py-2 px-4 rounded-full hover:bg-slate-700 dark:hover:bg-slate-200  hover:text-slate-200 dark:hover:text-slate-700 transition duration-300 ease-in-out hover:border-green-500 border-2 flex justify-center items-center"
            >
              Solve
            </Link>
            <Link
              to="/learn"
              className="flex justify-between items-end font-bold font-inter ml-5 dark:text-slate-100  transition hover:text-sky-500 dark:hover:text-sky-500"
            >
              <p>Learn More</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 "
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
