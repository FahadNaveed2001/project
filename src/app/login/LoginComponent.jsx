"use client";

import UserContext from "@/context/userContext";
import { login } from "@/services/userservices";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginComponent() {
  const router = useRouter();
  const context = useContext(UserContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const loginFormSubmitted = async (event) => {
    event.preventDefault();
    console.log(loginData);

    if (loginData.email.trim() === "" || loginData.password.trim() === "") {
      toast.warning("Fill All Fields !!");
      return;
    }

    try {
      const result = await login(loginData);
      console.log(result);
      toast.success("Login Successful !!");

      context.setUser(result.user);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <main className=" min-h-[80vh] bg-[#0f0f0f] md:p-24 text-white">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto h-[50%]">
        <div className="absolute inset-0 bg-gradient-to-r shadow-2xl shadow-black from-[#000000] to-[#000000]  transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-[#1D1D1D] shadow-2xl shadow-black sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-white ">Login</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <form action="#!" onSubmit={loginFormSubmitted}>
                  <div className="relative mt-6">
                    <input
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="email"
                      className="peer placeholder-transparent  h-10 bg-transparent w-full border-b  border-gray-500 text-gray-100 focus:outline-none focus:border-cyan-500"
                      placeholder="Email address"
                      onChange={(event) => {
                        setLoginData({
                          ...loginData,
                          email: event.target.value,
                        });
                      }}
                      value={loginData.email}
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-300 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-cyan-700 peer-focus:text-sm">
                      Email Address
                    </label>
                  </div>
                  <div className="relative mt-6">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent bg-transparent  h-10 w-full border-b border-gray-500 text-gray-100 focus:outline-none focus:border-cyan-500"
                      placeholder="Password"
                      onChange={(event) => {
                        setLoginData({
                          ...loginData,
                          password: event.target.value,
                        });
                      }}
                      value={loginData.password}
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-300 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-cyan-700 peer-focus:text-sm">
                      Password
                    </label>
                  </div>

                  <div className="relative mt-6">
                    <button
                      type="submit"
                      className="bg-cyan-500 text-white rounded-md px-2 py-1"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {JSON.stringify(loginData)} */}
    </main>
  );
}
