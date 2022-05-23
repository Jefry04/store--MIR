import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import ProductCard from '../components/ProductCard';


const ProductDetail = () => {
  const {id} = useParams();
  const { products } = useSelector((state) => state.productsReducer)

   const productDetails  = products.find((product) => product.id === +id)

  return (
    <div><ProductCard product={productDetails}/></div>
  )
}

export default ProductDetail