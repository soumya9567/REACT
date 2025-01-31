import React, { useContext, useEffect, useState } from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import{useEffect,useState} from "react"
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import Cart from "./pages/Cart";
import { CartContext } from "./context/CartContext";

function App() {

  const {cart}= useContext(CartContext)
  const [productData, setProductData] = useState([]);
  // console.log(productData, "from app.jsx");
  useEffect(() => {
    console.log("fetching data");
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const products = await axios.get("https://dummyjson.com/products");
    setProductData(products.data?.products);
    
  }
  console.log(productData,"product data in app  ")

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, []);

  return (
    <div className=" flex flex-col">
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home productData={productData} />} />
        <Route
          path="/ProductDetails"
          element={<ProductDetails productData={productData} />}
        />
        <Route path="/cart" element={<Cart productData={productData} />}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
