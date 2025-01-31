import React from "react";
import Card from "../components/Card";
import productList from "../utiles/demo.js";

function Home({productData}) {
  console.log(productData, "product data from homepage");
  return (
    <div className="main">
      <div className="flex justify-between items-center gap-8">
        {productData.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default Home;
