import { createPost } from "@/actions/postActions";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const CreateForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log("user", user);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const [postData, setPostData] = useState({
    title: "",
    desc: "",
    creator: user?._id,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData, navigate));
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
        <input type="file" />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreateForm;
