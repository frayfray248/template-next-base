import { getImageProps } from 'next/image'
import React from 'react'

const getBackgroundImage = (srcSet: string = '') => {
    const imageSet = srcSet
        .split(', ')
        .map((str) => {
            const [url, dpi] = str.split(' ')
            return `url("${url}") ${dpi}`
        })
        .join(', ')
    return `image-set(${imageSet})`
}

const HeroOverlayImage = () => {

    const { props: { srcSet } } = getImageProps({ alt: '', width: 1920, height: 1080, src: '/hair-solon-backdrop.webp' })

    const backgroundImage = getBackgroundImage(srcSet)

    const style = { height: '100vh', width: '100vw', backgroundImage }

    return (
        <section className="hero min-h-screen" style={style}>
            <div className="hero-overlay bg-opacity-60"></div>
            <article className="hero-content text-left text-neutral-content">
                <div className="max-w-2xl">
                    <h1 className="mb-5 text-6xl font-bold">Welcome to Radiant Beauty Salon</h1>
                    <p className="mb-5">Experience the Art of Perfect Hair and Beauty</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </article>
        </section>
    )
}

export default HeroOverlayImage