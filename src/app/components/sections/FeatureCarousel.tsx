import React from 'react'

import Section from '../shared/Section'
import Carousel from '../shared/Carousel'

const FeatureCarousel = () => {
    return (
        <Section>
            <div className='min-h-screen flex flex-row flex-wrap justify-center items-center gap-16'>
                <Carousel />
            </div>
        </Section>
    )
}

export default FeatureCarousel