import React, { useContext } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import cartLogo from '../../assets/cartlogo.png'
import { CartContext } from "../../context/CartContext";

function Navbar() {
  const {cart}=useContext(CartContext)
  return (
    <div>
      <div className="max-w-full h-16 bg-black absolute left-0 right-0 top-0 flex text-white  items-center justify-between">
        <div className="flex items-center">
          <img src={Logo} width={100} height={50} />
        </div>
        <div className="bg-white text-black rounded-md pl-5">
          <input  type="text" value="Search" />
        </div>
        <div  className="flex items-center justify-between">
          <ul className="flex space-x-4">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <Link to={"/ProductDetails"}> <li>PRODUCT</li></Link>
            <Link to="/cart">
            <li className="relative">
              <img width={25} src={cartLogo} alt="" />
              <span className="absolute -top-4 -right-1 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>

            </li>
            
            </Link>
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
