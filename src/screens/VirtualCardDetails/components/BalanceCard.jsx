import React from 'react';

export default function BalanceCard() {
    return (
        <div className="bg-white dark:bg-[#1a2634] rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <div>
                <p className="text-text-secondary dark:text-gray-400 text-sm font-medium mb-1">Available USD Balance</p>
                <p className="text-text-main dark:text-white text-3xl font-bold tracking-tight">$100.00 <span className="text-lg text-text-secondary font-normal">USD</span></p>
            </div>
            <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                <span className="material-symbols-outlined">trending_up</span>
            </div>
        </div>
    );
}
