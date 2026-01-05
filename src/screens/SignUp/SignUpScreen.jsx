import React from 'react';
import TopNavigation from './components/TopNavigation';
import SignUpVisual from './components/SignUpVisual';
import SignUpForm from './components/SignUpForm';

export default function SignUpScreen() {
    return (
        <div className="flex min-h-screen flex-col">
            <TopNavigation />
            {/* Main Content (Split Screen) */}
            <main className="flex flex-1 flex-col lg:flex-row">
                <SignUpVisual />
                <SignUpForm />
            </main>
        </div>
    );
}
