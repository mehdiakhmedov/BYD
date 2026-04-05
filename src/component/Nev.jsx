import React from 'react'

export default function () {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">

               
                <div className="max-w-3xl mb-16">
                    <h2 className="text-5xl font-extrabold text-slate-900 mb-6">
                        NEV Nədir? <span className="text-blue-600">Gələcəyin Enerjisi.</span>
                    </h2> 
                    <p className="text-xl text-slate-600 leading-relaxed">
                        NEV (New Energy Vehicles) – ənənəvi yanacaqdan asılılığı minimuma endirən və ətraf mühiti qoruyan
                        yeni nəsil nəqliyyat vasitələrinin ümumi adıdır.
                    </p>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                  
                    <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
                        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 text-white text-3xl group-hover:rotate-12 transition-transform">
                            ⚡
                        </div>
                        <h4 className="text-2xl font-bold mb-3">BEV</h4>
                        <p className="text-slate-500 mb-4 text-sm font-medium">Battery Electric Vehicle</p>
                        <p className="text-slate-600">
                            Heç bir yanacaqdan istifadə etməyən, tamamilə batareya ilə çalışan sıfır emissiyalı avtomobillər.
                            (Məsələn: BYD Dolphin, BYD Seal)
                        </p>
                    </div>

                   
                    <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
                        <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 text-white text-3xl group-hover:rotate-12 transition-transform">
                            🔄
                        </div>
                        <h4 className="text-2xl font-bold mb-3">PHEV</h4>
                        <p className="text-slate-500 mb-4 text-sm font-medium">Plug-in Hybrid Electric Vehicle</p>
                        <p className="text-slate-600">
                            Həm elektrik, həm də benzin mühərrikinin vəhdəti. Super DM texnologiyamız məhz bu kateqoriyaya aiddir.
                        </p>
                    </div>

                  
                    <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
                        <div className="w-16 h-16 bg-cyan-400 rounded-2xl flex items-center justify-center mb-6 text-white text-3xl group-hover:rotate-12 transition-transform">
                            💧
                        </div>
                        <h4 className="text-2xl font-bold mb-3">FCEV</h4>
                        <p className="text-slate-500 mb-4 text-sm font-medium">Fuel Cell Electric Vehicle</p>
                        <p className="text-slate-600">
                            Hidrogen yanacaq elementləri ilə çalışan, tullantı olaraq yalnız su buxarı ixrac edən texnologiya.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}
