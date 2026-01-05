import React from 'react';

export default function TrustFooter() {
    return (
        <div className="flex items-center justify-center gap-2 text-slate-400 dark:text-slate-500 text-xs mt-2">
            <span className="material-symbols-outlined text-[14px]">lock</span>
            <span>Payments secured by <strong>Stripe</strong></span>
        </div>
    );
}
