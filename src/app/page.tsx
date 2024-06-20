// components
import LandingHero from './components/sections/LandingHero';
import FeatureCards from '@/app/components/sections/FeatureCards'
import FeatureCarousel from "./components/sections/FeatureCarousel";
import FeatureTimeline from "./components/sections/FeatureTimeline";
import SignupHero from './components/sections/SignupHero';

export default function Home() {
    return (
        <main className="flex-1">
            <LandingHero />
            <FeatureCards />
            <FeatureCarousel />
            <FeatureTimeline />
            <SignupHero />
        </main>
    );
}
