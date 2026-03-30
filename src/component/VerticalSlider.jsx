import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import './Vertical.css'; 


import { Pagination, Mousewheel } from 'swiper/modules';


import bydfc from '../assets/bydfc.jpg'
import bydfc2 from '../assets/bydfc2.jpg'

export default function VerticalSlider() {
  return (
   
    <div className="vertical-container">
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        mousewheel={true} 
        modules={[Pagination, Mousewheel]}
        
        className="vertical-swiper"
      >
        <SwiperSlide>
            <img src={bydfc} alt="BYD Dolphin Interior" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={bydfc2} alt="BYD Technology" />
        </SwiperSlide>
      
      </Swiper>
    </div>
  );
}