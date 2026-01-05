import React from 'react';
import { Link } from 'react-router-dom';

export default function TopNavigation() {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid 
        border-[#e5e7eb] dark:border-gray-800 bg-white dark:bg-[#1a2634] px-10 py-4 sticky top-0 z-50">
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
                    <div
                        className="size-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden"
                        data-alt="User profile avatar"
                        style={{
                            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD35w5fwINqXsbDtet9Op1mkfL7ZYkZkA83e0BQy_b6LMw8qbFu541xbHOGXePjf-Mnpv19Mr7yYwMCphLML-7_dat2GdcZd1yRZ8oGWAg5-PxI_1nPVPlBiZxmZ6MwiZMOB9ClAQOZiH4PhKmuQXbdpgiRyAT24godPB2fPofCG_wVjo4oi_lVn6aTKt3Yib3UwoOLM9rSvtFrtrFxwT1OHaJQsfM7pv4TQ4Lsf8Jay1ElbjCV5t1ouM_y0itCeIyp54Ex6zRNhw')",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    ></div>
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
    );
}
