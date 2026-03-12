import React from 'react'
import byd4 from '../assets/sectionbyd.jpg'
import { Link } from 'react-router-dom'
import { SwiperSlide } from 'swiper/react'
import SwiperSlider from './SwiperSlider'
import BydHan from '../assets/bydhan.mp4'
import byd23 from '../assets/bydd-img.jpg'
import BydNews from '../assets/byd-news1.webp'
import { FaLongArrowAltRight } from "react-icons/fa";
import BydNews2 from '../assets/manwoman.jpg'
import BydNews3 from '../assets/bydstreet.webp'

const Main = () => {



  return (
    <section>
      <div className="w-full h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${byd23})` }}>
        <div className='pt-9'> 
        <h2 className='flex items-center justify-center font-monstserrat text-white text-5xl  '>G Ə L Ə C Ə Y İ N</h2>
        <h2 className='flex items-center justify-center text-white text-4xl  pt-2 '>ENERJİSİ İLƏ TANIŞ OLUN</h2>
        </div>
     </div>
      <div>
        <div
          className='w-full h-screen bg-cover bg-center'
          style={{ backgroundImage: `url(${byd4})` }}
        >
          <h2 className='flex text-white text-4xl items-center text-center justify-center pt-5 font-monstserrat '>
            Okean estetikası dizaynı
          </h2>
          <p className='max-w-[1200px] mx-auto text-white justify-center text-center pt-5 text-2xl'>
            BYD Seal-ın ön hissəsi 'X' dizayn konsepsiyasına uyğundur; təsir edici və dinamik yan xətləri ilə performans və üslubun birləşməsini tam şəkildə nümayiş etdirir.
          </p>
          <div className='flex items-center justify-center text-white text-4xl pt-100'>
            <button className=' border-2 p-1 hover:text-yellow-300 transition duration-300  '><Link to='/Seal'>BYD SEAL</Link></button>
          </div>
        </div>
      </div>

      <section>

        <SwiperSlider />
      </section>

      <section>
        <div className='mt-10 relative flex items-center justify-center'>
          <video autoPlay loop muted >
            <source src={BydHan} />
          </video>
          <div className='absolute inset-0 flex items-center justify-center bg-black/20'>
            <button className='border-2 py-3 px-7 hover:text-yellow-300 transition duration-300 bg-black text-white '><Link to='/BydHan'>BYD HAN</Link></button>
          </div>
        </div>
      </section>

      <section>
        <div className='container mx-auto text-center justify-center'>
          <h2 className='font-bold text-black font-monstserrat text-5xl mt-15'>Son Xəbərlər</h2>
        </div>







        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-15 '> 
          <div className='flex flex-col group cursor-pointer'>
            <div className='h-[250px] overflow-hidden rounded-lg shadow-sm mb-4'>
              <img src={BydNews} alt="bydimg" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
            </div>
            <div>
              <p>mart 5 2026</p>
              <h2 className='font-bold font-monstserrat group-hover:text-blue-600 transition-colors duration-300'>BYD Qrupu, FC Internazionale Milano-nun qlobal avtomobil tərəfdaşıdır.</h2>
              <Link to='/Global'><FaLongArrowAltRight className='group-hover:translate-x-2 transition-transform duration-300'/>
              </Link>
            </div>
          </div>


          <div className='flex flex-col group cursor-pointer'>
            <div className='h-[250px] overflow-hidden rounded-lg shadow-sm mb-4 '>
              <img src={BydNews2} alt="bydimg" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'  />
            </div>
            <div>
               <p>mart 5 2026</p>
              <h2 className='font-bold font-monstserrat  group-hover:text-blue-600 transition-colors duration-300'>BYD, Avropadakı ilk avtomobil zavodu üçün voestalpine şirkətini əsas tədarükçü kimi elan edir.</h2>
              <Link to='/Bydconnect'><FaLongArrowAltRight className='group-hover:translate-x-2 transition-transform duration-300' />
              </Link>
            </div>

          </div>



          <div className='flex flex-col group cursor-pointer'>
            <div className='h-[250px] overflow-hidden rounded-lg shadow-sm mb-4'>
              <img src={BydNews3} alt="bydimg" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/>
            </div>
            <div>
              <p>mart 5 2026</p>
              <h2 className='font-bold font-monstserrat group-hover:text-blue-600 transition-colors duration-300'>BYD əyləncəli və gələcəyə hazır DOLPHIN SURF modelini Avropalı müştərilərə təqdim edir.</h2>
              <Link to='/Dolphinnews'><FaLongArrowAltRight className='group-hover:translate-x-2 transition-transform duration-300' />
              </Link>
            </div>

          </div>

        </div>





      </section>
    </section>

  )
}

export default Main