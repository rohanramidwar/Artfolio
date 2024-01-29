import { X } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import avatarUrl from "../assets/user-photo.png";
import image from "../assets/image.jpeg";

function ProjectPage() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }

  return (
    <div className="modal">
      <button
        type="button"
        className="absolute top-[7px] right-[11px] text-white"
        onClick={handleClick}
      >
        <X />
      </button>

      <div className="modal_wrapper ">
        <div className="flex">
          <div className="w-[882px] px-10  border-r border-gray-200 flex flex-col gap-7">
            <h1 className="text-2xl font-semibold">
              This is the Project TITLE
            </h1>
            <div className="flex items-center gap-2 font-semibold  ">
              <img
                src={avatarUrl}
                width={45.33}
                className="rounded-full"
                alt="profile image"
              />
              <p>Rohan Ramidwar</p>
            </div>
            <p>
              This is content of the art that i have created and i would love to
              see what you guys think of it in the comments section This issee
              what you guys think of it in the comments section This is content
              This is content of the art that i have created and i would love to
              see what you guys think of it in the comments section This issee
              what you guys think of it in the comments section This is content
              This is content of the art that i have created and i would love to
              see what you guys think of it in the comments section This issee
              what you guys think of it in the comments section This is content
              of the art that i have creat of the art that i have creat of the
              art that i have created and i would
            </p>
            <img
              src={image}
              width={349}
              height={261}
              className=" w-full h-full object-cover rounded-2xl"
              alt="project image"
            />
          </div>

          <div className="px-10 w-[379px] flex flex-col gap-6">
            <h1 className="text-2xl font-semibold">Feedback</h1>
            <div className="flex gap-2">
              <div>
                <img
                  src={avatarUrl}
                  width={32}
                  className="rounded-full"
                  alt="profile image"
                />
              </div>

              <form className="" onSubmit={(e) => e.preventDefault()}>
                <textarea
                  className="p-2.5 bg-gray-200 border focus:border-gray-700 outline-none rounded  shadow-sm"
                  placeholder="Write a comment"
                />
                <div className="flexEnd">
                  <button className="font-semibold p-2 px-4 shadow bg-purple-500 hover:bg-purple-600 text-white rounded-xl">
                    Comment
                  </button>
                </div>
              </form>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-2  pt-4 ">
                <div>
                  <img
                    src={avatarUrl}
                    width={32}
                    height={32}
                    className="rounded-full"
                    alt="profile image"
                  />
                </div>

                <div className="mt-1 flex flex-col ">
                  <p className="font-semibold">Rohan Ramidwar</p>
                  <p>Almost done !</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
