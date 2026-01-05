import React from 'react';
import { Link } from 'react-router-dom';

export default function PaymentButton() {
    return (
        <Link to="/details" className="w-full bg-primary hover:bg-blue-600 active:bg-blue-700 text-white font-bold text-lg py-4 rounded-full shadow-lg shadow-primary/25 transition-all transform active:scale-[0.98] flex items-center justify-center gap-3">
            <span>Proceed to Payment</span>
            <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
    );
}
