import React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPost } from "@/actions/postActions";
import ClickedPost from "./ClickedPost";

const PostContainer = ({ title, postId, creatorId, artImg, creatorPic }) => {
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
    <div className="flex flex-col gap-1.5 w-full mb-8 break-inside-avoid">
      <Drawer>
        <DrawerTrigger>
          <img
            onClick={openPost}
            src={artImg}
            className="max-w-full rounded-2xl"
            alt="art"
            loading="lazy"
          />
        </DrawerTrigger>
        <DrawerContent className="h-[91%]">
          <ClickedPost />{" "}
        </DrawerContent>
      </Drawer>
      <div className="px-2 flex flex-col gap-1">
        <p className="font-medium text-sm">{title}</p>
        <div className="cursor-pointer flex gap-1 items-center">
          <img
            className="w-8 h-8 rounded-full"
            src={creatorPic}
            alt="profile-pic"
          />
          <p onClick={viewProfile} className="hover:underline text-sm">
            Rohan
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostContainer;
