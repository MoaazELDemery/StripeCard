import React from 'react';

export default function LoginHeader() {
    return (
        <>
            <div className="flex items-center gap-3 mb-12">
                <div className="size-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                    <span className="material-symbols-outlined">credit_card</span>
                </div>
                <h2 className="text-[#111418] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">StripeCard EGP</h2>
            </div>
            <div className="mb-10">
                <h1 className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-3">Welcome Back</h1>
                <p className="text-[#617589] dark:text-gray-400 text-base font-normal leading-normal">
                    Log in to manage your virtual card and track expenses.
                </p>
            </div>
        </>
    );
}
