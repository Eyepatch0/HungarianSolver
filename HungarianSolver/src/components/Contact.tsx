import { BsWhatsapp, BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import { useState } from "react";

import Form from "../types/Form";

const Contact = () => {
  const [input, setInput] = useState<Form>({
    name: "",
    email: "",
    message: "",
  });

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // API call to send email
    console.log(e);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-400 to-slate-50 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-700">
      <div className="container flex flex-col md:flex-row border border-sky-900 md:border-4 rounded-sm md:rounded min-h-[70vh] font-inter bg-gradient-to-br from-sky-300 to-gray-100 dark:bg-gradient-to-br dark:from-slate-800 dark:to-sky-500 dark:text-slate-400 dark:border-blue-800">
        <div className="basis-1/4 flex flex-col justify-between rounded">
          <div className="p-3">
            <h1 className="font-bold text-xl">Contact</h1>
            <p className="text-md mt-1">
              If you have any questions or comments, please feel free to contact
              me at any of the following:
            </p>
          </div>
          <div className="m-2 border rounded-md grid grid-cols-4 bg-slate-50 border-stone-400">
            <div
              className="border-r border-stone-400 flex justify-center items-center h-8 hover:text-emerald-600 transition ease-in-out hover:scale-105"
              onClick={() =>
                window.open("https://api.whatsapp.com/send?phone=918897199705")
              }
            >
              <BsWhatsapp className="text-xl" />
            </div>
            <div
              className="border-r border-stone-400  flex justify-center items-center h-8 hover:text-slate-700 transition ease-in-out hover:scale-105"
              onClick={() => window.open("https://github.com/Eyepatch0")}
            >
              <BsGithub className="text-xl" />
            </div>
            <div
              className="border-r border-stone-400 flex justify-center items-center h-8 hover:text-sky-400 transition ease-in-out hover:scale-105"
              onClick={() => window.open("https://twitter.com/0_eyepatch")}
            >
              <BsTwitter className="text-xl" />
            </div>
            <div
              className="flex justify-center items-center h-8 hover:text-sky-700 transition ease-in-out hover:scale-105"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/syed-mohammed-a331931a0/"
                )
              }
            >
              <BsLinkedin className="text-xl" />
            </div>
          </div>
        </div>
        <div className="basis-3/4 p-5">
          <form
            className="border border-slate-400 rounded-md bg-slate-50 h-full font-inter"
            onSubmit={onSubmitHandler}
          >
            <div className="flex flex-col justify-start p-5">
              <label htmlFor="name" className="mb-2 font-semibold">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={input.name}
                maxLength={40}
                onChange={(e) => setInput({ ...input, name: e.target.value })}
                className="border border-slate-400 rounded-sm lg:w-96 focus:ring-2 focus:ring-sky-600 focus:outline-none px-1"
              />
            </div>
            <div className="flex flex-col justify-start p-5">
              <label htmlFor="email" className="mb-2 font-semibold">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                maxLength={40}
                value={input.email}
                onChange={(e) => setInput({ ...input, email: e.target.value })}
                className="border border-slate-400 rounded-sm lg:w-96 focus:ring-2 focus:ring-sky-600 focus:outline-none px-1"
              />
            </div>
            <div className="flex flex-col justify-start p-5">
              <label htmlFor="message" className="mb-3 font-semibold">
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                value={input.message}
                onChange={(e) =>
                  setInput({ ...input, message: e.target.value })
                }
                className="border border-slate-400 rounded-sm lg:w-96 focus:ring-2 focus:ring-sky-600 focus:outline-none px-1"
              />
            </div>
            <div className="flex md:flex-row-reverse px-5">
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-md m-5 hover:scale-105 transition ease-in-out"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
