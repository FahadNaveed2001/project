import UserContext from "@/context/userContext";
import React, { useContext, useState } from "react";
import { ImCheckboxChecked } from "react-icons/im";
import { AiFillClockCircle } from "react-icons/ai";

const Project = ({ project, deleteProjectParent }) => {
  const { user } = useContext(UserContext);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  function deleteProject(projectId) {
    deleteProjectParent(projectId);
  }

  return (
    <>
      <div className="bg-[#2c2c2c] pt-6 px-8 pb-4 rounded-2xl shadow-2xl shadow-black transition-all hover:-translate-y-1 hover:scale-105 cursor-pointer">
        <div className="flex justify-between flex-col " onClick={toggleModal}>
          <div>
            <h2 className="text-3xl font-bold uppercase  pb-2">
              {project.title}
            </h2>
            <div></div>
            <div className=" text-white flex md:flex-row gap-3 md:gap-6 mt-2">
              <div>{project.language}</div>
              <div>{project.stack}</div>
              <div>{project.appType}</div>
            </div>
            <div className="mt-4">{project.content}</div>
          </div>
          <div className="flex justify-between mt-7">
            <div>
              <span className="text-cyan-400">{project.addedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              {project.status === "Pending" ? (
                <AiFillClockCircle className="text-cyan-400 animate-spin" />
              ) : (
                <ImCheckboxChecked className="text-green-400 " />
              )}
              <span>{project.status}</span>
            </div>
          </div>
        </div>
        <button
          className="w-full bg-red-500 py-2 rounded-lg mt-5"
          onClick={() => {
            deleteProject(project._id);
          }}
        >
          Delete
        </button>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
          <div className="bg-[#131313] relative p-8 rounded-lg shadow-lg h-[90%] w-[90%] transition-opacity">
            <h2 className="md:text-5xl text-2xl font-black uppercase mb-4  md:p-8">
              {project.title}
            </h2>
            <div className=" text-cyan-400 flex  md:px-8 flex-col gap-2 md:gap-4 mt-2 text-[12px] md:text-xl font-semibold">
              <div>Language : {project.language}</div>
              <div>Stack : {project.stack}</div>
              <div>App Type : {project.appType}</div>
            </div>
            <div className="md:p-8 py-5 text-sm md:text-xl">
              <span className="font-semibold">Description : </span>
              {project.content}
            </div>

            <button
              className="absolute top-3 md:top-4 right-4 rotate-45  text-3xl md:text-[72px] text-white rounded transition-all hover:text-cyan-400"
              onClick={toggleModal}
            >
              +
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
