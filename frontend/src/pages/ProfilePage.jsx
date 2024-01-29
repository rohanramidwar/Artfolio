import React from "react";
import avatarUrl from "../assets/user-photo.png";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div className="my-10 text-gray-700 flexCenter flex-col gap-10">
      <div className=" flexCenter flex-col w-2/5">
        <img
          className="rounded-full "
          width={120}
          height={120}
          src={avatarUrl}
          alt="profile photo"
        />

        <p className="mt-3 font-semibold text-3xl">Rohan</p>
        <p className="text-center">hi! I'm Portrait artist based in India 🎨</p>
        <a href="#" className="font-semibold hover:underline text-center">
          instagram.com/rohan1208
        </a>
        <button className="mt-3 p-2 px-4 bg-purple-600 hover:bg-purple-700 rounded-xl shadow text-white font-semibold">
          Follow
        </button>
      </div>

      <div className="flex flex-col">
        <h1 className="font-semibold text-xl">Work</h1>
        <div className="mt-8 pt-12 grid grid-cols-3 gap-9 border-t border-gray-300">
          <div className="flexCenter flex-col rounded-2xl drop-shadow-card w-[349px]">
            <Link
              to="/project"
              className="flexCenter group relative w-full h-full"
            >
              <img
                src="https://i.pinimg.com/564x/a6/c3/c5/a6c3c51826a5a2a832e8ff882ae562e9.jpg"
                className="w-[349px] h-[261px] object-cover rounded-2xl"
                alt="project image"
              />

              <div className="hidden group-hover:flex art_card-title">
                <p className="w-full">This is the TITLE</p>
              </div>
            </Link>
          </div>

          <div className="flexCenter flex-col rounded-2xl drop-shadow-card w-[349px]">
            <Link
              to="/project"
              className="flexCenter group relative w-full h-full"
            >
              <img
                src="https://i.pinimg.com/564x/4a/5c/93/4a5c93dd4c71f0171b77e1dbc762afb6.jpg"
                className="h-[261px] w-[349px] object-cover rounded-2xl"
                alt="project image"
              />

              <div className="hidden group-hover:flex art_card-title">
                <p className="w-full">This is the TITLE</p>
              </div>
            </Link>
          </div>

          <div className="flexCenter flex-col rounded-2xl drop-shadow-card w-[349px]">
            <Link
              to="/project"
              className="flexCenter group relative w-full h-full"
            >
              <img
                src="https://i.pinimg.com/564x/90/c1/0e/90c10eca96b93d22f079f0d0855065f2.jpg"
                className="h-[261px] w-[349px] object-cover rounded-2xl"
                alt="project image"
              />

              <div className="hidden group-hover:flex art_card-title">
                <p className="w-full">This is the TITLE</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
