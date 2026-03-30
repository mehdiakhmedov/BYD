import React from 'react'
import blade from '../assets/bladebattery.png'

const Bladebattery = () => {
    return (
        <section className="bg-black text-white py-20 px-4">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              
                <div className="relative group">
                    <div className="absolute -inset-1 bg-blue-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <img
                        src={blade}
                        alt="BYD Blade Battery"
                        className="relative rounded-lg shadow-2xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                </div>

                <div className="space-y-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                            BYD Blade Battery
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Dünyanın ən təhlükəsiz batareya texnologiyası. İynə batırma testindən uğurla keçən tək batareya,
                            yüksək enerji sıxlığı və ultra uzun ömür vəd edir.
                        </p>
                    </div>

              
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-4 border border-gray-800 rounded-xl hover:border-blue-500 transition-colors">
                            <h4 className="text-blue-400 font-bold mb-1">Maksimum Təhlükəsizlik</h4>
                            <p className="text-sm text-gray-500">Yanğına və qısaqapanmaya qarşı ultra davamlılıq.</p>
                        </div>
                        <div className="p-4 border border-gray-800 rounded-xl hover:border-emerald-400 transition-colors">
                            <h4 className="text-emerald-400 font-bold mb-1">Daha çox məsafə</h4>
                            <p className="text-sm text-gray-500">Kompakt dizayn sayəsində 50% daha çox həcm səmərəliliyi.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Bladebattery