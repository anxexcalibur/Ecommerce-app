
import React from 'react'
import { assets } from '../assets/assets'

function OurPolicy() {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-400'>
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5 ' alt="" />
        <p className='font-semibold'>Fácil Exchange Policy</p>
        <p>we offer hassle free Exchange Policy</p>
      </div>
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5 ' alt="" />
        <p className='font-semibold'>7 days return Policy</p>
        <p className='text-gray-500'>we offer hassle free Exchange Policy</p>
      </div>
      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5 ' alt="" />
        <p className='font-semibold'>Best Customer support</p>
        <p className='text-gray-500'>we provide 24/7 Customer</p>
      </div>
    </div>
  )
}

export default OurPolicy
