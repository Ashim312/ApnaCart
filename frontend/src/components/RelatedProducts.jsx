import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Title from './Title';
import ProductItem from './ProductItem';
import { assets } from '../assets/assets';

const RelatedProducts = ({category, subCategory}) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {

            let productsCopy = products. slice();

            productsCopy = productsCopy.filter((item) => category === item. category);
            productsCopy = productsCopy.filter((item) => subCategory === item. subCategory);
            
            setRelated(productsCopy.slice(0,5));
        }
    }, [products]);
  return (
    <div className='my-24' >
      <div className='text-center text-3xl py-2' >
         <Title text1={'Related'} text2={'Products'} />
         </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {related.map((item, index) => (
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))}
            {related.length === 0 && <div className='col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 flex flex-col items-center gap-4 py-10'>
                <img src={assets.empty_box_icon} alt="" className='w-16' />
                <p className='text-gray-600'>No related products found.</p>
            </div>}

        </div>
    </div>
  )
}

export default RelatedProducts
