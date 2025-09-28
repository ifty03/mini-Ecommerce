import React from 'react';
import Image from 'next/image';

const categories = [
    {
        title: 'DSLR Camera',
        count: 50,
        img: '/products/camera.png',
    },
    {
        title: 'Wireless Earbuds',
        count: 45,
        img: '/products/airbards.png',
    },
    {
        title: 'Wristwatch',
        count: 57,
        img: '/products/watch.png',
    },
    {
        title: 'SkyFlyer Drone',
        count: 86,
        img: '/products/drone.png',
    },
    {
        title: 'Smart Speaker',
        count: 38,
        img: '/products/speaker.png',
    },
];

const ShopByCategory = () => {
    return (
        <section className="w-full lg:px-[80px] md:px-[50px] px-[16px] lg:py-[100px] py-[54px] bg-secondary">
            <div className="max-w-[1440px] mx-auto lg:px-5">
                <div className="mb-8 md:mb-10">
                    <h2 className="text-[28px] md:text-[36px] font-semibold text-gray-900">Shop by Category</h2>
                    <p className="mt-3 text-gray-500 text-sm md:text-base max-w-3xl">
                        Explore our curated selection of products across premium categories, from
                        everyday essentials to exclusive limited collections.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {categories.map((cat) => (
                        <div key={cat.title} className="rounded-xl bg-white border border-gray-100">
                            <div className="p-2">
                                <div className=" rounded-lg bg-white flex items-center justify-center overflow-hidden">
                                    <Image
                                        src={cat.img}
                                        alt={cat.title}
                                        width={450}
                                        height={250}
                                        className={``}
                                    />
                                </div>
                            </div>
                            <div className="px-5 pb-5 text-center mt-3">
                                <h3 className="text-[15px] font-semibold text-gray-800">{cat.title}</h3>
                                <p className="mt-1 text-[13px] text-gray-500">{cat.count} Products</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShopByCategory;