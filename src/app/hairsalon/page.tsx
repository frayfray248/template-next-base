// components
import LandingHero from '@/sections/hairsalon/LandingHero'
import Highlight from '@/sections/hairsalon/Highlight'
import InfoBlock from '@/sections/hairsalon/InfoBlock'
import PictureRow from '@/sections/hairsalon/PictureRow'
import Testimonials from '@/sections/hairsalon/Testimonials'
import Services from '@/sections/hairsalon/Services'
import HoursAndContact from '@/sections/hairsalon/HoursAndContact'

export default function Home() {

    return (
        <main className="flex-1">
            <LandingHero />
            <Highlight />
            <InfoBlock />
            <PictureRow />
            <Testimonials />
            <Services />
            <HoursAndContact />
        </main>
    );
}
