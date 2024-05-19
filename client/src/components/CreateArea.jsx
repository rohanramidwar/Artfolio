import React, { useEffect, useRef, useState } from "react";
import { createPost } from "@/actions/postActions";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

import PicPlaceholder from "../assets/pic-placeholder.png";

const CreateArea = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const inputRef = useRef(null);

  //to get user id
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  //data
  const [postData, setPostData] = useState({
    title: "",
    desc: "",
    creator: user?._id,
    artImg: "",
  });

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  function handleImageUpload(e) {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "zngtpman");
    data.append("cloud_name", "dxykak5rw");

    fetch("https://api.cloudinary.com/v1_1/dxykak5rw/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setPostData({ ...postData, artImg: data.url });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //final call
  const handleSubmit = () => {
    if (postData.artImg) dispatch(createPost(postData, navigate));
    else console.log("img missing");
  };

  return (
    <div className="text-slate-800 mt-[89px]">
      {/* title  */}
      <div className="bg-white flex justify-between items-center fixed w-full z-10 py-5 px-20 border-b">
        <h1 className="font-medium text-2xl">Create Post</h1>
        <div className="flex gap-2">
          <Button className="font-semibold rounded-full bg-gray-200 text-slate-800 hover:bg-gray-200">
            Cancel
          </Button>
          <Button onClick={handleSubmit} className="font-semibold rounded-full">
            Publish
          </Button>
        </div>
      </div>

      {/* inputs  */}
      <div className="flex items-center justify-center">
        <div className="w-2/5 overflow-auto scroll-smooth pt-10 pb-20 flex flex-col gap-5 items-center mt-20">
          {postData.artImg && (
            <input
              name="title"
              onChange={handleChange}
              value={postData.title}
              placeholder="Give me a name"
              className=" px-7 text-2xl font-semibold outline-none rounded-lg"
            />
          )}

          {postData.artImg ? (
            <img
              className="w-full rounded-xl border-2 border-dashed"
              src={postData.artImg}
              alt="artwork"
              onClick={() => inputRef.current.click()}
            />
          ) : (
            <div
              role="button"
              className="w-full text-gray-400 flex flex-col gap-3 justify-center items-center min-h-60 border-2 border-dashed rounded-xl"
              onClick={() => inputRef.current.click()}
            >
              <img width={80} src={PicPlaceholder} alt="pic-placeholder" />
              <p className="text-sm">Browse</p>
            </div>
          )}

          <input
            className="hidden"
            type="file"
            onChange={handleImageUpload}
            ref={inputRef}
          />

          {postData.artImg && (
            <textarea
              name="desc"
              onChange={handleChange}
              value={postData.desc}
              placeholder="Write what went into this design or add any details you'd like to mention."
              className="w-4/5 px-3 py-4 outline-none border-2 border-white hover:border-inherit focus:border-purple-300 rounded-xl"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateArea;
