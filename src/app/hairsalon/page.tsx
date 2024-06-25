// components
import LandingHero from '@/sections/hairsalon/LandingHero'
import InfoBlock from '@/sections/hairsalon/InfoBlock'
import PictureRow from '@/sections/hairsalon/PictureRow'
import Section from '@/components/shared/containers/Section'
import Paragraph from '@/components/shared/text/Paragraph'
import Heading from '@/components/shared/text/Heading'
import Row from '@/components/shared/containers/Row'
import SocialBar from '@/components/shared/SocialBar'
import Services from '@/sections/hairsalon/Services'
import CallToAction from '@/sections/hairsalon/CallToAction'

import { SocialMediaData } from '../../types/types'

export default function Home() {

    const socialMedia: SocialMediaData[] = [
        {
            href: 'https://www.instagram.com',
            ariaLabel: 'Instagram',
            type: 'instagram'
        },
        {
            href: 'https://www.facebook.com',
            ariaLabel: 'Facebook',
            type: 'facebook'
        },
        {
            href: 'https://www.twitter.com',
            ariaLabel: 'Twitter',
            type: 'twitter'
        },
        {
            href: 'https://www.linkedin.com',
            ariaLabel: 'Linkedin',
            type: 'linkedin'
        },
        {
            href: 'https://www.youtube.com',
            ariaLabel: 'Youtube',
            type: 'youtube'
        }
    ]

    return (
        <main className="flex-1">
            <LandingHero />
            <Section height='xs' bgColor='primary-content'>
                <Row breakPoint='lg' className='w-full text-neutral-content justify-evenly text-center'>
                    <div className='max-w-xl p-4'>
                        <Heading type={2}>Your beauty is our duty!</Heading>
                        <Paragraph>
                            We are a team of professionals who are dedicated to providing you with the best service possible.
                        </Paragraph>
                    </div>
                    <SocialBar socialMedia={socialMedia} />
                </Row>
            </Section>
            <InfoBlock />
            <PictureRow />
            <Services />
            <CallToAction />
        </main>
    );
}
