import React from 'react';
import { Link } from 'react-router-dom';

export default function VirtualCardDetailsScreen() {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-text-main dark:text-white transition-colors duration-200">
            {/* Top Navigation */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5e7eb] dark:border-gray-800 bg-white dark:bg-[#1a2634] px-10 py-4 sticky top-0 z-50">
                <div className="flex items-center gap-4">
                    <div className="size-8 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-3xl">credit_card</span>
                    </div>
                    <h2 className="text-text-main dark:text-white text-lg font-bold leading-tight tracking-tight">Stripe Virtual Cards</h2>
                </div>
                <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
                    <nav className="flex items-center gap-9">
                        <Link to="/" className="text-text-main dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors">Dashboard</Link>
                        <a className="text-text-main dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" href="#">Transactions</a>
                        <a className="text-text-main dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" href="#">Settings</a>
                    </nav>
                    <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden" data-alt="User profile avatar" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD35w5fwINqXsbDtet9Op1mkfL7ZYkZkA83e0BQy_b6LMw8qbFu541xbHOGXePjf-Mnpv19Mr7yYwMCphLML-7_dat2GdcZd1yRZ8oGWAg5-PxI_1nPVPlBiZxmZ6MwiZMOB9ClAQOZiH4PhKmuQXbdpgiRyAT24godPB2fPofCG_wVjo4oi_lVn6aTKt3Yib3UwoOLM9rSvtFrtrFxwT1OHaJQsfM7pv4TQ4Lsf8Jay1ElbjCV5t1ouM_y0itCeIyp54Ex6zRNhw')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                        <Link to="/login" className="flex items-center justify-center overflow-hidden rounded-full h-9 px-5 bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-colors">
                            Log Out
                        </Link>
                    </div>
                </div>
                {/* Mobile Menu Icon */}
                <div className="md:hidden text-text-main dark:text-white">
                    <span className="material-symbols-outlined">menu</span>
                </div>
            </header>
            {/* Main Content */}
            <main className="flex-grow px-4 md:px-10 py-8 md:py-12 flex justify-center">
                <div className="w-full max-w-[1024px] flex flex-col gap-8">
                    {/* Page Heading & Success Message */}
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
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left Column: Virtual Card Visualization */}
                        <div className="lg:col-span-5 flex flex-col gap-6">
                            {/* The Card */}
                            <div className="relative w-full aspect-[1.586/1] rounded-xl shadow-2xl overflow-hidden bg-gradient-to-br from-[#137fec] to-[#052e56] text-white p-6 md:p-8 flex flex-col justify-between group transform transition-transform hover:scale-[1.01]">
                                {/* Decorative bg elements */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400 opacity-10 rounded-full -ml-10 -mb-10 blur-xl"></div>
                                {/* Card Top */}
                                <div className="flex justify-between items-start relative z-10">
                                    <img alt="EMV Chip" className="h-10 w-auto object-contain" data-alt="Smart card EMV chip graphic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnv9ZoCn7wTGdcNg2A-TbuKXPlLOiuD_Czpqh_2PMf0Gr1Ih4jMRCtFmmfbMh_sqHPzuoq8UR3bcnDWrokOeWdKmvnG39Olu8air-6Cww1pneXNacSc7f37FmaIepg5AF4V48Xy3VygjgQPNPRojmZBQpD5MXp5mGuLD0aeyFMhElbDJF_l-75NIXgezSWAD3Ah4Ve28aC4OqFi0wrbTADne1ORrDbDFGPNfeIU1xPCHB_vb__8hx--6mdwTcQrW8zYg1PLnSFqA" />
                                    <span className="material-symbols-outlined text-white/80 text-3xl transform rotate-90">wifi</span>
                                </div>
                                {/* Card Number */}
                                <div className="relative z-10 mt-2">
                                    <div className="flex items-center gap-3 md:gap-4 font-mono text-xl md:text-2xl tracking-widest text-white/90 drop-shadow-md">
                                        <span>4242</span>
                                        <span>••••</span>
                                        <span>••••</span>
                                        <span>4242</span>
                                    </div>
                                </div>
                                {/* Card Bottom */}
                                <div className="flex justify-between items-end relative z-10 mt-4">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] uppercase tracking-wider text-white/70 font-semibold">Card Holder</span>
                                        <span className="text-sm font-medium tracking-wide uppercase">Moaaz Hamdy</span>
                                    </div>
                                    <div className="flex flex-col gap-1 items-end">
                                        <span className="text-[10px] uppercase tracking-wider text-white/70 font-semibold">Expires</span>
                                        <span className="text-sm font-medium tracking-wide">12/28</span>
                                    </div>
                                    {/* Brand Logo */}
                                    <div className="ml-4 h-8 w-12 bg-white/20 rounded flex items-center justify-center backdrop-blur-sm">
                                        <div className="w-4 h-4 rounded-full bg-red-500/80 -mr-2"></div>
                                        <div className="w-4 h-4 rounded-full bg-yellow-500/80"></div>
                                    </div>
                                </div>
                            </div>
                            {/* Balance Card */}
                            <div className="bg-white dark:bg-[#1a2634] rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-between">
                                <div>
                                    <p className="text-text-secondary dark:text-gray-400 text-sm font-medium mb-1">Available USD Balance</p>
                                    <p className="text-text-main dark:text-white text-3xl font-bold tracking-tight">$100.00 <span className="text-lg text-text-secondary font-normal">USD</span></p>
                                </div>
                                <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                    <span className="material-symbols-outlined">trending_up</span>
                                </div>
                            </div>
                            {/* Transaction Summary Small */}
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
                        </div>
                        {/* Right Column: Details & Controls */}
                        <div className="lg:col-span-7 flex flex-col gap-6">
                            {/* Security Control Panel */}
                            <div className="rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a2634] p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
                                        <span className="material-symbols-outlined">lock</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-text-main dark:text-white text-base font-bold leading-tight">Card Security</p>
                                        <p className="text-text-secondary dark:text-gray-400 text-sm font-normal">Details are masked. Toggle to reveal sensitive info.</p>
                                    </div>
                                </div>
                                <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-gray-200 dark:bg-gray-700 p-0.5 has-[:checked]:justify-end has-[:checked]:bg-primary transition-colors">
                                    <div className="h-full w-[27px] rounded-full bg-white shadow-sm"></div>
                                    <input defaultChecked className="invisible absolute" type="checkbox" />
                                </label>
                            </div>
                            {/* Card Details List */}
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
                            {/* Usage Tips */}
                            <div className="rounded-xl bg-blue-50 dark:bg-blue-900/10 p-5 border border-blue-100 dark:border-blue-900/30">
                                <div className="flex gap-3">
                                    <div className="mt-0.5">
                                        <span className="material-symbols-outlined text-primary text-xl">info</span>
                                    </div>
                                    <div>
                                        <h4 className="text-text-main dark:text-white font-bold text-sm mb-1">How to use</h4>
                                        <p className="text-text-secondary dark:text-gray-400 text-sm leading-relaxed">
                                            Use this card for any international online payments where Mastercard is accepted. Ensure your billing address matches the one provided in your account settings.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
