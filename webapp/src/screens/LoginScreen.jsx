import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginScreen() {
    return (
        <div className="flex min-h-screen w-full">
            {/* Left Side: Visual Hero (Hidden on mobile) */}
            <div className="relative hidden w-0 flex-1 lg:block bg-[#101922]">
                <div
                    className="absolute inset-0 h-full w-full bg-cover bg-center opacity-60 mix-blend-overlay"
                    data-alt="Abstract 3D rendering of digital payment network and currency exchange"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQjwS1RJHdlry4_xSSpopENedSutGKMNiapE1rrv2l5185Kg3uhup6EQ-udEni2UzCKzhb_pBM6feEHq22waG2HfkAPm9-D2l5Hw3uP_dLjE8TApPGiQWt9GubvAByUXWX5g-elGfF59tzKpI5-s6pUEGG4LY25iNLU7OuHvQCvwX1sYnCnw8FGNhEDHooyBaaTYLM_xv4tOgVsoyyMGd1fYoR2rZZeiXVBpyucAYbCd40HgpcIJf77W34cGRO-RXv1FH-S30qmQ')" }}
                >
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#137fec]/20 to-[#101922]"></div>
                <div className="absolute bottom-0 left-0 right-0 p-16 flex flex-col gap-6 z-10">
                    <div className="size-16 bg-primary/90 backdrop-blur-md rounded-xl flex items-center justify-center text-white shadow-xl ring-1 ring-white/20">
                        <span className="material-symbols-outlined text-[32px]">currency_exchange</span>
                    </div>
                    <div className="space-y-4 max-w-lg">
                        <p className="text-5xl font-black text-white leading-[1.1] tracking-[-0.033em]">
                            Global Payments, <br /> Local Currency
                        </p>
                        <p className="text-xl text-gray-300 font-medium leading-relaxed">
                            Seamlessly convert EGP to USD for international spending. Secure, fast, and built for modern business.
                        </p>
                    </div>
                    {/* Trust indicator */}
                    <div className="flex items-center gap-3 pt-4">
                        <div className="flex -space-x-3">
                            <img alt="User 1" className="inline-block h-10 w-10 rounded-full ring-2 ring-[#101922] object-cover" data-alt="Portrait of a satisfied customer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxObeKx7bjmtxnUmb6HRymuwAO9zHkOsgRhdxit2nDDN36fPoqR5coIPD-DClAmUmkZTgCGGe0ZWTB0UpwLQqTkKbI8NcuBVgqEh0LmpYasRVoky7af7WMMN_HabHLwNS44Cwh4Js3y51LqMXdoP0UxW9HrpPC5bZYE_vsCQq8Hc8ZntkpmIHSlWtlVul5IgzZLSPOG5l2DlXlRA0ePOblOZ03qHRaiGx0f15SCbFRR27Cmv8vyZeaZpbASTPA24sm9-PFXJsH8Q" />
                            <img alt="User 2" className="inline-block h-10 w-10 rounded-full ring-2 ring-[#101922] object-cover" data-alt="Portrait of a satisfied customer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZCVMMpH3Asx-jgpscTnlLGHBIsYwKzP7WpyZ0E-wS0x7dG1y2xtVWOQAEF3zwkQwYr5NFUbyxseU1bpDS8SxZgWvc8C71uKPDKovyj5U_6rab2GaZJIaGvqazTN07IbIyOy4Zot3GSZbq5kVtCFCcq3lRQEXvbbfW1WW_1bCYHDqRnwLh4xacDKwnXfoH2MHe0KzWqsRS_MyoTBUpJ7jsGHvOgKhrAo4xRAlYbZqEvCeN1XQjhY80g7tqXiksFOTHhjQWwxes_Q" />
                            <img alt="User 3" className="inline-block h-10 w-10 rounded-full ring-2 ring-[#101922] object-cover" data-alt="Portrait of a satisfied customer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoHUpX4bw6UxeDLfzhbz5dM2QPhVoH82GBJAbJaQrhJzAldZqa_gUucC2fmiEENJsCWGVVyR0zsPRy7vbgISQQ_09GMo3xww-z407uW2dhHCw4H7LjdlBNlpgukKEaS78y87kiJhXnGj7rMUOesvKcmRLQLRu9nQP8uGfBXJv-YFo7gwje8GE6pPL85GWfdOo-nPnwFNNpXAMuy2xyXfpIRdHEGLPu1cXQeKuKCQvBy8tSZY4RPd_64lv6pMXqcGguijbEe33fnQ" />
                        </div>
                        <p className="text-sm font-medium text-white/80">Trusted by 10,000+ users</p>
                    </div>
                </div>
            </div>
            {/* Right Side: Login Form */}
            <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-white dark:bg-background-dark relative">
                <div className="mx-auto w-full max-w-sm lg:w-[420px]">
                    {/* Brand Header */}
                    <div className="flex items-center gap-3 mb-12">
                        <div className="size-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                            <span className="material-symbols-outlined">credit_card</span>
                        </div>
                        <h2 className="text-[#111418] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">StripeCard EGP</h2>
                    </div>
                    {/* Page Heading Component */}
                    <div className="mb-10">
                        <h1 className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-3">Welcome Back</h1>
                        <p className="text-[#617589] dark:text-gray-400 text-base font-normal leading-normal">
                            Log in to manage your virtual card and track expenses.
                        </p>
                    </div>
                    {/* Form Area */}
                    <form action="#" className="space-y-6">
                        {/* Email TextField */}
                        <div className="space-y-2">
                            <label className="text-[#111418] dark:text-white text-base font-medium leading-normal ml-1" htmlFor="email">Email Address</label>
                            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a2632] focus:border-primary h-14 placeholder:text-[#617589] p-[15px] text-base font-normal leading-normal transition-all duration-200" id="email" placeholder="name@example.com" type="email" />
                        </div>
                        {/* Password TextField */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between ml-1">
                                <label className="text-[#111418] dark:text-white text-base font-medium leading-normal" htmlFor="password">Password</label>
                                <a className="text-sm font-bold text-primary hover:text-blue-600" href="#">Forgot Password?</a>
                            </div>
                            <div className="flex w-full flex-1 items-stretch rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a2632] focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary transition-all duration-200 overflow-hidden">
                                <input className="form-input flex w-full min-w-0 flex-1 resize-none bg-transparent border-none text-[#111418] dark:text-white focus:outline-0 focus:ring-0 h-14 placeholder:text-[#617589] p-[15px] text-base font-normal leading-normal" id="password" placeholder="Enter your password" type="password" />
                                <button className="flex items-center justify-center px-4 text-[#617589] dark:text-gray-400 hover:text-primary transition-colors cursor-pointer outline-none" type="button">
                                    <span className="material-symbols-outlined">visibility_off</span>
                                </button>
                            </div>
                        </div>
                        {/* Login Button */}
                        <Link to="/payment" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 bg-primary hover:bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-blue-500/20 transition-all duration-200 transform active:scale-[0.99] mt-2">
                            <span className="truncate">Log In</span>
                        </Link>
                    </form>
                    {/* Social Login Section */}
                    <div className="mt-8">
                        <div className="relative mb-6">
                            <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-[#dbe0e6] dark:border-gray-800"></div>
                            </div>
                            <div className="relative flex justify-center text-sm font-medium leading-6">
                                <span className="bg-white dark:bg-background-dark px-4 text-[#617589]">Or continue with</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Link to="/home" className="flex items-center justify-center gap-3 rounded-xl bg-white dark:bg-[#1a2632] border border-[#dbe0e6] dark:border-gray-700 px-3 py-3 text-[#111418] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20">
                                <img alt="Google logo" className="h-5 w-5" data-alt="Google Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB9PJLo9_ISd2EVtDf6SWcyzJLieP0Rs-Xv3OFYI_U7Cf-kpC2ZM7i_gn0DurJYWYbkDUnnMho7343Oa9h4ZHHgcVLffnOm49vStg01XoY2pQlJ1h1n2WcyEhPlMfQGSLxlpq4qDg80VdpKoxKz5c7CcQluk-qAWNU2LIJo4845PCfueofPh6NUNLpnIKGD27YCJov0tOhhHO9bhSNnpJyM0Uba4efrE4csphfHGIUIUoRfTw_09mbMQ9MKKaOXpFKsFZHZinrUw" />
                                <span className="text-sm font-bold">Google</span>
                            </Link>
                            <Link to="/home" className="flex items-center justify-center gap-3 rounded-xl bg-white dark:bg-[#1a2632] border border-[#dbe0e6] dark:border-gray-700 px-3 py-3 text-[#111418] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20">
                                <span className="material-symbols-outlined text-[22px]">ios</span>
                                <span className="text-sm font-bold">Apple</span>
                            </Link>
                        </div>
                    </div>
                    {/* Footer Sign Up */}
                    <p className="mt-10 text-center text-base text-[#617589] dark:text-gray-400">
                        Don't have an account?
                        <Link className="font-bold text-primary hover:text-blue-600 ml-1" to="/signup">Sign Up</Link>
                    </p>
                    {/* Secure Footer */}
                    <div className="mt-12 flex justify-center items-center gap-2 text-xs text-[#617589]/60 dark:text-gray-500">
                        <span className="material-symbols-outlined text-[14px]">lock</span>
                        <span>Secured by Stripe &amp; 256-bit SSL Encryption</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
