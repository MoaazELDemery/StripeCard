import React from 'react';

export default function UsageTips() {
    return (
        <div className="rounded-xl bg-blue-50 dark:bg-blue-900/10 p-5 border border-blue-100 dark:border-blue-900/30">
            <div className="flex gap-3">
                <div className="mt-0.5">
                    <span className="material-symbols-outlined text-primary text-xl">info</span>
                </div>
                <div>
                    <h4 className="text-text-main dark:text-white font-bold text-sm mb-1">How to use</h4>
                    <p className="text-text-secondary dark:text-gray-400 text-sm leading-relaxed">
                        Use this card for any international online payments where Mastercard is accepted. Ensure your billing address matches the one provided in your account settings.
                    </p>
                </div>
            </div>
        </div>
    );
}
