import React from 'react';
import { Link } from 'react-router-dom';

export default function TopNavBar() {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid 
        border-b-[#e5e7eb] dark:border-b-[#222e3b] bg-white/80 dark:bg-[#101922]/90 backdrop-blur-md px-6 py-4 lg:px-20">
            <div className="flex items-center gap-4 text-[#111418] dark:text-white">
                <div className="flex items-center justify-center rounded-full bg-primary/10 p-2">
                    <span className="material-symbols-outlined text-primary text-2xl">credit_card</span>
                </div>
                <h2 className="text-lg font-bold leading-tight tracking-tight">StripeCard</h2>
            </div>
            <div className="hidden lg:flex flex-1 justify-center gap-8">
                <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Features</a>
                <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Pricing</a>
                <a className="text-sm font-medium hover:text-primary transition-colors" href="#">FAQ</a>
            </div>
            <div className="flex items-center gap-4">
                <Link className="hidden sm:block text-sm font-medium hover:text-primary transition-colors" to="/login">Login</Link>
                <Link
                    to="/signup"
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 
                    bg-primary hover:bg-blue-600 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                    <span className="truncate">Get Started</span>
                </Link>
            </div>
        </header>
    );
}
