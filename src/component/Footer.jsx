import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className='bg-[#0A3c5f] w-full h-50 mt-10'>
        <div className='container mx-auto text-white text-[20px] leading-relaxed cursor-pointer flex gap-45 pt-5'>


          <div>
            <h2 className='font-bold'>MODELLƏR</h2>
            <ul>
              <li>BYD SEAL</li>
              <li>BYD DOLPHİN</li>
              <li>BYD HAN</li>
            </ul>
          </div>


          <div>
            <h2 className='font-bold'>HAQQIMIZDA</h2>
            <ul>
              <li>BİZ KİMİK?</li>
              <li>YAŞIL DÜNYA NAMİNƏ</li>
            </ul>
          </div>
          <div>
            <h2 className='font-bold'>TEXNOLOGIYA</h2>
            <ul>
              <li>BYD BLADE BATAREYASI</li>
              <li>BYD SUPER DM</li>
              <li>BYD e-PLATFORMA 3.0</li>
              <li>NEV NƏDİR?</li>
            </ul>
          </div>
          <div className='flex mt-18 gap-2'>
            <FaFacebook className='hover:text-gray-500 transition duration-350 text-gray opacity-20'/>
            <BsTwitterX className='hover:text-gray-500 transition duration-350 text-gray opacity-20'/>
            <AiFillInstagram className='hover:text-gray-500 transition duration-350 text-gray opacity-20'/>
            <FaTiktok className='hover:text-gray-500 transition duration-350 text-gray opacity-20'/>
            <FaYoutube className='hover:text-gray-500 transition duration-350 text-gray opacity-20'/>

           
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Footer