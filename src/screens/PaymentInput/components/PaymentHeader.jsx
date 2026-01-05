import React from 'react';
import { Link } from 'react-router-dom';

export default function PaymentHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 
        bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
            <div className="px-4 md:px-10 py-4 flex items-center justify-between max-w-7xl mx-auto">
                {/* Logo Section */}
                <div className="flex items-center gap-4">
                    <div className="size-8 text-primary flex items-center justify-center bg-primary/10 rounded-full">
                        <span className="material-symbols-outlined text-[20px]">credit_card</span>
                    </div>
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold tracking-tight">StripeCard</h2>
                </div>
                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors">Dashboard</Link>
                    <Link to="/details" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors">Cards</Link>
                    <a className="text-slate-900 dark:text-white text-sm font-semibold" href="#">Add Funds</a>
                    <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Profile</a>
                </nav>
                {/* User Profile */}
                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex flex-col items-end">
                        <span className="text-xs font-semibold text-slate-900 dark:text-white">Alex Morgan</span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400">Personal Account</span>
                    </div>
                    <div
                        className="size-10 rounded-full bg-cover bg-center ring-2 ring-slate-100 dark:ring-slate-800"
                        data-alt="User profile picture of a smiling man"
                        style={{
                            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJb9vyxwANe7s7cponQdEDxIr_5t3kpDo6YtKymQmve77hPrPjjB3MmOMKQlQusGqBp7djW2XSImu5sKQzVTW1sjT9wCUJ4cJVBCGWdR0yr37TjDZ92sJrsNsSjAeXyQRGlrtSnAfhr3ZH-WGTiiEFdmumhMzPKpeg-2ht5HaMIsA8S2Oh_X2eFObL3Pl43loOgz1F-1zv2t7fc1N5pwvzFheEztTrCi2Fkb7op3SyRM0J2dFilJ2og7rcFVb6dLIOTQMJ5QA-zw')"
                        }}
                    ></div>
                </div>
            </div>
        </header>
    );
}
