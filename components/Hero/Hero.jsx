"use client"
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';

const Hero = () => {
    const slides = useMemo(() => ([
        {
            id: 's24',
            brand: 'SAMSUNG',
            title: 'Galaxy S24 Ultra 5G',
            description:
                'Galaxy AI is here | Pro–grade camera, seamless 5G, and revolutionary AI – Redefine possibilities.',
            cta: 'Buy Now $899',
            img: '/products/s24-ultra.png',
            imgWidth: 306,
            imgHeight: 314,
        },
        {
            id: 'drone',
            brand: 'DJI',
            title: 'Mini 4 Pro Drone',
            description:
                '4K/60fps HDR video, omnidirectional obstacle sensing, and extended range in a compact body.',
            cta: 'Shop Drone',
            img: '/products/drone.png',
            imgWidth: 360,
            imgHeight: 260,
        },
        {
            id: 'speaker',
            brand: 'BOSE',
            title: 'SoundLink Revolve+',
            description:
                'Deep, loud, jaw‑dropping sound with 360° coverage and water‑resistant design.',
            cta: 'Shop Speakers',
            img: '/products/speaker.png',
            imgWidth: 340,
            imgHeight: 260,
        },
    ]), []);

    const [active, setActive] = useState(0);
    const timerRef = useRef(null);

    useEffect(() => {
        startAutoplay();
        return stopAutoplay;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active]);

    const startAutoplay = () => {
        stopAutoplay();
        timerRef.current = setTimeout(() => {
            setActive((prev) => (prev + 1) % slides.length);
        }, 5000);
    };

    const stopAutoplay = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };

    const current = slides[active];

    return (
        <section className="w-full lg:px-[80px] md:px-[50px] px-[16px] lg:py-[80px] py-[16px]">
            <div className="max-w-[1440px] mx-auto grid lg:grid-cols-[1fr,420px] md:grid-cols-[1fr,360px] grid-cols-1 gap-6">
                {/* Left: Primary Banner */}
                <div className="relative w-full rounded-2xl bg-dark overflow-hidden">
                    <div 
                        className="h-full w-full px-8 md:px-12 py-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
                        onMouseEnter={stopAutoplay}
                        onMouseLeave={startAutoplay}
                    >
                        {/* Text */}
                        <div className="max-w-xl">
                            <p className="text-gray-400 text-xs tracking-widest">{current.brand}</p>
                            <h1 className="mt-3 text-white text-[28px] md:text-[36px] leading-tight font-semibold">
                                {current.title}
                            </h1>
                            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                                {current.description}
                            </p>
                            <button className="mt-7 inline-flex items-center justify-center rounded-lg bg-white text-gray-900 text-sm font-semibold px-5 py-3 shadow">
                                {current.cta}
                            </button>
                        </div>

                        {/* Phone Image */}
                        <div className="">
                            <Image
                                height={current.imgHeight}
                                width={current.imgWidth}
                                src={current.img}
                                alt={current.title}
                                className="object-contain object-center"
                                priority
                            />
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                aria-label={`Go to slide ${idx + 1}`}
                                onClick={() => setActive(idx)}
                                className={`h-[3px] w-6 rounded-full transition-colors ${
                                    active === idx ? 'bg-white' : 'bg-white/30 hover:bg-white/60'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right: Two stacked cards */}
                <div className="grid grid-rows-2 gap-6">
                    {/* Top card - Camera */}
                    <div className="relative rounded-xl bg-secondary border border-gray-100 p-6 flex items-center justify-between overflow-hidden">
                        <div className="z-[1]">
                            <p className="text-[11px] uppercase tracking-widest text-gray-500 font-medium">XIAOMI</p>
                            <h3 className="mt-2 text-[#374151] text-[18px] font-semibold leading-snug">
                                Smart Security
                                <br />
                                Home Camera
                            </h3>
                            <button className="mt-4 inline-flex items-center justify-center rounded-md bg-primary text-white text-xs font-semibold px-4 py-2">
                                Shop Now
                            </button>
                        </div>
                        <div className="relative w-[140px] h-[140px] md:w-[160px] md:h-[160px]">
                            <Image
                                src="/products/security-camera.png"
                                alt="Smart Security Home Camera"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Bottom card - Watch */}
                    <div className="relative rounded-xl bg-secondary border border-gray-100 p-6 flex items-center justify-between overflow-hidden">
                        <div className="z-[1]">
                            <p className="text-[11px] uppercase tracking-widest text-gray-500 font-medium">REDMI</p>
                            <h3 className="mt-2 text-[#374151] text-[18px] font-semibold leading-snug">
                                Smart Watch
                                <br />
                                5 lite
                            </h3>
                            <button className="mt-4 inline-flex items-center justify-center rounded-md bg-primary text-white text-xs font-semibold px-4 py-2">
                                Shop Now
                            </button>
                        </div>
                        <div className="relative w-[160px] h-[140px] md:w-[180px] md:h-[160px]">
                            <Image
                                src="/products/smart-watch.png"
                                alt="Smart Watch 5 lite"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;