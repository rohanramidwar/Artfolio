import React from "react";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Pagination } from "@mui/material";

const Home = () => {
  return (
    <div className="flex flex-col  text-[#dbdee1] items-center gap-8 pt-6">
      <div>
        <p className="mb-4 text-3xl">
          <span className="font-extrabold">Showcase</span> to the{" "}
          <span className="font-extrabold">world</span> your <br></br>{" "}
          <span className="font-extrabold">skills</span> and{" "}
          <span className="font-extrabold text-[#00e97b]">monetise</span> your{" "}
          <span className="font-extrabold">art</span>
        </p>
        <Link to="create">
          {" "}
          <Button className="w-full font-inherit" variant="outlined">
            Create your Artfolio
          </Button>
        </Link>
      </div>

      <div className="flex gap-4 ">
        <button className="bg-[#43444b] font-semibold text-white px-[8px] rounded-md ">
          All
        </button>
        <button className="hover:bg-[#43444b] font-semibold hover:text-white px-[8px] rounded-md">
          Abstract
        </button>
        <button className="hover:bg-[#43444b] font-semibold hover:text-white px-[8px] rounded-md">
          Canvas
        </button>
        <button className="hover:bg-[#43444b] font-semibold hover:text-white px-[8px] rounded-md">
          Drawing
        </button>
        <button className="hover:bg-[#43444b] font-semibold hover:text-white px-[8px] rounded-md">
          Portrait
        </button>
        <button className="hover:bg-[#43444b] font-semibold hover:text-white px-[8px] rounded-md">
          Sketch
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Shop</h2>
        <div className="md:grid grid-cols-3 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      <div className="mb-40">
        <Pagination
          color="secondary"
          count={10}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </div>
  );
};

export default Home;
