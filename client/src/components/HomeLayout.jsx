import React from "react";
import PostContainer from "./PostContainer";

const HomeLayout = ({ posts }) => {
  return (
    <div className="mt-12 w-full columns-2 sm:columns-5 px-2.5">
      {posts?.map((post) => (
        <PostContainer
          key={post?._id}
          postId={post?._id}
          title={post?.title}
          creatorId={post?.creator?._id}
          artImg={post?.artImg}
          creatorPic={post?.creator?.profilePic}
        />
      ))}
    </div>
  );
};

export default HomeLayout;
