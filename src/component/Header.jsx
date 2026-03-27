import React, { useState } from 'react' 
import bydd from '../assets/byd-svg.png'
import { Link } from 'react-router-dom'
import { HiMenuAlt3, HiX } from 'react-icons/hi' 

const Header = () => {
  
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <header className='w-full sticky top-0 z-[100] bg-white/80 backdrop-blur-md shadow-sm font-montserrat transition-all duration-300'>
      <div className='max-w-[1200px] mx-auto px-4 py-6 flex justify-between items-center'>
        
       
        <div className='w-24 cursor-pointer z-50'>
          <Link to='/'><img src={bydd} alt="BYD Logo" /></Link>
        </div>

       
        <div className='hidden md:flex items-center'>
          <ul className='flex items-center text-black gap-8 font-bold cursor-pointer'>
            <li className='hover:text-amber-800 transition-all duration-300'><Link to='/'>Modellər</Link></li>
            <li className='hover:text-amber-800 transition-all duration-300'><Link to='/contact'>Haqqımızda</Link></li>
            <li className='hover:text-amber-800 transition-all duration-300'><Link to='/about'>Texnologiya</Link></li>
            <button className='border-2 border-black bg-black text-white px-5 py-2 rounded-full font-bold transition-all duration-700 ease-in-out hover:bg-white hover:text-black active:scale-95'>
              <Link to='/test'>Test Sürüşü Et</Link>
            </button>
          </ul>
        </div>

       
        <div onClick={handleNav} className='md:hidden cursor-pointer z-50 text-black'>
          {nav ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </div>

      
        <div className={
          nav 
          ? 'fixed left-0 top-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-10 ease-in duration-500 z-40' 
          : 'fixed left-[-100%] top-0 w-full h-screen ease-in duration-500'
        }>
          <ul className='flex flex-col items-center gap-8 text-xl font-bold'>
            <li onClick={handleNav}><Link to='/'>Modellər</Link></li>
            <li onClick={handleNav}><Link to='/contact'>Haqqımızda</Link></li>
            <li onClick={handleNav}><Link to='/about'>Texnologiya</Link></li>
            <button onClick={handleNav} className='border-2 border-black bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black'>
              <Link to='/test'>Test Sürüşü Et</Link>
            </button>
          </ul>
        </div>

      </div>
    </header>
  )
}

export default Header