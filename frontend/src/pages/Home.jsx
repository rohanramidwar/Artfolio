import React, { useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Home() {
  const categories = [
    "Discover",
    "Anime",
    "Sketches",
    "Anatomy",
    "Realism",
    "Comic art",
    "Tutorials",
  ];

  const categoriesRef = useRef(null);

  function handleScroll() {
    const container = categoriesRef.current;

    document.getElementById("leftChevron").style.visibility =
      container.scrollLeft > 0 ? "visible" : "hidden";
  }

  function scrollToLeft() {
    const container = categoriesRef.current;

    container.scrollTo({
      left: container.scrollLeft - 340,
      behavior: "smooth",
    });
  }

  function scrollToRight() {
    const container = categoriesRef.current;

    container.scrollTo({
      left: container.scrollLeft + 340,
      behavior: "smooth",
    });
  }

  return (
    <div className="flexCenter flex-col text-gray-700 mx-[72px]">
      <div className="relative flexCenter mt-10 w-2/3 overflow-x-hidden scroll-smooth">
        <div
          role="button"
          onClick={scrollToLeft}
          id="leftChevron"
          className="absolute invisible left-0 bg-gradient-to-r from-white to-transparent pr-20"
        >
          <ChevronLeft size={20} />
        </div>

        <div
          ref={categoriesRef}
          onScroll={handleScroll}
          className="flex gap-2 whitespace-nowrap overflow-x-hidden scroll-smooth mx-4"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 h-9 rounded-full font-semibold hover:text-gray-600 focus:bg-purple-100 active:bg-purple-100"
            >
              {category}
            </button>
          ))}
        </div>

        <div
          id="rightChevron"
          className="absolute visible right-0 bg-gradient-to-l from-white to-transparent pl-20"
        >
          <ChevronRight size={20} onClick={scrollToRight} />
        </div>
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
