function Post() {
  return (
    <div>
      <p>@username</p>
      <img alt="art" />
      <h2>title</h2>
      <button>like</button>
      <button>comment</button>
      <p>tag</p>
      <p>price</p>
      <button>add to cart</button>
    </div>
  );
}

export default Post;

// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../redux/slices/CartSlice";

// function Post({ post }) {
//   const { cart } = useSelector((state) => state.cart);
//   const dispatch = useDispatch();
//   function handleClick() {
//     dispatch(addToCart(post));
//   }
//   return (
//     <div>
//       <p>@username</p>
//       <img src={post.src} />
//       <h2>{post.title}</h2>
//       <button>like</button>
//       <button>comment</button>
//       <p>{post.category}</p>
//       <p>{post.price}</p>
//       <button onClick={handleClick}>add to cart</button>
//     </div>
//   );
// }

// export default Post;
