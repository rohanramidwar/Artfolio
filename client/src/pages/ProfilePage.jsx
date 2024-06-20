import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { creator, isLoading } = useSelector((state) => state?.posts);

  return (
    <div className="px-8 sm:px-14 py-5 text-slate-900">
      <div className="flex flex-col items-center gap-3">
        <img
          className="w-[120px] h-[120px] rounded-full"
          src={creator?.profilePic}
          alt="creator"
        />
        <p className="text-4xl font-semibold">{creator?.displayName}</p>
        <div className="flex gap-3">
          <Button className="rounded-xl h-auto py-3 bg-zinc-100 hover:bg-zinc-100 text-slate-900">
            Contact
          </Button>
          <Button className="rounded-xl h-auto py-3 bg-violet-500 hover:bg-violet-500">
            Follow
          </Button>
          {/* <Button className="rounded-xl h-auto py-3 bg-zinc-100 hover:bg-zinc-100 text-slate-900">
            Edit profile
          </Button> */}
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
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <LoaderCircle className="animate-spin text-violet-500" />
        </div>
      ) : (
        <>
          {!creator?.posts?.length && (
            <p className="pt-12 text-center">0 posts found</p>
          )}
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
    </div>
  );
};

export default ProfilePage;
