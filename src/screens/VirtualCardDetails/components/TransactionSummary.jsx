import React from 'react';

export default function TransactionSummary() {
    return (
        <div className="bg-gray-50 dark:bg-[#15202b] rounded-xl p-5 border border-gray-100 dark:border-gray-800">
            <h3 className="text-text-main dark:text-white text-sm font-bold uppercase tracking-wider mb-4">Transaction Details</h3>
            <div className="space-y-3">
                <div className="flex justify-between text-sm">
                    <span className="text-text-secondary dark:text-gray-400">Amount Paid</span>
                    <span className="font-medium text-text-main dark:text-white">5,100.00 EGP</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-text-secondary dark:text-gray-400">Exchange Rate</span>
                    <span className="font-medium text-text-main dark:text-white">1 USD = 51.00 EGP</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-text-secondary dark:text-gray-400">Fees</span>
                    <span className="font-medium text-green-600 dark:text-green-400">0.00 EGP (Free)</span>
                </div>
                <div className="h-px bg-gray-200 dark:bg-gray-700 my-2"></div>
                <div className="flex justify-between text-sm font-bold">
                    <span className="text-text-main dark:text-white">Total Charged</span>
                    <span className="text-text-main dark:text-white">5,100.00 EGP</span>
                </div>
            </div>
        </div>
    );
}
