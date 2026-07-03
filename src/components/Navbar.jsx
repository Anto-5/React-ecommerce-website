import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {

  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (

    <nav className="navbar">

      <Link
        to="/"
        className="logo"
      >
        My Store
      </Link>

      <Link
        to="/cart"
        className="cart-link"
      >
        🛒 Cart ({totalItems})
      </Link>

    </nav>

  );

}

export default Navbar;