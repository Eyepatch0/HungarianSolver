import { Link, useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-red-50">
      <div>
        <h1 className="text-5xl font-bold text-center font-inter text-red-600">
          Oops...
        </h1>
        <p className="text-xl font-inter italic mt-5 text-red-300">
          Something went wrong.
        </p>
        <div className="mt-5 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="border-2 border-red-900 px-4 py-2 rounded-full font-bold bg-red-300 text-slate-900 hover:bg-red-400 transition duration-300 ease-in-out"
          >
            Go Back
          </button>
          <Link
            to="/contact"
            className="flex items-center font-bold text-red-800"
          >
            Contact Me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mt-1"
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
  );
};
export default Error;
