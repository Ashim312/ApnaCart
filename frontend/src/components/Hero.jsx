import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-700 rounded-lg overflow-hidden'>
      {/* Hero Left Side*/}
      <div className='w-full sm:w-1/2 p-6'>
      <div className='flex justify-center items-center flex-col'>
        <h1 className='text-3xl font-bold mb-4 '>Discover Your Perfect Style</h1>
        <div class="flex items-center gap-2 mb-4">
             <p class="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
             <h1 className='prata-regular text-3xl sm:py-0 lg:text-5xl leading-relaxed'>Our Bestsellers</h1>
        </div>
        <p className='text-gray-600 mb-4'>Step into our collection and find the perfect piece that reflects your unique style.</p>
        </div>
        <Link to='/collection'>
          <button className='bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800'>
            Shop Now
          </button>
        </Link>
      </div>
      {/* Hero Right Side*/}
      <div className='sm:w-1/2 w-full sm:h-auto'>
        <img src={assets.hero_img} alt="Hero" className='w-full h-full object-cover' />
      </div>
    </div>
  )
}

export default Hero
