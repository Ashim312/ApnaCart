import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {

  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'About'} text2={'Us'} />
    </div>
      <div className='my-10 flex flex-col md:flex-row gap-16' >
        <img className='w-full md:max-w-112.5' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600' >
          <p>Welcome to our e-commerce store! We are passionate about providing you with a seamless shopping experience, offering a wide range of high-quality products at competitive prices. We pride ourselves on excellent customer service and strive to exceed your expectations with every purchase.</p>
          <p>Thank you for visiting our e-commerce store. We are excited to have you as part of our community and look forward to serving you with the best products and customer service. If you have any questions or need assistance, please don't hesitate to reach out to us. Happy shopping!</p>
          <b>Our Mission</b>
          <p>Our mission is to provide a seamless online shopping experience for our customers. We are committed to offering a wide range of high-quality products at competitive prices, while delivering exceptional customer service. We strive to exceed our customers' expectations and build lasting relationships based on trust and satisfaction.</p>
        </div>
      </div>
      <div className='text-xl py-4' >
         <Title text1={'Why'} text2={'Choose Us'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20' >
        <div className='flex flex-col gap-4 md:w-1/3' >
          <b>Wide Selection</b>
          <p>We offer a wide variety of products across multiple categories, ensuring that you can find exactly what you're looking for. From the latest fashion trends to cutting-edge electronics, we have something for everyone.</p>
        </div>
        <div className='flex flex-col gap-4 md:w-1/3' >
          <b>Competitive Prices</b>
          <p>We are committed to providing our customers with the best value for their money. We regularly update our prices to ensure that you are getting the most competitive deals on the market.</p>
        </div>
        <div className='flex flex-col gap-4 md:w-1/3' >
          <b>Exceptional Customer Service</b>
          <p>Our dedicated customer service team is here to assist you with any questions or concerns you may have. We are committed to providing prompt and helpful support to ensure your satisfaction with every purchase.</p>
        </div>
      </div>
      </div>
  )
}

export default About
