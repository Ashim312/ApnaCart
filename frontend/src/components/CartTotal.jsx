import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { assets } from '../assets/assets';


const CartTotal = () => {
    const {currency, getCartAmount, delivery_fee} = useContext(ShopContext);

  return (
    <div className='w-full' >
        <div className='text-2xl' >
            <Title text1={'Cart'} text2={'Total'} />
        </div>
        <div className='text-gray-600 flex flex-col gap-2 mt-2 text-sm' >
            <div className='flex justify-between' >
                <p>Subtotal</p>
                <p>{currency}{getCartAmount().toFixed(2)}</p>
            </div>
            <div className='flex justify-between' >
                <p>Delivery Fee</p>
                <p>{currency}{delivery_fee.toFixed(2)}</p>
            </div>
            <div className='border-t-1 flex justify-between font-medium text-base' >
                <p>Total</p>
                <p>{currency}{(getCartAmount() + delivery_fee).toFixed(2)}</p>
            </div>
        </div>
    </div>
  )
}

export default CartTotal
