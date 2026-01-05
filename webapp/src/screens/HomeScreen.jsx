import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeScreen() {
    return (
        <div className="relative flex min-h-screen w-full flex-col group/design-root">
            {/* TopNavBar */}
            <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e5e7eb] dark:border-b-[#222e3b] bg-white/80 dark:bg-[#101922]/90 backdrop-blur-md px-6 py-4 lg:px-20">
                <div className="flex items-center gap-4 text-[#111418] dark:text-white">
                    <div className="flex items-center justify-center rounded-full bg-primary/10 p-2">
                        <span className="material-symbols-outlined text-primary text-2xl">credit_card</span>
                    </div>
                    <h2 className="text-lg font-bold leading-tight tracking-tight">VirtualCard</h2>
                </div>
                <div className="hidden lg:flex flex-1 justify-center gap-8">
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Features</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Pricing</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="#">FAQ</a>
                </div>
                <div className="flex items-center gap-4">
                    <Link className="hidden sm:block text-sm font-medium hover:text-primary transition-colors" to="/login">Login</Link>
                    <Link to="/signup" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-blue-600 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
                        <span className="truncate">Get Started</span>
                    </Link>
                </div>
            </header>
            <main className="flex-1">
                {/* HeroSection */}
                <section className="relative px-6 py-12 lg:px-20 lg:py-20">
                    <div className="mx-auto max-w-[1280px]">
                        <div className="@container">
                            <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center lg:gap-20">
                                {/* Hero Content */}
                                <div className="flex flex-1 flex-col gap-8 text-left">
                                    <div className="flex flex-col gap-4">
                                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary dark:border-primary/30 dark:bg-primary/10">
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
                                        <Link to="/payment" className="flex h-14 min-w-[160px] cursor-pointer items-center justify-center rounded-full bg-primary px-8 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-transform hover:scale-105 active:scale-95">
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
                                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD309j2M32wKo_JNbYWUxBSEH8FUXck5OhLqK-zVZAtTbFeDgft-blxoyuvxlt7-fcdpVvTZaynLrv1cqF7SqyM3uTz-1M53Ad_2yftddQ5Q82fWq5txYMz4o7CcI8tAJT8DD_M1I2OtYOaXzSKqEls2JHi6Rw3EKTs0n_cb4Mc5fZrX1mCk8qQFdlzjwjMPDdkeghyQMHA_JwVxx8x4Qqb0HL-T9QxXd0YfvqTSbpXUi_XwUCwpLmjGIXgAH1kbPPncNudiAD6Sg")' }}
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
                {/* FeatureSection */}
                <section className="bg-[#fcfdfd] px-6 py-16 dark:bg-[#151f2b] lg:px-20">
                    <div className="mx-auto max-w-[1280px]">
                        <div className="mb-12 flex flex-col gap-4 text-center sm:text-left">
                            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#111418] dark:text-white sm:text-4xl">
                                Why Choose Our Virtual Card?
                            </h2>
                            <p className="max-w-2xl text-lg font-normal text-[#637588] dark:text-[#9ba8b8]">
                                Experience seamless global payments without the banking hassle. Designed for freelancers, shoppers, and digital nomads.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {/* Feature 1 */}
                            <div className="group flex flex-col gap-4 rounded-2xl border border-[#e5e7eb] bg-white p-8 transition-all hover:border-primary/50 hover:shadow-lg dark:border-[#2a333d] dark:bg-[#1a2632]">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-2xl">bolt</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold leading-tight text-[#111418] dark:text-white">Instant Issuance</h3>
                                    <p className="text-[#637588] dark:text-[#9ba8b8]">Get your card details immediately after payment. No waiting days for approval.</p>
                                </div>
                            </div>
                            {/* Feature 2 */}
                            <div className="group flex flex-col gap-4 rounded-2xl border border-[#e5e7eb] bg-white p-8 transition-all hover:border-primary/50 hover:shadow-lg dark:border-[#2a333d] dark:bg-[#1a2632]">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-2xl">savings</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold leading-tight text-[#111418] dark:text-white">Low Fees</h3>
                                    <p className="text-[#637588] dark:text-[#9ba8b8]">Competitive exchange rates close to market value and minimal transaction fees.</p>
                                </div>
                            </div>
                            {/* Feature 3 */}
                            <div className="group flex flex-col gap-4 rounded-2xl border border-[#e5e7eb] bg-white p-8 transition-all hover:border-primary/50 hover:shadow-lg dark:border-[#2a333d] dark:bg-[#1a2632]">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-2xl">shield_lock</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-bold leading-tight text-[#111418] dark:text-white">Secure via Stripe</h3>
                                    <p className="text-[#637588] dark:text-[#9ba8b8]">Your financial data is protected by industry-leading security and encryption.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Images / Use Cases */}
                <section className="px-6 py-16 lg:px-20">
                    <div className="mx-auto max-w-[1280px]">
                        <div className="mb-8 flex items-center justify-between">
                            <h2 className="text-2xl font-bold tracking-tight text-[#111418] dark:text-white">Unlock Global Shopping</h2>
                            <a className="text-sm font-bold text-primary hover:underline" href="#">View all partners</a>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:h-[400px] lg:grid-cols-4">
                            <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 lg:col-span-2 lg:row-span-2 group cursor-pointer">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="Person paying online with a credit card on a laptop" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-Djrvf3Jvw00OMEumWy6_-vSKja2ppfQrjxpLzxEpvYzmmdfacXXVPfOf-Liic-DC6EpuRA4IR0m-PYZoK4Y4p3MMRWyeh6oKl_1wSwQCUR6OwDLpBbNqw2J7IxRT1ASevo8dHvzJQ5HsUkY0GbHY7dIeGGicLkU0uqL7nWC4SrU-R38uE4sB2zoe1_TGvpX9G6rvEayCG4nz3dUhYyFMlvipL3gxOHtrPXnWBVL0eQKEudiKHi44NDfkCVkzWgEnaqewRfOjwQ")' }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-xl font-bold text-white">Shop Online</h3>
                                    <p className="text-gray-200 text-sm mt-1">Amazon, eBay, and more.</p>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 lg:col-span-1 lg:row-span-2 group cursor-pointer">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="Smartphone displaying streaming services icons" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwdheOzqkUw2Gf6Tmgun9nZKmMNuDOnMXcnXuapeown64Y25aJ4nlxlsU0_HGNQeNHCNxh6z8Mq4jIC7iMFOHxUkoDo0pM9ENRtQjgTzXQWG4WwjaYgZn3pa49XvAOrqzuTJN_J2xk07M7UmpVSDv1YwevhZV7bN2fsoodvXSm8K31R1Kx776fnzCltFQbbKwA-o88MJHyV4ApAycE6gOHfceJXiPAaS_EFjfaooXYxPvwFHrD8heT_s3OFzp7tp6GrMQEBfmV-Q")' }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-xl font-bold text-white">Subscriptions</h3>
                                    <p className="text-gray-200 text-sm mt-1">Netflix, Spotify, Adobe.</p>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 h-48 lg:h-auto lg:col-span-1 lg:row-span-2 group cursor-pointer">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="Abstract visualization of digital software services" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKoyvWZRfk65kbkIwfSeSvuCpZ43Gd-nH95h1AMC4BNET4n_d2jyHO1Ajdwd6_uVZdia_Pt3zPSYfDLAkrg8iZIDGVBOGjOudQXIgQgfgf5BCHyu5g8mFtbwoISClWSYdRTgsW6g4376THYOyfhatcW17ERIFJlSTkV_q8pyl4b5fZDGm0gks2y4cdZkrx95nSIlv4Ia7Nny4dx6V1210wVKvH9tx3qOBUzw434EUOCYoQigulhMv0pkm9m8kgMj8FF5nmhXrhgA")' }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-xl font-bold text-white">Software &amp; SaaS</h3>
                                    <p className="text-gray-200 text-sm mt-1">Hosting, Domains, Tools.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="border-t border-[#e5e7eb] bg-white py-12 dark:border-[#2a333d] dark:bg-[#101922]">
                <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 px-6 lg:flex-row lg:px-20">
                    <div className="flex items-center gap-2 text-[#111418] dark:text-white">
                        <span className="material-symbols-outlined text-primary">credit_card</span>
                        <span className="text-lg font-bold">VirtualCard</span>
                    </div>
                    <div className="text-center text-sm text-[#637588] dark:text-[#9ba8b8]">
                        © 2023 VirtualCard Inc. All rights reserved.
                    </div>
                    <div className="flex gap-6">
                        <a className="text-[#637588] hover:text-primary dark:text-[#9ba8b8]" href="#">Privacy</a>
                        <a className="text-[#637588] hover:text-primary dark:text-[#9ba8b8]" href="#">Terms</a>
                        <a className="text-[#637588] hover:text-primary dark:text-[#9ba8b8]" href="#">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
