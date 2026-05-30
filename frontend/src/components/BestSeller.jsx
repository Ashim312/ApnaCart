import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);
    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller === true);
        setBestSeller(bestProduct.slice(15, 20));
    }, [products]);
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
        <Title text1="Our" text2="Bestsellers" />
        <p className='text-gray-600 w-3/4 m-auto text-xs sm:text-sm md:text-base'>Discover our bestsellers, the most loved and sought-after pieces in our collection. These are the items that have captured the hearts of our customers and continue to be favorites season after season.</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {bestSeller.map((item, index) => (
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))}
        </div>
    </div>
  )
}

export default BestSeller
