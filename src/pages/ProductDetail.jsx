import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.productsReducer);

  const productDetails = products.find((product) => product.id === +id);

  return (
    <div className="productdetail_container">
      <div className="productdetail__card__container">
        <div className="productdetail__card__image">
          <img src={productDetails.image} alt="imagen" />
        </div>
        <div className="productdetail__card__details">
          <div className="content">
            <h2>{productDetails.title}</h2>
            <p>{productDetails.description}</p>
            <h3>$ {productDetails.price}</h3>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
