import { sponsorCarouselData } from '../../assets/content';

export function SponsorsCarousel() {
    return (
        <section id='sponsors' className='pt-15 pb-20 bg-white'>
            <div className='container mx-auto text-center max-w-2xl'>
                <h2 className='text-4xl md:text-5xl mb-2'>Sponsors</h2>
                <p className='text-xl text-gray-600 text-center mb-8'>
                    Current society partners include:
                </p>
                <ul className='carousel mx-20'>
                    {sponsorCarouselData.map(sponsorData => (
                        <li className='carousel-item'>
                            <a href={sponsorData.linkedinUrl}>
                                <img src={sponsorData.image} alt='' />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
