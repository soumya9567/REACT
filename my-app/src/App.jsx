import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import axios from "axios";
import {useEffect,useState} from 'react'
import ProductDetails from "./pages/ProductDetails/ProductDetails";


function App() {
  // console.log(response.data,"response data")

  const [products, setProducts] = useState([]); 

  useEffect(() => {
    const fetchProducts = async () => {
      
        const response = await axios.get("https://dummyjson.com/products");
          console.log(response.data.products)

        setProducts(response.data.products); 
      
    }

    fetchProducts();
  }, []);
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
