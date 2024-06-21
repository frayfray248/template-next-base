import React from 'react'

import Section from '@/app/components/shared/containers/Section'
import Heading from '@/app/components/shared/text/Heading'
import Paragraph from '@/app/components/shared/text/Paragraph'
import Row from '@/app/components/shared/containers/Row'
import Card, { Content, Title } from '@/app/components/shared/Card'
import { type } from 'os'

const Portfolio = () => {
    return (
        <Section>
            <article>
                <Heading type={1}>Portfolio</Heading>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec consequat ultricies, nunc purus ultricies nunc, nec ultricies nunc purus nec nunc.
                </Paragraph>
                <Row>

                    <Card.Card>
                        <Card.Image src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                        <Card.Content>
                            <Card.Title>Card Title</Card.Title>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Card.Content>
                    </Card.Card>
                    <Card.Card>
                        <Card.Image src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                        <Card.Content>
                            <Card.Title>Card Title</Card.Title>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Card.Content>
                    </Card.Card>
                    <Card.Card>
                        <Card.Image src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                        <Card.Content>
                            <Card.Title>Card Title</Card.Title>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Card.Content>
                    </Card.Card>
                    <Card.Card>
                        <Card.Image src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                        <Card.Content>
                            <Card.Title>Card Title</Card.Title>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Card.Content>
                    </Card.Card>
                    <Card.Card>
                        <Card.Image src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                        <Card.Content>
                            <Card.Title>Card Title</Card.Title>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Card.Content>
                    </Card.Card>
                    <Card.Card>
                        <Card.Image src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                        <Card.Content>
                            <Card.Title>Card Title</Card.Title>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Card.Content>
                    </Card.Card>
                    <Card.Card>
                        <Card.Image src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                        <Card.Content>
                            <Card.Title>Card Title</Card.Title>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Card.Content>
                    </Card.Card>
                    <Card.Card>
                        <Card.Image src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                        <Card.Content>
                            <Card.Title>Card Title</Card.Title>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Card.Content>
                    </Card.Card>
                    <Card.Card>
                        <Card.Image src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                        <Card.Content>
                            <Card.Title>Card Title</Card.Title>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Card.Content>
                    </Card.Card>

                </Row>
            </article>
        </Section>
    )
}

export default Portfolio