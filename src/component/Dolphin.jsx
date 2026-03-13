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

    <div>
      <div className='relative'>
        <img src={dolphin} alt="" />
        <div className='absolute inset-0'>
          <h2 className=' text-6xl text-center text-white font-monstserrat mt-10'>BYD DOLPHIN</h2>
          <p className=' text-white opacity-45 mt-5 text-center text-2xl font-serif '>Çevik və çoxfunksiyalı elektrikli hetçbek</p>
        </div>
      </div>



      <div className='container mx-auto justify-center absolute mt-220 inset-0 flex gap-15 text-4xl text-center text-white font-extralight'>
        <div>

          <h2 className='font-monstserrat'>
            <CountUp end={7} duration={2} decimals={1} suffix="s" />
          </h2>
          <p>AWD 0-100km/h</p>
        </div>
        <div>
          <h2 className='font-monstserrat'>
            <CountUp end={150} duration={2} suffix='kW' />
          </h2>
          <p>WLTP combined</p>
        </div>
        <div>
          <h2 className='font-monstserrat'>
            <CountUp end={427} duration={2} decimals={1} suffix='Up to km' />
          </h2>
          <p>Battery capacity</p>
        </div>
      </div>



      <div>
        <div className=' container mx-auto text-center '>
          <h2 className='text-3xl font-monstserrat mt-10 text-gray-900'>Okean Estetikası</h2>
          <p className='text-1xl font-light mt-5  text-gray-900'>BYD DOLPHIN elektrikli hetçbeki yeni "Okean estetikası" dizayn konsepsiyasını özündə əks etdirir. Kuzovun zərif cizgiləri, kəskin xətlər və axıcı konturlarla birləşərək, tam elektrikli mühərrik sisteminə əsaslanan güvənli və zərif bir dizayn yaradır. BYD DOLPHIN ilə azadlığın dadını çıxarın.</p>
        </div>
      </div>

      <div className='mt-10'>
        <DolphinSlider />

      </div>

      <div className="container mx-auto py-16 px-4 ">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">

          
          <div className="bg-white p-6 rounded-xl shadow-sm border  border-gray-100 flex flex-col hover:bg-black  transition-all duration-800">
            <div className="overflow-hidden rounded-lg mb-6 h-60">
              <img src={dolphininto1} alt="Vegan leather seats" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-semibold font-monstserrat mb-4 text-gray-900 hover:text-white transition-colors duration-800">Veqan dəri oturacaqlar</h2>
              <p className="text-gray-700 leading-relaxed text-base font-serif hover:text-white transition-colors duration-800">
                İnteqrasiya edilmiş idman üslublu oturacaqlar həm uzunməsafəli səyahətlərdə rahatlıq,
                həm də döngələrdə güclü yan dəstək təmin edir. Bu oturacaqlar üslubdan ödün vermədən
                ekoloji təmiz həll yolu təqdim edən veqan dərindən hazırlanmışdır. Çoxistiqamətli
                tənzimləmə funksiyası ilə oturacağınızı hər ehtiyacınıza uyğun fərdiləşdirə bilərsiniz.
              </p>
            </div>
          </div>

         
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col hover:bg-black  transition-all duration-800">
            <div className="overflow-hidden rounded-lg mb-6 h-60">
              <img src={dolphininto2} alt="Panoramic sunroof" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-semibold font-monstserrat mb-4 text-gray-900 hover:text-white transition-colors duration-800">Panoramik lyuk</h2>
              <p className="text-gray-700 leading-relaxed text-base font-serif hover:text-white transition-colors duration-800">
                Bu elektrikli hetçbekin tam ölçülü panoramik şüşə damı bütün salonu əhatə edərək
                misilsiz genişbucaqlı görünüş təmin edir və geniş daxili məkana bol işığın
                daxil olmasına şərait yaradır.
              </p>
            </div>
          </div>

      
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col hover:bg-black  transition-all duration-800">
            <div className="overflow-hidden rounded-lg mb-6 h-60">
              <img src={dolphininto3} alt="Stay Connected" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-semibold font-monstserrat mb-4 text-gray-900 hover:text-white transition-colors duration-800">Həmişə Bağlantıda Qalın</h2>
              <p className="text-gray-700 leading-relaxed text-base font-serif hover:text-white transition-colors duration-800">
                BYD DOLPHIN qabaqcıl texnoloji təcrübə təqdim edən 4G ağıllı bağlantı sistemi ilə
                təchiz edilmişdir. Bulud xidmətinin bir hissəsi olaraq, avtomobilin proqram təminatı
                Over-the-Air (OTA) texnologiyası vasitəsilə simsiz şəkildə yenilənir.
              </p>
            </div>
          </div>

         
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col hover:bg-black  transition-all duration-800">
            <div className="overflow-hidden rounded-lg mb-6 h-60">
              <img src={dolphininto4} alt="More storage space" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-semibold font-monstserrat mb-4 text-gray-900 hover:text-white transition-colors duration-800">Daha çox saxlama sahəsi</h2>
              <p className="text-gray-700 leading-relaxed text-base font-serif hover:text-white transition-colors duration-800">
                Avtomobilin salonunda çoxsaylı saxlama sahələri mövcuddur: bura geniş qapı
                ciblərindən tutmuş, mərkəzi qapalı saxlama bölməsinə və əsas sürücü məlumat
                ekranının altında yerləşən xüsusi saxlama qabına qədər hər şey daxildir.
              </p>
            </div>
          </div>

          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col hover:bg-black  transition-all duration-800">
            <div className="overflow-hidden rounded-lg mb-6 h-60">
              <img src={dolphininto5} alt="Comfortable rear passenger space" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-semibold font-monstserrat mb-4 text-gray-900 hover:text-white transition-colors duration-800">Arxa sərnişinlər üçün rahat məkan</h2>
              <p className="text-gray-700 leading-relaxed text-base font-serif hover:text-white transition-colors duration-800">
                e-platform 3.0 sayəsində avtomobilin qısa ön və arxa çıxıntıları, həmçinin uzun
                təkər bazası daxili məkana daha geniş görünüş qazandırır. Arxa sərnişin
                bölməsinin döşəməsinin tam düz olması orta oturacaqda əyləşənlər üçün maksimum
                rahatlıq və genişlik təmin edir.
              </p>
            </div>
          </div>

         
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col hover:bg-black  transition-all duration-800">
            <div className="overflow-hidden rounded-lg mb-6 h-60">
              <img src={dolphininto6} alt="Large boot space" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-semibold font-monstserrat mb-4 text-gray-900 hover:text-white transition-colors duration-800">Geniş baqaj sahəsi</h2>
              <p className="text-gray-700 leading-relaxed text-base font-serif hover:text-white transition-colors duration-800">
                Kiçik bir hetçbek olmasına baxmayaraq, baqaj bölməsinə dörd ədəd standart 20
                düymlük çamadan asanlıqla yerləşir. Oturacaqların 60:40 nisbətində qatlanması
                sayəsində 345 litrlik baqaj həcmi, hər iki oturacaq tam qatlandıqda 1310 litrə
                qədər genişlənə bilir.
              </p>
            </div>
          </div>

        </div>
      </div>


      <div className='relative'>
        <div>
          <img src={bladebattery} alt="" className='w-full bg-cover' />
        </div>
        
        <div className='absolute inset-0 '>
            <h2 className='text-3xl mt-5 text-white text-center font-monstserrat font-bold mb-4 drop-shadow-lg '>BYD Dolphin: İnqilabi Blade Battery Texnologiyası ilə Tanış Olun</h2>
            <p className='text-white text-center text-lg max-w-1xl drop-shadow-md'>BYD Dolphin yalnız müasir dizaynı və şəhər içi çevikliyi ilə deyil, həm də mərkəzində dayanan qabaqcıl batareya texnologiyası — BYD Blade Battery ilə elektrikli avtomobil bazarında yeni standartlar müəyyən edir.</p>
        </div>
      </div>


    </div>


  )
}

export default Dolphin