import React from 'react'
import { useRouter } from 'next/navigation'
export default function Button({id}) {
    
    const router = useRouter();
    const handlerBtn= ()=>{
        router.push(`/products/${id}`)
    }
  return (
  <button onClick={handlerBtn} className='bg-slate-500 text-white px-8 py-2 rounded-full text-center'>buy</button>

  )
}
