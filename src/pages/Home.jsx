import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { getProucts } from "../store/reducers/Products.reducer";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer);

  useEffect(() => {
    dispatch(getProucts());
  }, []);

  return (
    <div>
      {products.map((product) => (
        <Link key={product.id} to={`details/${product.id}`}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
