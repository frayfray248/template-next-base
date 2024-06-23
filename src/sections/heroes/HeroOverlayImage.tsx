import React from 'react'

import Hero from '@/components/shared/containers/Hero'

import { BackgroundImageData } from '@/types/types'
const HeroOverlayImage = () => {

    const bgImage : BackgroundImageData = {
        src: '/hair-solon-backdrop.webp',
        height: 1920,
        width: 1080,
        alt: 'Hair Salon Backdrop'
    }

    return (
        <Hero bgImage={bgImage}>
            <div className="max-w-2xl">
                <h1 className="mb-5 text-6xl font-bold">Welcome to Radiant Beauty Salon</h1>
                <p className="mb-5">Experience the Art of Perfect Hair and Beauty</p>
            </div>
        </Hero>
    )
}

export default HeroOverlayImage