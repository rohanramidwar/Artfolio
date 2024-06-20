import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Bookmark, Edit, Heart, Trash } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import EditProject from "./EditProject";
import { useDispatch } from "react-redux";
import { deletePost } from "@/actions/postActions";
import { useLocation, useNavigate } from "react-router-dom";

const ProjectDesc = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  //to get user id
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const creatorId = post?.creator?._id;

  const handleEmailClick = () => {
    window.location.href = `mailto:${post?.creator?.email}`;
  };

  const handleCreatorProfile = () => {
    dispatch(getCreatorProfile({ creatorId, navigate }));
  };

  return (
    <div className="pt-9 flex justify-center overflow-auto text-slate-900">
      <div className="sm:w-3/4 flex flex-col gap-8">
        <h1 className="px-3 text-5xl font-extrabold">{post?.title}</h1>
        <div className="px-3 flex justify-between items-center">
          <div
            onClick={handleCreatorProfile}
            className="flex gap-2 items-center"
          >
            <img
              className="w-11 h-11 rounded-full cursor-pointer"
              src={post?.creator?.profilePic}
              alt="user"
            />
            <div>
              <p className="hover:underline cursor-pointer font-medium">
                {post?.creator?.displayName}
              </p>
              <p className="text-violet-600 text-sm">{post?.category}</p>
            </div>
          </div>

          {user?._id === post?.creator?._id ? (
            <div className="flex gap-3 sm:gap-8 items-center">
              <Drawer>
                <DrawerTrigger className="w-full">
                  <button className="shadow bg-gray-200 px-4 py-3 rounded-xl">
                    <Edit size={14} />
                  </button>
                </DrawerTrigger>
                <DrawerContent className="h-[95%] rounded-3xl">
                  <EditProject post={post} />
                </DrawerContent>
              </Drawer>
              <button
                onClick={() => dispatch(deletePost(post?._id, navigate))}
                className="shadow bg-red-500 text-white px-4 py-3 rounded-xl"
              >
                <Trash size={14} />
              </button>
            </div>
          ) : (
            <div className="flex gap-8 items-center">
              <button className="flex gap-2 items-center">
                <Heart size={14} />0
              </button>
              <button>
                <Bookmark size={14} />
              </button>
              <Button
                onClick={handleEmailClick}
                className="rounded-xl py-3 h-auto"
              >
                Contact
              </Button>
            </div>
          )}
        </div>
        <img className="w-full" src={post?.artImg} alt="art" />
        <p className="px-8 text-xl pb-72">{post?.desc}</p>
      </div>
    </div>
  );
};

export default ProjectDesc;
