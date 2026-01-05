import React from 'react';
import { Link } from 'react-router-dom';

export default function SocialButtons() {
    return (
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
                <Link
                    to="/home"
                    className="flex items-center justify-center gap-3 rounded-xl bg-white dark:bg-[#1a2632] border border-[#dbe0e6] dark:border-gray-700 px-3 py-3 text-[#111418] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                    <img
                        alt="Google logo"
                        className="h-5 w-5"
                        data-alt="Google Logo"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB9PJLo9_ISd2EVtDf6SWcyzJLieP0Rs-Xv3OFYI_U7Cf-kpC2ZM7i_gn0DurJYWYbkDUnnMho7343Oa9h4ZHHgcVLffnOm49vStg01XoY2pQlJ1h1n2WcyEhPlMfQGSLxlpq4qDg80VdpKoxKz5c7CcQluk-qAWNU2LIJo4845PCfueofPh6NUNLpnIKGD27YCJov0tOhhHO9bhSNnpJyM0Uba4efrE4csphfHGIUIUoRfTw_09mbMQ9MKKaOXpFKsFZHZinrUw"
                    />
                    <span className="text-sm font-bold">Google</span>
                </Link>
                <Link
                    to="/home"
                    className="flex items-center justify-center gap-3 rounded-xl bg-white dark:bg-[#1a2632] border border-[#dbe0e6] dark:border-gray-700 px-3 py-3 text-[#111418] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                    <span className="material-symbols-outlined text-[22px]">ios</span>
                    <span className="text-sm font-bold">Apple</span>
                </Link>
            </div>
        </div>
    );
}
