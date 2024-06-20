import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { LoaderCircle, Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { createPost } from "@/actions/postActions";

const CreateProject = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const inputRef = useRef(null);

  const categories = [
    "Sketches",
    "Watercolor",
    "Pixel",
    "Sketchbook",
    "Doodle",
    "Reference",
    "Illustration",
    "Easy doodle",
    "Canvas",
    "Pencil art",
    "Disney",
    "Easy",
    "Simple",
  ];

  const { isLoading } = useSelector((state) => state?.posts);

  //to get user id
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  //data
  const [postData, setPostData] = useState({
    creator: user?._id,
    artImg: "",
    title: "",
    desc: "",
    category: "",
  });

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

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  //final call
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData, navigate));
    if (!isLoading) {
      onClose();
    }
  };

  return (
    <div className="pt-9 flex justify-center overflow-auto text-slate-900">
      <div className="w-3/4 flex flex-col gap-24">
        <h1 className="text-5xl font-extrabold">Create a new Post</h1>
        <form
          onSubmit={handleSubmit}
          className="text-lg flex flex-col gap-11 pb-72"
        >
          <div
            className="flex text-center items-center justify-center w-full lg:min-h-96 min-h-48 border-2 border-dashed border-zinc-300 cursor-pointer"
            onClick={() => inputRef.current.click()}
          >
            {postData?.artImg ? (
              <img src={postData?.artImg} alt="art" />
            ) : (
              "Choose a photo of your artwork"
            )}
          </div>
          <input
            className="hidden"
            type="file"
            onChange={handleImageUpload}
            ref={inputRef}
            required
          />
          <label className="flex flex-col gap-5">
            Title
            <input
              name="title"
              onChange={handleChange}
              value={postData.title}
              className="bg-gray-100 outline-none p-4 w-full rounded-xl"
              placeholder="Artfolio"
              required
            />
          </label>
          <label className="flex flex-col gap-5">
            Description
            <textarea
              name="desc"
              onChange={handleChange}
              value={postData.desc}
              className="bg-gray-100 outline-none p-4 w-full rounded-xl"
              placeholder="Modern Full-stack website for artist to...   "
              required
            />
          </label>
          <label className="flex flex-col gap-5">
            Category
            <Select
              onValueChange={(value) =>
                setPostData({ ...postData, category: value })
              }
              required
            >
              <SelectTrigger className="sm:w-fit w-full text-base p-4 h-auto bg-gray-100 rounded-xl border-none">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </label>

          <div>
            {isLoading ? (
              <Button className="sm:w-auto w-full h-auto py-3 flex items-center gap-3 bg-violet-500 hover:bg-violet-500 rounded-xl">
                <LoaderCircle className="animate-spin" size={16} />
                Creating..
              </Button>
            ) : (
              <Button className="sm:w-auto w-full h-auto py-3 flex items-center gap-3 bg-violet-500 hover:bg-violet-500 rounded-xl">
                <Plus size={16} />
                Create
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
