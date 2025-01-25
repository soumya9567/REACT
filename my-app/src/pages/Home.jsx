import React from "react";
import Card from "../components/Card";
import productList from "../utiles/demo.js";

function Home() {
  console.log(productList, "product list");
  return (
    <div className="main">
      <div className="flex justify-between items-center gap-8">
        {productList.map((product) => {
          return <Card product={product.product} />;
        })}
      </div>
    </div>
  );
}

export default Home;
