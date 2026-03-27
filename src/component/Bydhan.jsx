import React from 'react'
import BydHan from '../assets/byd-han.webp'
import CountUp from 'react-countup';
import Bydvideo from '../assets/BYD-HAN.mp4'
import bydhaninto from '../assets/bydhaninto.webp'
import hanbattery from '../assets/HANBATTERY.png'

const Bydhan = () => {
  return (
    <div className='relative'>
      <img src={BydHan} alt="" className='w-full bg-cover object-center' />
      <div className='absolute inset-0'>
        <h2 className='text-center text-white text-4xl font-monstserrat mt-10'>BYD HAN</h2>
      </div>
      <div className='container mx-auto justify-center absolute mt-150 inset-0 flex gap-15 text-4xl text-center text-white font-extralight'>
        <div>

          <h2 className='font-monstserrat'>
            <CountUp end={3.9} duration={2} decimals={1} suffix="s" />
          </h2>
          <p>AWD 0-100km/h</p>
        </div>
        <div>
          <h2 className='font-monstserrat'>
            <CountUp end={521} duration={2} suffix='KM' />
          </h2>
          <p>WLTP combined</p>
        </div>
        <div>
          <h2 className='font-monstserrat'>
            <CountUp end={662} duration={2} decimals={1} suffix='KM' />
          </h2>
          <p>Battery capacity</p>
        </div>
      </div>

      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row items-center gap-10 mt-15 mb-15'>
          <div className='w-full lg:w-3/5 overflow-hidden rounded-2xl shadow-xl'>
            <video autoPlay loop muted className='w-full object-cover'>
              <source src={Bydvideo} />
            </video>
          </div>
          <div className='w-full lg:w-2/5 flex flex-col text-left'>
            <h2 className='text-4xl text-gray-950 font-monstserrat '>BYD HAN: Gələcəyin Lüksü və Performansın Harmoniyası</h2>
            <p className='text-gray-700 text-lg leading-relaxed  mt-4 font-medium '>BYD Han, "Dragon Face" (Əjdaha Üzü) dizayn dili ilə ilk baxışdan heyranlıq yaradır. 0-dan 100 km/saat sürəti cəmi 3.9 saniyəyə yığan bu mühərrik gücü, lüks salon konforu ilə birləşərək sizə hər sürüşdə unikal bir təcrübə vəd edir. 602 km-ə qədər məsafə qət etmə imkanı (WLTP) və intellektual AWD sistemi ilə yolların hakimi siz olun.</p>
          </div>
        </div>
      </div>


      <div className='relative'>
        <img src={bydhaninto} alt="" className='w-full bg-cover object-center' />
        <div className='absolute inset-0 text-center'>
          <h2 className='text-center items-center text-4xl text-white uppercase font-monstserrat mt-8'>GÜZƏŞTSİZ ÜSLÜB VƏ RAHATLIQ</h2>
        </div>
      </div>


      <div>
        <div className='container mx-auto px-10'>
          <div className='text-center mt-20'>
            <h2 className='font-monstserrat text-4xl text-gray-950 '>BYD Blade Battery: Təhlükəsizlikdə Yeni Era</h2>
            <p className='text-gray-700 font-medium mt-5 text-lg '>BYD 29 ildən artıqdır ki, batareya sənayesində qabaqcıl adlardan biridir. Bizim ən son, oyunun qaydalarını dəyişən Blade Battery texnologiyamız, çətin şəraitlərdə bir sıra ekstremal sınaqlardan uğurla keçərək onu dünyanın ən təhlükəsiz batareyalarından birinə çevirmişdir.</p>
          </div>
        </div>
        <img src={hanbattery} alt="batteryhan" className='w-full h-auto mt-[-120px] lg:mt-[-160px]' />
      </div>



      <div>
        <div className="bg-[#111] py-16 px-4"> 
          <div className="container mx-auto max-w-5xl">

          
            <div className="grid grid-cols-2 border-b border-gray-700 pb-6 mb-2">
              <div className="text-white text-xl font-semibold uppercase tracking-wider">Model</div>
              <div className="text-white text-xl font-semibold uppercase tracking-wider text-right">Han</div>
            </div>

           
            <div className="divide-y divide-gray-800">

             
              <div className="grid grid-cols-2 py-5 items-center">
                <div className="text-gray-400 text-lg">Ötürücü növü</div>
                <div className="text-white text-lg text-right font-medium">AWD (Tam ötürücü)</div>
              </div>

              <div className="grid grid-cols-2 py-5 items-center">
                <div className="text-gray-400 text-lg">Məsafə (km)*</div>
                <div className="text-white text-lg text-right font-medium">521 (WLTP Kombinə edilmiş)</div>
              </div>

              <div className="grid grid-cols-2 py-5 items-center">
                <div className="text-gray-400 text-lg">Sürətlənmə 0-100 km/saat (s)</div>
                <div className="text-white text-lg text-right font-medium">3.9</div>
              </div>

             
              <div className="grid grid-cols-2 py-5 items-center">
                <div className="text-gray-400 text-lg">Maksimal Sürət (km/saat)</div>
                <div className="text-white text-lg text-right font-medium">180</div>
              </div>

              
              <div className="grid grid-cols-2 py-5 items-center">
                <div className="text-gray-400 text-lg">Maksimal Güc (kVt)</div>
                <div className="text-white text-lg text-right font-medium">380</div>
              </div>

             
              <div className="grid grid-cols-2 py-5 items-center">
                <div className="text-gray-400 text-lg">Təkərlər (düym)</div>
                <div className="text-white text-lg text-right font-medium">19"</div>
              </div>

            </div>

          
            <p className="text-gray-600 text-sm mt-8 italic">
              * Real məsafə sürüş vərdişləri, hava şəraiti və yükdən asılı olaraq dəyişə bilər.
            </p>

          </div>
        </div>
      </div>


    </div>

  )
}

export default Bydhan