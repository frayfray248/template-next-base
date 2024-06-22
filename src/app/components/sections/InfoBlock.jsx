import React from 'react'

import Section from '@/app/components/shared/containers/Section'
import Image from '@/app/components/shared/Image'
import Row from '@/app/components/shared/containers/Row'
import Col from '@/app/components/shared/containers/Col'

const InfoBlock = () => {
    return (
        <Section width='screen'>
            <Row breakPoint='lg'>
                <Col>
                    <div className='text-center flex flex-col justify-center items-center'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </Col>
                <Col>
                    <div>
                        <Image src="/backdrop-placeholder-busy-street-01.jpg" alt="A busy street" />
                    </div>
                </Col>
            </Row>
        </Section >
    )
}

export default InfoBlock