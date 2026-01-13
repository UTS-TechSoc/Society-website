import { sponsorCarouselData } from '../../assets/content';
import { isMobileUi } from '../../utils';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '../components/carousel';
import Autoplay from 'embla-carousel-autoplay';

export function SponsorsCarousel() {
    return (
        <section id='sponsors' className='pt-15 pb-20 bg-white'>
            <div className='container mx-auto text-center'>
                <h2 className='text-4xl md:text-5xl mb-2'>Sponsors 2026</h2>
                <p className='text-xl text-gray-600 text-center mb-8'>
                    Current society partners include:
                </p>
                <Carousel
                    opts={{
                        align: 'start',
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 4000,
                        }),
                    ]}
                    className='mx-20'
                >
                    <CarouselContent>
                        {sponsorCarouselData.map(sponsorData => (
                            <CarouselItem
                                key={sponsorData.companyName}
                                className={
                                    (isMobileUi() ? 'basis-1/2' : 'basis-1/3') +
                                    ' flex justify-center items-center'
                                }
                            >
                                <a href={sponsorData.linkedinUrl}>
                                    <img
                                        src={sponsorData.image}
                                        alt={sponsorData.companyName}
                                    />
                                </a>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
}
