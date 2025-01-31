import React, { useContext } from "react";
import "./card.css";
import { toast } from "react-toastify";
import { CartContext } from "../context/CartContext";
// import productList from "../utiles/Demo";

function Card({ product }) {
  const { addToCart } = useContext(CartContext);

  function handleClick() {
    addToCart(product)

    toast.success("button clicked");
  }

  return (
    <div>
      <div className="card-image">
        <img src={product.images[0]} alt={product.title} />
        <p>{product.description}</p>
        {/* <h1 className="text-white">{productData.title}</h1> */}

        <button
          className=" w-28 h-12 mt-12 text-black bg-white ml-28 rounded-lg"
          onClick={handleClick}
        >
          ADD TO CART
        </button>

        {/* <Link to="/productDetails">go to product</Link> */}
      </div>
    </div>
  );
}

export default Card;
