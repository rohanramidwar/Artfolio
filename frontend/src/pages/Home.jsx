import React from "react";
import ProjectCard from "../components/ProjectCard";

function Home() {
  return (
    <div className="flexCenter flex-col text-gray-700 mx-[72px]">
      <div className="flexCenter mt-10 flex gap-2 w-2/3 ">
        <button className="px-4 h-9  rounded-full font-semibold hover:text-gray-600  focus:bg-[#f8f7f4] active:bg-[#f8f7f4] ">
          Discover
        </button>
        <button className="px-4 h-9  rounded-full font-semibold hover:text-gray-600  focus:bg-[#f8f7f4] active:bg-[#f8f7f4] ">
          Anime
        </button>
        <button className="px-4 h-9  rounded-full font-semibold hover:text-gray-600  focus:bg-[#f8f7f4] active:bg-[#f8f7f4] ">
          Sketches
        </button>
        <button className="px-4 h-9  rounded-full font-semibold hover:text-gray-600  focus:bg-[#f8f7f4] active:bg-[#f8f7f4] ">
          Anatomy
        </button>
        <button className="px-4 h-9  rounded-full font-semibold hover:text-gray-600  focus:bg-[#f8f7f4] active:bg-[#f8f7f4] ">
          Realism
        </button>
        <button className="px-4 h-9  rounded-full font-semibold hover:text-gray-600  focus:bg-[#f8f7f4] active:bg-[#f8f7f4] ">
          Comic art
        </button>
        <button className="px-4 h-9  rounded-full font-semibold hover:text-gray-600  focus:bg-[#f8f7f4] active:bg-[#f8f7f4] ">
          Tutorials
        </button>
      </div>
      <div className="mt-10 grid grid-cols-3 gap-9">
        <ProjectCard />
      </div>

      <div className="mt-10 flexCenter gap-4 font-semibold text-sm">
        <button className="px-4 h-9 bg-purple-600 hover:scale-110 transition duration-300 text-white rounded-xl">
          Prev
        </button>
        <button className="px-4 h-9 bg-purple-600 hover:scale-110 transition duration-300 text-white rounded-xl">
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
