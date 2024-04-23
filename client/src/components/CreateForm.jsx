import { createPost } from "@/actions/postActions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [postData, setPostData] = useState({
    title: "",
    desc: "",
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
