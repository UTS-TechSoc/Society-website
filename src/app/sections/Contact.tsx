import { Mail } from 'lucide-react';
import { Button } from '../components/button';
import { teamData } from '../../assets/content';

export function Contact() {
    const sponsorDirectorEmail = teamData.find(
        member => member.role === 'Sponsors Director'
    )?.societyEmail;

    return (
        <section
            id='contact'
            className='py-15 bg-gradient-to-br from-blue-50 to-purple-50'
        >
            <div className='container mx-auto px-4'>
                <div className='flex flex-col items-center max-w-3xl mx-auto mb-5'>
                    <h2 className='text-4xl md:text-5xl mb-4'>Get In Touch</h2>
                    <p className='text-center text-xl text-gray-600 max-w-xl'>
                        Interested in partnering with TechSoc or have questions?
                        We'd love to hear from you!
                    </p>
                </div>

                <div className='flex justify-center'>
                    <div className='flex justify-between gap-20'>
                        <div className='flex flex-col gap-2'>
                            <a
                                href={`mailto:${sponsorDirectorEmail}?subject=UTS%20TechSoc%20Partnership%20Enquiry:%20<<YOUR%20COMPANY%20NAME%20HERE>>`}
                            >
                                <Button
                                    className='text-md p-5'
                                    variant={'default'}
                                >
                                    Send us an email!
                                    <Mail />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
