import React from 'react';

export default function VirtualCard() {
    return (
        <div className="relative w-full aspect-[1.586/1] rounded-xl shadow-2xl overflow-hidden 
        bg-gradient-to-br from-[#137fec] to-[#052e56] text-white p-6 md:p-8 flex flex-col justify-between 
        group transform transition-transform hover:scale-[1.01]">
            {/* Decorative bg elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400 opacity-10 rounded-full -ml-10 -mb-10 blur-xl"></div>
            {/* Card Top */}
            <div className="flex justify-between items-start relative z-10">
                <img
                    alt="EMV Chip"
                    className="h-10 w-auto object-contain"
                    data-alt="Smart card EMV chip graphic"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnv9ZoCn7wTGdcNg2A-TbuKXPlLOiuD_Czpqh_2PMf0Gr1Ih4jMRCtFmmfbMh_sqHPzuoq8UR3bcnDWrokOeWdKmvnG39Olu8air-6Cww1pneXNacSc7f37FmaIepg5AF4V48Xy3VygjgQPNPRojmZBQpD5MXp5mGuLD0aeyFMhElbDJF_l-75NIXgezSWAD3Ah4Ve28aC4OqFi0wrbTADne1ORrDbDFGPNfeIU1xPCHB_vb__8hx--6mdwTcQrW8zYg1PLnSFqA"
                />
                <span className="material-symbols-outlined text-white/80 text-3xl transform rotate-90">wifi</span>
            </div>
            {/* Card Number */}
            <div className="relative z-10 mt-2">
                <div className="flex items-center gap-3 md:gap-4 font-mono text-xl md:text-2xl tracking-widest text-white/90 drop-shadow-md">
                    <span>4242</span>
                    <span>••••</span>
                    <span>••••</span>
                    <span>4242</span>
                </div>
            </div>
            {/* Card Bottom */}
            <div className="flex justify-between items-end relative z-10 mt-4">
                <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-wider text-white/70 font-semibold">Card Holder</span>
                    <span className="text-sm font-medium tracking-wide uppercase">Moaaz Hamdy</span>
                </div>
                <div className="flex flex-col gap-1 items-end">
                    <span className="text-[10px] uppercase tracking-wider text-white/70 font-semibold">Expires</span>
                    <span className="text-sm font-medium tracking-wide">12/28</span>
                </div>
                {/* Brand Logo */}
                <div className="ml-4 h-8 w-12 bg-white/20 rounded flex items-center justify-center backdrop-blur-sm">
                    <div className="w-4 h-4 rounded-full bg-red-500/80 -mr-2"></div>
                    <div className="w-4 h-4 rounded-full bg-yellow-500/80"></div>
                </div>
            </div>
        </div>
    );
}
