import React from 'react'

import Section from '@/components/shared/containers/Section'
import Image from '@/components/shared/Image'
import Row from '@/components/shared/containers/Row'
import Col from '@/components/shared/containers/Col'
import Heading from '@/components/shared/text/Heading'
import Paragraph from '@/components/shared/text/Paragraph'
import hairsolon from '@/res/hair-solon.webp'

const InfoBlock = () => {
    return (
        <Section>
            <Row breakPoint='md'>

                <Col stretch={true}>
                    <Image src={hairsolon} alt="A busy street" className='h-full object-cover' />
                </Col>
                <Col>
                    <div className='max-w-2xl mx-auto text-left flex flex-col justify-center items-start p-4'>
                        <Heading type={2}>About Us</Heading>
                        <Paragraph>
                            We are a team of professionals who are dedicated to providing you with the best service possible. We have been in the business for over 20 years and have a wealth of experience in the industry.
                        </Paragraph>
                        <Paragraph>
                            Our goal is to make sure that you leave our salon feeling confident and beautiful. We offer a wide range of services to meet your needs, from haircuts and color to waxing and facials. Come in and see us today!
                        </Paragraph>

                    </div>
                </Col>
            </Row>
        </Section >
    )
}

export default InfoBlock