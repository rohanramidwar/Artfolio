import React from "react";
import { Link } from "react-router-dom";
import EditProfile from "../components/EditProfile";

const ProfilePage = () => {
  return (
    <div className="mb-10 text-gray-700 flexCenter flex-col gap-10">
      <div className=" flexCenter flex-col w-2/5">
        <img
          className="rounded-full w-[120px] h-[120px]"
          src="https://i.pinimg.com/564x/4b/cc/54/4bcc54ebe6d0e6700e3df3047c1129c8.jpg"
          alt="profile photo"
        />

        <p className="my-3 font-semibold text-4xl">Raj</p>
        <p className="text-center">
          Hello! I'm a passionate portrait artist from India
        </p>
        <a href="#" className="font-semibold hover:underline text-center">
          instagram.com/raj112
        </a>
        {/* <div className="flexCenter text-sm gap-3">
          <button className="mt-2 px-4 h-9  text-white bg-gray-800 hover:bg-gray-700 rounded-full  font-semibold ">
            Get in touch
          </button>
          <button className="mt-2 px-4 h-9 border border-gray-200 hover:border-gray-300 rounded-full  font-semibold ">
            Follow
          </button>
        </div> */}

        <Link to={"/editProfile"}>
          <button className="mt-2 px-4 h-9 border border-gray-200 hover:border-gray-300 rounded-full  font-semibold ">
            Edit Profile
          </button>
        </Link>
      </div>

      <div className="flex flex-col">
        <h2 className="font-semibold px-4">Work</h2>
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
