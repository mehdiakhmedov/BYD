import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='bg-[#0A3c5f] w-full mt-7 py-10'>

      <div className='container mx-auto px-6 text-white'>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start'>

          <div className='flex flex-col gap-3'>
            <h2 className='font-bold text-lg border-b border-white/20 pb-2 md:border-none'>MODELLƏR</h2>
            <ul className='flex flex-col gap-2 opacity-80 text-[16px]'>
              <li>
                <Link to="/Seal" className="hover:text-yellow-400 transition">BYD SEAL</Link>
              </li>
              <li>
                <Link to="/Dolphin" className="hover:text-yellow-400 transition">BYD DOLPHIN</Link>
              </li>
              <li>
                <Link to="/Bydhan" className="hover:text-yellow-400 transition">BYD HAN</Link>
              </li>
            </ul>
          </div>


          <div className='flex flex-col gap-3'>
            <h2 className='font-bold text-lg border-b border-white/20 pb-2 md:border-none'>HAQQIMIZDA</h2>
            <ul className='flex flex-col gap-2 opacity-80 text-[16px]'>
              <li>
                <Link to="/Aboutus" className='hover:text-yellow-400 cursor-pointer transition'>BİZ KİMİK?</Link>
                </li>
              <li className='hover:text-yellow-400 cursor-pointer transition'>YAŞIL DÜNYA NAMİNƏ</li>
            </ul>
          </div>


          <div className='flex flex-col gap-3'>
            <h2 className='font-bold text-lg border-b border-white/20 pb-2 md:border-none'>TEXNOLOGİYA</h2>
            <ul className='flex flex-col gap-2 opacity-80 text-[16px]'>
              <li className='hover:text-yellow-400 cursor-pointer transition'>BYD BLADE BATAREYASI</li>
              <li className='hover:text-yellow-400 cursor-pointer transition'>BYD SUPER DM</li>
              <li className='hover:text-yellow-400 cursor-pointer transition'>BYD e-PLATFORMA 3.0</li>
              <li className='hover:text-yellow-400 cursor-pointer transition'>NEV NƏDİR?</li>
            </ul>
          </div>

          <div className='flex flex-col gap-4'>
            <h2 className='font-bold text-lg'>BİZİ İZLƏYİN</h2>
            <div className='flex gap-4 text-2xl'>
              <FaFacebook className='hover:text-blue-500 transition cursor-pointer' />
              <BsTwitterX className='hover:text-gray-400 transition cursor-pointer' />
              <AiFillInstagram className='hover:text-pink-500 transition cursor-pointer' />
              <FaTiktok className='hover:text-black transition cursor-pointer' />
              <FaYoutube className='hover:text-red-600 transition cursor-pointer' />
            </div>
          </div>

        </div>

        <div className='mt-12 pt-6 border-t border-white/10 text-center text-sm opacity-50'>
          © {new Date().getFullYear()} BYD Azerbaijan. Bütün hüquqlar qorunur.
        </div>
      </div>
    </footer>
  )
}

export default Footer