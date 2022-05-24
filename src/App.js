import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import NotFoundPage from "./components/NotFoundPage";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="details/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
