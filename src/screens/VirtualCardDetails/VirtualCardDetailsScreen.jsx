import React from 'react';
import TopNavigation from './components/TopNavigation';
import PageHeading from './components/PageHeading';
import VirtualCard from './components/VirtualCard';
import BalanceCard from './components/BalanceCard';
import TransactionSummary from './components/TransactionSummary';
import SecurityControl from './components/SecurityControl';
import CardDetailsList from './components/CardDetailsList';
import UsageTips from './components/UsageTips';

export default function VirtualCardDetailsScreen() {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-text-main dark:text-white transition-colors duration-200">
            {/* Top Navigation */}
            <TopNavigation />

            {/* Main Content */}
            <main className="flex-grow px-4 md:px-10 py-8 md:py-12 flex justify-center">
                <div className="w-full max-w-[1024px] flex flex-col gap-8">
                    {/* Page Heading & Success Message */}
                    <PageHeading />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left Column: Virtual Card Visualization */}
                        <div className="lg:col-span-5 flex flex-col gap-6">
                            <VirtualCard />
                            <BalanceCard />
                            <TransactionSummary />
                        </div>

                        {/* Right Column: Details & Controls */}
                        <div className="lg:col-span-7 flex flex-col gap-6">
                            <SecurityControl />
                            <CardDetailsList />
                            <UsageTips />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
