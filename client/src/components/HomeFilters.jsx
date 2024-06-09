import React, { useState } from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { getFilteredPosts } from "@/actions/postActions";

const HomeFilters = () => {
  const dispatch = useDispatch();

  const filters = [
    "Sketches",
    "Watercolor",
    "Pixel",
    "Sketchbook",
    "Doodle",
    "Reference",
    "Illustration",
    "Easy doodle",
    "Canvas",
    "Pencil art",
    "Disney",
    "Easy",
    "Simple",
  ];

  const [category, setCategory] = useState("");

  //final call
  const handleClick = (e) => {
    setCategory(e.target.innerHTML);
    dispatch(getFilteredPosts(e.target.innerHTML));
  };

  return (
    <div className="flex gap-3 overflow-auto pt-8">
      {filters.map((filter, index) => (
        <Button
          key={index}
          onClick={handleClick}
          className={`text-slate-700 hover:bg-zinc-100 ${
            category === filter ? "bg-zinc-100" : "bg-inherit"
          }`}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
