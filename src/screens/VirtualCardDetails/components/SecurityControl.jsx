import React from 'react';

export default function SecurityControl({ showSensitiveInfo, onToggle }) {
    return (
        <div className="rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a2634] p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
                    <span className="material-symbols-outlined">lock</span>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-text-main dark:text-white text-base font-bold leading-tight">Card Security</p>
                    <p className="text-text-secondary dark:text-gray-400 text-sm font-normal">Details are masked. Toggle to reveal sensitive info.</p>
                </div>
            </div>
            <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-gray-200 dark:bg-gray-700 p-0.5 has-[:checked]:justify-end has-[:checked]:bg-primary transition-colors">
                <div className="h-full w-[27px] rounded-full bg-white shadow-sm"></div>
                <input
                    className="invisible absolute"
                    type="checkbox"
                    checked={showSensitiveInfo}
                    onChange={onToggle}
                />
            </label>
        </div>
    );
}
