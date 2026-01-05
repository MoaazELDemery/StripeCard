import React from 'react';

export default function SignUpVisual() {
    return (
        <div className="relative hidden w-full flex-col justify-center overflow-hidden 
        bg-primary/5 dark:bg-[#1a2632]/50 p-12 lg:flex lg:w-5/12 xl:w-1/2">
            {/* Abstract Background Shapes */}
            <div className="absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-3xl"></div>
            <div className="relative z-10 mx-auto flex max-w-lg flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-black leading-tight tracking-tight text-[#111418] dark:text-white xl:text-5xl">
                        Pay in EGP. <br />
                        <span className="text-primary">Spend in USD.</span>
                    </h1>
                    <p className="text-lg font-medium text-[#617589] dark:text-gray-300">
                        Create secure and instant virtual cards for global spending without the exchange rate hassle.
                    </p>
                </div>
                <div className="w-full overflow-hidden rounded-2xl shadow-2xl shadow-primary/20">
                    <div
                        className="aspect-[4/3] w-full bg-cover bg-center"
                        data-alt="abstract colorful wavy holographic gradient background"
                        style={{
                            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDiJuASL1fQ9ydC8dzdaFicmU9zHpPH732HDzsIFrJDWhiVS2lHip7PckR0EMo3H2q7rOMN1LTaBzL_d0cKf_zzWxsqXV2r2DA2xCci-2M1edt4g6OkJDT_dH-g4U2SJTbZPKspRfD74wRl766oQa9OcOC_yOpJWfmt4Ph-OsbGaok73Z6z33izdp8atweIijiwYdiw3k43tE7b6h0zXQ7lKQIR35k3QSAc2oQuR7_tsxoxhyZmesrhw5bPIPywDlz14aVsc1cUAA')"
                        }}
                    >
                    </div>
                </div>
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 rounded-full bg-white dark:bg-[#1a2632] px-4 py-2 shadow-sm">
                        <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                        <span className="text-sm font-bold text-[#111418] dark:text-white">Instant Activation</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-white dark:bg-[#1a2632] px-4 py-2 shadow-sm">
                        <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                        <span className="text-sm font-bold text-[#111418] dark:text-white">Low Fees</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-white dark:bg-[#1a2632] px-4 py-2 shadow-sm">
                        <span className="material-symbols-outlined text-primary text-xl">lock</span>
                        <span className="text-sm font-bold text-[#111418] dark:text-white">Secure by Stripe</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
