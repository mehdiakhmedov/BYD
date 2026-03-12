import React from 'react'
import bydseal1 from '../assets/byd-seal1.webp'
import CountUp from 'react-countup';
import bydseal4 from '../assets/sectionbyd.jpg'
import sealinto from '../assets/sealinto.webp'
import solteref from '../assets/solteref.webp'
import sagteref from '../assets/sagteref.webp'
import sol1 from '../assets/sol1.webp'
import sag1 from '../assets/sag1.webp'
import charge from '../assets/charge1.webp'
import Byditac from '../assets/byditac.mp4'

const Seal = () => {
  return (
    <div className='relative w-full min-h-screen'>
      
      <div className='relative'>
        <img src={bydseal1} alt="BYD Seal" className='w-full' />
        <h2 className='absolute inset-0 text-center font-monstserrat text-white text-4xl mt-10'>BYD SEAL</h2>
        <div className='container mx-auto justify-center absolute mt-150 inset-0 flex gap-15 text-4xl text-center text-white font-extralight'>
          <div>
            <h2 className='font-monstserrat'>
              <CountUp end={3.8} duration={2} decimals={1} suffix="s" />
            </h2>
            <p>AWD 0-100km/h</p>
          </div>
          <div>
            <h2 className='font-monstserrat'>
              <CountUp end={570} duration={2} suffix='KM' />
            </h2>
            <p>WLTP combined</p>
          </div>
          <div>
            <h2 className='font-monstserrat'>
              <CountUp end={82.5} duration={2} decimals={1} suffix='kWh' />
            </h2>
            <p>Battery capacity</p>
          </div>
        </div>
      </div>

    
      <div
        className='w-full h-screen bg-cover bg-center flex flex-col items-center justify-start'
        style={{ backgroundImage: `url(${bydseal4})` }}
      >
        <h2 className='text-white text-4xl pt-10 font-monstserrat'>
          Okean estetikası dizaynı
        </h2>
        <p className='max-w-[1200px] mx-auto text-white text-center pt-5 text-2xl'>
          BYD Seal-ın ön hissəsi 'X' dizayn konsepsiyasına uyğundur; təsir edici və dinamik yan xətləri ilə performans və üslubun birləşməsini tam şəkildə nümayiş etdirir.
        </p>
      </div>

     
      <div className='relative'>
        <div className='absolute w-full text-white text-center mt-10 z-10'>
          <h2 className='text-4xl font-monstserrat'>Rotatable touchscreen</h2>
          <p className='text-xl mt-5 opacity-80 max-w-2xl mx-auto'>
            The centre console features a 15.6-inch multimedia touchscreen with rotation function to make driving an easier and pleasant experience.
          </p>
        </div>
        <img src={sealinto} alt="Interior" className='w-full' />
      </div>

     
      <div className='container mx-auto py-20 space-y-32'>
      
        <div className='flex items-center gap-20'>
          <img src={solteref} alt="Panoramik dam" className='w-1/2 rounded-xl shadow-lg' />
          <div className='w-1/2 px-10'>
            <h2 className='font-monstserrat text-4xl font-bold'>Panoramik dam</h2>
            <p className='font-serif text-2xl mt-5 text-gray-700 leading-relaxed'>
              Açıq səmanın azadlığını hiss edin və avtomobilinizin daxili hissəsini dolduran təbii işıqdan zövq alın.
            </p>
          </div>
        </div>

       
        <div className='flex flex-row-reverse items-center gap-20'>
          <img src={sagteref} alt="Audio sistem" className='w-1/2 rounded-xl shadow-lg' />
          <div className='w-1/2 px-10 text-right'>
            <h2 className='font-monstserrat text-4xl font-bold'>Möhtəşəm sürücülük teatrı</h2>
            <p className='font-serif text-2xl mt-5 text-gray-700 leading-relaxed'>
              Yüksək keyfiyyətli audio sistemimizlə özünüzü əsl sürücülük teatrında hiss edin.
            </p>
          </div>
        </div>

        
        <div className='flex items-center gap-20'>
          <img src={sol1} alt="İdman oturacaqları" className='w-1/2 rounded-xl shadow-lg' />
          <div className='w-1/2 px-10'>
            <h2 className='font-monstserrat text-4xl font-bold'>İnteqrasiya olunmuş idman oturacaqları</h2>
            <p className='font-serif text-2xl mt-5 text-gray-700 leading-relaxed'>
              İnteqrasiya olunmuş idman oturacaqları, sürücülük təcrübəniz zamanı rahatlığı maksimuma çatdırmaq üçün erqonomik prinsiplərlə layihələndirilib.
            </p>
          </div>
        </div>

        
        <div className='flex flex-row-reverse items-center gap-20'>
          <img src={sag1} alt="Saxlama sahəsi" className='w-1/2 rounded-xl shadow-lg' />
          <div className='w-1/2 px-10 text-right'>
            <h2 className='font-monstserrat text-4xl font-bold'>Ağıllı Saxlama Sahəsi</h2>
            <p className='font-serif text-2xl mt-5 text-gray-700 leading-relaxed'>
              BYD SEAL yalnız arxa hissədə 400 litrlik geniş baqajla kifayətlənmir, həm də ön hissədə qapaqlı əlavə 53 litrlik saxlama sahəsinə malikdir.
            </p>
          </div>
        </div>
      </div>

      <div className='relative '>
        <img src={charge} alt="charge" />
        <div className='absolute inset-0 text-center mt-10 leading-10'>
        <h2 className='text-2xl font-monstserrat'>Enerji Doldurma</h2>
        <p className='font-extralight text-[20px]'>Siz BYD SEAL modelini 150 kVt-lıq DC (sabit cərəyan) gücü ilə cəmi 26 dəqiqəyə (30%-dən 80%-ə qədər) doldura bilərsiniz.</p>
        </div>
      </div>

      <div className='mt-20 container mx-auto px-10'>
        <div> 
          <h2 className='container mx-auto text-center text-2xl font-monstserrat '>iTAC (Ağıllı Fırlanma Anına Uyğunlaşdırılmış Nəzarət) Sistemi</h2>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-16'>
          <div className='text-xl text-gray-700 leading-relaxed text-justify font-serif'>
          <p className='text-center '>BYD SEAL ən son iTAC texnologiyası ilə standartları bir addım daha yuxarı daşıyır. iTAC ilə avtomobilin dinamikasının bərpası artıq ənənəvi güc azaltma üsullarından daha irəli gedərək yeni bir mərhələyə qədəm qoyub. Bu sistem fırlanma anının ötürülməsini ağıllı şəkildə bölüşdürür; fırlanma anının yerdəyişməsindən, lazımi dərəcədə azaldılmasından və mənfi fırlanma anı çıxışından istifadə edir. Bu qabaqcıl sistem sürüşməni effektiv şəkildə minimuma endirir və ya tamamilə aradan qaldıraraq avtomobilin bütün güc potensialını üzə çıxarır. O, nəinki təhlükəsizliyi artırır, həm də idarəetmə rahatlığını yüksəldərək rəvan və təhlükəsiz sürücülük təcrübəsini təmin edir.</p>
          </div>
        <video autoPlay muted src={Byditac} className='w-70 mt-20 '></video>
        </div>
      </div>

      
    </div>
  );
};

export default Seal;