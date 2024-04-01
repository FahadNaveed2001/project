"use client";

import { Register } from "@/services/userservices";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signupcomponent = () => {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL:
      "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Transparent-Image.png",
  });

  const doSignup = async (event) => {
    event.preventDefault();

    if (!data.name.trim()) {
      toast.warning("Please provide a valid Name !");
      return;
    }

    if (!data.email.trim()) {
      toast.warning("Please provide a valid Email !");
      return;
    }

    if (!data.password.trim()) {
      toast.warning("Please provide Password !");
      return;
    }

    if (!data.about.trim()) {
      toast.warning("Please provide Information !");
      return;
    }

    try {
      const result = await Register(data);
      console.log(result);
      toast.success("Registration Successfull !");
      setData({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL:
          "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Transparent-Image.png",
      });
      router.push("/login");
    } catch (error) {
      console.error(error);
      toast.error("Error During Registration !");
    }
  };

  return (
    <main className=" min-h-screen bg-[#0f0f0f] md:p-24">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto h-[50%]">
        <div className="absolute inset-0 bg-gradient-to-r shadow-2xl shadow-black from-[#000000] to-[#000000]  transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-[#1D1D1D] shadow-2xl shadow-black sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-white">Register</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <form action="#!" onSubmit={doSignup}>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="username"
                      name="username"
                      type="text"
                      className="peer placeholder-transparent  h-10 bg-transparent w-full border-b border-gray-500 text-gray-100 focus:outline-none focus:border-cyan-400"
                      placeholder="UserName"
                      onChange={(event) => {
                        setData({
                          ...data,
                          name: event.target.value,
                        });
                      }}
                      value={data.name}
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-300 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-cyan-700 peer-focus:text-sm">
                      User Name
                    </label>
                  </div>
                  <div className="relative mt-6">
                    <input
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="email"
                      className="peer placeholder-transparent  h-10 bg-transparent w-full border-b border-gray-500 text-gray-100 focus:outline-none focus:border-cyan-400"
                      placeholder="Email address"
                      onChange={(event) => {
                        setData({
                          ...data,
                          email: event.target.value,
                        });
                      }}
                      value={data.email}
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
                      className="peer placeholder-transparent bg-transparent  h-10 w-full border-b border-gray-500 text-gray-100 focus:outline-none focus:border-cyan-400"
                      placeholder="Password"
                      onChange={(event) => {
                        setData({
                          ...data,
                          password: event.target.value,
                        });
                      }}
                      value={data.password}
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-300 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-cyan-700 peer-focus:text-sm">
                      Password
                    </label>
                  </div>

                  <div className="relative mt-6">
                    <textarea
                      autoComplete="off"
                      id="about"
                      name="about"
                      type="text"
                      className="peer resize-none h-40 md:h-40 placeholder-transparent bg-transparent w-full border-b border-gray-500 text-gray-100 focus:outline-none focus:border-cyan-400"
                      placeholder="About"
                      cols="30"
                      onChange={(event) => {
                        setData({
                          ...data,
                          about: event.target.value,
                        });
                      }}
                      value={data.about}
                    />

                    <label className="absolute left-0 -top-3.5 text-gray-300 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-cyan-700 peer-focus:text-sm">
                      About
                    </label>
                  </div>
                  <div className="relative mt-6">
                    <button
                      type="submit"
                      className="bg-cyan-500 text-white rounded-md px-2 py-1"
                    >
                      Register
                    </button>
                  </div>
                </form>
                <div>
                  <Link
                    href="/login"
                    className="text-gray-200 text-sm hover:underline"
                  >
                    Already Have account?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signupcomponent;
