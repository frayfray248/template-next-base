// components
import LandingHero from '@/sections/LandingHero';
import Contact from '@/sections/Contact';
import Hr from '@/components/shared/Hr';
import Portfolio from '@/sections/Portfolio';
import InfoBlock from '@/sections/InfoBlock';
import PictureRow from '@/sections/PictureRow';
import Section from '@/components/shared/containers/Section';
import Paragraph from '@/components/shared/text/Paragraph';
import Heading from '@/components/shared/text/Heading';
import Icon from '@/components/shared/Icon';
import Row from '@/components/shared/containers/Row';
import SocialBar from '@/components/shared/SocialBar';

import { SocialMediaData } from '../types/types';

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
            <Contact />
        </main>
    );
}
