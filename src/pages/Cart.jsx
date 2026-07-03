import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {

  const {

    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem

  } = useContext(CartContext);

  if (cart.length === 0) {

    return (

      <div className="container">

        <h1>Your Cart</h1>

        <h2>Cart is Empty</h2>

      </div>

    );

  }

  return (

    <div className="container">

      <h1>Your Cart</h1>

      {

        cart.map(item => (

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

        ))

      }

    </div>

  );

}

export default Cart;