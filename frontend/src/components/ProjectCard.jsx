import React from "react";
import { Heart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  return (
    <div className="flexCenter flex-col rounded-2xl drop-shadow-card w-[349px]">
      <Link
        to="/projects/project"
        className="flexCenter group relative w-full h-full"
      >
        <img
          src="https://i.pinimg.com/564x/a6/c3/c5/a6c3c51826a5a2a832e8ff882ae562e9.jpg"
          className="w-[349px] h-[261px] object-cover rounded-2xl"
          alt="project"
        />
        <div className="hidden group-hover:flex art_card-title">
          <p className="w-full">Thomas Shelby's Intensity</p>
        </div>
      </Link>
      <div className="flexBetween w-full px-2 mt-3 text-sm">
        <div>
          <div className="flexCenter gap-2 font-semibold">
            <img
              src="https://i.pinimg.com/564x/4b/cc/54/4bcc54ebe6d0e6700e3df3047c1129c8.jpg"
              className="rounded-full w-[24px] h-[24px]"
              alt="profile"
            />
            <p>Raj</p>
          </div>
        </div>
        <div className="flexCenter gap-3">
          <div className="flexCenter gap-2">
            <Heart size={14} />
            <p className="text-sm">12</p>
          </div>
          <Link to="/projects/project">
            <div className="flexCenter gap-2">
              <MessageCircle size={14} />
              <p className="text-sm">5</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
