import React from 'react'

import Section from '@/components/shared/containers/Section'
import Image from '@/components/shared/Image'
import Row from '@/components/shared/containers/Row'
import Col from '@/components/shared/containers/Col'

import model1 from '@/res/hair-model-01.webp'
import model2 from '@/res/hair-model-02.webp'
import model3 from '@/res/hair-model-03.webp'
import model4 from '@/res/hair-model-04.webp'
import model5 from '@/res/hair-model-05.webp'

const PictureRow = () => {
    return (
        <Section width='screen'>
            <Row breakPoint='lg'>
                <Col>
                    <Image src={model1} alt="A hair model" />
                </Col>
                <Col>
                    <Image src={model2} alt="A hair model" />
                </Col>
                <Col>
                    <Image src={model3} alt="A hair model" />
                </Col>
                <Col>
                    <Image src={model4} alt="A hair model" />
                </Col>
                <Col>
                    <Image src={model5} alt="A hair model" />
                </Col>
            </Row>
        </Section >
    )
}

export default PictureRow