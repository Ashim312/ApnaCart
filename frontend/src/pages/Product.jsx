import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { useEffect } from 'react';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import { useNavigate } from 'react-router-dom';

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
    <div className='border-t-1 text-gray-400 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='text-gray-800 flex gap-12 sm:gap-12 flex-col sm:flex-row'>
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
                        <button onClick={()=>setSize(item)} key={index} className={`border border-gray-400 hover:border-orange-500 px-4 py-2 ${size === item ? 'bg-gray-500 text-white' : ''}`}>
                            {item}
                        </button>
                    ))}
                </div>
            </div>
                <button className='bg-black text-white px-8 py-3 active:bg-gray-700'>Add to Cart</button>
                <hr className='mt-8 sm:w-4/5' />
                <div className='text-gray-600 mt-5 flex flex-col gap-1' >
                    <p>100% Original product. </p>
                    <p>Cash on delivery is available on this product .</p>
                    <p>Easy return and exchange policy within 7 days .</p>
                </div>
         </div>
      </div>
      {/*  Description & Review Section  */}
      <div className='mt-20'>
            <div className='text-gray-400 flex gap-12 sm:gap-20 border-1 border-gray-400 w-max'>
                <p className='text-gray-700 font-bold cursor-pointer border-b-2 border-gray-500 m-2'>Description</p>
                <p className='text-gray-500 font-bold cursor-pointer m-2'>Reviews (135)</p>
            </div>
            <div className=' text-gray-600 border-1 border-gray-400'>
                <p className='m-2' >An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
              <br /><br />E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
            </div>
      </div>
      {/*  Related Products Section  */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className='opacity-0'>Product not found</div>;
};

export default Product
