import React from "react";
import Categories from "../components/Categories";
import ProjectCard from "../components/ProjectCard";

const HomePage = () => {
  return (
    <div className="flexCenter flex-col text-gray-700 mx-[72px]">
      <Categories />
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
};

export default HomePage;
