import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProucts } from "../store/reducers/Products.reducer";

import ProductCard from "../components/ProductCard";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer);

  useEffect(() => {
    dispatch(getProucts());
  }, []);

  return (
    <div className="layout__container">
      <div className="card__container">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
