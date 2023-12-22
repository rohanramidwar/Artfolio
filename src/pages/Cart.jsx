import CartItem from "../components/CartItem";

function Cart() {
  return (
    <div>
      {true > 0 ? (
        <div>
          <div>
            <CartItem />
          </div>
          <div>
            <p>cart summary</p>
            <p>
              <span>total items: x</span>
            </p>
            <p>total amount: $x</p>
            <button>checkout</button>
          </div>
        </div>
      ) : (
        <div>
          <h1>cart empty</h1>
          <Link to={{ pathname: "/" }}>
            <button>shop now</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;

// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import CartItem from "../components/CartItem";
// import { useEffect, useState } from "react";

// function Cart() {
//   const { cart } = useSelector((state) => state);
//   const [totalAmount, setTotalAmount] = useState(0);

//   useEffect(() => {
//     setTotalAmount(cart.reduce((acc, curr) => (acc += curr.price), 0));
//   }, [cart]);
//   return (
//     <div>
//       {cart.length > 0 ? (
//         <div>
//           <div>
//             {cart.map((item, index) => {
//               return <CartItem key={index} id={index} item={item} />;
//             })}
//           </div>
//           <div>
//             <p>cart summary</p>
//             <p>
//               <span>total items: {cart.length}</span>
//             </p>
//             <p>total amount: ${totalAmount}</p>
//             <button>checkout</button>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <h1>cart empty</h1>
//           <Link to={{ pathname: "/" }}>
//             <button>shop now</button>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;
