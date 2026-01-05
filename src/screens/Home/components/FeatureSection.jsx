import React from 'react';

export default function FeatureSection() {
    return (
        <section className="bg-[#fcfdfd] px-6 py-16 dark:bg-[#151f2b] lg:px-20">
            <div className="mx-auto max-w-[1280px]">
                <div className="mb-12 flex flex-col gap-4 text-center sm:text-left">
                    <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#111418] dark:text-white sm:text-4xl">
                        Why Choose Our Virtual Card?
                    </h2>
                    <p className="max-w-2xl text-lg font-normal text-[#637588] dark:text-[#9ba8b8]">
                        Experience seamless global payments without the banking hassle. Designed for freelancers, shoppers, and digital nomads.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Feature 1 */}
                    <div className="group flex flex-col gap-4 rounded-2xl border border-[#e5e7eb] bg-white p-8 transition-all hover:border-primary/50 hover:shadow-lg dark:border-[#2a333d] dark:bg-[#1a2632]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-2xl">bolt</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold leading-tight text-[#111418] dark:text-white">Instant Issuance</h3>
                            <p className="text-[#637588] dark:text-[#9ba8b8]">Get your card details immediately after payment. No waiting days for approval.</p>
                        </div>
                    </div>
                    {/* Feature 2 */}
                    <div className="group flex flex-col gap-4 rounded-2xl border border-[#e5e7eb] bg-white p-8 transition-all hover:border-primary/50 hover:shadow-lg dark:border-[#2a333d] dark:bg-[#1a2632]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-2xl">savings</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold leading-tight text-[#111418] dark:text-white">Low Fees</h3>
                            <p className="text-[#637588] dark:text-[#9ba8b8]">Competitive exchange rates close to market value and minimal transaction fees.</p>
                        </div>
                    </div>
                    {/* Feature 3 */}
                    <div className="group flex flex-col gap-4 rounded-2xl border border-[#e5e7eb] bg-white p-8 transition-all hover:border-primary/50 hover:shadow-lg dark:border-[#2a333d] dark:bg-[#1a2632]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-2xl">shield_lock</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold leading-tight text-[#111418] dark:text-white">Secure via Stripe</h3>
                            <p className="text-[#637588] dark:text-[#9ba8b8]">Your financial data is protected by industry-leading security and encryption.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
