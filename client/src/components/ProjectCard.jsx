import React, { useEffect, useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { Bookmark, Heart } from "lucide-react";
import ProjectDesc from "./ProjectDesc";
import { getCreatorProfile, savePost } from "@/actions/postActions";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ProjectCard = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const postId = post?._id;
  const userId = user?._id;

  const handleCreatorProfile = () => {
    if (user) {
      dispatch(getCreatorProfile({ userId, navigate }));
    } else {
      toast.error("Please sign in first");
    }
  };

  const handleSave = () => {
    if (user) {
      dispatch(savePost({ userId, postId }));
    } else {
      toast.error("Please sign in first");
    }
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
          <p className="cursor-pointer">{post?.creator?.name}</p>
        </div>
        <div className="flex gap-3 items-center">
          <button
            onClick={() => toast("😓 Feature coming soon!")}
            className="flex gap-2 items-center"
          >
            <Heart className="text-zinc-300 fill-zinc-300" size={14} />0
          </button>
          <button onClick={handleSave}>
            <Bookmark className="text-zinc-300 fill-zinc-300" size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
