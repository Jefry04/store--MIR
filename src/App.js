import { Route, Routes, Router, BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import NotFoundPage from "./components/NotFoundPage";
import Layout from "./components/Layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./store/reducers/Products.reducer";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="details/:id" element={<ProductDetail />} />
          <Route exact path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
