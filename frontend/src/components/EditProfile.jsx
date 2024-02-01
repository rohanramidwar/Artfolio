import React from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const EditProfile = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/profile");
  }

  useEffect(() => {
    const translate = document.getElementById("translate");
    translate.classList.add("translate-y-10");

    const timeoutId = setTimeout(() => {
      translate.classList.remove("translate-y-10");
    }, 300);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="modal">
      <button
        type="button"
        className="w-full flexEnd absolute top-[7px] right-[11px] text-white"
        onClick={handleClick}
      >
        <X />
      </button>

      <div
        id="translate"
        className="modal_wrapper transition duration-300 ease-out"
      >
        <div className="flex justify-center mt-8">
          <div className="w-[446px] lg:mx-0 mx-6">
            <h1 className="text-2xl font-semibold">Edit Profile</h1>

            <form
              className="flex flex-col gap-7 mt-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="text-black-500 font-semibold">
                Name
                <input
                  className="mt-2.5 block w-full rounded-lg border border-solid border-gray-300 bg-white p-2.5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </label>

              <label className="text-black-500 font-semibold">
                About
                <textarea
                  className="mt-2.5 block w-full rounded-lg border border-solid border-gray-300 bg-white p-2.5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
                  type="text"
                  placeholder="Describe yourself"
                  rows={3}
                  required
                />
              </label>

              <label className="text-black-500 font-semibold">
                Website URL
                <input
                  className="mt-2.5 block w-full rounded-lg border border-solid border-gray-300 bg-white p-2.5 text-sm leading-5 font-normal text-gray-700 shadow-sm"
                  type="url"
                  placeholder="instagram.com/raj112"
                  required
                />
              </label>

              <button className="w-full bg-gradient-to-r  from-purple-500 to-purple-600 rounded-lg p-2.5 text-white font-semibold text-sm">
                Save changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
