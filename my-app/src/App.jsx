import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  return (
    <div className=" flex flex-col">
     
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/ProductDetails" element={<ProductDetails />}/>


      </Routes>
        <Footer />

    </div>
  );
}

export default App;
