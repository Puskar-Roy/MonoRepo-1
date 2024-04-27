import React from "react";

const page = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col bg-slate-950">
      <div className=" mx-auto sm:w-[30%] w-[80%]">
        <div className="mx-auto  flex justify-center items-center flex-col gap-4 text-white bg-slate-900 p-20 rounded-xl">
          <h1 className="text-3xl font-semibold text-blue-600">Register</h1>

          <input
            className="py-3 px-6 bg-slate-200 w-full rounded-xl border-none  text-slate-800"
            placeholder="Name"
            type="text"
          />
          <input
            className="py-3 px-6 bg-slate-200 w-full rounded-xl border-none  text-slate-800"
            placeholder="Email"
            type="email"
          />
          <input
            className="py-3 px-6 bg-slate-200 w-full rounded-xl text-slate-800"
            placeholder="Password"
            type="password"
          />
          <div className="p-3 bg-blue-500 text-white rounded-xl w-full text-center hover:bg-blue-400 cursor-pointer">
            Register
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
