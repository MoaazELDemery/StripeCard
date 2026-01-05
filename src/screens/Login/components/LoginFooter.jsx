import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginFooter() {
    return (
        <>
            <p className="mt-10 text-center text-base text-[#617589] dark:text-gray-400">
                Don't have an account?
                <Link className="font-bold text-primary hover:text-blue-600 ml-1" to="/signup">Sign Up</Link>
            </p>
            {/* Secure Footer */}
            <div className="mt-12 flex justify-center items-center gap-2 text-xs text-[#617589]/60 dark:text-gray-500">
                <span className="material-symbols-outlined text-[14px]">lock</span>
                <span>Secured by Stripe &amp; 256-bit SSL Encryption</span>
            </div>
        </>
    );
}
