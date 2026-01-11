import { ArrowRight, Users } from 'lucide-react';
import { Button } from '../components/button';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import utsLogo from '../../assets/utsLogo.png';
import { useEffect } from 'react';
import { particleOptionsObject } from '../../assets/particleOptions';
import { scrollToSection } from '../../utils';

export function Hero() {
    useEffect(() => {
        initParticlesEngine(async engine => await loadSlim(engine));
    }, []);

    return (
        <section id='hero' className='relative overflow-hidden py-20 md:py-32'>
            <Particles id='tsparticles' options={particleOptionsObject} />
            <div className='container mx-auto px-4'>
                <div className='grid md:grid-cols-2 gap-12 items-center'>
                    <div className='space-y-6'>
                        <div className='inline-block'>
                            <span className='inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm'>
                                <img
                                    src={utsLogo}
                                    alt=''
                                    className='h-10 w-10'
                                />
                                University of Technology Sydney
                            </span>
                        </div>
                        <h1 className='text-5xl md:text-6xl text-white'>
                            Welcome to{' '}
                            <span className='text-white bg-clip-text text-transparent'>
                                TechSoc
                            </span>
                        </h1>
                        <p className='text-xl text-white text-justify'>
                            UTS Tech Society is the largest student run IT
                            society at the University of Technology Sydney. We
                            are committed to empowering students pursuing IT
                            related degrees by fostering meaningful partnerships
                            with leading industry organizations and
                            collaborative student societies.
                        </p>
                        <div className='flex flex-wrap gap-4'>
                            <Button
                                size='lg'
                                onClick={() => scrollToSection('packages')}
                            >
                                View Packages
                            </Button>
                            <Button
                                size='lg'
                                onClick={() => scrollToSection('contact')}
                                variant='outline'
                                className='gap-2'
                            >
                                Contact Us <ArrowRight className='h-4 w-4' />
                            </Button>
                        </div>
                        <div className='flex flex-wrap gap-8 pt-4'>
                            <div className='flex items-center gap-4 bg-white px-4 py-2 rounded-xl'>
                                <Users className='h-5 w-5 text-blue-600' />
                                <div>
                                    <div className='text-2xl'>900+</div>
                                    <div className='text-sm text-gray-600'>
                                        Members
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
