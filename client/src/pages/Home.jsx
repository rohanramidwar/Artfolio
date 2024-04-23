import HomeLayout from "@/components/HomeLayout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  console.log("res", posts);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/posts/");
      setPosts(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

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
