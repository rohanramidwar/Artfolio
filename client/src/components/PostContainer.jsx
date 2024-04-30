import React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PostDetails from "./PostDetails";
import { getPost } from "@/actions/postActions";

const PostContainer = ({ title, postId, creatorId, artImg }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openPost = () => {
    dispatch(getPost(postId));
  };

  console.log(creatorId);

  const viewProfile = () => {
    navigate(`profile/${creatorId}`);
  };

  return (
    <div className="flex flex-col gap-2 w-full mb-5 break-inside-avoid">
      <Drawer>
        <DrawerTrigger>
          <img
            onClick={openPost}
            src={artImg}
            className="max-w-full rounded-xl"
            alt="art"
          />
        </DrawerTrigger>
        <DrawerContent className="h-[91%]">
          <PostDetails />{" "}
        </DrawerContent>
      </Drawer>
      <p className="font-medium text-sm">{title}</p>
      <div className="cursor-pointer flex gap-2 items-center">
        <img className="w-8 h-8" alt="profile-pic" />
        <p onClick={viewProfile} className="hover:underline text-sm">
          Artist
        </p>
      </div>
    </div>
  );
};

export default PostContainer;
