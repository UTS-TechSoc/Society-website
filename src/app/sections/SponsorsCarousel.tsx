import { sponsorCarouselData } from '../../assets/content';
import EmblaCarousel from '../components/EmblaCarousel/EmblaCarousel';

export function SponsorsCarousel() {
    return (
        <section id='sponsors' className='pt-15 pb-20 bg-white'>
            <div className='container mx-auto text-center max-w-2xl'>
                <h2 className='text-4xl md:text-5xl mb-2'>Sponsors</h2>
                <p className='text-xl text-gray-600 text-center mb-8'>
                    Current society partners include:
                </p>
                <div className='mx-10'>
                    <EmblaCarousel slides={sponsorCarouselData} />
                </div>
            </div>
        </section>
    );
}
