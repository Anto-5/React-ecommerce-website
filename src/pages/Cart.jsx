import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useContext(CartContext);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 10 : 0;

  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="container">
        <h1>Your Cart</h1>
        <h2>🛒 Cart is Empty</h2>
      </div>
    );
  }

  return (
    <div className="cart-page">

      <div className="cart-products">

        <h1>Your Cart</h1>

        {cart.map((item) => (

          <div
            key={item.id}
            className="cart-item"
          >

            <img
              src={item.thumbnail}
              alt={item.title}
            />

            <div className="cart-details">

              <h2>{item.title}</h2>

              <p>${item.price}</p>

              <div className="quantity">

                <button
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>

              </div>

            </div>

            <button
              className="remove-btn"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>

          </div>

        ))}

      </div>

      <div className="bill-summary">

        <h2>Bill Summary</h2>

        <div className="bill-row">
          <span>Total Items</span>
          <span>{totalItems}</span>
        </div>

        <div className="bill-row">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="bill-row">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>

        <hr />

        <div className="bill-row total">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <button className="checkout-btn">
          Checkout
        </button>

      </div>

    </div>
  );

}

export default Cart;