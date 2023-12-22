import Post from "../components/Post";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <div>
          <Link to={{ pathname: "/submit" }}>
            <button>create post</button>
          </Link>
        </div>
        <div>
          <button>all</button>
          <button>water color</button>
          <button>charcoal</button>
          <button>gauche</button>
        </div>
        <div>
          <Post />
        </div>
      </div>
    </div>
  );
}

export default Home;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Post from "../components/Post";
// import { useSelector } from "react-redux";

// function Home() {
//   const { posts } = useSelector((state) => state);
//   const [filteredPosts, setFilteredPosts] = useState(posts);
//   function handleClick(e) {
//     if (e.target.tagName === "BUTTON") {
//       const category = e.target.innerHTML;
//       setFilteredPosts(
//         category === "all"
//           ? posts
//           : posts.filter((post) => post.category === category)
//       );
//     }
//   }
//   return (
//     <div>
//       <div>
//         <div>
//           <Link to={{ pathname: "/submit" }}>
//             <button>create post</button>
//           </Link>
//         </div>
//         <div onClick={handleClick}>
//           <button>all</button>
//           <button>water color</button>
//           <button>charcoal</button>
//           <button>gauche</button>
//         </div>
//         <div>
//           {filteredPosts.map((post, index) => {
//             return <Post key={index} id={index} post={post} />;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
