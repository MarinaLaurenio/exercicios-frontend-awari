import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Product from "../../pages/Product/Product";
import Login from "../../pages/Login/Login";
import Error from "../../pages/Error/Error";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
 