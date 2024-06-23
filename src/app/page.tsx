// components
import LandingHero from '@/sections/LandingHero';
import Contact from '@/sections/Contact';
import Hr from '@/components/shared/Hr';
import Portfolio from '@/sections/Portfolio';
import InfoBlock from '@/sections/InfoBlock';
import PictureRow from '@/sections/PictureRow';

export default function Home() {
    return (
        <main className="flex-1">
            <LandingHero />
            <InfoBlock />
            <PictureRow />
            <Contact />
        </main>
    );
}
