import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { SponsorsCarousel } from './sections/SponsorsCarousel';
import { Team } from './sections/Team';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { SponsorshipPackages } from './sections/SponsorshipPackages';

export default function App() {
    return (
        <div className='min-h-screen'>
            <Header />
            <main>
                <Hero />
                <About />
                <SponsorsCarousel />
                <SponsorshipPackages />
                <Team />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
