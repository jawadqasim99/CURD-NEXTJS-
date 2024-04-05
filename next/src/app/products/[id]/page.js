'use client'
import { useEffect, useState } from 'react';
import { useAppContext } from '@/app/context';
import Loder from '@/app/components/Loder';
import Link from 'next/link';

function Page({ params }) {
  const { addToCart } = useAppContext();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const headers = {
          Authorization: 'Bearer 74ca14b83240e365e6925b22ff78b2f1c41fa880ebe9b0c126f21551c32b6d11fe4dcd381a9f1d1d765242fa5f2c7f7d79190540473877c411cf9200e6e904f2c8dfc32dcc461b00015c5b21d937b59810fe5d6d8ff2b69d4e8371d6fe67c2900e5e8a5ac5e2088a967e78d5efd01ace85b6e59dbb08abbccb644df71b2a5943',
        };
        const res = await fetch(`http://localhost:1337/api/products/${params.id}?populate=*`, { headers });
        
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const {data} = await res.json();
        setProductData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  if (!productData) {
    return <Loder/>
  }

 

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-[25rem] h-64 object-fill object-center rounded" src={productData.attributes.pic.data && `http://localhost:1337${productData.attributes.pic.data[0].attributes.url}`} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">{productData.attributes.Title}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{productData.attributes.slug}</h1>
            <p className="leading-relaxed">{productData.attributes.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:border-yellow-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">${productData.attributes.price}.00</span>
              <button onClick={() => addToCart(productData.attributes.Title, 1, productData.attributes.price,  `http://localhost:1337${productData.attributes.pic.data[0].attributes.url}`)} className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">Add To Cart</button>
             <Link href={'/cart'}> <button  className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">Check Out</button></Link>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
