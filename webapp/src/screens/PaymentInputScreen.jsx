import React from 'react';
import { Link } from 'react-router-dom';

export default function PaymentInputScreen() {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-slate-900 dark:text-white transition-colors duration-200">
            {/* Top Navigation */}
            <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
                <div className="px-4 md:px-10 py-4 flex items-center justify-between max-w-7xl mx-auto">
                    {/* Logo Section */}
                    <div className="flex items-center gap-4">
                        <div className="size-8 text-primary flex items-center justify-center bg-primary/10 rounded-full">
                            <span className="material-symbols-outlined text-[20px]">credit_card</span>
                        </div>
                        <h2 className="text-slate-900 dark:text-white text-lg font-bold tracking-tight">VirtualCard</h2>
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
                        <div className="size-10 rounded-full bg-cover bg-center ring-2 ring-slate-100 dark:ring-slate-800" data-alt="User profile picture of a smiling man" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJb9vyxwANe7s7cponQdEDxIr_5t3kpDo6YtKymQmve77hPrPjjB3MmOMKQlQusGqBp7djW2XSImu5sKQzVTW1sjT9wCUJ4cJVBCGWdR0yr37TjDZ92sJrsNsSjAeXyQRGlrtSnAfhr3ZH-WGTiiEFdmumhMzPKpeg-2ht5HaMIsA8S2Oh_X2eFObL3Pl43loOgz1F-1zv2t7fc1N5pwvzFheEztTrCi2Fkb7op3SyRM0J2dFilJ2og7rcFVb6dLIOTQMJ5QA-zw')" }}></div>
                    </div>
                </div>
            </header>
            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center p-4 md:p-8">
                <div className="w-full max-w-lg">
                    {/* Central Card */}
                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
                        {/* Card Header */}
                        <div className="pt-8 pb-4 px-8 text-center">
                            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">Top up your Virtual Card</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">Pay in EGP, spend in USD anywhere online.</p>
                        </div>
                        <div className="p-6 md:p-8 space-y-6">
                            {/* Input EGP */}
                            <div className="space-y-2 group">
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 ml-1" htmlFor="amount-egp">You Pay</label>
                                <div className="relative flex items-center">
                                    <input className="block w-full rounded-xl border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 p-4 pr-32 text-2xl font-semibold text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:ring-primary dark:focus:border-primary transition-all shadow-sm h-16" id="amount-egp" placeholder="0.00" type="number" defaultValue="1000" />
                                    <div className="absolute right-2 top-2 bottom-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center px-3 gap-2 shadow-sm">
                                        <span className="text-xl">🇪🇬</span>
                                        <span className="text-sm font-bold text-slate-700 dark:text-slate-200">EGP</span>
                                        <span className="material-symbols-outlined text-slate-400 text-[18px]">expand_more</span>
                                    </div>
                                </div>
                            </div>
                            {/* Exchange Rate Indicator */}
                            <div className="relative flex justify-center py-2">
                                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-slate-100 dark:border-slate-700"></div>
                                </div>
                                <div className="relative flex flex-col items-center">
                                    <div className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-300 rounded-full px-4 py-1.5 flex items-center gap-2 border border-primary/20 shadow-sm z-10">
                                        <span className="material-symbols-outlined text-[16px]">currency_exchange</span>
                                        <span className="text-xs font-semibold tracking-wide">1 USD ≈ 52 EGP</span>
                                    </div>
                                    <div className="bg-white dark:bg-slate-800 p-1 rounded-full absolute -bottom-6 text-slate-400 dark:text-slate-500 z-10">
                                        <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
                                    </div>
                                </div>
                            </div>
                            {/* Output USD */}
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
                            {/* Fee Breakdown Accordion-style */}
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
                            {/* CTA Button */}
                            <Link to="/details" className="w-full bg-primary hover:bg-blue-600 active:bg-blue-700 text-white font-bold text-lg py-4 rounded-full shadow-lg shadow-primary/25 transition-all transform active:scale-[0.98] flex items-center justify-center gap-3">
                                <span>Proceed to Payment</span>
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                            {/* Trust Footer */}
                            <div className="flex items-center justify-center gap-2 text-slate-400 dark:text-slate-500 text-xs mt-2">
                                <span className="material-symbols-outlined text-[14px]">lock</span>
                                <span>Payments secured by <strong>Stripe</strong></span>
                            </div>
                        </div>
                    </div>
                    {/* Additional Help/Links */}
                    <div className="mt-6 text-center space-x-4">
                        <a className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 transition-colors" href="#">Help Center</a>
                        <span className="text-slate-300 dark:text-slate-600">•</span>
                        <a className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 transition-colors" href="#">Fees &amp; Limits</a>
                    </div>
                </div>
            </main>
        </div>
    );
}
