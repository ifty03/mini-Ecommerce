"use client"
import React from 'react';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const Topbar = () => {
    const { data: session, status } = useSession()
    if (status === 'loading') return <p>Loading...</p>

    return (
        <div className="bg-dark text-white md:h-[48px] h-[72px] lg:px-[112px] md:px-[50px] px-[16px]  flex items-center ">
            <div className="w-full max-w-[1440px] mx-auto flex md:flex-row flex-col items-center md:justify-between gap-2">
                {/* Left side - Language and Currency */}
                <div className="flex items-center space-x-6 order-2 md:order-1">
                    {/* Language Selector */}
                    <div className="flex items-center space-x-1 cursor-pointer hover:opacity-80">
                        <Image
                            src="/icons/web.png"
                            alt="Globe"
                            width={16}
                            height={16}
                            className="w-4 h-4"
                        />
                        <span className="text-sm">English</span>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>

                    {/* Currency Selector */}
                    <div className="flex items-center space-x-1 cursor-pointer hover:opacity-80">
                        <Image
                            src="/icons/USD.png"
                            alt="USD"
                            width={16}
                            height={16}
                            className="w-4 h-4"
                        />
                        <span className="text-sm">USD</span>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

                {/* Center - Flash Sale Message */}
                <div className="flex-1 text-center order-1 md:order-2">
                    <span className="text-sm font-medium">Flash Sale Live - 30% Off Everything</span>
                    {/* <button className='text-white' onClick={() => signOut()}>log out</button> */}
                </div>
                {/* Right side - Login/Register */}
                {session ? <Link href="/dashboard" className='text-white order-3'>Dashboard</Link>: <Link href={`/auth/login`} className=" items-center space-x-1 cursor-pointer hover:opacity-80 hidden md:flex order-3">
                    <Image
                        src="/icons/login.png"
                        alt="Login"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                    />
                    <span className="text-sm">Login / Register</span>
                </Link>}
            </div>
        </div>
    );
};

export default Topbar;