import React from 'react';

export default function ExchangeRateIndicator() {
    return (
        <div className="relative flex justify-center py-2">
            <div aria-hidden="true" className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100 dark:border-slate-700"></div>
            </div>
            <div className="relative flex flex-col items-center">
                <div className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-300 rounded-full px-4 py-1.5 flex items-center gap-2 border border-primary/20 shadow-sm z-10">
                    <span className="material-symbols-outlined text-[16px]">currency_exchange</span>
                    <span className="text-xs font-semibold tracking-wide">1 USD ≈ 52 EGP</span>
                </div>
                <div className="bg-white dark:bg-slate-800 p-1 rounded-full absolute -bottom-6 text-slate-400 dark:text-slate-500 z-10">
                    <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
                </div>
            </div>
        </div>
    );
}
