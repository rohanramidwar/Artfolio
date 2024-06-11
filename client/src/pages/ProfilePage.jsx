import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const location = useLocation();

  //to get user id
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className="px-14 py-5 text-slate-900">
      <div className="flex flex-col items-center gap-3">
        <img
          className="w-[120px] h-[120px] rounded-full"
          src={user?.profilePic}
          alt="user"
        />
        <p className="text-4xl font-semibold">{user?.displayName}</p>
        <div className="flex gap-3">
          {/* <Button className="rounded-xl h-auto py-3 bg-zinc-100 hover:bg-zinc-100 text-slate-900">
            Contact
          </Button>
          <Button className="rounded-xl h-auto py-3 bg-violet-500 hover:bg-violet-500">
            Follow
          </Button> */}
          <Button className="rounded-xl h-auto py-3 bg-zinc-100 hover:bg-zinc-100 text-slate-900">
            Edit profile
          </Button>
        </div>
      </div>
      <div className="mt-16 flex gap-3">
        <Button className="rounded-xl h-auto py-3 bg-zinc-100 hover:bg-zinc-100 text-slate-900">
          Created
        </Button>
        <Button className="rounded-xl h-auto py-3 bg-inherit hover:bg-zinc-100 text-slate-900">
          Saved
        </Button>
      </div>
      <div className="py-12 sm:grid flex flex-col sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {user?.posts?.map((post) => (
          <div
            key={post?._id}
            className="flex justify-center items-center group relative w-full h-full"
          >
            <img
              className="border w-full h-60 object-cover rounded-2xl"
              src={post?.artImg}
              alt="art"
            />
            <div className="hidden group-hover:flex profile_card-title">
              <p className="w-full">{post?.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
