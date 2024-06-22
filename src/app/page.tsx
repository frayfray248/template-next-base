// components
import LandingHero from './components/sections/LandingHero';
import FeatureCards from '@/app/components/sections/FeatureCards'
import FeatureCarousel from "./components/sections/FeatureCarousel";
import FeatureTimeline from "./components/sections/FeatureTimeline";
import Contact from './components/sections/Contact';
import Hr from '@/app/components/shared/Hr';
import Portfolio from '@/app/components/sections/Portfolio';
import InfoBlock from '@/app/components/sections/InfoBlock';

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
