import React from "react";
import FilterBtn from "../components/buttons/FilterBtn";
import ArtCard from "../components/ArtCard";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col mt-8 items-center">
      <div className="flex flex-col gap-4 justify-center w-80">
        <h1 className="text-4xl text-gray-700 font-semibold">
          Turn your{" "}
          <span className="underline decoration-pink-600">passion</span> into
          profit,{" "}
          <span className="underline decoration-green-600">monetize</span> your
          art
        </h1>
        <button
          type="button"
          class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          <Link to="create">Create your Artfolio</Link>
        </button>
      </div>

      <div className="lg:flex grid grid-cols-3 gap-7 mt-14">
        <FilterBtn text={"All"} />
        <FilterBtn text={"Cartoon"} />
        <FilterBtn text={"Scribbling"} />
        <FilterBtn text={"Doodling"} />
        <FilterBtn text={"Sketching"} />
      </div>

      <div className="lg:grid grid-cols-4 gap-6 mt-14">
        <ArtCard />
        <ArtCard />
        <ArtCard />
        <ArtCard />
        <ArtCard />
        <ArtCard />
      </div>

      <Pagination className="mt-14 " count={10} />
    </div>
  );
};

export default Home;
