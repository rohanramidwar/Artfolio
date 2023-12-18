function CartItem() {
  return (
    <div>
      <div>
        <img src={item.src} />
        <h2>{item.title}</h2>
        <p>{item.price}</p>
        <button>remove item</button>
      </div>
    </div>
  );
}

export default CartItem;
