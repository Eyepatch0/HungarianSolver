import { NavLink } from "react-router-dom";

import NavBarProps from "../types/NavBarProps";

import Logo from "../assets/svg/Logo.svg";

import DropDownNav from "./DropDownNav";

const Navbar: React.FC<NavBarProps> = ({
  isDark,
  toggleDarkMode,
  isVisible,
  toggleVisibility,
}) => {
  return (
    <>
      <div className="font-inter min-w-max border-b shadow-md dark:bg-gradient-to-tr dark:from-slate-900 dark:to-slate-800 dark:text-slate-400 bg-gradient-to-tr from-slate-400 to-slate-50 ">
        <nav className="container mx-auto">
          <div className="flex items-center justify-between p-1">
            <NavLink to="/" className="flex items-center p-3 min-w-fit ">
              <img
                src={Logo}
                alt="Logo"
                className="h-14 w-14 border-4 rounded-full p-2 mr-0 md:mr-1 dark:border-slate-400 bg-white transition hover:rotate-[360deg] duration-500 ease-in-out"
              />
              <h1 className="text-2xl font-bold hidden md:block">
                Hungarian Solver
              </h1>
            </NavLink>
            <div className="basis-2/4  justify-around items-center h-12 hidden sm:flex">
              <NavLink
                to="/solve"
                className="bg-white dark:bg-black border rounded-md px-3 py-1 text-lg font-medium mx-1 md:mx-0 transition ease-in-out duration-200  hover:text-emerald-500 hover:scale-105 hover:border-emerald-800"
              >
                Solve
              </NavLink>
              <NavLink
                to="/learn"
                className="bg-white dark:bg-black border rounded-md px-3 py-1 text-lg font-medium mx-1 md:mx-0 transition ease-in-out duration-200  hover:text-violet-500 hover:scale-105 hover:border-violet-800"
              >
                Learn
              </NavLink>
              <NavLink
                to="/contact"
                className="bg-white dark:bg-black border rounded-md px-3 py-1 text-lg font-medium mx-1 md:mx-0 transition ease-in-out duration-200  hover:text-sky-500 hover:scale-105 hover:border-sky-800"
              >
                Contact
              </NavLink>
              <div className="flex items-center p-2 border justify-around w-32 mx-1 md:mx-0 rounded-full drop-shadow-md dark:shadow-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={
                    isDark
                      ? "w-6 h-6 text-gray-500 drop-shadow"
                      : "w-6 h-6 text-amber-500 drop-shadow"
                  }
                >
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div
                    onClick={() => toggleDarkMode()}
                    className="w-11 h-6 bg-gray-200  peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                  ></div>
                </label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={
                    isDark
                      ? "w-6 h-6 text-amber-500 drop-shadow"
                      : "w-6 h-6 text-gray-700 drop-shadow"
                  }
                >
                  <path
                    fillRule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="mr-2 sm:hidden relative">
              <button onClick={() => toggleVisibility()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 hover:scale-110 transition duration-200 ease-in-out"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
      <DropDownNav
        isDark={isDark}
        toggleDarkMode={toggleDarkMode}
        toggleVisibility={toggleVisibility}
        isVisible={isVisible}
      />
    </>
  );
};
export default Navbar;
