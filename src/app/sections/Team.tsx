import { Linkedin, Mail } from 'lucide-react';
import { Card } from '../components/card';
import { teamData } from '../../assets/content';

export function Team() {
    return (
        <section id='team' className='py-20 bg-white'>
            <div className='container mx-auto px-4'>
                <div className='text-center max-w-3xl mx-auto mb-16'>
                    <h2 className='text-4xl md:text-5xl mb-4'>Meet Our Team</h2>
                    <p className='text-xl text-gray-600'>
                        Dedicated students working to make TechSoc the best
                        technology society on campus. Please do not hesitate to
                        reach out with any questions!
                    </p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {teamData.map((member, index) => (
                        <Card
                            key={index}
                            className='p-6 text-center hover:shadow-lg transition-shadow flex flex-col justify-between'
                        >
                            <div>
                                <div className='flex justify-center mb-4'>
                                    <img
                                        className='h-24 w-24'
                                        src={member.pfpUrl}
                                        alt=''
                                    />
                                </div>
                                <h3 className='text-xl mb-1'>{member.name}</h3>
                                <div className='text-blue-600 mb-3'>
                                    {member.role}
                                </div>
                                <p className='text-gray-600 mb-4'>
                                    {member.bio}
                                </p>
                            </div>
                            <div className='flex justify-center gap-3'>
                                <a
                                    href={member.linkedInUrl}
                                    className='p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer'
                                    aria-label='LinkedIn'
                                >
                                    <Linkedin className='h-5 w-5 text-gray-600' />
                                </a>
                                <a
                                    href={`mailto:${member.societyEmail}`}
                                    className='p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer'
                                    aria-label='Email'
                                >
                                    <Mail className='h-5 w-5 text-gray-600' />
                                </a>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
