function CartItem() {
  return (
    <div>
      <div>
        <img alt="art" />
        <h2>title</h2>
        <p>price</p>
        <button>remove</button>
      </div>
    </div>
  );
}

export default CartItem;

// import { useDispatch } from "react-redux";
// import { removeFromCart } from "../redux/slices/CartSlice";

// function CartItem({ item, id }) {
//   const dispatch = useDispatch();
//   console.log("id");
//   console.log(id);
//   function handleClick() {
//     dispatch(removeFromCart(id));
//   }
//   return (
//     <div>
//       <div>
//         <img src={item.src} />
//         <h2>{item.title}</h2>
//         <p>{item.price}</p>
//         <button onClick={handleClick}>remove</button>
//       </div>
//     </div>
//   );
// }

// export default CartItem;
