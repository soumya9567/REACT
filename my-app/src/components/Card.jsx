import React from "react";
import "./card.css";
// import productList from "../utiles/Demo";

function Card({ product }) {
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
        <h1 className="text-white text-2xl">{product}</h1>
        {/* <h1 className="text-white"></h1> */}

        {/* <Link to="/productDetails">go to product</Link> */}
      </div>

    </div>
  );
}

export default Card;
