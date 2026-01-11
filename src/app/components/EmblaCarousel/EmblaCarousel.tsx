import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import {
    PrevButton,
    NextButton,
    usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import { SponsorCarouselData } from '../../../assets/content';

type PropType = {
    slides: SponsorCarouselData[];
    options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = props => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <section className='embla'>
            <div className='embla__viewport' ref={emblaRef}>
                <div className='embla__container'>
                    {slides.map(slide => (
                        <div className='embla__slide' key={slide.companyName}>
                            <div className='embla__slide__number'>
                                <a href={slide.linkedinUrl}>
                                    <img
                                        src={slide.image}
                                        alt={slide.companyName}
                                    />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='embla__controls'>
                <div className='embla__buttons'>
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    />
                </div>
            </div>
        </section>
    );
};

export default EmblaCarousel;
