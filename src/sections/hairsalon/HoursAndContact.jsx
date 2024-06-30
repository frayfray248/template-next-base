import React from 'react'

import Section from '@/components/shared/containers/Section'
import Row from '@/components/shared/containers/Row'
import Col from '@/components/shared/containers/Col'
import Heading from '@/components/shared/text/Heading'
import Paragraph from '@/components/shared/text/Paragraph'
import Image from '@/components/shared/Image'
import ExampleSocialBar from '@/components/shared/examples/ExampleSocialBar'


const Contact = () => {
    return (
        <Section id="contact">
            <article className='m-8 flex flex-col justify-center items-center'>
                <Heading type={2}>Visit Us</Heading>
                <Paragraph>Feel free to contact us with any questions or concerns you may have. We are here to help you.</Paragraph>
                <Row breakPoint='md' gap='16' className='w-full'>

                    <Col>
                        <div className='max-w-2xl mx-auto flex flex-col justify-center items-end p-4'>
                            <div>
                                <Heading type={3} className='text-center'>Hours</Heading>

                                <table className='table table-sm w-auto'>
                                    <tbody>
                                        <tr>
                                            <th>Monday</th>
                                            <td>10:00 AM - 8:00 PM</td>
                                        </tr>
                                        <tr>
                                            <th>Tuesday</th>
                                            <td>10:00 AM - 8:00 PM</td>
                                        </tr>
                                        <tr>
                                            <th>Wednesday</th>
                                            <td>10:00 AM - 8:00 PM</td>
                                        </tr>
                                        <tr>
                                            <th>Thursday</th>
                                            <td>10:00 AM - 8:00 PM</td>
                                        </tr>
                                        <tr>
                                            <th>Friday</th>
                                            <td>10:00 AM - 8:00 PM</td>
                                        </tr>
                                        <tr>
                                            <th>Saturday</th>
                                            <td>10:00 AM - 8:00 PM</td>
                                        </tr>
                                        <tr>
                                            <th>Sunday</th>
                                            <td>Closed</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <Heading type={3} className='text-center'>Contact</Heading>
                        <address>
                            <Paragraph size='md'>1234 Main St.</Paragraph>
                            <Paragraph size='md'>Springfield, IL 62701</Paragraph>
                            <Paragraph size='md'>Canada</Paragraph>
                        </address>
                        <Paragraph size='md'>Tel: 217-555-5555</Paragraph>
                        <Paragraph size='md'>Email: <a href="#"><span className='underline'>mail@example.com</span></a></Paragraph>
                        <div className='pt-4'>
                            <Paragraph size='md'>Let&apos;s get social:</Paragraph>
                            <ExampleSocialBar />
                        </div>
                    </Col>
                </Row>
            </article>
        </Section>
    )
}

export default Contact