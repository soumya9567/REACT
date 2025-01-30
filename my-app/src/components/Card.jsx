import React from "react";
import "./card.css";
import {toast} from 'react-toastify'
// import productList from "../utiles/Demo";

function Card({ products }) {
  

function handleClick(){
  toast.success("button clicked")
}

  return (
    <div>
      <div className="card-image">
        <img
          src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          amet laboriosam praesentium adipisci quae. Doloribus animi possimus,
          dolore, necessitatibus sapiente qui praesentium asperiores eos fuga
          placeat
        </p>
        <button className=" text-5pxw-[60%] mt-12 bg-white text-black ml-28" onClick={handleClick} >ADD TO CART</button>

        {/* <h1 className="text-white"></h1> */}

        {/* <Link to="/productDetails">go to product</Link> */}
      </div>

    </div>
  );
}

export default Card;
