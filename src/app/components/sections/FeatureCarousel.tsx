import React from 'react'

import Section from '../shared/Section'
import Carousel from '../shared/Carousel'
import Heading from '../shared/text/Heading'
import Paragraph from '../shared/text/Paragraph'

const FeatureCarousel = () => {
    return (
        <Section>
            <article>
                <Heading type={2}>Feature Carousel</Heading>
                <Paragraph>
                    This is a feature carousel section. You can add any content here.
                </Paragraph>
                <Carousel />
            </article>
        </Section>
    )
}

export default FeatureCarousel