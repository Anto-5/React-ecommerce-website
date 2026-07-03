import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
function Product() {
  const { id } = useParams();
const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="product-page">

      <Link to="/" className="back-btn">
        ← Back to Products
      </Link>

      <div className="product-container">

        <img
          src={product.thumbnail}
          alt={product.title}
        />

        <div className="details">

          <h1>{product.title}</h1>

          <p>{product.description}</p>

          <h2>${product.price}</h2>
          <button
  className="cart-btn"
  onClick={() => addToCart(product)}
>
  Add to Cart
</button>

          <p>
            <strong>Category:</strong>{" "}
            {product.category}
          </p>

          <p>
            <strong>Brand:</strong>{" "}
            {product.brand}
          </p>

          <p>
            <strong>Rating:</strong>{" "}
            ⭐ {product.rating}
          </p>

          <p>
            <strong>Stock:</strong>{" "}
            {product.stock}
          </p>

          <p>
            <strong>Discount:</strong>{" "}
            {product.discountPercentage}%
          </p>

        </div>

      </div>
    </div>
  );
}

export default Product;