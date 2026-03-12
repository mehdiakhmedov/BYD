import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import byd234 from '../assets/byd-pinter.jpg'
import byddolphin from '../assets/dolphin2.jpg'
import byddolphin2 from '../assets/byd-dolphin3.jpg'
import byddolphin3 from '../assets/dolphin4.jpg'
import byddolphin4 from '../assets/way.png'


import "../../public/Swiper.css";

// import required modules
import { EffectCards } from 'swiper/modules';
import Dolphin from './Dolphin';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div style={{ background: `url(${byddolphin4})` }}>
      <div>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper mt-10  "
        >
          <SwiperSlide><img src={byd234} alt="" /></SwiperSlide>
          <SwiperSlide><img src={byddolphin} alt="" /></SwiperSlide>
          <SwiperSlide><img src={byddolphin2} alt="" className='w-full' /></SwiperSlide>
          <SwiperSlide><img src={byddolphin3} alt="" className='w-100 h-100' /></SwiperSlide>

        </Swiper>
      </div>
      <div className=' group flex items-center text-center justify-center mt-7'>
        <button className="border-2 p-5 bg-black text-white border-black 
group-hover:bg-white group-hover:text-black
transition duration-300 cursor-pointer" ><Link to='/Dolphin'>BYD DOLPHIN</Link></button>
      </div>
    </div>
    
  );
}
