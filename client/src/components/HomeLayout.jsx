import React, { useEffect, useState } from "react";
import Post from "./Post";

const HomeLayout = ({ posts }) => {
  return (
    <div className="w-full columns-2 sm:columns-5 gap-5 p-5">
      {posts?.data?.map((post, index) => (
        <Post key={index} title={post?.title} desc={post?.desc} />
      ))}
    </div>
  );
};

export default HomeLayout;
