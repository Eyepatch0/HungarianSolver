import { Link } from "react-router-dom";

import NavBarProps from "../types/NavBarProps";

const DropDownNav: React.FC<NavBarProps> = ({
  isDark,
  isVisible,
  toggleDarkMode,
  toggleVisibility,
}) => {
  return isVisible ? (
    <div className="fixed z-50 inset-0 lg:hidden">
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
        onClick={() => toggleVisibility()}
      ></div>
      <div className="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400">
        <div
          className="flex flex-row-reverse"
          onClick={() => toggleVisibility()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 hover:text-red-400"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="hover:text-emerald-500 hover:bg-gray-100 p-2 rounded">
          <Link to="/solve" className="">
            Solve <span></span>
          </Link>
        </div>
        <div className="hover:text-violet-500 hover:bg-gray-100 p-2 rounded">
          <Link to="/about">
            About <span></span>
          </Link>
        </div>
        <div className="hover:text-sky-500 hover:bg-gray-100 p-2 rounded">
          <Link to="/contact">
            Contact <span></span>
          </Link>
        </div>
        <div className="p-1 flex justify-center">
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
                onClick={toggleDarkMode}
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
      </div>
    </div>
  ) : null;
};

export default DropDownNav;
