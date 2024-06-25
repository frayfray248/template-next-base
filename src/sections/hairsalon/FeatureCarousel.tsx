import React from 'react'

import Section from '@/components/shared/containers/Section'
import Carousel from '@/components/shared/Carousel'
import Heading from '@/components/shared/text/Heading'
import Paragraph from '@/components/shared/text/Paragraph'

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