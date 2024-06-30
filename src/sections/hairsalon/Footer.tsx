import React from 'react'

import Foot from '@/components/shared/footer/Footer'
import Copyright from '@/components/shared/legal/Copyright'

const Footer = () => {
    return (
        <Foot.Footer>
            <Foot.Section>
                <Foot.Nav>
                    <Foot.Title>COMPANY</Foot.Title>
                    <Foot.Link href='#about'>About Us</Foot.Link>
                    <Foot.Link href='#testimonials'>Testimonials</Foot.Link>
                    <Foot.Link href='#services'>Services</Foot.Link>
                    <Foot.Link href='#contact'>Contact</Foot.Link>
                </Foot.Nav>
                <Foot.Nav>
                    <Foot.Title>LEGAL</Foot.Title>
                    <Foot.Link href='#'>Terms</Foot.Link>
                    <Foot.Link href='#'>Privacy</Foot.Link>
                    <Foot.Link href='#'>Cookies</Foot.Link>
                </Foot.Nav>
            </Foot.Section>
            <Foot.Section border>
                <Copyright owner='ACME'/>
            </Foot.Section>
        </Foot.Footer>
    )
}

export default Footer