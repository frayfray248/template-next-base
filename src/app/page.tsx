// components
import LandingHero from './components/sections/LandingHero';
import FeatureCards from '@/app/components/sections/FeatureCards'
import FeatureCarousel from "./components/sections/FeatureCarousel";
import FeatureTimeline from "./components/sections/FeatureTimeline";
import SignupHero from './components/sections/SignupHero';
import Hr from '@/app/components/shared/Hr';

export default function Home() {
    return (
        <main className="flex-1">
            <LandingHero />
            <FeatureCards />
            <Hr />
            <FeatureCarousel />
            <Hr />
            <FeatureTimeline />
            <Hr />
            <SignupHero />
        </main>
    );
}
