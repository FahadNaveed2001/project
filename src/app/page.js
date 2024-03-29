import Link from "next/link";
import { ImCheckboxChecked } from "react-icons/im";

export const metadata = {
  title: "Home : Project Manager",
};

export default function Home() {
  return (
    <div className=" h-full bg-[#131313] text-white p-10 md:p-24 flex flex-col md:flex-row">
      <div className="md:w-[50%] p-10">
        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Welcome to MK Project Manager!
        </h1>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          MK Project Manager is a powerful tool designed to streamline your
          project management process, helping you and your team stay organized,
          efficient, and on track towards achieving your goals. Whether youre
          working on small tasks or large-scale projects, MK Project Manager has
          got you covered.
        </p>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Project Management: Create, assign, and track tasks effortlessly. With
          intuitive task management features, you can easily prioritize tasks,
          set deadlines, and monitor progress in real-time.
        </p>
        <Link
          href="/add-project"
          class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-cyan-400 hover:bg-cyan-600 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          Create Project
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>

      <div className="md:w-[50%] bg-[#1d1d1d] rounded-t-3xl shadow-2xl shadow-black grid grid-cols-1 md:grid-cols-2 grid-rows-2 p-20 gap-5">
        <div className="bg-[#272727] rounded-xl p-4 shadow-xl shadow-black">
          {" "}
          <div className="flex justify-between flex-col ">
            <div>
              <h2 className="text-3xl font-bold uppercase  pb-2">Project 1</h2>
              <div></div>
              <div className=" text-white flex md:flex-row gap-3 md:gap-6 mt-2">
                <div>C#</div>
                <div>Full Stack</div>
                <div>Mobile App</div>
              </div>
              <div className="mt-4">This is Project 1</div>
            </div>
            {/* <div className="mt-5">{user.name}</div> */}
            <div className="flex justify-between mt-7">
              <div>
                {/* Added by <span className="text-cyan-400">{user.name}</span> on {" "} */}
                <span className="text-cyan-400">12/2/2024</span>
              </div>{" "}
              <div className="flex flex-row items-center gap-2">
                <div className="w-3 h-3 rounded-full items-center">
                  <ImCheckboxChecked className="text-green-400" />
                </div>
                Pending
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#272727] rounded-xl p-4 shadow-xl shadow-black">
          {" "}
          <div className="flex justify-between flex-col ">
            <div>
              <h2 className="text-3xl font-bold uppercase  pb-2">Project 2</h2>
              <div></div>
              <div className=" text-white flex md:flex-row gap-3 md:gap-6 mt-2">
                <div>C#</div>
                <div>Full Stack</div>
                <div>Mobile App</div>
              </div>
              <div className="mt-4">This is Project 2</div>
            </div>
            {/* <div className="mt-5">{user.name}</div> */}
            <div className="flex justify-between mt-7">
              <div>
                {/* Added by <span className="text-cyan-400">{user.name}</span> on {" "} */}
                <span className="text-cyan-400">4/8/2023</span>
              </div>{" "}
              <div className="flex flex-row items-center gap-2">
                <div className="w-3 h-3 rounded-full items-center">
                  <ImCheckboxChecked className="text-green-400" />
                </div>
                Pending
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#272727] rounded-xl p-4 shadow-xl shadow-black">
          {" "}
          <div className="flex justify-between flex-col ">
            <div>
              <h2 className="text-3xl font-bold uppercase  pb-2">Project 3</h2>
              <div></div>
              <div className=" text-white flex md:flex-row gap-3 md:gap-6 mt-2">
                <div>C#</div>
                <div>Full Stack</div>
                <div>Mobile App</div>
              </div>
              <div className="mt-4">This is Project 3</div>
            </div>
            {/* <div className="mt-5">{user.name}</div> */}
            <div className="flex justify-between mt-7">
              <div>
                {/* Added by <span className="text-cyan-400">{user.name}</span> on {" "} */}
                <span className="text-cyan-400">5/5/2024</span>
              </div>{" "}
              <div className="flex flex-row items-center gap-2">
                <div className="w-3 h-3 rounded-full items-center">
                  <ImCheckboxChecked className="text-green-400" />
                </div>
                Pending
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#272727] rounded-xl p-4 shadow-xl shadow-black">
          {" "}
          <div className="flex justify-between flex-col ">
            <div>
              <h2 className="text-3xl font-bold uppercase  pb-2">Project 1</h2>
              <div></div>
              <div className=" text-white flex md:flex-row gap-3 md:gap-6 mt-2">
                <div>C#</div>
                <div>Full Stack</div>
                <div>Mobile App</div>
              </div>
              <div className="mt-4">This is Project 1</div>
            </div>
            {/* <div className="mt-5">{user.name}</div> */}
            <div className="flex justify-between mt-7">
              <div>
                {/* Added by <span className="text-cyan-400">{user.name}</span> on {" "} */}
                <span className="text-cyan-400">12/2/2024</span>
              </div>{" "}
              <div className="flex flex-row items-center gap-2">
                <div className="w-3 h-3 rounded-full items-center">
                  <ImCheckboxChecked className="text-green-400" />
                </div>
                Pending
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
