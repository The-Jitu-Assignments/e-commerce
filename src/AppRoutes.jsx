import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import Products from "./pages/products/Products";
import RegisterPage from "./pages/RegisterPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={
          <Layout>
            <Homepage />
          </Layout>
        } />
        <Route path="/products" element={
          <Layout>
            <Products />
          </Layout>
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes; 