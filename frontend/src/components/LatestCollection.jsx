import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);
    useEffect(()=>{
        const sortedProducts = [...products].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setLatestProducts(sortedProducts.slice(1, 11));
    }, [products])
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1="Latest" text2="Collection" />
        <p className='text-gray-600 w-3/4 m-auto text-xs sm:text-sm md:text-base'>Premium fashion that breaks the rules. Redefine your everyday look with our latest drop. Discover our newest arrivals and exclusive pieces</p>
      </div>
      {/* Rendering Products */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6'>
        {latestProducts.map((item,index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default LatestCollection
