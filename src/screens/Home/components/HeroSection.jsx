import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
    return (
        <section className="relative px-6 py-12 lg:px-20 lg:py-20">
            <div className="mx-auto max-w-[1280px]">
                <div className="@container">
                    <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center lg:gap-20">
                        {/* Hero Content */}
                        <div className="flex flex-1 flex-col gap-8 text-left">
                            <div className="flex flex-col gap-4">
                                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 
                                bg-primary/5 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary 
                                dark:border-primary/30 dark:bg-primary/10">
                                    <span className="material-symbols-outlined text-sm">rocket_launch</span>
                                    <span>New: Instant Activation</span>
                                </div>
                                <h1 className="text-4xl font-black leading-[1.1] tracking-[-0.033em] text-[#111418] dark:text-white sm:text-5xl lg:text-6xl">
                                    Shop the World with Your Virtual <span className="text-primary">USD Card</span>
                                </h1>
                                <h2 className="text-lg font-normal leading-relaxed text-[#637588] dark:text-[#9ba8b8]">
                                    No USD bank account? No problem. Top up instantly with EGP and get a secure virtual card powered by Stripe to shop anywhere online.
                                </h2>
                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                                <Link
                                    to="/payment"
                                    className="flex h-14 min-w-[160px] cursor-pointer items-center justify-center rounded-full bg-primary px-8 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-transform hover:scale-105 active:scale-95"
                                >
                                    <span className="truncate">Create Virtual Card</span>
                                </Link>
                                <div className="flex items-center gap-2 px-4 text-sm font-medium text-[#637588] dark:text-[#9ba8b8]">
                                    <span className="material-symbols-outlined text-lg">lock</span>
                                    <span>Secure via Stripe</span>
                                </div>
                            </div>
                            {/* Stats Integration */}
                            <div className="mt-4 flex max-w-sm flex-col gap-3 rounded-2xl border border-[#e5e7eb] bg-white p-5 shadow-sm dark:border-[#222e3b] dark:bg-[#1a2632]">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                            <span className="material-symbols-outlined text-lg">currency_exchange</span>
                                        </span>
                                        <p className="text-sm font-medium text-[#637588] dark:text-[#9ba8b8]">Live Exchange Rate</p>
                                    </div>
                                    <span className="rounded-full bg-green-50 px-2 py-1 text-xs font-bold text-green-700 dark:bg-green-900/20 dark:text-green-400">Live</span>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <p className="text-2xl font-bold tracking-tight text-[#111418] dark:text-white">1 USD ≈ 52 EGP</p>
                                </div>
                                <p className="text-xs text-[#637588] dark:text-[#9ba8b8]">Competitive rates updated in real-time.</p>
                            </div>
                        </div>
                        {/* Hero Visual */}
                        <div className="flex flex-1 items-center justify-center">
                            <div className="relative w-full max-w-[500px]">
                                {/* Decorative blur */}
                                <div className="absolute -inset-4 rounded-full bg-primary/20 blur-3xl dark:bg-primary/10"></div>
                                {/* Card Image */}
                                <div className="relative aspect-[1.586] w-full rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]">
                                    <div
                                        className="h-full w-full rounded-2xl shadow-2xl overflow-hidden bg-cover bg-center"
                                        data-alt="Futuristic 3D glossy blue credit card floating with abstract digital patterns"
                                        style={{
                                            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD309j2M32wKo_JNbYWUxBSEH8FUXck5OhLqK-zVZAtTbFeDgft-blxoyuvxlt7-fcdpVvTZaynLrv1cqF7SqyM3uTz-1M53Ad_2yftddQ5Q82fWq5txYMz4o7CcI8tAJT8DD_M1I2OtYOaXzSKqEls2JHi6Rw3EKTs0n_cb4Mc5fZrX1mCk8qQFdlzjwjMPDdkeghyQMHA_JwVxx8x4Qqb0HL-T9QxXd0YfvqTSbpXUi_XwUCwpLmjGIXgAH1kbPPncNudiAD6Sg")'
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
                                        <div className="absolute bottom-6 left-6 right-6 text-white">
                                            <div className="mb-4 flex items-center justify-between">
                                                <div className="text-lg font-mono tracking-widest opacity-90">•••• 4242</div>
                                                <span className="material-symbols-outlined text-3xl">contactless</span>
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <div className="text-[10px] uppercase opacity-70">Card Holder</div>
                                                    <div className="font-medium tracking-wide">YOUR NAME</div>
                                                </div>
                                                <div className="h-8 w-12 rounded bg-white/20 backdrop-blur-sm"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
