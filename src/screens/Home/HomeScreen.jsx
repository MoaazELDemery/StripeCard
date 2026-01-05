import React from 'react';
import TopNavBar from './components/TopNavBar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import UseCasesSection from './components/UseCasesSection';
import Footer from './components/Footer';

export default function HomeScreen() {
    return (
        <div className="relative flex min-h-screen w-full flex-col group/design-root">
            <TopNavBar />
            <main className="flex-1">
                <HeroSection />
                <FeatureSection />
                <UseCasesSection />
            </main>
            <Footer />
        </div>
    );
}
