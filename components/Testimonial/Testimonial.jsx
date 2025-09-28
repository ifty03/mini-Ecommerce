import React from 'react';
import Image from 'next/image';

const testimonials = [
    {
        id: 1,
        name: 'Kathryn Murphy',
        title: 'Ceo',
        quote: 'Working with this team has been a game-changer — their attention to detail, creativity, and commitment to deadlines exceeded every expectation I had.',
        avatar: '/products/jacket.png'
    },
    {
        id: 2,
        name: 'Theresa Webb',
        title: 'Web Designer',
        quote: 'What impressed me most wasn\'t just the design, but how deeply they cared about delivering something that made a difference for our users.',
        avatar: '/products/bag.png'
    },
    {
        id: 3,
        name: 'Jerome Bell',
        title: 'Marketing Coordinator',
        quote: 'From the initial consultation to the final delivery, the process was seamless and incredibly professional — I\'ve never felt more confident in a partnership.',
        avatar: '/products/cap.png'
    }
];

const StarRating = () => {
    return (
        <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
};

const Testimonial = () => {
    return (
        <section className="w-full lg:px-[80px] md:px-[50px] px-[16px] lg:py-[100px] py-[60px] bg-secondary">
            <div className="max-w-[1440px] mx-auto lg:px-5">
                {/* Header */}
                <div className="mb-12">
                    {/* Badge */}
                    <div className="inline-block">
                        <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                            Testimonial
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="mt-4 text-[28px] md:text-[36px] font-semibold text-gray-900 leading-tight">
                        Hear from Our Happy<br />Customers
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white rounded-2xl p-6  border border-gray-100">
                            {/* Star Rating */}
                            <div className="mb-4">
                                <StarRating />
                            </div>

                            {/* Quote */}
                            <blockquote className="text-gray-700 text-sm leading-relaxed mb-6">
                                "{testimonial.quote}"
                            </blockquote>

                            {/* Customer Info */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        width={40}
                                        height={40}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                                    <p className="text-gray-500 text-xs">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;