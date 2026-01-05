import React from 'react';
import VisualSide from './components/VisualSide';
import LoginHeader from './components/LoginHeader';
import LoginForm from './components/LoginForm';
import SocialButtons from './components/SocialButtons';
import LoginFooter from './components/LoginFooter';

export default function LoginScreen() {
    return (
        <div className="flex min-h-screen w-full">
            <VisualSide />
            {/* Right Side: Login Form */}
            <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-white dark:bg-background-dark relative">
                <div className="mx-auto w-full max-w-sm lg:w-[420px]">
                    <LoginHeader />
                    <LoginForm />
                    <SocialButtons />
                    <LoginFooter />
                </div>
            </div>
        </div>
    );
}
