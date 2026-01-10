import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SponsorshipPackages } from './components/SponsorshipPackages';

export default function App() {
    return (
        <div className='min-h-screen'>
            <Header />
            <main>
                <Hero />
                <About />
                <SponsorshipPackages />
                <Team />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
