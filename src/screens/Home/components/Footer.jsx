import React from 'react';

export default function Footer() {
    return (
        <footer className="border-t border-[#e5e7eb] bg-white py-12 dark:border-[#2a333d] dark:bg-[#101922]">
            <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 px-6 lg:flex-row lg:px-20">
                <div className="flex items-center gap-2 text-[#111418] dark:text-white">
                    <span className="material-symbols-outlined text-primary">credit_card</span>
                    <span className="text-lg font-bold">StripeCard</span>
                </div>
                <div className="text-center text-sm text-[#637588] dark:text-[#9ba8b8]">
                    © 2026 StripeCard Inc. All rights reserved.
                </div>
                <div className="flex gap-6">
                    <a className="text-[#637588] hover:text-primary dark:text-[#9ba8b8]" href="#">Privacy</a>
                    <a className="text-[#637588] hover:text-primary dark:text-[#9ba8b8]" href="#">Terms</a>
                    <a className="text-[#637588] hover:text-primary dark:text-[#9ba8b8]" href="#">Contact</a>
                </div>
            </div>
        </footer>
    );
}
