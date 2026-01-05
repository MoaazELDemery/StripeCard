import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginForm() {
    return (
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
    );
}
