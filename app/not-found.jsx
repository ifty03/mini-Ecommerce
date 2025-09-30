'use client'

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NotFound = () => {
    const router = useRouter();
    const handleGoBack = () => {
        router.back();
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-30">
                <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
                    {Array.from({ length: 144 }).map((_, i) => (
                        <div
                            key={i}
                            className={`border border-gray-200 ${Math.random() > 0.85 ? 'bg-gray-300' : 'bg-transparent'
                                }`}
                        />
                    ))}
                </div>
            </div>


            <div className="relative z-10 text-center max-w-md mx-auto px-6">
                <h1 className="text-8xl md:text-9xl font-bold text-gray-800 mb-4">
                    404
                </h1>

                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                    Page Not Found
                </h2>

                <p className="text-gray-600 text-base  mb-8 leading-relaxed">
                    Don't worry, you can head back to the homepage or use the navigation menu to find what you need
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={handleGoBack}
                        className="flex items-center justify-center gap-2 px-6 py-2 border border-gray-400 text-gray-700 bg-white rounded-lg hover:bg-gray-50 transition-colors font-medium"
                    >
                        <span className="text-lg">‹</span>
                        <span>Go back</span>
                    </button>


                    <Link
                        href="/"
                        className="flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                        Back to home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;