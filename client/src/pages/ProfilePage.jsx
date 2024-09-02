import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [showSavedPosts, setShowSavedPosts] = useState(false);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const { creator, isLoading } = useSelector((state) => state?.posts);

  const handleEmailClick = () => {
    window.location.href = `mailto:${creator?.email}`;
  };

  return (
    <div className="px-5 sm:px-14 py-5 text-slate-900">
      <div className="flex flex-col items-center gap-3">
        <img
          className="w-[120px] h-[120px] rounded-full"
          src={creator?.picture}
          alt="creator"
        />
        <p className="text-4xl font-semibold">{creator?.name}</p>

        {user?._id === creator?._id ? (
          <Button
            onClick={() => toast("😅 Feature coming soon!")}
            className="rounded-xl h-auto py-3 bg-zinc-100 hover:bg-zinc-100 text-slate-900"
          >
            Edit profile
          </Button>
        ) : (
          <div className="flex gap-3">
            <Button
              onClick={handleEmailClick}
              className="rounded-xl h-auto py-3 bg-zinc-100 hover:bg-zinc-100 text-slate-900"
            >
              Contact
            </Button>
            <Button
              onClick={() => toast("😅 Feature coming soon!")}
              className="rounded-xl h-auto py-3 bg-violet-500 hover:bg-violet-500"
            >
              Follow
            </Button>
          </div>
        )}
      </div>
      <div className="mt-16 flex gap-3">
        <Button
          onClick={() => setShowSavedPosts(false)}
          className={`rounded-xl h-auto py-3 ${
            !showSavedPosts
              ? "bg-zinc-100 hover:bg-zinc-100"
              : "bg-inherit hover:bg-zinc-100"
          } text-slate-900`}
        >
          Created
        </Button>
        <Button
          onClick={() => setShowSavedPosts(true)}
          className={`rounded-xl h-auto py-3 ${
            showSavedPosts
              ? "bg-zinc-100 hover:bg-zinc-100"
              : "bg-inherit hover:bg-zinc-100"
          } text-slate-900`}
        >
          Saved
        </Button>
      </div>

      {!showSavedPosts && (
        <>
          {!creator?.posts?.length && <p className="pt-12">0 posts found</p>}
          <div className="py-12 sm:grid flex flex-col sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {creator?.posts?.map((post) => (
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
        </>
      )}

      {showSavedPosts && (
        <>
          {!creator?.savedPosts?.length && (
            <p className="pt-12">0 posts found</p>
          )}
          <div className="py-12 sm:grid flex flex-col sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {creator?.savedPosts?.map((post) => (
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
        </>
      )}
    </div>
  );
};

export default ProfilePage;
