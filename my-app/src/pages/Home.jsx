import React from "react";
import Card from "../components/Card";
import productList from "../utiles/demo.js";

function Home({productData}) {
  console.log(productData, "product data");
  return (
    <div className="main">
      <div className="flex justify-between items-center gap-8">
        {productData.map((products) => {
          return <Card key={products.id} products={products} />;
        })}
      </div>
    </div>
  );
}

export default Home;
