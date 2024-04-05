'use client'
import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context';
import Button from '../components/Button';

async function getData() {
    const headers = {
        Authorization: 'Bearer 74ca14b83240e365e6925b22ff78b2f1c41fa880ebe9b0c126f21551c32b6d11fe4dcd381a9f1d1d765242fa5f2c7f7d79190540473877c411cf9200e6e904f2c8dfc32dcc461b00015c5b21d937b59810fe5d6d8ff2b69d4e8371d6fe67c2900e5e8a5ac5e2088a967e78d5efd01ace85b6e59dbb08abbccb644df71b2a5943'
    };
    const res = await fetch('http://localhost:1337/api/products?populate=*', { headers: headers });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

function Page() {
    const [data, setData] = useState([]);
    const { addToCart } = useAppContext();

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await getData();
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

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
                    {data.map((item) => (
                        <div className="xl:w-1/4 md:w-1/2 p-4" key={item.id}>
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <img className='h-40 rounded w-full object-fill object-center mb-6' src={item.attributes.pic.data && `http://localhost:1337${item.attributes.pic.data[0].attributes.url}`} alt='content' />
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.Title}</h2>
                                <p className="leading-relaxed text-base">{item.attributes.description}</p>
                                <p className="leading-relaxed text-base">${item.attributes.price}</p>
                                <Button id={item.id} />
                               
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Page;
