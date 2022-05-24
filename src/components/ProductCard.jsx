import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

  return (
    <div className="card">
      <header className="card__header">
        <img src={product.image} alt="imagen" />
      </header>
      <div className="card__body">
        {product.title}
        <div className="card__footer">
          <span>Timer</span>
          <Link key={product.id} to={`details/${product.id}`} className="link">
            <button>detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
