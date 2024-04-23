import HomeLayout from "@/components/HomeLayout";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "@/actions/postActions";

const Home = () => {
  const dispatch = useDispatch();

  //fetch all posts
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const { posts } = useSelector((state) => state?.posts);

  const logOut = () => {
    window.open("http://localhost:5000/logout", "_self");
  };

  return (
    <div>
      <Button onClick={logOut}>Log out</Button>
      <Link to="/create">
        <Button>Create</Button>
      </Link>
      <Link to="/auth">
        <Button>Sign in</Button>
      </Link>
      <HomeLayout posts={posts} />
    </div>
  );
};

export default Home;
