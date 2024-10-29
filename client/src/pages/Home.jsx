import { getAllPosts, getPostsBySearch } from "@/actions/postActions";
import HomeFilters from "@/components/HomeFilters";
import ProjectCard from "@/components/ProjectCard";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import animationData from "../animations/loading.json";
import Lottie from "lottie-react";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //fetch all posts
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const { posts, isLoading } = useSelector((state) => state?.posts);

  const [search, setSearch] = useState("");

  const searchPost = () => {
    if (search.trim()) {
      dispatch(getPostsBySearch(search, navigate));
    } else {
      navigate("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchPost();
    }
  };

  return (
    <div className="px-5 sm:px-14">
      <input
        className="mt-8 block sm:hidden w-full bg-gray-100 outline-none rounded-xl pl-4 py-3 pr-10 placeholder:text-slate-900 text-sm"
        placeholder="Search"
        onKeyDown={handleKeyPress}
        value={search} // Change here
        onChange={(e) => setSearch(e.target.value)}
      />
      <HomeFilters />

      {isLoading ? (
        <div className="flex justify-center items-center pt-12">
          <div className="loader"></div>
        </div>

      
      ) : (
        <>
          {!posts?.length ? (
            <p className="pt-12 text-center">0 posts found</p>
          ) : (
            <div className="py-12 sm:grid flex flex-col sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {posts?.map((post, index) => (
                <ProjectCard key={post?._id} post={post} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
