import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="card-link"
    >
      <div className="card">
        <img
          src={product.thumbnail}
          alt={product.title}
        />

        <div className="card-body">
          <h3>{product.title}</h3>

          <p className="category">
            {product.category}
          </p>

          <p className="price">
            ${product.price}
          </p>

          <p>⭐ {product.rating}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;