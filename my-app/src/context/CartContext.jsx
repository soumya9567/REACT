import {  useState,  createContext } from "react";

import { toast } from "react-toastify";

export const CartContext = createContext();


export const CartProvider = ({children})=>{
    
    const [cart,setCart]  = useState([])
console.log(cart,"cart")

    const addToCart = (newItem)=>{
        const existingItemIndex = cart.findIndex((item) => item.id === newItem.id);
       
        if(existingItemIndex !== -1){
            toast.error(`${newItem.title} is already in the cart`)
             return false;
        }

        setCart((prev)=>[...prev,newItem]);
        localStorage.setItem("cart",JSON.stringify(cart));
    };

    return(
        <CartContext.Provider value={{addToCart,cart}}>
            {children}
        </CartContext.Provider>
    )
}