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

      <div className="modal_wrapper text-gray-700">
        <div className="w-[882px] px-10 border-r border-gray-200">
          <h2 className="text-2xl font-semibold">This is the Project TITLE</h2>
          <div className="flex items-center gap-2 font-semibold text-sm mt-4">
            <img
              src={avatarUrl}
              width={45.33}
              className="rounded-full"
              alt="profile image"
            />
            <p>Rohan Ramidwar</p>
          </div>
          <p className="mt-4 text-sm">
            This is content of the art that i have created and i would love to
            see what you guys think of it in the comments section
          </p>
          <img
            src={image}
            width={349}
            height={261}
            className="mt-4 w-full h-full object-cover rounded-2xl"
            alt="project image"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
