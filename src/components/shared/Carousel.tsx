'use client'

import React, { useState, useRef, useEffect } from 'react';

const CarouselItem = ({ children }: { children: React.ReactElement }) => {

}

const Carousel = ({ children }: { children: React.ReactElement[] }) => {

    // ref
    const carouselRef = useRef(null);

    // state
    const [isOverflowing, setIsOverflowing] = useState(false)

    const checkOverflow = () => {

        const { current } = carouselRef as React.RefObject<HTMLDivElement>
        if (!current) return

        setIsOverflowing(current.scrollWidth > current.clientWidth)

    };

    useEffect(() => {

        checkOverflow()

        window.addEventListener('resize', checkOverflow)

        return () => {
            window.removeEventListener('resize', checkOverflow)
        }

    }, [])

    const scroll = (direction: string) => {
        if (carouselRef.current) {
            const { current } = carouselRef as React.RefObject<HTMLDivElement>;
            if (!current) return; // Add this line to handle the case when current is null
            const scrollAmount = current.scrollWidth / children.length; // Adjust based on your item width or desired scroll amount
            const newScrollPosition = direction === 'left' ? current.scrollLeft - scrollAmount : current.scrollLeft + scrollAmount
            current.scrollLeft = newScrollPosition
        }
    };

    return (
        <div className='relative w-full'>
            <div className="carousel" ref={carouselRef} style={{ display: 'flex', overflowX: 'auto' }}>
                <div className={`${isOverflowing ? "flex" : "hidden"} absolute  justify-between transform -translate-y-1/2 left-5 top-1/2`}><button className="btn btn-circle btn-sm text-xl opacity-75" onClick={() => scroll('left')}>❮</button></div>

                {children}

                <div className={`${isOverflowing ? "flex" : "hidden"} absolute justify-between transform -translate-y-1/2 right-5 top-1/2`}><button className="btn btn-circle btn-sm text-xl opacity-75" onClick={() => scroll('right')}>❯</button></div>
            </div>
        </div>
    );
};

export default Carousel;