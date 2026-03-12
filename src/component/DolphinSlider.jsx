import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar, Autoplay } from 'swiper/modules';
import okean1 from '../assets/okean1.webp'
import okean2 from '../assets/okean2.webp'
import okean3 from '../assets/okean3.webp'

export default function DolphinSlider() {
  return (
    <div className=" w-full px-0"> 
      <Swiper
        
        style={{
          width: '100%',
          height: '500px',
        }}
        scrollbar={{
          hide: false,
          draggable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Scrollbar, Autoplay]}
        className="mySwiper"
      >
       
        <SwiperSlide className="w-full h-full">
          <div className="w-full h-full flex items-center justify-center bg-blue-500 text-white text-4xl">
             <img src={okean1} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-full h-full">
          <div className="w-full h-full flex items-center justify-center bg-green-500 text-white text-4xl">
             <img src={okean2} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-full h-full">
           <div className="w-full h-full flex items-center justify-center bg-red-500 text-white text-4xl">
             <img src={okean3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}