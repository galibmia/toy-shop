import React, { useEffect, useState } from 'react';

const WhatPeopleSay = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        { id: 1, text: "Te utroque inermis est petentium adolescens reformidans.", author: "Kevin Wels, USA" },
        { id: 2, text: "Te utroque inermis est petentium adolescens reformidans.", author: "Galib Mia, Bangladesh" },
        { id: 3, text: "Summo hendrerit signiferumque ne vel, est utamur interpretaris.", author: "Galib Mia, Bangladesh" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 3000); // Change item every 3 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [items.length]);

    return (
        <div className="bg-[#f0f7d4] py-20">
            <p className="text-gray-500 text-center mb-5 text-md uppercase tracking-wide">What people say about us</p>
            <div className="relative">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-1000"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {items.map((item, index) => (
                            <div key={item.id} className="w-full flex-shrink-0 px-4 text-center">
                                <h1 className="text-2xl md:text-3xl font-semibold">{`"${item.text}"`}</h1>
                                <p className="mt-2 text-lg text-gray-600">{item.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute bottom-0 top-20 left-1/2 transform -translate-x-1/2  flex space-x-2 pb-4">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`mt-5 w-3 h-3 rounded-full border border-gray-800 transition-colors duration-300 ${currentIndex === index ? 'bg-gray-800' : ''}`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhatPeopleSay;
