import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        alert("Thank you for subscribing to our newsletter! You'll receive a 30% discount code in your email shortly.");
    }
  return (
    <div className='text-center' >
        <p className='text-2xl font-medium text-gray-800' >Subscribe now & get 30% off on your first order!</p>
        <p className='text-gray-600 text-sm mt-2 mb-5' >Join our newsletter to receive updates on new arrivals, special offers, and exclusive discounts.</p>
        <form onSubmit={onSubmitHandler} className='flex justify-center rounded-md border border-gray-600 w-1/2 mx-auto' >
            <input type="email" placeholder='Enter your email' className='rounded-md px-2 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black' />
            <button type='submit' className='bg-blue-950 text-white px-2 py-2 rounded-md hover:bg-blue-900 transition-colors duration-300' >Subscribe</button>
        </form>
    </div>
  )
}

export default NewsletterBox
