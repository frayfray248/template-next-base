import React from 'react'
import Section from '@/components/shared/containers/Section'
import Col from '@/components/shared/containers/Col'
import Row from '@/components/shared/containers/Row'
import Heading from '@/components/shared/text/Heading'
import Paragraph from '@/components/shared/text/Paragraph'

const Services = () => {
    return (
        <Section>
            <article className='w-full flex flex-col my-8'>
                <Heading type={1} className='text-center'>Services</Heading>
                <Paragraph className='text-center'>We offer a wide range of services to help you look and feel your best.</Paragraph>
                <Row gap='16' items='start' justify='evenly' className='flex-1'>
                    <div>
                        <Heading type={2}>Hair</Heading>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <th>Cut</th>
                                    <td>$50</td>
                                </tr>
                                <tr>
                                    <th>Blowout</th>
                                    <td>$40</td>
                                </tr>
                                <tr>
                                    <th>Bang Trim</th>
                                    <td>$15</td>
                                </tr>
                                <tr>
                                    <th>Updo</th>
                                    <td>$75</td>
                                </tr>
                                <tr>
                                    <th>Color</th>
                                    <td>$100</td>
                                </tr>
                                <tr>
                                    <th>Highlights</th>
                                    <td>$150</td>
                                </tr>
                                <tr>
                                    <th>Perm</th>
                                    <td>$200</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <Heading type={2}>Nail</Heading>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <th>Manicure</th>
                                    <td>$25</td>
                                </tr>
                                <tr>
                                    <th>Pedicure</th>
                                    <td>$35</td>
                                </tr>
                                <tr>
                                    <th>Acrylic</th>
                                    <td>$50</td>
                                </tr>
                                <tr>
                                    <th>Gel</th>
                                    <td>$45</td>
                                </tr>
                                <tr>
                                    <th>Fill</th>
                                    <td>$30</td>
                                </tr>
                                <tr>
                                    <th>Polish Change</th>
                                    <td>$15</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div>
                        <Heading type={2}>Skin</Heading>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <th>Facial</th>
                                    <td>$75</td>
                                </tr>
                                <tr>
                                    <th>Microdermabrasion</th>
                                    <td>$100</td>
                                </tr>
                                <tr>
                                    <th>Chemical Peel</th>
                                    <td>$125</td>
                                </tr>
                                <tr>
                                    <th>Waxing</th>
                                    <td>$25</td>
                                </tr>
                                <tr>
                                    <th>Makeup</th>
                                    <td>$50</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Row>
            </article>
        </Section>
    )
}

export default Services