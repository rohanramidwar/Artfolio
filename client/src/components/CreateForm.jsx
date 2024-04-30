import { createPost } from "@/actions/postActions";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const CreateForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [image, setImage] = useState();

  //to get user id
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const [postData, setPostData] = useState({
    title: "",
    desc: "",
    creator: user?._id,
    artImg: "",
  });

  const handleSubmit = (e) => {
    const data = new FormData();
    data.append("file", image);
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

    e.preventDefault();

    if (postData.artImg) dispatch(createPost(postData, navigate));
    else console.log("img missing");
  };

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          name="title"
          onChange={handleChange}
          value={postData.title}
          placeholder="Title"
        />
        <input
          name="desc"
          onChange={handleChange}
          value={postData.desc}
          placeholder="Desc"
        />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreateForm;
