import React from "react";
import { useSelector } from "react-redux";

const PostDetails = () => {
  const { post } = useSelector((state) => state?.posts);
  console.log("post", post);

  return (
    <div>
      PostDetails
      <p className="font-medium text-sm">{post?.title}</p>
    </div>
  );
};

export default PostDetails;
