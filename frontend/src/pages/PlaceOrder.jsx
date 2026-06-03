import React, { useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';


const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t' >
      {/* Left Side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-120'>
        <div className='text-xl sm:text-2xl my-3' >
           <Title text1={'Delivery'} text2={'Information'} />
        </div>
        <div className='flex gap-3' >
            <input className='border border-gray-400 rounded px-3.5 py-1.5 w-full' type="text" placeholder='First Name' />
            <input className='border border-gray-400 rounded px-3.5 py-1.5 w-full' type="text" placeholder='Last Name' />
        </div>
        <input className='border border-gray-400 rounded px-3.5 py-1.5 w-full' type="text" placeholder='Email Address' />
        <input className='border border-gray-400 rounded px-3.5 py-1.5 w-full' type="text" placeholder='Street' />
        <div className='flex gap-3' >
            <input className='border border-gray-400 rounded px-3.5 py-1.5 w-full' type="text" placeholder='City' />
            <input className='border border-gray-400 rounded px-3.5 py-1.5 w-full' type="text" placeholder='State' />
        </div>
        <div className='flex gap-3' >
            <input className='border border-gray-400 rounded px-3.5 py-1.5 w-full' type="text" placeholder='Pincode' />
            <input className='border border-gray-400 rounded px-3.5 py-1.5 w-full' type="text" placeholder='Country' />
        </div>
        <input className='border border-gray-400 rounded px-3.5 py-1.5 w-full' type="text" placeholder='Phone Number' />
      </div>
      {/* Right Side */}
      <div className='mt-8'>
         <div className='mt-8 min-w-80'>
          <CartTotal />
         </div>
          <div className='mt-12' >
             <Title text1={'Payment'} text2={'Method'} />
             {/* Payment Method Selection */}
             <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 mt-4' >
                 <div onClick={()=>setMethod('gpay')} className={`flex items-center justify-between gap-4 border pr-3 rounded-3xl cursor-pointer transition h-12.5 ${method === 'gpay' ? 'border-orange-400 bg-orange-100' : 'border-gray-400 bg-transparent'}`} >
                    <img className='h-16 w-auto max-w-35' src={assets.gpay_logo} alt='GPay' />
                    <p className={`min-w-4 h-4 rounded-full border ${method === 'gpay' ? 'bg-green-500 border-green-500' : 'border-gray-400'}`} ></p>
                 </div>
                 <div onClick={()=>setMethod('phonepe')} className={`flex items-center justify-between gap-4 border p-3 rounded-3xl cursor-pointer transition h-12.5 ${method === 'phonepe' ? 'border-orange-400 bg-orange-100' : 'border-gray-400 bg-transparent'}`} >
                    <img className='h-16 w-auto max-w-35' src={assets.phonepe_logo} alt='PhonePe' />
                    <p className={`min-w-4 h-4 rounded-full border ${method === 'phonepe' ? 'bg-green-500 border-green-500' : 'border-gray-400'}`} ></p>
                 </div>
                 <div onClick={()=>setMethod('cod')} className={`flex items-center justify-between gap-4 border p-3 rounded-3xl cursor-pointer transition h-12.5 ${method === 'cod' ? 'border-orange-400 bg-orange-100' : 'border-gray-400 bg-transparent'}`} >
                    <p className='text-sm font-semibold text-slate-900'>Cash on Delivery</p>
                    <p className={`min-w-4 h-4 rounded-full border ${method === 'cod' ? 'bg-green-500 border-green-500' : 'border-gray-400'}`} ></p>
                 </div>
           </div>
           <div className='w-full text-end mt-8'>
            <button onClick={() => navigate('/orders')} className='bg-black text-white px-16 py-3 rounded' >Place Order</button>
           </div>
         </div>
      </div>
    </div>
  )
}

export default PlaceOrder
