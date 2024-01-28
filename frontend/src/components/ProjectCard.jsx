import React from "react";
import image from "../assets/image.jpeg";
import avatarUrl from "../assets/user-photo.png";
import { Heart, MessageCircle } from "lucide-react";

function ProjectCard() {
  return (
    <div className="flexCenter flex-col rounded-2xl drop-shadow-card w-[349px]">
      <div className="flexCenter group relative w-full h-full">
        <img
          src={image}
          width={349}
          height={261}
          className="w-full h-full object-cover rounded-2xl"
          alt="project image"
        />

        <div className="hidden group-hover:flex art_card-title">
          <p className="w-full">This is the TITLE</p>
        </div>
      </div>

      <div className="flexBetween w-full px-2 mt-3 text-sm">
        <div>
          <div className="flexCenter gap-2 font-semibold">
            <img
              src={avatarUrl}
              width={24}
              height={24}
              className="rounded-full"
              alt="profile image"
            />
            <p>Rohan Ramidwar</p>
          </div>
        </div>

        <div className="flexCenter gap-3">
          <div className="flexCenter gap-2">
            <Heart size={14} />
            <p className="text-sm">12</p>
          </div>
          <div className="flexCenter gap-2">
            <MessageCircle size={14} />
            <p className="text-sm">5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
