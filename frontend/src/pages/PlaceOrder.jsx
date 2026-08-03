import React, { useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import axios from 'axios';


const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const {navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products} = useContext(ShopContext);
  const [formData, setFormData] = useState({
   firstName: '',
   lastName: '',
   email: '',
   street: '',
   city: '',
   state: '',
   pincode: '',
   country: '',
   phone: ''
  })
  
  const onChangeHandler = (event) => {
   const name = event.target.name;
   const value = event.target.value
   setFormData(data => ({...data,[name]:value}))
  }

  const initPay = (order) => {
   const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Order Payment',
      description: 'Order Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
         console.log(response);
         try {
            const { data } = await axios.post(backendUrl + '/api/order/verifyRazorpay', response, {headers:{token}})
            if (data.success) {
               setCartItems({})
            }
         } catch (error) {
            console.log(error)
            toast.error(error)
         }
      }
   }
   const rzp = new window.Razorpay(options);
   rzp.open();
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    if (!token) {
      toast.error('Please login before placing an order')
      navigate('/login')
      return
    }

    try {
      let orderItems = []

      for (const items in cartItems) {
         for (const item in cartItems[items]) {
            if (cartItems[items][item] > 0){
               const itemInfo = structuredClone(products.find(product => product._id === items))
               if (itemInfo) {
                  itemInfo.size = item
                  itemInfo.quantity = cartItems[items][item]
                  orderItems.push(itemInfo)
               }
            }
         } 
      }

      let orderData = {
         address: formData,
         items: orderItems,
         amount: getCartAmount() + delivery_fee
      }

      switch (method) {
         // API calls for COD
         case 'cod':
            const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } })
            console.log(response.data)
            if (response.data.success) {
               setCartItems({})
               navigate('/orders')
            } else {
               toast.error(response.data.message)
            }
            break;
         case 'razorpay':
            const responseRazorpay = await axios.post(backendUrl + '/api/order/razorpay', orderData, {headers: {token}})
            if (responseRazorpay.data.success) {
               console.log(responseRazorpay.data.order);
               initPay(responseRazorpay.data.order);
               navigate('/orders')
            } else {
               toast.error(response.data.message)
            }
         default:
            break;
      }

    } catch (error) {
      console.error(error)
      toast.error(error?.response?.data?.message || error.message || 'Order placement failed')
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t' >
      {/* Left Side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-120'>
        <div className='text-xl sm:text-2xl my-3' >
           <Title text1={'Delivery'} text2={'Information'} />
        </div>
        <div className='flex gap-3' >
            <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-400 rounded px-3.5 py-1.5 w-full' type="text" placeholder='First Name' />
            <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-400 rounded px-3.5 py-1.5 w-full' type="text" placeholder='Last Name' />
        </div>
        <input required onChange={onChangeHandler} name='email' value={formData.email}  className='border border-gray-400 rounded px-3.5 py-1.5 w-full' type="email" placeholder='Email Address' />
        <input required onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-400 rounded px-3.5 py-1.5 w-full' type="text" placeholder='Street' />
        <div className='flex gap-3' >
            <input required onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-400 rounded px-3.5 py-1.5 w-full' type="text" placeholder='City' />
            <input required onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-400 rounded px-3.5 py-1.5 w-full' type="text" placeholder='State' />
        </div>
        <div className='flex gap-3' >
            <input  required onChange={onChangeHandler} name='pincode' value={formData.pincode} className='border border-gray-400 rounded px-3.5 py-1.5 w-full' type="text" placeholder='Pincode' />
            <input required onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-400 rounded px-3.5 py-1.5 w-full' type="text" placeholder='Country' />
        </div>
        <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-400 rounded px-3.5 py-1.5 w-full' type="text" placeholder='Phone Number' />
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
                 <div onClick={()=>setMethod('razorpay')} className={`flex items-center justify-between gap-4 border p-3 rounded-3xl cursor-pointer transition h-12.5 ${method === 'razorpay' ? 'border-orange-400 bg-orange-100' : 'border-gray-400 bg-transparent'}`} >
                    <img className='h-16 w-auto max-w-35' src={assets.razorpay_logo} alt='Razorpay' />
                    <p className={`min-w-4 h-4 rounded-full border ${method === 'razorpay' ? 'bg-green-500 border-green-500' : 'border-gray-400'}`} ></p>
                 </div>
                 <div onClick={()=>setMethod('cod')} className={`flex items-center justify-between gap-4 border p-3 rounded-3xl cursor-pointer transition h-12.5 ${method === 'cod' ? 'border-orange-400 bg-orange-100' : 'border-gray-400 bg-transparent'}`} >
                    <p className='text-sm font-semibold text-slate-900'>Cash on Delivery</p>
                    <p className={`min-w-4 h-4 rounded-full border ${method === 'cod' ? 'bg-green-500 border-green-500' : 'border-gray-400'}`} ></p>
                 </div>
           </div>
           <div className='w-full text-end mt-8'>
           <button type='submit' className='bg-black text-white px-16 py-3 rounded'>Place Order</button>
           </div>
         </div>
      </div>
    </form>
  )
}

export default PlaceOrder
