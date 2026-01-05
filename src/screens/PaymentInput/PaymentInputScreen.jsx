import React from 'react';
import PaymentHeader from './components/PaymentHeader';
import CardHeader from './components/CardHeader';
import CurrencyInput from './components/CurrencyInput';
import ExchangeRateIndicator from './components/ExchangeRateIndicator';
import CurrencyOutput from './components/CurrencyOutput';
import FeeBreakdown from './components/FeeBreakdown';
import PaymentButton from './components/PaymentButton';
import TrustFooter from './components/TrustFooter';
import HelpLinks from './components/HelpLinks';

export default function PaymentInputScreen() {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-slate-900 dark:text-white transition-colors duration-200">
            <PaymentHeader />
            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center p-4 md:p-8">
                <div className="w-full max-w-lg">
                    {/* Central Card */}
                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
                        <CardHeader />
                        <div className="p-6 md:p-8 space-y-6">
                            <CurrencyInput />
                            <ExchangeRateIndicator />
                            <CurrencyOutput />
                            <FeeBreakdown />
                            <PaymentButton />
                            <TrustFooter />
                        </div>
                    </div>
                    <HelpLinks />
                </div>
            </main>
        </div>
    );
}
