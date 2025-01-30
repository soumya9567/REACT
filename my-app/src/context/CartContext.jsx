import { use, useState } from "react";
import { Children, createContext } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();


export const CartProviser = ({Children})=>{
    const [cart,setCart]  = useState([])
}