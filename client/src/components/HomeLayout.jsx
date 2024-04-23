import React from "react";
import PostContainer from "./PostContainer";

const HomeLayout = ({ posts }) => {
  return (
    <div className="w-full columns-2 sm:columns-5 gap-5 p-5">
      {posts?.map((post) => (
        <PostContainer
          key={post?._id}
          postId={post?._id}
          title={post?.title}
          creatorId={post?.creator?._id}
        />
      ))}
    </div>
  );
};

export default HomeLayout;
