import React from 'react';
import { Link } from 'react-router-dom';

export default function TopNavigation() {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#f0f2f4] dark:border-[#22303e] bg-white/90 dark:bg-background-dark/90 px-6 py-4 backdrop-blur-md lg:px-10">
            <div className="flex items-center gap-3">
                <div className="text-primary">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
                    </svg>
                </div>
                <h2 className="text-lg font-bold leading-tight tracking-tight text-[#111418] dark:text-white">Stripe Virtual Card</h2>
            </div>
            <div className="hidden sm:block">
                <p className="text-sm font-medium text-[#617589] dark:text-gray-400">Already have an account? <Link className="font-bold text-primary hover:underline" to="/login">Log In</Link></p>
            </div>
        </header>
    );
}
