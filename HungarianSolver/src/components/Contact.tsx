const Contact = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-400 to-slate-50 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-700">
      <div className="container flex flex-col md:flex-row border border-sky-900 md:border-4 rounded-sm md:rounded min-h-[70vh] font-inter">
        <div className="basis-1/4 flex flex-col justify-between bg-gradient-to-br from-sky-300 to-gray-100">
          <div className="p-3">
            <h1 className="font-bold text-xl">Contact</h1>
            <p className="text-md mt-1">
              If you have any questions or comments, please feel free to contact
              me at any of the following:
            </p>
          </div>
          <div className="m-2 border rounded-md grid grid-cols-4 bg-slate-50 border-stone-400">
            <div className="border-r border-stone-400 flex justify-center">
              <div>Whatsapp</div>
            </div>
            <div className="border-r border-stone-400  flex justify-center">
              <div>Github</div>
            </div>
            <div className="border-r border-stone-400 flex justify-center hover:text-slate-800">
              <div>Twitter</div>
            </div>
            <div className="flex justify-center">LinkedIn</div>
          </div>
        </div>
        <div className="border basis-3/4">
          <form>
            <div></div>
            <div></div>
            <div></div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
