import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700' >
      <div>
        <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5'/>
        <p className='font-semibold' >Easy Exchange Policy</p>
        <p className='text-gray-500 text-sm' >We offer a hassle-free exchange policy, allowing you to swap your purchase for a different size or style.</p>
      </div>
      <div>
        <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5'/>
        <p className='font-semibold' >7 Days Return Policy</p>
        <p className='text-gray-500 text-sm' >We offer a 7-day return policy, allowing you to return your purchase for a refund within 7 days of delivery.</p>
      </div>
      <div>
        <img src={assets.support_img} alt="" className='w-12 m-auto mb-5'/>
        <p className='font-semibold' >Best Customer Support</p>
        <p className='text-gray-500 text-sm' >We provide 24/7 customer support to assist you with any questions or concerns.</p>
      </div>
    </div>
  )
}

export default OurPolicy
