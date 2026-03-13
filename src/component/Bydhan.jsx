import React from 'react'
import BydHan from '../assets/byd-han.webp'
import CountUp from 'react-countup';

const Bydhan = () => {
  return (
    <div className='relative'>
      <img src={BydHan} alt="" className='w-full bg-cover object-center' />
       <div className='absolute inset-0'>
        <h2 className='text-center text-white text-4xl font-monstserrat mt-10'>BYD HAN</h2>
       </div>
       
    </div>
  )
}

export default Bydhan