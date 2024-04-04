

'use client'

import { useAppContext } from "./context";


export default function Home() {
  const  {user,setUser}=useAppContext();
  return (
    <>
   <div className="w-full h-[80vh] flex items-center justify-center ">
   <h1 className="text-[5rem] ">Home Page</h1>
   <p>{user}</p>
   <button onClick={()=>setUser('Qasim')} >change</button>
   </div>
    
       
    </>
  );
}
