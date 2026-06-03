import React from 'react'
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { assets } from '../assets/assets';


const CartTotal = () => {
    const {currency, getCartAmount, delivery_fee} = useContext(ShopContext);
    const [freeDeliveryShown, setFreeDeliveryShown] = useState(false);

    const subtotal = getCartAmount();
    const displayDeliveryFee = subtotal === 0 ? 0 : (subtotal > 999 ? 0 : delivery_fee);
    const total = subtotal === 0 ? 0 : (subtotal + displayDeliveryFee);

    useEffect(() => {
        if (subtotal > 999 && !freeDeliveryShown) {
            toast.success('You unlock free delivery');
            setFreeDeliveryShown(true);
        } else if (subtotal <= 999 && freeDeliveryShown) {
            setFreeDeliveryShown(false);
        }
    }, [subtotal, freeDeliveryShown]);

  return (
    <div className='w-full' >
        <div className='text-2xl' >
            <Title text1={'Cart'} text2={'Total'} />
        </div>
        <div className='text-gray-600 flex flex-col gap-2 mt-2 text-sm' >
            <div className='flex justify-between' >
                <p>Subtotal</p>
                <p>{currency}{subtotal.toFixed(2)}</p>
            </div>
            <div className='flex justify-between' >
                <p>Delivery Fee</p>
                <p>{currency}{displayDeliveryFee.toFixed(2)}</p>
            </div>
            <div className='border-t flex justify-between font-medium text-base' >
                <p>Total</p>
                <p>{currency}{total.toFixed(2)}</p>
            </div>
        </div>
    </div>
  )
}

export default CartTotal
