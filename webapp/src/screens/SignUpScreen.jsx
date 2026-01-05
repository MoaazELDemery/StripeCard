import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUpScreen() {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Top Navigation */}
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
            {/* Main Content (Split Screen) */}
            <main className="flex flex-1 flex-col lg:flex-row">
                {/* Left Side: Marketing Hero */}
                <div className="relative hidden w-full flex-col justify-center overflow-hidden bg-primary/5 dark:bg-[#1a2632]/50 p-12 lg:flex lg:w-5/12 xl:w-1/2">
                    {/* Abstract Background Shapes */}
                    <div className="absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-3xl"></div>
                    <div className="relative z-10 mx-auto flex max-w-lg flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-4xl font-black leading-tight tracking-tight text-[#111418] dark:text-white xl:text-5xl">
                                Pay in EGP. <br />
                                <span className="text-primary">Spend in USD.</span>
                            </h1>
                            <p className="text-lg font-medium text-[#617589] dark:text-gray-300">
                                Create secure and instant virtual cards for global spending without the exchange rate hassle.
                            </p>
                        </div>
                        <div className="w-full overflow-hidden rounded-2xl shadow-2xl shadow-primary/20">
                            <div className="aspect-[4/3] w-full bg-cover bg-center" data-alt="abstract colorful wavy holographic gradient background" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDiJuASL1fQ9ydC8dzdaFicmU9zHpPH732HDzsIFrJDWhiVS2lHip7PckR0EMo3H2q7rOMN1LTaBzL_d0cKf_zzWxsqXV2r2DA2xCci-2M1edt4g6OkJDT_dH-g4U2SJTbZPKspRfD74wRl766oQa9OcOC_yOpJWfmt4Ph-OsbGaok73Z6z33izdp8atweIijiwYdiw3k43tE7b6h0zXQ7lKQIR35k3QSAc2oQuR7_tsxoxhyZmesrhw5bPIPywDlz14aVsc1cUAA')" }}>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 rounded-full bg-white dark:bg-[#1a2632] px-4 py-2 shadow-sm">
                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                <span className="text-sm font-bold text-[#111418] dark:text-white">Instant Activation</span>
                            </div>
                            <div className="flex items-center gap-2 rounded-full bg-white dark:bg-[#1a2632] px-4 py-2 shadow-sm">
                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                <span className="text-sm font-bold text-[#111418] dark:text-white">Low Fees</span>
                            </div>
                            <div className="flex items-center gap-2 rounded-full bg-white dark:bg-[#1a2632] px-4 py-2 shadow-sm">
                                <span className="material-symbols-outlined text-primary text-xl">lock</span>
                                <span className="text-sm font-bold text-[#111418] dark:text-white">Secure by Stripe</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Side: Registration Form */}
                <div className="flex w-full flex-col justify-center bg-white dark:bg-background-dark p-6 lg:w-7/12 lg:p-12 xl:w-1/2">
                    <div className="mx-auto w-full max-w-[520px]">
                        {/* Page Heading */}
                        <div className="mb-8 flex flex-col gap-2">
                            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#111418] dark:text-white md:text-4xl">Create your account</h2>
                            <p className="text-base font-normal text-[#617589] dark:text-gray-400">Start spending globally with your virtual USD card today.</p>
                        </div>
                        {/* Form */}
                        <form className="flex flex-col gap-5">
                            {/* Name Fields */}
                            <div className="flex flex-col gap-5 md:flex-row">
                                <label className="flex flex-1 flex-col gap-2">
                                    <span className="text-sm font-medium text-[#111418] dark:text-white">First Name</span>
                                    <input className="h-12 w-full rounded-xl border border-[#dbe0e6] bg-background-light px-4 text-base font-normal text-[#111418] placeholder-[#617589] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-[#1a2632] dark:text-white dark:placeholder-gray-500" placeholder="Jane" type="text" />
                                </label>
                                <label className="flex flex-1 flex-col gap-2">
                                    <span className="text-sm font-medium text-[#111418] dark:text-white">Last Name</span>
                                    <input className="h-12 w-full rounded-xl border border-[#dbe0e6] bg-background-light px-4 text-base font-normal text-[#111418] placeholder-[#617589] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-[#1a2632] dark:text-white dark:placeholder-gray-500" placeholder="Doe" type="text" />
                                </label>
                            </div>
                            {/* Email */}
                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-medium text-[#111418] dark:text-white">Email Address</span>
                                <input className="h-12 w-full rounded-xl border border-[#dbe0e6] bg-background-light px-4 text-base font-normal text-[#111418] placeholder-[#617589] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-[#1a2632] dark:text-white dark:placeholder-gray-500" placeholder="name@example.com" type="email" />
                            </label>
                            {/* Password */}
                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-medium text-[#111418] dark:text-white">Password</span>
                                <div className="relative">
                                    <input className="h-12 w-full rounded-xl border border-[#dbe0e6] bg-background-light px-4 pr-12 text-base font-normal text-[#111418] placeholder-[#617589] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-[#1a2632] dark:text-white dark:placeholder-gray-500" placeholder="Create a password" type="password" />
                                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#617589] hover:text-[#111418] dark:hover:text-white" type="button">
                                        <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                                    </button>
                                </div>
                            </label>
                            {/* Confirm Password */}
                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-medium text-[#111418] dark:text-white">Confirm Password</span>
                                <div className="relative">
                                    <input className="h-12 w-full rounded-xl border border-[#dbe0e6] bg-background-light px-4 pr-12 text-base font-normal text-[#111418] placeholder-[#617589] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-[#1a2632] dark:text-white dark:placeholder-gray-500" placeholder="Confirm your password" type="password" />
                                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#617589] hover:text-[#111418] dark:hover:text-white" type="button">
                                        <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                                    </button>
                                </div>
                            </label>
                            {/* Submit Button */}
                            <Link to="/payment" className="mt-4 flex h-12 w-full items-center justify-center rounded-full bg-primary px-6 text-base font-bold text-white transition-all hover:bg-blue-600 focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-[#101922]">
                                Create Account
                            </Link>
                        </form>
                        {/* Divider */}
                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-[#f0f2f4] dark:border-gray-700"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-white px-2 text-[#617589] dark:bg-background-dark dark:text-gray-400">Or sign up with</span>
                            </div>
                        </div>
                        {/* Social Login */}
                        <Link to="/payment" className="flex h-12 w-full items-center justify-center gap-3 rounded-full border border-[#dbe0e6] bg-white text-base font-medium text-[#111418] transition-all hover:bg-[#f6f7f8] dark:border-gray-700 dark:bg-[#1a2632] dark:text-white dark:hover:bg-[#22303e]">
                            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
                                <path d="M12.0003 20.45c4.6669 0 8.45-3.7831 8.45-8.45 0-4.6669-3.7831-8.45-8.45-8.45-4.6669 0-8.45 3.7831-8.45 8.45 0 4.6669 3.7831 8.45 8.45 8.45Z" fill="white"></path>
                                <path d="M20.1585 10.7787H12.0234v2.9691h4.6346c-.2344 1.554-.9979 2.8711-2.1157 3.7544v3.0844h3.3887c1.9902-1.8379 3.125-4.5469 3.125-7.6191 0-.5859-.0625-1.127-.1797-1.6387h-1.018Z" fill="#4285F4"></path>
                                <path d="M12.0234 19.3364c2.2578 0 4.1602-.748 5.5684-2.0313l-3.2383-3.1113c-.7617.5195-1.7422.8223-2.8809.8223-2.2285 0-4.1133-1.5039-4.7891-3.5254H3.457v3.6328c1.3965 2.7637 4.252 4.666 7.5664 4.666Z" fill="#34A853"></path>
                                <path d="M7.2344 11.4907c-.1797-.5352-.2812-1.1113-.2812-1.7109 0-.6133.1094-1.1992.293-1.7344V4.4126H3.457C2.2852 6.7466 1.625 9.3813 1.625 12.1691c0 2.4141.6035 4.6934 1.6523 6.793l3.3828-3.666a4.9545 4.9545 0 0 1 .5742-3.8054Z" fill="#FBBC05"></path>
                                <path d="M12.0234 4.75c1.2227 0 2.3164.4199 3.1777 1.2422l2.3652-2.3652C16.1426 2.2734 14.2402 1.375 12.0234 1.375c-3.3145 0-6.1699 1.9023-7.5664 4.666l3.4727 3.6328c.6758-2.0215 2.5605-3.5254 4.7891-3.5254h.3047Z" fill="#EA4335"></path>
                            </svg>
                            <span>Sign up with Google</span>
                        </Link>
                        <div className="mt-8 text-center sm:hidden">
                            <p className="text-sm font-medium text-[#617589] dark:text-gray-400">Already have an account? <Link className="font-bold text-primary hover:underline" to="/login">Log In</Link></p>
                        </div>
                        <p className="mt-8 text-center text-xs text-[#617589] dark:text-gray-500">
                            By creating an account, you agree to our <a className="underline hover:text-primary" href="#">Terms of Service</a> and <a className="underline hover:text-primary" href="#">Privacy Policy</a>.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
