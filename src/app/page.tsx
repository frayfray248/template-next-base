// components
import LandingHero from '@/sections/LandingHero';
import Contact from '@/sections/Contact';
import Hr from '@/components/shared/Hr';
import Portfolio from '@/sections/Portfolio';
import InfoBlock from '@/sections/InfoBlock';

export default function Home() {
    return (
        <main className="flex-1">
            <LandingHero />
            <Portfolio />
            <Hr />
            <InfoBlock />
            <Hr />
            <Contact />
        </main>
    );
}
