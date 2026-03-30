import React from 'react'
import eplatform from '../assets/e-platform.png'

export default function () {
    return (
        <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
            <div className="container mx-auto px-4">

             
                <div className="flex flex-col mb-16 border-l-4 border-blue-600 pl-6">
                    <h2 className="text-sm uppercase tracking-[0.3em] text-blue-500 mb-2">
                        Yeni Nəsil Arxitektura
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-black">
                        e-PLATFORM 3.0
                    </h3>
                </div>

                <div className="flex flex-col xl:flex-row gap-16 items-center">

               
                    <div className="w-full xl:w-1/2 order-2 xl:order-1 grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div className="bg-[#111] p-8 rounded-tr-[50px] border border-gray-900">
                            <span className="text-blue-500 text-3xl font-bold">01</span>
                            <h4 className="text-xl font-bold mt-4 mb-2">8-in-1 Güc Aqreqatı</h4>
                            <p className="text-gray-500 text-sm">Dünyanın ilk kütləvi istehsal olunan 8-i 1-də elektrik ötürücü sistemi.</p>
                        </div>

                        <div className="bg-[#111] p-8 rounded-bl-[50px] border border-gray-900">
                            <span className="text-blue-500 text-3xl font-bold">02</span>
                            <h4 className="text-xl font-bold mt-4 mb-2">Yüksək Gərginlik</h4>
                            <p className="text-gray-500 text-sm">800V sürətli şarj texnologiyası ilə cəmi 5 dəqiqəyə 150 km məsafə.</p>
                        </div>

                        <div className="bg-[#111] p-8 rounded-tr-[50px] border border-gray-900">
                            <span className="text-blue-500 text-3xl font-bold">03</span>
                            <h4 className="text-xl font-bold mt-4 mb-2">Soyuğa Davamlılıq</h4>
                            <p className="text-gray-500 text-sm">İstilik nasosu sistemi ilə qış aylarında məsafəni 20% daha çox qoruyur.</p>
                        </div>

                        <div className="bg-[#111] p-8 rounded-bl-[50px] border border-gray-900">
                            <span className="text-blue-500 text-3xl font-bold">04</span>
                            <h4 className="text-xl font-bold mt-4 mb-2">Ağıllı İdarəetmə</h4>
                            <p className="text-gray-500 text-sm">Avtonom sürüş və təhlükəsizlik üçün inteqrasiya olunmuş əməliyyat sistemi.</p>
                        </div>

                    </div>

                 
                    <div className="w-full xl:w-1/2 order-1 xl:order-2">
                        <div className="relative">
                           
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
                            <img
                                src={eplatform}
                                alt="BYD e-Platform 3.0 Chassis"
                                className="relative z-10 w-full animate-pulse-slow shadow-2xl"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
