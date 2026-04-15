import React from 'react'
import dolphinbyd from "../assets/sekilbyd.png"
import bydsealtest from "../assets/sealpngg.png"
import bydhanpng from "../assets/HANPNG.webp"

const Test = () => {
  return (
    <div className='w-full bg-white overflow-hidden'>
      <div className='container mx-auto py-20 relative'>
        
        
        <div className='text-center mb-10 relative z-20'>
          <h2 className='text-black text-6xl font-bold font-montserrat tracking-tighter'>
            BYD DOLPHIN
          </h2>
         
        </div>

       
        <div className='relative flex items-center justify-center h-[400px] md:h-[500px]'>
          
        
          <h1 className='absolute text-[150px] md:text-[300px] font-black text-gray-200 select-none z-0 tracking-tighter'>
            DOLPHIN
          </h1>

        
          <div className='relative z-10 w-full flex justify-center animate-in fade-in slide-in-from-right-full duration-1000 ease-out'>
            <img 
              src={dolphinbyd} 
              alt="BYD Dolphin" 
              className='w-[600px] md:w-[900px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer'
            />
          </div>
        
        </div>

          <div className='text-center'>
            <a href ="https://api.whatsapp.com/send?phone=994512334004&text=Salam!%20M%C9%99n%20bu%20avtomobil%20il%C9%99%20maraqlan%C4%B1ram:%20BYD%20Contact%20-%20BYD%20MOTORS%20BAKU%0Ahttps://bydmotorsbaku.az/byd-contact/" 
            className='text-3xl  font-monstserrat cursor-pointer border-2 rounded-2xl hover:text-amber-800 transition-all duration-300 '>DOLPHİNİ TEST ET</a>
          </div>

      </div>






       <div className='container mx-auto py-20 relative'>
        
        
        <div className='text-center mb-10 relative z-20'>
          <h2 className='text-black text-6xl font-bold font-montserrat tracking-tighter'>
            BYD SEAL
          </h2>
         
        </div>

       
        <div className='relative flex items-center justify-center h-[400px] md:h-[500px]'>
          
        
          <h1 className='absolute text-[150px] md:text-[300px] font-black text-gray-200 select-none z-0 tracking-tighter'>
            SEAL
          </h1>

        
          <div className='relative z-10 w-full flex justify-center animate-in fade-in slide-in-from-right-full duration-1000 ease-out'>
            <img 
              src={bydsealtest} 
              alt="BYD Seal" 
              className='w-[600px] md:w-[600px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer'
            />
          </div>
        
        </div>

          <div className='text-center'>
            <a href ="https://api.whatsapp.com/send?phone=994512334004&text=Salam!%20M%C9%99n%20bu%20avtomobil%20il%C9%99%20maraqlan%C4%B1ram:%20BYD%20Contact%20-%20BYD%20MOTORS%20BAKU%0Ahttps://bydmotorsbaku.az/byd-contact/" 
            className='text-3xl  font-monstserrat cursor-pointer border-2 rounded-2xl hover:text-amber-800 transition-all duration-300 '>SEALI TEST ET</a>
          </div>

      </div>




      <div className='container mx-auto py-20 relative'>
        
        
        <div className='text-center mb-10 relative z-20'>
          <h2 className='text-black text-6xl font-bold font-montserrat tracking-tighter'>
            BYD HAN
          </h2>
         
        </div>

       
        <div className='relative flex items-center justify-center h-[400px] md:h-[500px]'>
          
        
          <h1 className='absolute text-[150px] md:text-[300px] font-black text-gray-200 select-none z-0 tracking-tighter'>
            HAN
          </h1>

        
          <div className='relative z-10 w-full flex justify-center animate-in fade-in slide-in-from-right-full duration-1000 ease-out'>
            <img 
              src={bydhanpng} 
              alt="BYD Seal" 
              className='w-[600px] md:w-[600px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer'
            />
          </div>
        
        </div>

          <div className='text-center'>
            <a href ="https://api.whatsapp.com/send?phone=994512334004&text=Salam!%20M%C9%99n%20bu%20avtomobil%20il%C9%99%20maraqlan%C4%B1ram:%20BYD%20Contact%20-%20BYD%20MOTORS%20BAKU%0Ahttps://bydmotorsbaku.az/byd-contact/" 
            className='text-3xl  font-monstserrat cursor-pointer border-2 rounded-2xl hover:text-amber-800 transition-all duration-300 '>HANI TEST ET</a>
          </div>

      </div>
    </div>
  )
}

export default Test