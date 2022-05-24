import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import NotFoundPage from "./components/NotFoundPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="details/:id" element={<ProductDetail />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
