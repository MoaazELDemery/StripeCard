import React from 'react';

export default function UseCasesSection() {
    return (
        <section className="px-6 py-16 lg:px-20">
            <div className="mx-auto max-w-[1280px]">
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight text-[#111418] dark:text-white">Unlock Global Shopping</h2>
                    <a className="text-sm font-bold text-primary hover:underline" href="#">View all partners</a>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:h-[400px] lg:grid-cols-4">
                    <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 lg:col-span-2 lg:row-span-2 group cursor-pointer">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            data-alt="Person paying online with a credit card on a laptop"
                            style={{
                                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-Djrvf3Jvw00OMEumWy6_-vSKja2ppfQrjxpLzxEpvYzmmdfacXXVPfOf-Liic-DC6EpuRA4IR0m-PYZoK4Y4p3MMRWyeh6oKl_1wSwQCUR6OwDLpBbNqw2J7IxRT1ASevo8dHvzJQ5HsUkY0GbHY7dIeGGicLkU0uqL7nWC4SrU-R38uE4sB2zoe1_TGvpX9G6rvEayCG4nz3dUhYyFMlvipL3gxOHtrPXnWBVL0eQKEudiKHi44NDfkCVkzWgEnaqewRfOjwQ")'
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-xl font-bold text-white">Shop Online</h3>
                            <p className="text-gray-200 text-sm mt-1">Amazon, eBay, and more.</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 lg:col-span-1 lg:row-span-2 group cursor-pointer">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            data-alt="Smartphone displaying streaming services icons"
                            style={{
                                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwdheOzqkUw2Gf6Tmgun9nZKmMNuDOnMXcnXuapeown64Y25aJ4nlxlsU0_HGNQeNHCNxh6z8Mq4jIC7iMFOHxUkoDo0pM9ENRtQjgTzXQWG4WwjaYgZn3pa49XvAOrqzuTJN_J2xk07M7UmpVSDv1YwevhZV7bN2fsoodvXSm8K31R1Kx776fnzCltFQbbKwA-o88MJHyV4ApAycE6gOHfceJXiPAaS_EFjfaooXYxPvwFHrD8heT_s3OFzp7tp6GrMQEBfmV-Q")'
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-xl font-bold text-white">Subscriptions</h3>
                            <p className="text-gray-200 text-sm mt-1">Netflix, Spotify, Adobe.</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 h-48 lg:h-auto lg:col-span-1 lg:row-span-2 group cursor-pointer">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            data-alt="Abstract visualization of digital software services"
                            style={{
                                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKoyvWZRfk65kbkIwfSeSvuCpZ43Gd-nH95h1AMC4BNET4n_d2jyHO1Ajdwd6_uVZdia_Pt3zPSYfDLAkrg8iZIDGVBOGjOudQXIgQgfgf5BCHyu5g8mFtbwoISClWSYdRTgsW6g4376THYOyfhatcW17ERIFJlSTkV_q8pyl4b5fZDGm0gks2y4cdZkrx95nSIlv4Ia7Nny4dx6V1210wVKvH9tx3qOBUzw434EUOCYoQigulhMv0pkm9m8kgMj8FF5nmhXrhgA")'
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-xl font-bold text-white">Software &amp; SaaS</h3>
                            <p className="text-gray-200 text-sm mt-1">Hosting, Domains, Tools.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
