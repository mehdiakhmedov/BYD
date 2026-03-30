import React from 'react'
import VerticalSlider from './VerticalSlider'



export default function Aboutus() {
  return (
    <div className=' py-4 '>
        <div className='container mx-auto'> 
            <h2 className='text-center text-gray-950 text-4xl font-monstserrat'> Biz Kimik?</h2>
            <p className='text-center text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mt-6 px-4 font-light'>"Build Your Dreams (BYD) olaraq məqsədimiz sadəcə avtomobil istehsal etmək deyil, həm də dünyanı daha təmiz və yaşıl bir gələcəyə daşımaqdır. Biz innovasiyanı hər kəs üçün əlçatan edərək, mobillik dünyasında yeni standartlar müəyyən edirik."</p>
        </div>
        <div>
          <VerticalSlider/>
        </div>
        
    </div>
  )
}
