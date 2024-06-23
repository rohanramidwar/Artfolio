import React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { Bookmark, Heart } from "lucide-react";
import ProjectDesc from "./ProjectDesc";
import { getCreatorProfile } from "@/actions/postActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const creator = post?.creator?._id;

  const handleCreatorProfile = () => {
    dispatch(getCreatorProfile({ creator, navigate }));
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-center items-center group relative w-full h-full">
        <Drawer>
          <DrawerTrigger className="w-full">
            <img
              className="border w-full h-60 object-cover rounded-2xl"
              src={post?.artImg}
              alt="art"
            />
          </DrawerTrigger>
          <DrawerContent className="h-[95%] rounded-3xl">
            {<ProjectDesc post={post} />}
          </DrawerContent>
        </Drawer>
        <div className="hidden group-hover:flex profile_card-title">
          <p className="w-full">{post?.title}</p>
        </div>
      </div>
      <div className="px-2 flex justify-between text-sm font-medium">
        <div onClick={handleCreatorProfile} className="flex gap-2 items-center">
          <img
            className="w-6 h-6 rounded-full cursor-pointer"
            src={post?.creator?.picture}
            alt="user"
          />
          <p className="hover:underline cursor-pointer">
            {post?.creator?.name}
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <p className="flex gap-2 items-center">
            <Heart className="text-zinc-300 fill-zinc-300" size={14} />0
          </p>
          <p>
            <Bookmark className="text-zinc-300 fill-zinc-300" size={14} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
