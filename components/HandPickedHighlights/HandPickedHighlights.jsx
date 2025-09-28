import React from 'react';
import Image from 'next/image';

const products = [
    {
        id: 1,
        title: 'White Jacket',
        description: 'Lightweight & water-resistant',
        price: '$249.00',
        image: '/products/jacket.png',
        badge: null,
        wishlist: false,
        buttonStyle: 'outline'
    },
    {
        id: 2,
        title: 'Tote Bag',
        description: 'Spacious & stylish',
        price: '$249.00',
        image: '/products/bag.png',
        badge: 'Hot Item',
        wishlist: false,
        buttonStyle: 'outline'
    },
    {
        id: 3,
        title: 'Beige Cap',
        description: 'Soft breathable fabric',
        price: '$249.00',
        image: '/products/cap.png',
        badge: null,
        wishlist: true,
        buttonStyle: 'primary'
    },
    {
        id: 4,
        title: 'Qua Watch',
        description: 'Modern rubber sole',
        price: '$249.00',
        image: '/products/qua-watch.png',
        badge: null,
        wishlist: false,
        buttonStyle: 'outline'
    }
];

const HandPickedHighlights = () => {
    return (
        <section className="w-full lg:px-[80px] md:px-[50px] px-[16px] lg:py-[100px] py-[40px]">
            <div className="max-w-[1440px] mx-auto lg:px-5">
                {/* Header */}
                <div className="mb-10 md:mb-14 text-center">
                    <h2 className="text-[28px] md:text-[36px] font-semibold text-gray-900">Handpicked Highlights</h2>
                    <p className="mt-3 text-gray-500 text-sm md:text-base max-w-xl mx-auto">
                        There are many variations of available but the majority have suffered alteration in some form.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="relative group">
                            {/* Badge */}
                            {product.badge && (
                                <div className="absolute top-3 left-3 z-10">
                                    <span className="bg-red-50 text-[#B91C1C] font-semibold text-xs px-2 py-1 rounded-full">
                                        {product.badge}
                                    </span>
                                </div>
                            )}

                            {/* Wishlist Icon */}
                            {product.wishlist && (
                                <div className="absolute top-3 right-3 z-10">
                                    <button className="p-1 bg-white/80 rounded-full hover:bg-white transition-colors">
                                        <Image
                                            src="/icons/wishlist.png"
                                            alt="Wishlist"
                                            width={16}
                                            height={16}
                                            className="w-4 h-4"
                                        />
                                    </button>
                                </div>
                            )}

                            {/* Product Image */}
                            <div className=" bg-white rounded-lg flex items-center justify-center overflow-hidden mb-4">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={450}
                                    height={326}
                                    className="object-contain"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
                                    <span className="text-lg font-semibold text-gray-900">{product.price}</span>
                                </div>
                                <p className="text-sm text-gray-500">{product.description}</p>

                            </div>

                            {/* Add to Cart Button */}
                            <button className={`w-full mt-4 py-3 px-4 rounded-md font-medium text-sm flex items-center justify-center gap-2 transition-colors border hover:bg-primary hover:text-white duration-300`}>
                                <Image
                                    src="/icons/cart.png"
                                    alt="Cart"
                                    width={16}
                                    height={16}
                                    className="w-4 h-4"
                                />
                                Add to cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HandPickedHighlights;