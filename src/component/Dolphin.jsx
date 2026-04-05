import React from 'react'
import dolphin from '../assets/dolphinjpg.webp'
import CountUp from 'react-countup';
import DolphinSlider from './DolphinSlider';
import dolphininto1 from '../assets/dolphininto1.webp'
import dolphininto2 from '../assets/dolphininto2.webp'
import dolphininto3 from '../assets/dolphininto3.webp'
import dolphininto4 from '../assets/dolphininto4.webp'
import dolphininto5 from '../assets/dolphininto5.webp'
import dolphininto6 from '../assets/dolphininto6.webp'
import bladebattery from '../assets/dolphin-battery.jpg'

const Dolphin = () => {
  return (
    <div className='overflow-x-hidden w-full '>
    
      <div className='relative w-full'>
        <img src={dolphin} alt="BYD Dolphin" className='w-full object-cover' />
        
      
        <div className='absolute inset-x-0 top-0 pt-10 md:pt-20 flex flex-col items-center'>
          <h2 className='text-3xl md:text-7xl text-white font-monstserrat font-bold drop-shadow-2xl'>BYD DOLPHIN</h2>
          <p className='text-white opacity-80 mt-2 md:mt-5 text-center text-sm md:text-2xl font-serif px-4'>Çevik və çoxfunksiyalı elektrikli hetçbek</p>
        </div>

     
        <div className='absolute inset-x-0 bottom-5 md:bottom-10'>
          <div className='container mx-auto flex justify-center gap-6 md:gap-15 text-center text-white'>
            <div className='flex flex-col items-center'>
              <h2 className='text-xl md:text-5xl font-monstserrat font-bold'>
                <CountUp end={7} duration={2} decimals={1} suffix="s" />
              </h2>
              <p className='text-[10px] md:text-base opacity-90 uppercase tracking-tighter'>AWD 0-100km/h</p>
            </div>
            <div className='flex flex-col items-center'>
              <h2 className='text-xl md:text-5xl font-monstserrat font-bold'>
                <CountUp end={150} duration={2} suffix='kW' />
              </h2>
              <p className='text-[10px] md:text-base opacity-90 uppercase tracking-tighter'>WLTP combined</p>
            </div>
            <div className='flex flex-col items-center'>
              <h2 className='text-xl md:text-5xl font-monstserrat font-bold'>
                <CountUp end={427} duration={2} decimals={1} suffix=' km' />
              </h2>
              <p className='text-[10px] md:text-base opacity-90 uppercase tracking-tighter'>Battery capacity</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className='container mx-auto text-center px-6 py-12'>
        <h2 className='text-2xl md:text-3xl font-monstserrat text-gray-900'>Okean Estetikası</h2>
        <p className='max-w-4xl mx-auto text-sm md:text-lg font-light mt-5 text-gray-900 leading-relaxed'>
          BYD DOLPHIN elektrikli hetçbeki yeni "Okean estetikası" dizayn konsepsiyasını özündə əks etdirir. Kuzovun zərif cizgiləri, kəskin xətlər və axıcı konturlarla birləşərək, tam elektrikli mühərrik sisteminə əsaslanan güvənli və zərif bir dizayn yaradır.
        </p>
      </div>

    
      <div className='mt-5 md:mt-10 bg-transparent'>
        <DolphinSlider />
      </div>

      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Kart 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col hover:bg-black transition-all duration-800 group">
            <div className="overflow-hidden rounded-lg mb-6 h-60">
              <img src={dolphininto1} alt="Vegan leather" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-semibold font-monstserrat mb-4 text-gray-900 group-hover:text-white transition-colors duration-800">Veqan dəri oturacaqlar</h2>
              <p className="text-gray-700 leading-relaxed text-base font-serif group-hover:text-white transition-colors duration-800">
                İnteqrasiya edilmiş idman üslublu oturacaqlar həm uzunməsafəli səyahətlərdə rahatlıq, həm də döngələrdə güclü yan dəstək təmin edir.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col hover:bg-black transition-all duration-800 group">
            <div className="overflow-hidden rounded-lg mb-6 h-60">
              <img src={dolphininto2} alt="Panoramic" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-semibold font-monstserrat mb-4 text-gray-900 group-hover:text-white transition-colors duration-800">Panoramik lyuk</h2>
              <p className="text-gray-700 leading-relaxed text-base font-serif group-hover:text-white transition-colors duration-800">
                Bu elektrikli hetçbekin tam ölçülü panoramik şüşə damı bütün salonu əhatə edərək misilsiz genişbucaqlı görünüş təmin edir.
              </p>
            </div>
          </div>

          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col hover:bg-black transition-all duration-800 group">
            <div className="overflow-hidden rounded-lg mb-6 h-60">
              <img src={dolphininto3} alt="Connected" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-semibold font-monstserrat mb-4 text-gray-900 group-hover:text-white transition-colors duration-800">Həmişə Bağlantıda Qalın</h2>
              <p className="text-gray-700 leading-relaxed text-base font-serif group-hover:text-white transition-colors duration-800">
                BYD DOLPHIN qabaqcıl texnoloji təcrübə təqdim edən 4G ağıllı bağlantı sistemi ilə təchiz edilmişdir.
              </p>
            </div>
          </div>

     
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col hover:bg-black transition-all duration-800 group">
            <div className="overflow-hidden rounded-lg mb-6 h-60">
              <img src={dolphininto4} alt="Storage" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-semibold font-monstserrat mb-4 text-gray-900 group-hover:text-white transition-colors duration-800">Daha çox saxlama sahəsi</h2>
              <p className="text-gray-700 leading-relaxed text-base font-serif group-hover:text-white transition-colors duration-800">
                Avtomobilin salonunda çoxsaylı saxlama sahələri mövcuddur: qapı ciblərindən tutmuş mərkəzi saxlama bölməsinə qədər.
              </p>
            </div>
          </div>

      
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col hover:bg-black transition-all duration-800 group">
            <div className="overflow-hidden rounded-lg mb-6 h-60">
              <img src={dolphininto5} alt="Rear space" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-semibold font-monstserrat mb-4 text-gray-900 group-hover:text-white transition-colors duration-800">Arxa sərnişinlər üçün rahat məkan</h2>
              <p className="text-gray-700 leading-relaxed text-base font-serif group-hover:text-white transition-colors duration-800">
                e-platform 3.0 sayəsində arxa sərnişin bölməsinin döşəməsinin tam düz olması maksimum rahatlıq təmin edir.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col hover:bg-black transition-all duration-800 group">
            <div className="overflow-hidden rounded-lg mb-6 h-60">
              <img src={dolphininto6} alt="Boot space" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-semibold font-monstserrat mb-4 text-gray-900 group-hover:text-white transition-colors duration-800">Geniş baqaj sahəsi</h2>
              <p className="text-gray-700 leading-relaxed text-base font-serif group-hover:text-white transition-colors duration-800">
                345 litrlik baqaj həcmi, oturacaqlar tam qatlandıqda 1310 litrə qədər genişlənə bilir.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className='relative w-full h-[400px]  md:h-auto '>
        <img src={bladebattery} alt="Blade Battery" className='w-full h-full object-cover ' />
        <div className='absolute inset-0 bg-black/30 flex flex-col items-center justify-center px-6'>
          <h2 className='text-xl md:text-3xl text-white text-center font-monstserrat font-bold mb-4'>BYD Dolphin: İnqilabi Blade Battery Texnologiyası</h2>
          <p className='text-white text-center text-sm md:text-lg max-w-4xl drop-shadow-md'>
            Mərkəzdə dayanan qabaqcıl batareya texnologiyası ilə elektrikli avtomobil bazarında yeni standartlar müəyyən edir.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dolphin;