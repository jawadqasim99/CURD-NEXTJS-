

'use client'

import { useState } from "react";
import { useAppContext } from "./context";


export default function Home() {
  const  {addToCart,cart}=useAppContext();

  const [len , lenVal] = useState(cart.length);
 const handler=()=>{
  addToCart(1,1)
  lenVal(cart.length)
 }
  
  return (
    <>
   <div className="w-full h-[80vh] flex items-center justify-center ">
   <h1 className="text-[5rem] ">Home Page</h1>
   <h1 className="text-[2rem] ">{len}</h1>
 
   <button onClick={handler} >add</button>
   </div>
    
       
    </>
  );
}
