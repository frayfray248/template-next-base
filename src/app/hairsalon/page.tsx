// components
import LandingHero from '@/sections/hairsalon/LandingHero'
import InfoBlock from '@/sections/hairsalon/InfoBlock'
import PictureRow from '@/sections/hairsalon/PictureRow'
import Section from '@/components/shared/containers/Section'
import Paragraph from '@/components/shared/text/Paragraph'
import Heading from '@/components/shared/text/Heading'
import Row from '@/components/shared/containers/Row'
import ExampleSocialBar from '@/components/shared/examples/ExampleSocialBar'
import Services from '@/sections/hairsalon/Services'
import HoursAndContact from '@/sections/hairsalon/HoursAndContact'
import Testimonials from '@/sections/hairsalon/Testimonials'

import { SocialMediaData } from '../../types/types'

export default function Home() {



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
                    <ExampleSocialBar />
                </Row>
            </Section>
            <InfoBlock />
            <PictureRow />
            <Testimonials />
            <Services />
            
            <HoursAndContact />
        </main>
    );
}
