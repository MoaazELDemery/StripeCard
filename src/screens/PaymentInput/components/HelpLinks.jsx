import React from 'react';

export default function HelpLinks() {
    return (
        <div className="mt-6 text-center space-x-4">
            <a className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 transition-colors" href="#">Help Center</a>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <a className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 transition-colors" href="#">Fees &amp; Limits</a>
        </div>
    );
}
