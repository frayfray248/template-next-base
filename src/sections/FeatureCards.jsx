import React from 'react'

import Section from '@/components/shared/containers/Section'
import Card from '@/components/shared/Card'
import Heading from '@/components/shared/text/Heading'
import Paragraph from '@/components/shared/text/Paragraph'
import Row from '@/components/shared/containers/Row'

const FeatureCards = () => {
    return (
        <Section>
            <article>
                <Heading type={1}>Our Features</Heading>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec consequat ultricies, nunc purus ultricies nunc, nec ultricies nunc purus nec nunc.
                </Paragraph>
                <Row>
                    <Card />
                    <Card />
                    <Card />
                </Row>
            </article>
        </Section>
    )
}

export default FeatureCards