
'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '../components/Button';

async function getData() {
    const headers = {
        Authorization: 'Bearer b2738a60408c30f4f0db7461eae38f5b00d6f1862a6c883827e8fa005fb045879754f90d33702b53df443e3dcbf30ba23b9ce448e5a86b1aed6892c395c890c3702f6efc913f7b8255c1308a6809f9be79ba50bb27e8b2b46103e7ceef0ff23b66c085f810b764f0f38f5c47131e8bb5138205b2f3678323a8500be155006b8c'
    };
    const res = await fetch('http://localhost:1337/api/products?populate=*', { headers: headers });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}


async function Page() {
  
    const { data } = await getData();
 console.log(data[0].id);
//     const router = useRouter();
// const handleClick = ()=>{
//     router.push(`/products/${data.id}`
// }


    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4">
                    {data.map((item) => {
                        return (
                            <div className="xl:w-1/4 md:w-1/2 p-4" key={item.id}>
                            <div className="bg-gray-100 p-6 rounded-lg">
                             <img className='h-40 rounded w-full object-fill object-center mb-6' src={item.attributes.pic.data && `http://localhost:1337${item.attributes.pic.data[0].attributes.url}`}
        alt='contect'/>
                               
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.Title}</h2>
                               
                                <p className="leading-relaxed text-base">{item.attributes.description}</p>
                                <p className="leading-relaxed text-base">${item.attributes.price}</p>
                            <Button id={item.id}/>
                            </div>
                        </div>
                        );
                    }
                      
                    )}
                </div>
            </div>
        </section>
    );
}

export default Page;
