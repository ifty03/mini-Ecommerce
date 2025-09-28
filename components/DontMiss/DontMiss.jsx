import React from 'react';
import Image from 'next/image';

const DontMiss = () => {
    return (
        <section className="w-full lg:px-[44px] md:px-[30px] px-[16px] lg:py-[44px] py-[44px]">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Panel - Light Blue Handbag */}

                    <div className=" w-full flex items-center justify-center">
                        <Image
                            src="/products/light-blue-hand-bag.png"
                            alt="Light Blue Handbag"
                            width={437}
                            height={465}
                            className="object-contain"
                        />
                    </div>

                    {/* Center Panel - Promotional Banner */}
                    <div className="bg-secondary rounded-xl p-8 flex flex-col items-center justify-center text-center h-[455px]">
                        <div className="">

                            <h3 className="text-4xl font-semibold text-[#1F2937] ">Don't Miss Out</h3>
                            <h3 className="text-4xl font-semibold text-[#1F2937]">50% OFF</h3>
                            <p className="text-gray-600 text-sm max-w-xs mt-4">
                                Get 50% Off - Limited Time Only<br />
                                Refresh your wardrobe with modern essentials.
                            </p>
                            <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors mt-8">
                                Shop now
                            </button>
                        </div>
                    </div>

                    {/* Right Panel - Dark Red Handbag */}

                    <div className=" w-full flex items-center justify-center">
                        <Image
                            src="/products/lather-hand-bag.png"
                            alt="Dark Red Handbag"
                            width={437}
                            height={465}
                            className="object-contain"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DontMiss;