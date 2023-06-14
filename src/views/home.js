import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { loginFunc } from "../config/redux/action/auth";
function Home() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch()

  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginFunc(form))
  };

  return (
    <>
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        \
        <div className="p-10   space-y-6">
          <div className="my-10 h-[300px]">
            <p className="text-center text-5xl mb-10">Login</p>
            <form className="" onSubmit={HandleSubmit}>
              <div className="mb-5">
                <label className="font-bold text-2xl">Email</label>
                <input
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    console.log(e.target.value);
                  }}
                  value={form?.email}
                  type="email"
                  className="w-full rounded border-none bg-[#D2D2D240] h-10"
                />
              </div>
              <div className="mb-5">
                <label className="font-bold text-2xl">Password</label>
                <input
                  onChange={(e) => {
                    setForm({ ...form, password: e.target.value });
                    console.log(e.target.value);
                  }}
                  value={form?.password}
                  type="password"
                  className="w-full rounded border-none bg-[#D2D2D240] h-10"
                />
              </div>

              <button className="text-center w-full bg-[#FFAF00] mb-1 py-2 rounded-sm text-white font-bold">
                Login
              </button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Don&apos;t have an account?
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Typography>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
