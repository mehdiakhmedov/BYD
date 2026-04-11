import React, { useState } from 'react' 
import bydd from '../assets/byd-svg.png'
import { Link } from 'react-router-dom'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { IoIosArrowDown } from 'react-icons/io' 

const Header = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <header className='w-full sticky top-0 z-[100] bg-white/80 backdrop-blur-md shadow-sm font-montserrat transition-all duration-300'>
      <div className='max-w-[1200px] mx-auto px-4 py-6 flex justify-between items-center'>
        
        {/* LOGO */}
        <div className='w-24 cursor-pointer z-50'>
          <Link to='/'><img src={bydd} alt="BYD Logo" /></Link>
        </div>

        {/* DESKTOP MENU */}
        <div className='hidden md:flex items-center'>
          <ul className='flex items-center text-black gap-8 font-bold cursor-pointer'>
            
            {/* 1. MODELLƏR DROPDOWN */}
            <li className='relative group py-2'>
              <div className='flex items-center gap-1 hover:text-amber-800 transition-all duration-300'>
                Modellər <IoIosArrowDown className='group-hover:rotate-180 transition-transform duration-300' />
              </div>
              <div className='absolute top-full left-0 w-48 bg-white shadow-xl rounded-lg py-3 hidden group-hover:block animate-in fade-in slide-in-from-top-2 border border-gray-50'>
                <Link to='/Dolphin' className='block px-5 py-2 hover:bg-gray-50 hover:text-amber-800 transition-colors text-sm uppercase'>BYD DOLPHIN</Link>
                <Link to='/Seal' className='block px-5 py-2 hover:bg-gray-50 hover:text-amber-800 transition-colors text-sm uppercase'>BYD SEAL</Link>
                <Link to='/BydHan' className='block px-5 py-2 hover:bg-gray-50 hover:text-amber-800 transition-colors text-sm uppercase'>BYD HAN</Link>
              </div>
            </li>

            {/* 2. HAQQIMIZDA DROPDOWN */}
            <li className='relative group py-2'>
              <div className='flex items-center gap-1 hover:text-amber-800 transition-all duration-300'>
                Haqqımızda <IoIosArrowDown className='group-hover:rotate-180 transition-transform duration-300' />
              </div>
              <div className='absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg py-3 hidden group-hover:block animate-in fade-in slide-in-from-top-2 border border-gray-50'>
                <Link to='/Aboutus' className='block px-5 py-2 hover:bg-gray-50 hover:text-amber-800 transition-colors text-sm uppercase'>BİZ KİMİK?</Link>
                <Link to='/Greenworld' className='block px-5 py-2 hover:bg-gray-50 hover:text-amber-800 transition-colors text-sm uppercase'>YAŞIL DÜNYA NAMİNƏ?</Link>
              </div>
            </li>

            {/* 3. TEXNOLOGİYA DROPDOWN */}
            <li className='relative group py-2'>
              <div className='flex items-center gap-1 hover:text-amber-800 transition-all duration-300'>
                Texnologiya <IoIosArrowDown className='group-hover:rotate-180 transition-transform duration-300' />
              </div>
              <div className='absolute top-full left-0 w-72 bg-white shadow-xl rounded-lg py-3 hidden group-hover:block animate-in fade-in slide-in-from-top-2 border border-gray-50'>
                <Link to='/Bladebattery' className='block px-5 py-2 hover:bg-gray-50 hover:text-amber-800 transition-colors text-sm uppercase'>BYD BLADE BATTERY</Link>
                <Link to='/bydsuperdom' className='block px-5 py-2 hover:bg-gray-50 hover:text-amber-800 transition-colors text-sm uppercase'>BYD SUPER DM</Link>
                <Link to='/Eplatform' className='block px-5 py-2 hover:bg-gray-50 hover:text-amber-800 transition-colors text-sm uppercase'>BYD E-PLATFORM 3.0</Link>
                <Link to='/Nev' className='block px-5 py-2 hover:bg-gray-50 hover:text-amber-800 transition-colors text-sm uppercase'>NEV NƏDİR?</Link>
              </div>
            </li>
            
            <button className='border-2 border-black bg-black text-white px-5 py-2 rounded-full font-bold transition-all duration-700 ease-in-out hover:bg-white hover:text-black active:scale-95'>
              <Link to='/test'>Test Sürüşü Et</Link>
            </button>
          </ul>
        </div>

        {/* MOBILE ICON */}
        <div onClick={handleNav} className='md:hidden cursor-pointer z-50 text-black'>
          {nav ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </div>

        {/* MOBILE MENU */}
        <div className={
          nav 
          ? 'fixed left-0 top-0 w-full h-screen bg-white flex flex-col items-center justify-start pt-24 gap-6 ease-in duration-500 z-40 overflow-y-auto' 
          : 'fixed left-[-100%] top-0 w-full h-screen ease-in duration-500'
        }>
          <ul className='flex flex-col items-center gap-5 text-lg font-bold w-full px-10'>
            <li className='text-gray-400 text-[10px] tracking-widest mt-4'>MODELLƏR</li>
            <li onClick={handleNav}><Link to='/Dolphin'>BYD DOLPHIN</Link></li>
            <li onClick={handleNav}><Link to='/Seal'>BYD SEAL</Link></li>
            <li onClick={handleNav}><Link to='/BydHan'>BYD HAN</Link></li>
            
            <hr className='w-1/2 border-gray-100' />
            
            <li className='text-gray-400 text-[10px] tracking-widest'>HAQQIMIZDA</li>
            <li onClick={handleNav}><Link to='/biz-kimik'>BİZ KİMİK?</Link></li>
            <li onClick={handleNav}><Link to='/yasil-dunya'>YAŞIL DÜNYA NAMİNƏ?</Link></li>
            
            <hr className='w-1/2 border-gray-100' />

            <li className='text-gray-400 text-[10px] tracking-widest'>TEXNOLOGİYA</li>
            <li onClick={handleNav}><Link to='/blade-battery'>BLADE BATTERY</Link></li>
            <li onClick={handleNav}><Link to='/super-dm'>SUPER DM</Link></li>
            <li onClick={handleNav}><Link to='/nev-nedir'>NEV NƏDİR?</Link></li>
            
            <button onClick={handleNav} className='mt-5 border-2 border-black bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black w-full text-center'>
              <Link to='/test'>Test Sürüşü Et</Link>
            </button>
          </ul>
        </div>

      </div>
    </header>
  )
}

export default Header