import React, { useEffect, useState } from 'react'
import byd4 from '../assets/sectionbyd.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios';
import SwiperSlider from './SwiperSlider'
import BydHan from '../assets/bydhan.mp4'
import byd23 from '../assets/bydd-img.jpg'
import BydNews from '../assets/byd-news1.webp'
import { FaLongArrowAltRight } from "react-icons/fa";
import BydNews2 from '../assets/manwoman.jpg'
import BydNews3 from '../assets/bydstreet.webp'

const Main = () => {

  const [news, setNews] = useState ([])

  useEffect (() => {
    axios.get('/news.json')
    .then(res => {
      setNews(res.data);

    })
    .catch(err => console.log("Məlumat gəlmədi:", err));
  }, [])



  return (
    <section>
      <div className="w-full h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${byd23})` }}>
        <div className='pt-20 md:pt-9 px-4 text-center'> 
        <h2 className='font-monstserrat text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest'>G Ə L Ə C Ə Y İ N</h2>
        <h2 className='flex items-center justify-center  text-white text-4xl  pt-2 '>ENERJİSİ İLƏ TANIŞ OLUN</h2>
        </div>
     </div>
      <div>
        <div
          className='w-full h-screen bg-cover bg-center flex flex-col items-center justify-center px-6'
          style={{ backgroundImage: `url(${byd4})` }}
        >
          <h2 className='text-white text-2xl md:text-4xl text-center font-monstserrat'>
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
          <h2 className='font-bold text-black font-monstserrat text-5xl mt-15 md:5xl'>Son Xəbərlər</h2>
        </div>



        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-15'> 
  {news.map((item) => (
    <div key={item.id} className='flex flex-col group cursor-pointer'>
      <div className='h-[250px] overflow-hidden rounded-lg shadow-sm mb-4'>
        <img 
          src={item.image} 
          alt="bydimg" 
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' 
        />
      </div>
      <div>
        <p>{item.date}</p>
        <h2 className='font-bold font-monstserrat group-hover:text-blue-600 transition-colors duration-300'>
          {item.title}
        </h2>
     
        <Link to={`/news/${item.id}`}>
          <FaLongArrowAltRight className='group-hover:translate-x-2 transition-transform duration-300'/>
        </Link>
      </div>
    </div>
  ))}
</div>




      </section>











    </section>


  )
}

export default Main