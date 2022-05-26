import React, { useEffect, useState } from "react";
import axios from "axios";
import {  useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { getProuctDetail } from "../store/reducers/ProductDetail.reducer";


const ProductDetail = () => {
  const { id } = useParams();
   const [productDetails, setProductsDetails] = useState ([])

useEffect (() =>{
  axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
    setProductsDetails(res.data);
  });
 }, [])


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
