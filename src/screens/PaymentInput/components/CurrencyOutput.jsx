import React from 'react';

export default function CurrencyOutput() {
    return (
        <div className="space-y-2 pt-2">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 ml-1" htmlFor="amount-usd">You Get (Estimated)</label>
            <div className="relative flex items-center">
                <input className="block w-full rounded-xl border-slate-200 dark:border-slate-600 bg-slate-100 dark:bg-slate-900/80 p-4 pr-32 text-2xl font-semibold text-slate-500 dark:text-slate-400 cursor-not-allowed shadow-inner h-16 select-none" id="amount-usd" placeholder="0.00" readOnly type="text" value="19.23" />
                <div className="absolute right-2 top-2 bottom-2 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center px-3 gap-2 shadow-sm opacity-80">
                    <span className="text-xl">🇺🇸</span>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">USD</span>
                </div>
            </div>
        </div>
    );
}
