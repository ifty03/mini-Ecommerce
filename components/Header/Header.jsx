"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="w-full bg-white lg:px-[112px] md:px-[50px] px-[16px] border-b">
            <div className="w-full h-[80px] flex items-center justify-between gap-4 max-w-[1440px] mx-auto">
                {/* Left: Logo */}
                <div className="flex items-center gap-5 shrink-0">
                    <button
                        name='menu'
                        className='lg:hidden block'
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <Image src="/icons/menu.png" alt="menu" width={28} height={28} className="" />
                    </button>
                    <Link href="/"><Image src="/icons/logo.png" alt="Logo" width={95} height={28} className="" /></Link>
                </div>

                {/* Center: Navigation */}
                <nav className="hidden lg:flex items-center gap-7 text-primaryText font-semibold">
                    <Link href="hot" className="text-sm hover:text-gray-700 transition inline-flex items-center gap-2">
                        Deals of the Week
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-red-100 text-red-600">Hot</span>
                    </Link>
                    <Link href="new-arrival" className="text-sm hover:text-gray-700 transition">New Arrivals</Link>
                    <Link href="men" className="text-sm hover:text-gray-700 transition">Men</Link>
                    <Link href="women" className="text-sm hover:text-gray-700 transition">Women</Link>
                    <Link href="kids" className="text-sm hover:text-gray-700 transition">Kids</Link>
                    <Link href="sale" className="text-sm hover:text-gray-700 transition inline-flex items-center gap-2">
                        Sale
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">20% OFF</span>
                    </Link>
                </nav>

                {/* Right: Actions */}
                <div className="flex items-center gap-2">
                    <button aria-label="Search" className="p-1 hover:opacity-80">
                        <Image src="/icons/search.png" alt="Search" width={18} height={18} className="w-[18px] h-[18px]" />
                    </button>
                    <button aria-label="Account" className="p-1 hover:opacity-80">
                        <Image src="/icons/login-dark.png" alt="Account" width={18} height={18} className="w-[18px] h-[18px]" />
                    </button>
                    <div className="relative">
                        <button aria-label="Wishlist" className="p-1 hover:opacity-80">
                            <Image src="/icons/wishlist.png" alt="Wishlist" width={18} height={18} className="w-[18px] h-[18px]" />
                        </button>
                        <span className="absolute -top-1 -right-1 text-[10px] leading-none px-1.5 py-0.5 rounded-full bg-primary text-white font-medium">2</span>
                    </div>
                    <div className="relative">
                        <button aria-label="Cart" className="p-1 hover:opacity-80">
                            <Image src="/icons/cart.png" alt="Cart" width={18} height={18} className="w-[18px] h-[18px]" />
                        </button>
                        <span className="absolute -top-1 -right-1 font-medium text-[10px] leading-none px-1.5 py-0.5 rounded-full bg-primary text-white">3</span>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200">
                    <nav className="flex flex-col py-4 space-y-3">
                        <a
                            href="#"
                            className="px-4 py-2 text-sm font-semibold text-primaryText hover:text-gray-700 transition inline-flex items-center gap-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Deals of the Week
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-red-100 text-red-600">Hot</span>
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2 text-sm font-semibold text-primaryText hover:text-gray-700 transition"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            New Arrivals
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2 text-sm font-semibold text-primaryText hover:text-gray-700 transition"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Men
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2 text-sm font-semibold text-primaryText hover:text-gray-700 transition"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Women
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2 text-sm font-semibold text-primaryText hover:text-gray-700 transition"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Kids
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2 text-sm font-semibold text-primaryText hover:text-gray-700 transition inline-flex items-center gap-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Sale
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">20% OFF</span>
                        </a>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default Header;