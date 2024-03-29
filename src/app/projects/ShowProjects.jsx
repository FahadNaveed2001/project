"use client";

import UserContext from "@/context/userContext";
import { deleteProject, getTasksOfUser } from "../../services/taskServices";
import React, { useContext, useEffect, useState } from "react";
import Project from "./Project";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const ShowProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const context = useContext(UserContext);

  async function loadProjects(userId) {
    try {
      const projects = await getTasksOfUser(userId);
      const formattedProjects = projects.map((project) => ({
        ...project,
        addedDate: new Date(project.addedDate).toLocaleDateString(),
      }));
      setProjects(formattedProjects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (context.user) {
      loadProjects(context.user._id);
    }
  }, [context.user]);

  async function deleteProjectParent(projectId) {
    try {
      const result = await deleteProject(projectId);
      console.log(result);
      const newProjects = projects.filter((item) => item._id !== projectId);
      setProjects(newProjects);
      toast.success("Project Deleted !!");
    } catch (error) {
      console.log(error);
      toast.error("Error Deleting Project !!");
    }
  }

  return (
    <main className="min-h-screen bg-[#131313] text-white p-10 md:p-24">
      <motion.div 
      initial={{y:100}}
      animate={{y:0}}
      transition={{ duration: 0.3 }}
      className="bg-[#1D1D1D] p-5 md:p-10 rounded-t-3xl min-h-[70vh] shadow-2xl shadow-black">
        <div className="text-3xl font-bold md:text-start text-center">
          Your Projects ({projects.length})
        </div>
        {loading ? (
          <div className="mt-[30%] md:mt-[10%] flex flex-row gap-5  justify-center items-center">
            <div class="h-8 w-8 bg-cyan-800 rounded-full"></div>
            <div class="h-8 w-8 bg-cyan-800 rounded-full "></div>
            <div class="h-8 w-8 bg-cyan-800 rounded-full "></div>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-sm md:text-2xl text-center mt-[30%] md:mt-[10%]">
            No projects added yet.
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Project
                key={project._id}
                project={project}
                deleteProjectParent={deleteProjectParent}
              />
            ))}
          </div>
        )}
      </motion.div>
    </main>
  );
};

export default ShowProjects;
