import HomeLayout from "@/components/HomeLayout";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "@/actions/postActions";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();

  const fetchUserData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/login/success", {
        withCredentials: true,
      });
      localStorage.setItem("profile", JSON.stringify({ ...res.data.user }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  //fetch all posts
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const { posts } = useSelector((state) => state?.posts);

  const logOut = () => {
    window.open("http://localhost:5000/logout", "_self");
    localStorage.clear();
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
