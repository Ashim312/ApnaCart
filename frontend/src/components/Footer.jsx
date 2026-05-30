import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-25 text-sm'>
        <div>
            <img src={assets.logo} className=' w-42' alt="" />
            <p className='text-gray-600 md:w-2/3 mb-10' >ApnaCart is your go-to destination for trendy and affordable fashion. We offer a wide range of clothing, accessories, and footwear for men, women, and kids. Our mission is to provide high-quality products at competitive prices, ensuring that you can express your unique style without breaking the bank.</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5 mt-11' >COMPANY</p>
            <ul className='text-gray-600 flex flex-col gap-1' >
                <li className='mb-2'>Home</li>
                <li className='mb-2'>About Us</li>
                <li className='mb-2'>Delivery</li>
                <li className='mb-2'>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5 mt-11' >GET IN TOUCH</p>
            <ul className='text-gray-600 flex flex-col gap-1' >
                <li className='mb-2'>Email: info@apnacart.com</li>
                <li className='mb-2'>Phone: +1 234 567 890</li>
                <li className='mb-2'>Address: 123 Fashion Street, Style City</li>
            </ul>
        </div>
      </div>
        <div className='text-center text-gray-800 text-sm py-5 border-t' >
            &copy; 2024-2026, ApnaCart.com, All rights reserved.
        </div>
    </div>
  )
}

export default Footer
