// react
import React from 'react'

// components
import Section from '@/components/shared/containers/Section'
import Heading from '@/components/shared/text/Heading'
import Paragraph from '@/components/shared/text/Paragraph'
import Row from '@/components/shared/containers/Row'
import Thumbnail from '@/components/shared/Thumbnail'

const Portfolio = () => {
    return (
        <Section>
            <article>
                <Heading type={1}>Portfolio</Heading>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec consequat ultricies, nunc purus ultricies nunc, nec ultricies nunc purus nec nunc.
                </Paragraph>
                <Row>
                    <Thumbnail src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" href="#"/>
                    <Thumbnail src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" href="#"/>
                    <Thumbnail src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" href="#"/>
                    <Thumbnail src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" href="#"/>
                    <Thumbnail src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" href="#"/>
                    <Thumbnail src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" href="#"/>
                    <Thumbnail src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" href="#"/>
                    <Thumbnail src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" href="#"/>
                    <Thumbnail src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" href="#"/>
                    <Thumbnail src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" href="#"/>
                </Row>
            </article>
        </Section>
    )
}

export default Portfolio