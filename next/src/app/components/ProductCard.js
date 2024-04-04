import React from 'react'

export default function ProductCard() {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4" key={item.id}>
                            <div className="bg-gray-100 p-6 rounded-lg">
                             <img className='h-40 rounded w-full object-fill object-center mb-6' src={item.attributes.pic.data && `http://localhost:1337${item.attributes.pic.data[0].attributes.url}`}
        alt='contect'/>
                               
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.Title}</h2>
                               
                                <p className="leading-relaxed text-base">{item.attributes.description}</p>
                                <p className="leading-relaxed text-base">${item.attributes.price}</p>
                              <button  className='bg-slate-500 text-white px-8 py-2 rounded-full text-center'>buy</button>
                            </div>
                        </div>
  )
}
