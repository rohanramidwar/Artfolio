import React, { useState } from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { getAllPosts, getFilteredPosts } from "@/actions/postActions";
import { categories } from "@/categories";

const HomeFilters = () => {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState("");

  //final call
  const handleClick = (e) => {
    setFilter(e.target.innerHTML);
    if (e.target.innerHTML === "Discover") {
      dispatch(getAllPosts());
    } else {
      dispatch(getFilteredPosts(e.target.innerHTML));
    }
  };

  return (
    <div className="flex gap-3 overflow-auto pt-8">
      {categories.map((category, index) => (
        <Button
          key={index}
          onClick={handleClick}
          className={`text-slate-700 hover:bg-zinc-100 ${
            filter === category ? "bg-zinc-100" : "bg-inherit"
          }`}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
