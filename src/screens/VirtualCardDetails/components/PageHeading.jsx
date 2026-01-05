import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHeading() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-green-500 text-4xl">check_circle</span>
                    <h1 className="text-text-main dark:text-white text-3xl md:text-4xl font-black tracking-tighter">Payment Successful!</h1>
                </div>
                <p className="text-text-secondary dark:text-gray-400 text-base md:text-lg pl-1">
                    Your virtual card has been generated and is ready for use.
                </p>
            </div>
            <div className="flex gap-3">
                <button className="flex items-center justify-center gap-2 rounded-full h-10 px-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-main dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    <span>Receipt</span>
                </button>
                <Link to="/" className="flex items-center justify-center gap-2 rounded-full h-10 px-6 bg-primary text-white text-sm font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-blue-500/30">
                    <span>Go to Wallet</span>
                </Link>
            </div>
        </div>
    );
}
