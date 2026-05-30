import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id, image, name, price}) => {
    const {currency} = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className='group relative flex flex-col items-center justify-center  cursor-pointer text-gray-700'>
        <div className='overflow-hidden w-full h-full transition-transform duration-300 group-hover:scale-110'>
            <img src={image[0]} alt={name} className='w-full h-full object-cover hover:scale-110 transition ease-in-out' />
        </div>
        <div className='absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-4 text-center'>
            <h3 className='text-sm font-medium text-gray-800'>{name}</h3>
            <p className='text-sm text-gray-600'>{currency}{price}</p>
        </div>
    </Link>
  )
}

export default ProductItem
