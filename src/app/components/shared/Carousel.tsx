'use client'

import React, { useState, useRef } from 'react';

const Carousel = () => {
    const images = [
        "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
        "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
        "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
        "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
        "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
        "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg",
        "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
    ];

    const carouselRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scroll = (direction: string) => {
        if (carouselRef.current) {
            const { current } = carouselRef as React.RefObject<HTMLDivElement>;
            if (!current) return; // Add this line to handle the case when current is null
            const scrollAmount = 300; // Adjust based on your item width or desired scroll amount
            const newScrollPosition = direction === 'left' ? current.scrollLeft - scrollAmount : current.scrollLeft + scrollAmount;
            current.scrollLeft = newScrollPosition;
            setScrollPosition(newScrollPosition);
        }
    };

    return (
        <div className='relative'>
        <div className="carousel rounded-box" ref={carouselRef} style={{ display: 'flex', overflowX: 'auto' }}>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-10 top-1/2"><button className="btn btn-circle text-xl" onClick={() => scroll('left')}>❮</button></div>
            {images.map((image, index) => (
                <div id={`carousel-item-${index}`} key={index} className="carousel-item" style={{ flex: '0 0 auto' }}>
                    <img src={image} alt="carousel" />
                </div>
            ))}
            <div className="absolute flex justify-between transform -translate-y-1/2 right-10 top-1/2"><button className="btn btn-circle text-xl" onClick={() => scroll('right')}>❯</button></div>
        </div>
        </div>
    );
};

export default Carousel;