// next
import { getImageProps } from 'next/image'

// react
import React from 'react'

// lib
import { getBackgroundImage } from '@/lib/image'

// types
import { BackgroundImageData } from '@/types/types'

const makeBackgroundImageStyle = (bgImage : BackgroundImageData) => {
    const { src, width, height } = bgImage

    const { props: { srcSet } } = getImageProps({ alt: '', width, height, src })

    const backgroundImage = getBackgroundImage(srcSet)

    return { height: '100vh', width: '100vw', backgroundImage }

}

const Hero = ({ children, bgImage } : { children : React.ReactNode, bgImage? : BackgroundImageData }) => {

    const style = bgImage ? makeBackgroundImageStyle(bgImage) : {}

    return (
        <section className={`hero min-h-screen`} style={style}>
            <article className={`hero-content ${bgImage? 'text-neutral-content' : ''}`}>
                {children}
            </article>
        </section>
    )
}

export default Hero