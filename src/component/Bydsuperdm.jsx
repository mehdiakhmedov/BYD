import React from 'react'
import dom from '../assets/superdom.png'

export default function Bydsuperdm() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">

               
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
                        BYD Super DM Texnologiyası
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Hibrid dünyasında yeni dövr: 1000+ km məsafə, ultra-aşağı yanacaq sərfi və elektrikli sürüş hissi.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12">

               \
                    <div className="w-full lg:w-1/2">
                        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src={dom}
                                alt="BYD Super DM System"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 space-y-6">

                      
                        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-blue-500 flex gap-4 items-start">
                            <div className="text-3xl">⛽</div>
                            <div>
                                <h3 className="font-bold text-xl mb-1">Ultra Aşağı Sərfiyyat</h3>
                                <p className="text-slate-500">100 km məsafəyə cəmi 3.8 litr yanacaq sərfi ilə büdcənizə qənaət edin.</p>
                            </div>
                        </div>

                        
                        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-emerald-500 flex gap-4 items-start">
                            <div className="text-3xl">🚀</div>
                            <div>
                                <h3 className="font-bold text-xl mb-1">1000km+ Menzil</h3>
                                <p className="text-slate-500">Tam dolu çən və batareya ilə dayanmadan uzun səfərlərin həzzini çıxarın.</p>
                            </div>
                        </div>

                        
                        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-orange-500 flex gap-4 items-start">
                            <div className="text-3xl">⚡</div>
                            <div>
                                <h3 className="font-bold text-xl mb-1">Elektrikli Performans</h3>
                                <p className="text-slate-500">0-100 km/saat sürətlənməni səssiz və çevik şəkildə hiss edin.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
