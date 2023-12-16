function Post({ title, category, price, src }) {
  return (
    <div>
      <p>@username</p>
      <img src={src} />
      <h2>{title}</h2>
      <button>like</button>
      <button>comment</button>
      <p>{category}</p>
      <p>{price}</p>
      <button>add to cart</button>
    </div>
  );
}

export default Post;
