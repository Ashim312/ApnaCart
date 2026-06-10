import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-10 border-t'>
        <Title text1={'Contact'} text2={'Us'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28' >
        <img className='w-full md:max-w-112.5' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6' >
            <p className='font-semibold text-xl text-gray-600' >Our Store</p>
            <p className='text-gray-500' >Park Street <br/> Kolkata, West Bengal 700001 </p>
            <p className='text-gray-500' >Phone: (123) 456-7890 <br /> Email: admin@apnacart.com </p>
            <p className='text-gray-600 font-semibold text-xl' >Careers at ApnaCart</p>
            <p className='text-gray-500' >Learn more about opportunities to join our team!</p>
            <button className='border bg-transparent text-black px-6 py-3 hover:bg-gray-800 hover:text-white' >Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact
