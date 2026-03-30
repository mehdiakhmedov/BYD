import React from 'react'
import bydgreen from '../assets/byd-green.png'

export default function Greenworld() {
  return (
    <section className="py-16 bg-green-50/30"> 
  <div className="container mx-auto px-4 text-center">
    
    <div className="mb-12">
      <h2 className="text-3xl md:text-5xl font-bold text-green-800 mb-4">
        Yaşıl Dünya Naminə
      </h2>
      <div className="h-1 w-24 bg-green-500 mx-auto rounded-full"></div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
   
      <div className="text-left">
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          BYD sadəcə bir avtomobil brendi deyil. Biz günəş enerjisindən enerjinin saxlanılmasına 
          və elektrikli nəqliyyata qədər tam bir <strong>ekosistem</strong> yaradırıq.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center text-gray-600">
            <span className="text-green-500 mr-2">✔</span> 1°C temperaturun azaldılması hədəfi
          </li>
          <li className="flex items-center text-gray-600">
            <span className="text-green-500 mr-2">✔</span> Dayanıqlı istehsalat texnologiyaları
          </li>
        </ul>
      </div>

   
      <div className="rounded-2xl overflow-hidden shadow-2xl">
    
        <img src={bydgreen} alt="Green Future BYD" className="w-full h-auto" />
      </div>
    </div>
    
  </div>
</section>
  )
}
