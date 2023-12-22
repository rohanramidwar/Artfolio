function CreateArea() {
  return (
    <div>
      <h1>create a post</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input name="title" placeholder="title" />
        <textarea name="description" placeholder="description" />
        <input type="file" accept="image/*" />
        <input name="category" placeholder="category" />
        <input name="price" type="number" placeholder="price" />
        <button>cancel</button>
        <button>post</button>
      </form>
    </div>
  );
}

export default CreateArea;

// import React from "react";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { addPost } from "../redux/Slices/PostsSlice";

// function CreateArea() {
//   const dispatch = useDispatch();
//   const [src, setSrc] = useState(null);
//   const [post, setPost] = useState({
//     title: "",
//     description: "",
//     category: "",
//     price: "",
//     src: "",
//   });
//   const navigate = useNavigate();

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setPost((prevPost) => {
//       return {
//         ...prevPost,
//         [name]: value,
//         src: src,
//       };
//     });
//   }

//   function handleClick() {
//     dispatch(addPost(post));
//     navigate("/");
//   }
//   return (
//     <div>
//       <h1>create a post</h1>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//         }}
//       >
//         <input name="title" onChange={handleChange} placeholder="title" />
//         <textarea
//           name="description"
//           onChange={handleChange}
//           placeholder="description"
//         />
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => {
//             setSrc(URL.createObjectURL(e.target.files[0]));
//           }}
//         />
//         <input name="category" onChange={handleChange} placeholder="category" />
//         <input
//           name="price"
//           type="number"
//           onChange={handleChange}
//           placeholder="price"
//         />
//         <button
//           onClick={() => {
//             navigate("/");
//           }}
//         >
//           cancel
//         </button>
//         <button onClick={handleClick}>post</button>
//       </form>
//     </div>
//   );
// }

// export default CreateArea;
