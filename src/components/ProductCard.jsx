import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Countdown from "./Countdown";

const ProductCard = ({ product }) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const [counter, setCounter] = useState(randomNumber);

  return (
    <div className="card">
      <header className="card__header">
        <img src={product.image} alt="imagen" />
      </header>
      <div className="card__body">
        {product.title}
        <div className="card__footer">
          <span>
            <Countdown counter={counter} setCounter={setCounter} />
          </span>
          <Link key={product.id} to={`details/${product.id}`} className="link">
            <button disabled={counter === 0 ? false : true}>detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
