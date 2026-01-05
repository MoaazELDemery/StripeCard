import React from 'react';

export default function CardDetailsList() {
    return (
        <div className="bg-white dark:bg-[#1a2634] rounded-xl border border-[#dbe0e6] dark:border-gray-700 overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/50">
                <h3 className="text-text-main dark:text-white font-bold text-lg">Card Details</h3>
                <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wide">Active</span>
            </div>
            <div className="p-6 flex flex-col gap-6">
                {/* Cardholder */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 group">
                    <div className="flex flex-col">
                        <span className="text-xs text-text-secondary dark:text-gray-400 font-medium uppercase tracking-wide mb-1">Cardholder Name</span>
                        <span className="text-text-main dark:text-white font-medium text-lg">Moaaz Hamdy</span>
                    </div>
                    <button className="text-primary hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100" title="Copy Name">
                        <span className="material-symbols-outlined text-[20px]">content_copy</span>
                    </button>
                </div>
                <div className="h-px bg-gray-100 dark:bg-gray-700 w-full"></div>
                {/* Card Number */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 group">
                    <div className="flex flex-col w-full">
                        <span className="text-xs text-text-secondary dark:text-gray-400 font-medium uppercase tracking-wide mb-1">Card Number</span>
                        <div className="flex items-center gap-4">
                            <span className="text-text-main dark:text-white font-mono font-medium text-lg tracking-wider">4242 4242 4242 4242</span>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 text-primary hover:bg-blue-50 dark:hover:bg-blue-900/20 px-3 py-1.5 rounded-full transition-colors bg-blue-50/50 dark:bg-blue-900/10">
                        <span className="material-symbols-outlined text-[18px]">content_copy</span>
                        <span className="text-sm font-semibold">Copy</span>
                    </button>
                </div>
                <div className="h-px bg-gray-100 dark:bg-gray-700 w-full"></div>
                {/* Expiry & CVV Row */}
                <div className="flex flex-col sm:flex-row gap-8">
                    {/* Expiry */}
                    <div className="flex-1 flex justify-between items-center group">
                        <div className="flex flex-col">
                            <span className="text-xs text-text-secondary dark:text-gray-400 font-medium uppercase tracking-wide mb-1">Expiry Date</span>
                            <span className="text-text-main dark:text-white font-mono font-medium text-lg">12 / 28</span>
                        </div>
                    </div>
                    <div className="w-px bg-gray-100 dark:bg-gray-700 hidden sm:block"></div>
                    {/* CVV */}
                    <div className="flex-1 flex justify-between items-center group">
                        <div className="flex flex-col">
                            <span className="text-xs text-text-secondary dark:text-gray-400 font-medium uppercase tracking-wide mb-1">CVV / CVC</span>
                            <div className="flex items-center gap-2">
                                <span className="text-text-main dark:text-white font-mono font-medium text-lg tracking-widest">123</span>
                                <span className="text-text-secondary dark:text-gray-500 text-xs">(Visible)</span>
                            </div>
                        </div>
                        <button className="text-primary hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-full transition-colors" title="Copy CVV">
                            <span className="material-symbols-outlined text-[20px]">content_copy</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* Footer of Details Card */}
            <div className="bg-gray-50 dark:bg-[#15202b] px-6 py-3 border-t border-gray-100 dark:border-gray-700 flex items-center gap-2 text-text-secondary dark:text-gray-400">
                <span className="material-symbols-outlined text-sm">shield</span>
                <span className="text-xs font-medium">PCI-DSS Compliant • Secured by Stripe</span>
            </div>
        </div>
    );
}
