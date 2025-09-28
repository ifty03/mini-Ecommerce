import React from 'react';
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';



const Footer = () => {
    return (
        <footer className="w-full bg-secondary">
            {/* Main Footer Content */}
            <div className="w-full lg:px-[80px] md:px-[50px] px-[16px] py-12">
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
                        {/* Company Info & Social Media */}
                        <div className="">
                            {/* Logo */}
                            <div className="flex items-center pt-2">

                                <Image src="/icons/logo.png" alt="Logo" width={95} height={28} className="" />
                            </div>

                            {/* Description */}
                            <p className="text-[#6B7280] text-sm leading-relaxed mt-5">
                                TailGrids comes with all the essential UI components you need to create beautiful websites based on Tailwind CSS.
                            </p>

                            {/* Social Media */}
                            <div className="space-y-2 mt-10">
                                <p className="text-[#6B7280] text-sm">Follow us on</p>
                                <div className="flex items-center gap-3">
                                    <button className="">
                                        <FaFacebook className='text-xl text-[#9CA3AF] hover:text-[#374151]' />
                                    </button>
                                    <button className="">
                                        <FaXTwitter className='text-xl text-[#9CA3AF] hover:text-[#374151]' />
                                    </button>
                                    <button className="">
                                        <IoLogoInstagram className='text-xl text-[#9CA3AF] hover:text-[#374151]' />
                                    </button>
                                    <button className="">
                                        <FaLinkedin className='text-xl text-[#9CA3AF] hover:text-[#374151]' />
                                    </button>

                                </div>
                            </div>
                        </div>

                        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-10'>
                            {/* Clothing Navigation */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900">Clothing</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-[#6B7280] text-sm hover:text-gray-900 transition-colors">Tops</a></li>
                                    <li><a href="#" className="text-[#6B7280] text-sm hover:text-gray-900 transition-colors">Tops & Blouses</a></li>
                                    <li><a href="#" className="text-[#6B7280] text-sm hover:text-gray-900 transition-colors">Dresses</a></li>
                                    <li><a href="#" className="text-[#6B7280] text-sm hover:text-gray-900 transition-colors">Outerwear</a></li>
                                    <li><a href="#" className="text-[#6B7280] text-sm hover:text-gray-900 transition-colors">Accessories</a></li>
                                    <li><a href="#" className="text-[#6B7280] text-sm hover:text-gray-900 transition-colors">New Arrivals</a></li>
                                </ul>
                            </div>

                            {/* Shoes Navigation */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900">Shoes</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-[#6B7280] text-sm hover:text-gray-900 transition-colors">Hills shoed</a></li>
                                    <li><a href="#" className="text-[#6B7280] text-sm hover:text-gray-900 transition-colors">Running Shoes</a></li>
                                    <li><a href="#" className="text-[#6B7280] text-sm hover:text-gray-900 transition-colors">Sandals</a></li>
                                    <li><a href="#" className="text-[#6B7280] text-sm hover:text-gray-900 transition-colors">Ballet Pumps</a></li>
                                    <li><a href="#" className="text-[#6B7280] text-sm hover:text-gray-900 transition-colors">Slingback</a></li>
                                    <li>
                                        <a href="#" className="text-[#6B7280] text-sm hover:text-gray-900 transition-colors">
                                            Sale <span className="text-red-700 text-xs ml-1">Hot Item</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900">Newsletter</h3>
                            <p className="text-[#6B7280] text-sm">
                                Signup for latest news and insights from TailGrids
                            </p>
                            <div className="space-y-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                />
                                <button className="w-full bg-primary text-white py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Middle Section */}
            <div className="w-full lg:px-[80px] md:px-[50px] px-[16px] py-6 bg-white">
                <div className="max-w-[1440px] mx-auto">
                    {/* Desktop Layout */}
                    <div className="hidden lg:grid grid-cols-4 gap-8">
                        {/* Contact Info */}
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                                <Image src="/icons/support.png" alt="Support" width={16} height={16} className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs">8:30 AM - 10:30 PM</p>
                                <p className="text-gray-800 font-semibold">+16283998030</p>
                            </div>
                        </div>

                        {/* App Download */}

                            <div>
                            <h4 className="font-semibold text-gray-800">Download Now on</h4>
                            <p className="text-gray-500 text-xs mt-1">Free home delivery on your first purchase</p>
                            </div>
                            <div className="flex items-center gap-2 mt-3">
                                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                                    <Image src="/icons/app-store.png" alt="App Store" width={87} height={21} className="" />
                                </button>
                                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                                    <Image src="/icons/play-store.png" alt="Google Play" width={87} height={21} className="" />
                                </button>
                            </div>
                        

                        {/* Payment Methods */}
                        <div>
                            <span className="text-gray-500 text-sm whitespace-nowrap">We Support</span>
                            <div className="flex items-center gap-3 mt-2">
                                <Image src="/icons/mastercard.png" alt="Mastercard" width={29} height={18} />
                                <Image src="/icons/visa.png" alt="Visa" width={33} height={10}  />
                                <Image src="/icons/paypal.png" alt="PayPal" width={44} height={10} />
                                <Image src="/icons/amex.png" alt="American Express" width={42} height={15}/>
                                <Image src="/icons/westernunion.png" alt="Western Union" width={51} height={13}/>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="lg:hidden space-y-8">
                        {/* Contact Info - Centered */}
                        <div className="text-center">
                            <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center mx-auto mb-3">
                                <Image src="/icons/support.png" alt="Support" width={16} height={16} className="w-4 h-4" />
                            </div>
                            <p className="text-gray-500 text-xs">8:30 AM - 10:30 PM</p>
                            <p className="text-gray-800 font-semibold">+16283998030</p>
                        </div>

                        {/* Payment Methods - Centered */}
                        <div className="text-center">
                            <span className="text-gray-500 text-sm">We Support</span>
                            <div className="flex items-center justify-center gap-3 mt-2">
                                <Image src="/icons/mastercard.png" alt="Mastercard" width={29} height={18} />
                                <Image src="/icons/visa.png" alt="Visa" width={33} height={10}  />
                                <Image src="/icons/paypal.png" alt="PayPal" width={44} height={10} />
                                <Image src="/icons/amex.png" alt="American Express" width={42} height={15}/>
                                <Image src="/icons/westernunion.png" alt="Western Union" width={51} height={13}/>
                            </div>
                        </div>

                        {/* App Download - Centered */}
                        <div className="text-center">
                            <h4 className="font-semibold text-gray-800">Download Now on</h4>
                            <p className="text-gray-500 text-xs mt-1">Free home delivery on your first purchase</p>
                            <div className="flex items-center justify-center gap-2 mt-3">
                                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                                    <Image src="/icons/app-store.png" alt="App Store" width={87} height={21} className="" />
                                </button>
                                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                                    <Image src="/icons/play-store.png" alt="Google Play" width={87} height={21} className="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Bottom Section */}
            <div className="w-full lg:px-[80px] md:px-[50px] px-[16px] py-6 bg-white">
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-[#6B7280] text-sm md:order-1 order-2">© Copyright 2025 - TailGrids.</p>
                        <div className="md:order-2 order-1 space-y-4">
                            <Link href="#" className="text-[#6B7280] text-sm hover:text-gray-900 transition-colors block md:inline text-center">Refund Policy</Link>
                            <Link href="#" className="text-[#6B7280] text-sm hover:text-gray-900 transition-colors block md:inline text-center">Terms of Services</Link>
                            <Link href="#" className="text-[#6B7280] text-sm hover:text-gray-900 transition-colors block md:inline text-center">Shipping policy</Link>
                        </div>
                       
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;