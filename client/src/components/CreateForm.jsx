import axios from "axios";
import React, { useState } from "react";

const CreateForm = () => {
  const [userData, setUserData] = useState();
  console.log("res", userData);

  const [postData, setPostData] = useState({
    title: "",
    desc: "",
  });

  const createPost = async () => {
    try {
      const res = await axios.post("http://localhost:5000/posts/", postData);
      setUserData(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={createPost} className="flex flex-col">
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
