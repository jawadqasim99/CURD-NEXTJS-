'use client'
import React, { createContext, useContext, useState,useEffect } from "react";

const AppContext = createContext();
export function useAppContext() {
    return useContext(AppContext);
}

export function AppWrapper({ children }) {
    const [user, setUser] = useState('Jawad');
    useEffect(() => {
   console.log("I am using use effect");
    
     
    }, [])

    const [cart , setCart] =useState([]);

    const addToCart = (title,qty,price,img)=>{

        let newCart = cart;
        console.log("Add to cart");
        for (let index = 0; index < qty; index++) {
            newCart.push([img,title,price]);
            
        }
        console.log("Successfully Add to Cart" ,cart );

        
setCart(newCart);
    }
    const removeFromCart = (item)=>{
        let newCart = cart;
        let index=newCart.indexOf(item);
        newCart.splice(index)

setCart(newCart);
    }
    const clearCart = (item)=>{
        setCart([]);
    }
    
    return (
        <AppContext.Provider value={{user,cart, setUser ,removeFromCart,addToCart,clearCart }}>
            {children}
        </AppContext.Provider>
    )
}


