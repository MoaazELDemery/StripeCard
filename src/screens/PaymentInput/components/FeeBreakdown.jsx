import React from 'react';

export default function FeeBreakdown() {
    return (
        <div className="bg-background-light dark:bg-slate-900/50 rounded-xl p-4 border border-slate-100 dark:border-slate-700/50 space-y-3">
            <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <span>Exchange Rate</span>
                    <span className="material-symbols-outlined text-[14px] cursor-help">info</span>
                </div>
                <span className="font-medium text-slate-900 dark:text-slate-200">1 EGP = 0.0192 USD</span>
            </div>
            <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <span>Service Fee (2%)</span>
                </div>
                <span className="font-medium text-slate-900 dark:text-slate-200">20.00 EGP</span>
            </div>
            <div className="h-px w-full bg-slate-200 dark:bg-slate-700 my-1"></div>
            <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Total Charge</span>
                <span className="text-base font-bold text-slate-900 dark:text-white">1020.00 EGP</span>
            </div>
        </div>
    );
}
