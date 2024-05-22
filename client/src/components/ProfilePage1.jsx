import { getProfile } from "@/actions/postActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "./ui/button";

const ProfilePage1 = () => {
  const dispatch = useDispatch();

  const { id } = useParams(); //artist id

  useEffect(() => {
    dispatch(getProfile(id));
  }, [dispatch, id]);

  const { artist } = useSelector((state) => state?.posts);

  return (
    <div className="mt-32 flex flex-col items-center text-gray-800">
      {/* user info */}
      <div className="flex flex-col  items-center gap-3">
        <img
          className="w-32 h-32 rounded-full"
          src={artist?.profilePic}
          alt="user"
        />
        <p className="font-semibold text-3xl"> {artist?.displayName}</p>
        <div className="flex gap-2 font-medium">
          <p>0 followers</p>
          &#xb7;
          <p>0 following</p>
        </div>
        <p>0 likes</p>
        <div className="flex gap-2">
          <Button className="rounded-full h-12 font-semibold">
            {" "}
            Get in Touch
          </Button>
          <Button className="rounded-full h-12 font-semibold bg-purple-500 hover:bg-purple-600">
            Follow
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage1;
