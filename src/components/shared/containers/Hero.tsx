// next
import { getImageProps } from 'next/image'

// react
import React from 'react'

// lib
import { getBackgroundImage } from '@/lib/image'

// types
import { BackgroundImageData } from '@/types/types'

const makeBackgroundImageStyle = (backGroundImage : BackgroundImageData) => {
    const { height, width, src, alt } = backGroundImage

    const { props: { srcSet } } = getImageProps({ height, width, src, alt})

    const imageSet = getBackgroundImage(srcSet)

    return { height: '100%', width: '100%', backgroundImage : imageSet }

}

const Hero = ({ children, backGroundImage } : { children : React.ReactNode, backGroundImage? : BackgroundImageData }) => {

    const style = backGroundImage ? makeBackgroundImageStyle(backGroundImage) : {}

    return (
        <section className={`hero min-h-screen`} style={style}>
            <article className={`hero-content ${backGroundImage? 'text-neutral-content' : ''}`}>
                {children}
            </article>
        </section>
    )
}

export default Hero