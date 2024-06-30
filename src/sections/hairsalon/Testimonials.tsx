// next
import React from 'react'

// components
import Section from '@/components/shared/containers/Section'
import Row from '@/components/shared/containers/Row'
import Col from '@/components/shared/containers/Col'
import Heading from '@/components/shared/text/Heading'
import Quote from '@/components/shared/text/Quote'


const Testimonials = () => {
    return (
        <Section id="testimonials" bgColor='primary-content'>
            <div className='text-primary text-center m-8'>
                <Heading type={2}>Testimonials</Heading>
                <Row className='w-full text-center text-primary'>
                    <Quote author='Jane'>
                        I have been coming to ACME Hair Salon for years and I have never been disappointed. The staff is always friendly and professional. I highly recommend them.
                    </Quote>
                    <Quote author='Mary'>
                        I have been going to ACME Hair Salon for years. The staff is always friendly and professional. I highly recommend them.
                    </Quote>
                    <Quote author='Sue'>
                        I have been a customer of ACME Hair Salon for years. The staff is always friendly and professional. I highly recommend them.
                    </Quote>
                </Row>
            </div>
        </Section>
    )
}

export default Testimonials