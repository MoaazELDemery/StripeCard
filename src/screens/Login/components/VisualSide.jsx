import React from 'react';

export default function VisualSide() {
    return (
        <div className="relative hidden w-0 flex-1 lg:block bg-[#101922]">
            <div
                className="absolute inset-0 h-full w-full bg-cover bg-center opacity-60 mix-blend-overlay"
                data-alt="Abstract 3D rendering of digital payment network and currency exchange"
                style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQjwS1RJHdlry4_xSSpopENedSutGKMNiapE1rrv2l5185Kg3uhup6EQ-udEni2UzCKzhb_pBM6feEHq22waG2HfkAPm9-D2l5Hw3uP_dLjE8TApPGiQWt9GubvAByUXWX5g-elGfF59tzKpI5-s6pUEGG4LY25iNLU7OuHvQCvwX1sYnCnw8FGNhEDHooyBaaTYLM_xv4tOgVsoyyMGd1fYoR2rZZeiXVBpyucAYbCd40HgpcIJf77W34cGRO-RXv1FH-S30qmQ')"
                }}
            >
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#137fec]/20 to-[#101922]"></div>
            <div className="absolute bottom-0 left-0 right-0 p-16 flex flex-col gap-6 z-10">
                <div className="size-16 bg-primary/90 backdrop-blur-md rounded-xl flex items-center justify-center 
                text-white shadow-xl ring-1 ring-white/20">
                    <span className="material-symbols-outlined text-[32px]">currency_exchange</span>
                </div>
                <div className="space-y-4 max-w-lg">
                    <p className="text-5xl font-black text-white leading-[1.1] tracking-[-0.033em]">
                        Global Payments, <br /> Local Currency
                    </p>
                    <p className="text-xl text-gray-300 font-medium leading-relaxed">
                        Seamlessly convert EGP to USD for international spending. Secure, fast, and built for modern business.
                    </p>
                </div>
                {/* Trust indicator */}
                <div className="flex items-center gap-3 pt-4">
                    <div className="flex -space-x-3">
                        <img
                            alt="User 1"
                            className="inline-block h-10 w-10 rounded-full ring-2 ring-[#101922] object-cover"
                            data-alt="Portrait of a satisfied customer"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxObeKx7bjmtxnUmb6HRymuwAO9zHkOsgRhdxit2nDDN36fPoqR5coIPD-DClAmUmkZTgCGGe0ZWTB0UpwLQqTkKbI8NcuBVgqEh0LmpYasRVoky7af7WMMN_HabHLwNS44Cwh4Js3y51LqMXdoP0UxW9HrpPC5bZYE_vsCQq8Hc8ZntkpmIHSlWtlVul5IgzZLSPOG5l2DlXlRA0ePOblOZ03qHRaiGx0f15SCbFRR27Cmv8vyZeaZpbASTPA24sm9-PFXJsH8Q"
                        />
                        <img
                            alt="User 2"
                            className="inline-block h-10 w-10 rounded-full ring-2 ring-[#101922] object-cover"
                            data-alt="Portrait of a satisfied customer"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZCVMMpH3Asx-jgpscTnlLGHBIsYwKzP7WpyZ0E-wS0x7dG1y2xtVWOQAEF3zwkQwYr5NFUbyxseU1bpDS8SxZgWvc8C71uKPDKovyj5U_6rab2GaZJIaGvqazTN07IbIyOy4Zot3GSZbq5kVtCFCcq3lRQEXvbbfW1WW_1bCYHDqRnwLh4xacDKwnXfoH2MHe0KzWqsRS_MyoTBUpJ7jsGHvOgKhrAo4xRAlYbZqEvCeN1XQjhY80g7tqXiksFOTHhjQWwxes_Q"
                        />
                        <img
                            alt="User 3"
                            className="inline-block h-10 w-10 rounded-full ring-2 ring-[#101922] object-cover"
                            data-alt="Portrait of a satisfied customer"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoHUpX4bw6UxeDLfzhbz5dM2QPhVoH82GBJAbJaQrhJzAldZqa_gUucC2fmiEENJsCWGVVyR0zsPRy7vbgISQQ_09GMo3xww-z407uW2dhHCw4H7LjdlBNlpgukKEaS78y87kiJhXnGj7rMUOesvKcmRLQLRu9nQP8uGfBXJv-YFo7gwje8GE6pPL85GWfdOo-nPnwFNNpXAMuy2xyXfpIRdHEGLPu1cXQeKuKCQvBy8tSZY4RPd_64lv6pMXqcGguijbEe33fnQ"
                        />
                    </div>
                    <p className="text-sm font-medium text-white/80">Trusted by 10,000+ users</p>
                </div>
            </div>
        </div>
    );
}
