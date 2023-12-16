import Home from "./pages/Home";
import CreateArea from "./pages/CreateArea";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  function addPost(newPost) {
    setPosts((prevPosts) => {
      return [...prevPosts, newPost];
    });
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="submit" element={<CreateArea onAdd={addPost} />} />
      </Routes>
    </div>
  );
}

export default App;
