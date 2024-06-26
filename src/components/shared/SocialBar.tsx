// react
import React from 'react'

// components
import Row from '@/components/shared/containers/Row'
import Col from '@/components/shared/containers/Col'
import Icon from '@/components/shared/Icon'

// types
import { SocialMediaData } from '@/types/types'

const SocialBar = ({ socialMedia, layout='row' }: { socialMedia: SocialMediaData[], layout?: "row" | "col" }) => {

    return (
        <>
            {
                layout === 'row' ?
                    <Row gap='8' justify='start' >
                        {socialMedia.map((social, index) => (
                            <Icon key={index} type={social.type} href={social.href} />
                        ))}
                    </Row>
                    :
                    <Col className='flex flex-col gap-8' >
                        {socialMedia.map((social, index) => (
                            <Icon key={index} type
                                ={social.type} href={social.href} />
                        ))}
                    </Col>

            }
        </>
    )

}

export default SocialBar