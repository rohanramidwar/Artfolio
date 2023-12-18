import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price));
  }, [cart]);
  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((item, index) => {
              return <CartItem key={index} item={item} />;
            })}
          </div>
          <div>
            <div>
              <p>
                <span>Total items: {cart.length}</span>
              </p>
            </div>
            <div>
              <p>total amount: ${totalAmount}</p>
              <button>checkout now</button>
            </div>
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
