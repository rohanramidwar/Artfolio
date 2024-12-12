import { getAllPosts, getPostsBySearch } from "@/actions/postActions";
import HomeFilters from "@/components/HomeFilters";
import ProjectCard from "@/components/ProjectCard";
import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const PostPlaceholder = () => (
  <div className="flex flex-col gap-3">
    <div className="flex justify-center items-center relative w-full">
      <div className="w-full h-60 rounded-2xl bg-gray-200 animate-pulse" />
    </div>
    <div className="px-2 flex justify-between text-sm font-medium">
      <div className="flex gap-2 items-center">
        <div className="w-6 h-6 rounded-full bg-gray-200 animate-pulse" />
        <div className="w-24 h-4 rounded bg-gray-200 animate-pulse" />
      </div>
      <div className="flex gap-3 items-center">
        <div className="flex gap-2 items-center">
          <div className="w-4 h-4 rounded bg-gray-200 animate-pulse" />
          <div className="w-3 h-4 rounded bg-gray-200 animate-pulse" />
        </div>
        <div className="w-4 h-4 rounded bg-gray-200 animate-pulse" />
      </div>
    </div>
  </div>
);

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { posts, noOfPages, isLoading } = useSelector((state) => state?.posts);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Update displayed posts when posts change
  useEffect(() => {
    if (posts && !isLoading) {
      setDisplayedPosts((prevPosts) => {
        // For first page, replace all posts
        if (page === 1) return posts;
        
        // For subsequent pages, add new posts that aren't already displayed
        const newPosts = posts.filter(
          (post) => !prevPosts.some((prevPost) => prevPost._id === post._id)
        );
        return [...prevPosts, ...newPosts];
      });
    }
  }, [posts, isLoading, page]);

  // Initial posts load
  useEffect(() => {
    dispatch(getAllPosts(1));
  }, [dispatch]);

  // Load more posts when page changes
  useEffect(() => {
    if (page > 1) {
      setIsLoadingMore(true);
      dispatch(getAllPosts(page)).then(() => {
        setIsLoadingMore(false);
      });
    }
  }, [dispatch, page]);

  // Infinite scroll handler
  const handleInfiniteScroll = useCallback(() => {
    if (
      !isLoadingMore && 
      page < noOfPages && 
      window.innerHeight + document.documentElement.scrollTop + 1 >= 
      document.documentElement.scrollHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [isLoadingMore, page, noOfPages]);

  // Add and remove scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, [handleInfiniteScroll]);

  // Search functionality
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
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <HomeFilters />

      <div className="py-12 sm:grid flex flex-col sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {isLoading && page === 1 ? (
          // Initial loading placeholders
          [...Array(8)].map((_, index) => (
            <PostPlaceholder key={`initial-placeholder-${index}`} />
          ))
        ) : !displayedPosts?.length ? (
          <p className="pt-12 text-center col-span-full">0 posts found</p>
        ) : (
          <>
            {/* Existing posts */}
            {displayedPosts?.map((post) => (
              <ProjectCard key={post?._id} post={post} />
            ))}

            {/* Loading more posts placeholders - only show new placeholders */}
            {isLoadingMore &&
              [...Array(4)].map((_, index) => (
                <PostPlaceholder key={`scroll-placeholder-${index}`} />
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
