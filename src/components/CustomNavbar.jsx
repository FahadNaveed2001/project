"use client";
import { MdCodeOff } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { MdOutlineAdd } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { useContext } from "react";
import UserContext from "@/context/userContext";
import { logout } from "@/services/userservices";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaPowerOff } from "react-icons/fa";

export default function CustomNavbar() {
  const context = useContext(UserContext);

  const router = useRouter();

  async function doLogout() {
    try {
      const result = await logout()
      console.log(result)
      context.setUser(undefined)
      toast.success("Logged Out Successfully !!")
      router.push("/login")
    } catch (error) {
      console.log(error)
      toast.error("Error logging out !!")
    }
  }

  console.log(context);
  return (
    <nav className=" bg-[#1d1d1d] text-white py-6 px-4 md:px-20 flex justify-between items-center">
      <div className="">
        <a className="cursor-pointer flex flex-row items-center gap-2">
          <MdCodeOff className="text-3xl text-cyan-500" />
          <span className=" font-bold text-sm md:text-2xl">MK Project Manager</span>
        </a>
      </div>
      <div>
        <ul className="flex flex-row space-x-5">
          {context.user && (
            <>
              <li className="hover:text-cyan-400 transition-all">
                <Link href="/" className="flex flex-row items-center gap-1">
                  <GoHome />
                  <span className="">Home</span>
                </Link>
              </li>
              <li className="hover:text-cyan-400 transition-all">
                <Link
                  href="/add-project"
                  className="flex flex-row items-center gap-1"
                >
                  <MdOutlineAdd />
                  <span className="">Add Project</span>
                </Link>
              </li>
              <li className="hover:text-cyan-400 transition-all">
                <Link
                  href="/projects"
                  className="flex flex-row items-center gap-1"
                >
                  <CiViewList />
                  <span className="">Projects</span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className="flex flex-row space-x-2">
          {context.user && (
            <>
              <li className="  px-4 cursor-default rounded py-2 transition-all">
                <a>
                  {context.user.name}</a>
              </li>
              <li className="  cursor-pointer px-4 text-cyan-400 hover:text-white hover:bg-cyan-400 rounded-full py-2 transition-all">
                <button className="flex items-center gap-2" onClick={doLogout}><FaPowerOff />Logout</button>
              </li>
            </>
          )}
          {!context.user && (
            <>
              <li className=" px-4 bg-[#111111] hover:bg-cyan-400 rounded py-2 transition-all">
                <Link href="/login">Login</Link>
              </li>
              <li className=" px-4 bg-[#0F0F0F] hover:bg-cyan-400 rounded py-2 transition-all">
                <Link href="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
