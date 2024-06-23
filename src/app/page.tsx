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

export default function Home() {
    return (
        <main className="flex-1">
            <LandingHero />
            <Section height='xs' bgColor='primary-content'>
                <div className='text-primary'>
                <Heading type={2}>Your beauty is our duty!</Heading>
                </div>
            </Section>
            <InfoBlock />
            <PictureRow />
            <Contact />
        </main>
    );
}
