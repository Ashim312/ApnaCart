import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { useEffect } from 'react';
import { assets } from '../assets/assets';

const Product = () => {
  const {productId} = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
      products.map((item) => {
          if (item._id === productId){
              setProductData(item);
              setImage(item.image[0]);
          } else {
              return null;
          }
      })
  };

  useEffect(() => {
      fetchProductData();
  }, [productId]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
         {/* Product Images */}
         <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row '>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                {productData.image.map((item, index) => ( 
                    <img onClick={()=>setImage(item)} key={index} src={item} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt={productData.name} />
                ))}
            </div>
            <div className='w-full sm:w-[80] '>
                <img className='w-full h-auto' src={image} alt={productData.name} />
            </div>
         </div>
         {/* Product Info */}
         <div className='flex-1' >
            <h1 className='text-2xl font-medium mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                <p className='text-sm text-gray-600'>(135)</p>
            </div>
            <p className='text-3xl font-bold mt-5'>{currency}{productData.price.toFixed(2)}</p>
            <p className='text-sm text-gray-700 mt-5 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
                <p>Select Size</p>
                <div className='flex gap-3'>
                    {productData.sizes.map((item, index) => (
                        <button onClick={()=>setSize(item)} key={index} className={`border border-gray-400 hover:bg-black hover:text-white px-4 py-2 ${size === item ? 'bg-black text-white' : ''}`}>
                            {item}
                        </button>
                    ))}
                </div>
            </div>
         </div>
      </div>
    </div>
  ) : <div className='opacity-0'>Product not found</div>;
};

export default Product
