"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdDashboard } from "react-icons/md";
import Link from "next/link";
import { IoMdLogOut } from "react-icons/io";
import { FaRegClock, FaRegCheckSquare } from "react-icons/fa";
import Image from "next/image";
import { toast } from "react-toastify";

const Tab = ({ active, label, onClick }) => (
  <div
    className={`cursor-pointer px-6 py-2 rounded-xl ${
      active ? "bg-cyan-600 text-white font-bold" : "text-[#c5c5c5]"
    }`}
    onClick={onClick}
  >
    {label}
  </div>
);

const TabContent = ({ children }) => <div>{children}</div>;

export default function Admin() {
  const defaultEmail = "mkadmin@mk.com";
  const defaultPassword = "mk1234";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === defaultEmail && password === defaultPassword) {
      toast.success("Wellcome Sir !!");
      setLoginStatus("success");
    } else {
      setLoginStatus("failure");
      toast.error("Sorry Invalid Credentials !!");
    }
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (index === 0) {
      fetchUsers();
    } else if (index === 1) {
      fetchProjects();
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`/api/users/${userId}`);
      toast.success("User Deleted !!");
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Try Again Later !!");
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await axios.get("/api/projects");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const deleteProject = async (projectId) => {
    try {
      await axios.delete(`/api/projects/${projectId}`);
      toast.success("Project Deleted !!");

      fetchProjects();
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("Try Again Later !!");

    }
  };

  useEffect(() => {
    if (activeTab === 0) {
      fetchUsers();
    } else if (activeTab === 1) {
      fetchProjects();
    }
  }, [activeTab]);

  const getUserNameById = (userId) => {
    const user = users.find((user) => user._id === userId);
    return user ? user.name : "Unknown";
  };

  const projectsWithUserName = projects.map((project) => ({
    ...project,
    userName: getUserNameById(project.userId),
  }));

  return (
    <div className="bg-[#131313] min-h-[80vh]">
      {loginStatus === "success" ? (
        <div className="flex flex-row gap-10 min-h-[80vh] p-20 ">
          <div className="w-[20%] bg-[#2b2b2b] text-white rounded-3xl shadow-2xl shadow-black">
            <div className="flex flex-col">
              <div className="text-3xl font-bold flex items-center p-6 ">
                <MdDashboard className="text-cyan-400" />
                Mk Admin Panel
              </div>
              <Tab
                label="Users"
                active={activeTab === 0}
                onClick={() => handleTabClick(0)}
              />
              <Tab
                label="Projects"
                active={activeTab === 1}
                onClick={() => handleTabClick(1)}
              />
              <Link
                href="/login"
                className="mt-[100%] rounded-full flex items-center hover:gap-3 py-2 px-4 transition-all hover:bg-cyan-400"
              >
                <IoMdLogOut className="text-2xl" />
                Logout
              </Link>
            </div>
          </div>
          <div className="w-[80%] bg-[#2b2b2b] rounded-3xl shadow-2xl shadow-black text-white">
            <div>
              {activeTab === 0 && (
                <TabContent>
                  <h2 className="text-2xl p-3 pt-6 font-semibold ">Users</h2>
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-semibold text-cyan-400 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-semibold text-cyan-400 uppercase tracking-wider"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-semibold text-cyan-400 uppercase tracking-wider"
                        >
                          About
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Action</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-600 ">
                      {users.map((user) => (
                        <tr key={user._id} className="hover:bg-cyan-950 ">
                          <td className="px-6 py-4 whitespace-nowrap rounded-3xl">
                            <div className="text-sm font-medium text-gray-200">
                              {user.name}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-center text-gray-200">
                              {user.email}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-center text-gray-200">
                              {user.about}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              className="text-white bg-red-400 px-4 py-1 rounded hover:bg-red-600 transition-all"
                              onClick={() => deleteUser(user._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </TabContent>
              )}

              {activeTab === 1 && (
                <TabContent>
                  <h2 className="text-2xl p-3 pt-6 font-semibold ">Projects</h2>
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-semibold text-cyan-400 uppercase tracking-wider"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-semibold text-cyan-400 uppercase tracking-wider"
                        >
                          Content
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-semibold text-cyan-400 uppercase tracking-wider"
                        >
                          Language
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-semibold text-cyan-400 uppercase tracking-wider"
                        >
                          Stack
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-semibold text-cyan-400 uppercase tracking-wider"
                        >
                          User Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-semibold text-cyan-400 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-semibold text-cyan-400 uppercase tracking-wider"
                        >
                          Created On
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Action</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className=" divide-y divide-gray-600">
                      {projectsWithUserName.map((project) => (
                        <tr key={project._id} className="hover:bg-cyan-950">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-200">
                              {project.title}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-center text-gray-200">
                              {project.content}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-center text-gray-200">
                              {project.language}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-center text-gray-200">
                              {project.stack}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-center text-gray-200">
                              {project.userName}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center justify-center text-sm text-gray-200">
                              {project.status === "Pending" ? (
                                <>
                                  <FaRegClock className="mr-1 text-cyan-400 animate-spin" />
                                  Pending
                                </>
                              ) : (
                                <>
                                  <FaRegCheckSquare className="text-green-400 mr-1" />
                                  Completed
                                </>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-center text-gray-200">
                              {new Date(project.addedDate).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              className="text-white bg-red-400 px-4 py-1 rounded hover:bg-red-600 transition-all"
                              onClick={() => deleteProject(project._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </TabContent>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="relative py-3 sm:max-w-xl sm:mx-auto ">
          <div className="relative px-4 py-10 mt-[10%] bg-[#1D1D1D] shadow-2xl shadow-black sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto ">
              <div>
                <h1 className="text-2xl font-semibold text-white ">Login</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <form onSubmit={handleSubmit}>
                    <div className="relative mt-6">
                      <input
                        autoComplete="off"
                        id="email"
                        name="email"
                        type="email"
                        className="peer placeholder-transparent  h-10 bg-transparent w-full border-b  border-gray-500 text-gray-100 focus:outline-none focus:border-cyan-500"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
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
                        className="peer placeholder-transparent bg-transparent  h-10 w-full border-b border-gray-500 text-gray-100 focus:outline-none focus:border-cyan-500"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
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
                        Login As Admin
                      </button>
                    </div>
                  </form>
                  <div>
                    <Link
                      href="/login"
                      className="text-gray-200 text-sm hover:underline"
                    >
                      Login as Normal User
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {loginStatus === "failure" && <p></p>}
    </div>
  );
}
