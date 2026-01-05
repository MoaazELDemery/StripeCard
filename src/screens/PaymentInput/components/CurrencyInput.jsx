import React from 'react';

export default function CurrencyInput() {
    return (
        <div className="space-y-2 group">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 ml-1" htmlFor="amount-egp">You Pay</label>
            <div className="relative flex items-center">
                <input
                    className="block w-full rounded-xl border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 p-4 pr-32 text-2xl font-semibold text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:ring-primary dark:focus:border-primary transition-all shadow-sm h-16"
                    id="amount-egp"
                    placeholder="0.00"
                    type="number"
                    defaultValue="1000"
                />
                <div className="absolute right-2 top-2 bottom-2 bg-white dark:bg-slate-800 rounded-lg border 
                border-slate-200 dark:border-slate-700 flex items-center px-3 gap-2 shadow-sm">
                    <span className="text-xl">🇪🇬</span>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">EGP</span>
                    <span className="material-symbols-outlined text-slate-400 text-[18px]">expand_more</span>
                </div>
            </div>
        </div>
    );
}
