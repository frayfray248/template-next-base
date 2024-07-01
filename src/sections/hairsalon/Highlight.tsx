// react
import React from 'react'

// components
import Section from '@/components/shared/containers/Section'
import Row from '@/components/shared/containers/Row'
import Heading from '@/components/shared/text/Heading'
import Paragraph from '@/components/shared/text/Paragraph'
import ExampleSocialBar from '@/components/shared/examples/ExampleSocialBar'


const Highlight = () => {
    return (
        <Section height='xs' bgColor="neutral">
            <article className='m-8 w-full'>
                <Row breakPoint='lg' className='w-full justify-evenly text-center'>
                    <div className='max-w-xl p-4'>
                        <Heading type={2}>Your beauty is our duty!</Heading>
                        <Paragraph>
                            We are a team of professionals who are dedicated to providing you with the best service possible.
                        </Paragraph>
                    </div>
                    <ExampleSocialBar />
                </Row>
            </article>
        </Section>
    )
}

export default Highlight