import { aboutFeatures } from '../../assets/content';
import { Card } from '../components/card';

export function About() {
    return (
        <section id='about' className='py-20 bg-white'>
            <div className='container mx-auto px-4'>
                <div className='text-center max-w-3xl mx-auto mb-16'>
                    <h2 className='text-4xl md:text-5xl mb-4'>About Us</h2>
                    <p className='text-xl text-gray-600 text-justify'>
                        TechSoc is dedicated to creating impactful opportunities
                        that cultivate professional growth and industry
                        readiness. Our diverse events and initiatives equip
                        students with the skills, networks and exposure needed
                        to excel beyond the classroom and thrive in the
                        ever-evolving tech landscape.
                    </p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {aboutFeatures.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <Card
                                key={index}
                                className='p-6 hover:shadow-lg transition-shadow'
                            >
                                <div className='h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4'>
                                    <Icon className='h-6 w-6 text-blue-600' />
                                </div>
                                <h3 className='text-xl mb-2'>
                                    {feature.title}
                                </h3>
                                <p className='text-gray-600'>
                                    {feature.description}
                                </p>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
