"use client";

import { addTask } from "../../services/taskServices";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export default function AddTask() {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "6601b126ab21b2e02ba5bda7",
    language: "none",
    stack: "none",
    appType: "none",
  });

  const [loading, setLoading] = useState(false);

  const handleAddProject = async (event) => {
    event.preventDefault();

    try {
      const result = await addTask(task);
      console.log(result);

      setTask({
        title: "",
        content: "",
        status: "none",
        language: "none",
        stack: "none",
        appType: "none",
      });

      toast.success("Project Created !!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleClear = (event) => {
    event.preventDefault();
    setTask({
      title: "",
      content: "",
      status: "none",
      language: "none",
      stack: "none",
      appType: "none",
    });
  };

  return (
    <main className="flex min-h-screen flex-col p-10 md:p-24 bg-[#131313] text-white">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-[#1D1D1D] p-5 md:p-10 rounded-t-3xl h-full shadow-2xl shadow-black"
      >
        <div>Add Your Project Here.</div>
        <form action="#!" onSubmit={handleAddProject}>
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              autoComplete="off"
              type="text"
              className="w-full p-2.5  bg-[#111111] focus:ring-none border-none focus:border-none outline-none"
              id="task_title"
              name="task_title"
              onChange={(event) => {
                setTask({
                  ...task,
                  title: event.target.value,
                });
              }}
              value={task.title}
            />
          </div>

          <div className="flex md:gap-6 md:flex-row flex-col">
            <div className="mt-4 w-full">
              <label
                htmlFor="task_language"
                className="block text-sm font-medium mb-2"
              >
                Select language
              </label>
              <select
                id="task_language"
                className="w-full p-2.5  resize-none bg-[#111111] focus:ring-none border-none focus:border-none outline-none"
                name="task_language"
                onChange={(event) => {
                  setTask({
                    ...task,
                    language: event.target.value,
                  });
                }}
                value={task.language}
              >
                <option value="none" disabled>
                  Language
                </option>
                <option value="Javascript">Javascript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="C#">C#</option>
                <option value="Swift">Swift</option>
                <option value="Ruby">Ruby</option>
                <option value="TypeScript">TypeScript</option>
                <option value="SQL">SQL</option>
                <option value="Go">Go</option>
                <option value="Kotlin">Kotlin</option>
              </select>
            </div>
            <div className="mt-4 w-full">
              <label
                htmlFor="task_status"
                className="block text-sm font-medium mb-2"
              >
                Select Stack
              </label>
              <select
                id="task_stack"
                className="w-full p-2.5  resize-none bg-[#111111] focus:ring-none border-none focus:border-none outline-none"
                name="task_stack"
                onChange={(event) => {
                  setTask({
                    ...task,
                    stack: event.target.value,
                  });
                }}
                value={task.stack}
              >
                <option value="none" disabled>
                  Stack
                </option>
                <option value="Backend">Backend</option>
                <option value="Frontend">Frontend</option>
                <option value="Full-Stack">Full Stack</option>
                <option value="DataBase-Work">DataBase Work</option>
                <option value="Testing">Testing</option>
              </select>
            </div>
            <div className="mt-4 w-full">
              <label
                htmlFor="task_type"
                className="block text-sm font-medium mb-2"
              >
                Select App Type
              </label>
              <select
                id="task_type"
                className="w-full p-2.5  resize-none bg-[#111111] focus:ring-none border-none focus:border-none outline-none"
                name="task_type"
                onChange={(event) => {
                  setTask({
                    ...task,
                    appType: event.target.value,
                  });
                }}
                value={task.appType}
              >
                <option value="none" disabled>
                  App Type
                </option>
                <option value="Mobile-App">Mobile App</option>
                <option value="Software">Software</option>
                <option value="Web-App">Web App</option>
                <option value="IOS">IOS</option>
                <option value="Static-Page">Static Page</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2"
            >
              Description
            </label>
            <textarea
              className="w-full p-2.5  resize-none bg-[#111111] focus:ring-none border-none focus:border-none outline-none"
              id="task_content"
              cols="30"
              rows="10"
              name="task_content"
              onChange={(event) => {
                setTask({
                  ...task,
                  content: event.target.value,
                });
              }}
              value={task.content}
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="task_status"
              className="block text-sm font-medium mb-2"
            >
              Select Status
            </label>
            <select
              id="task_status"
              className="w-full p-2.5  resize-none bg-[#111111] focus:ring-none border-none focus:border-none outline-none"
              name="task_status"
              onChange={(event) => {
                setTask({
                  ...task,
                  status: event.target.value,
                });
              }}
              value={task.status}
            >
              <option value="none" disabled>
                Select Status
              </option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="mt-5 gap-3 flex">
            <button
              type="submit"
              className="px-4 py-2 bg-cyan-500 rounded-lg hover:bg-cyan-600 transition-all"
              disabled={loading}
            >
              {loading ? (
                <FaSpinner className="animate-spin mx-auto" />
              ) : (
                "Add Project"
              )}
            </button>
            <button
              onClick={handleClear}
              className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition-all"
            >
              Clear
            </button>
          </div>
        </form>
      </motion.div>
    </main>
  );
}
