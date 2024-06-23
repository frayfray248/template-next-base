import React from 'react'

import Section from '@/components/shared/containers/Section'
import Image from '@/components/shared/Image'
import Row from '@/components/shared/containers/Row'
import Col from '@/components/shared/containers/Col'

//import busyStreet from '@/res/backdrop-placeholder-busy-street-01.jpg'
import hairsolon from '@/res/hair-solon.webp'

const InfoBlock = () => {
    return (
        <Section>
            <Row breakPoint='lg'>
                <Col>
                    <div className='text-center flex flex-col justify-center items-center pr-4'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </Col>
                {/* <Col>
                    <Image src={busyStreet} alt="A busy street" />
                </Col> */}
                <Col>
                    <Image src={hairsolon} alt="A busy street" />
                </Col>
            </Row>
        </Section >
    )
}

export default InfoBlock