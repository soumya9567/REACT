import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Card from "../components/Card";
import { toast } from "react-toastify";
import CartCard from "../components/CartCard/CartCard";

function Cart() {
  const { cart } = useContext(CartContext);
function handleClick(){
    toast.success("button clicked")
}

  return (
    <div className="bg-[#fee] flex  mt-[60px] text-center min-h-screen">
      <div className="flex flex-col items-center w-3/5 border-2 rounded-b-md bordergrey-300">
        {cart && cart.length !== 0 ? (
          cart.map((item) => <CartCard productData={item} />)
        ) : (
          <h1>
            Your cart is empty purchase some products{""}
            <a href="/">click here </a>
          </h1>
        )}
      </div>

      <div className="flex flex-col    border-2 w-2/5 p-6">
        {/* checkout section  */}

        <h1 className="text-center font-bold text-3xl">Price Details</h1>
        <div className="bg-slate-200 w-full  mx-auto h-full py-12 flex flex-col gap-4 items-center justify-center">
          <div className=" flex items-center w-full px-12 justify-between">
            <label htmlFor="">Total Quantity</label>

            <input type="text" className="w-64 h-5 bg-white border-black rounnded-md" />
          </div>
          <div className=" flex items-center w-full px-12 justify-between">
            <label htmlFor="">Delivery charge</label>

            <input type="text" className="w-64 h-5 bg-white border-black rounnded-md"/>
          </div>
          <div className=" flex items-center w-full px-12 justify-between">
            <label htmlFor="">Total Price</label>

            <input type="text" className="w-64 h-5 bg-white border-black rounnded-md" />
          </div>
          <br />
         <button onClick={handleClick}  className="w-52 h-16 rounded-lg bg-black text-white">
            procced payment
         </button>

        </div>
      </div>
    </div>
  );
}

export default Cart;
