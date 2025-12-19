import { Mail, MapPin, Instagram, Twitter, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';

export function Contact() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        alert("Thanks for your interest! We'll get back to you soon.");
    };

    return (
        <section
            id='contact'
            className='py-20 bg-gradient-to-br from-blue-50 to-purple-50'
        >
            <div className='container mx-auto px-4'>
                <div className='text-center max-w-3xl mx-auto mb-16'>
                    <h2 className='text-4xl md:text-5xl mb-4'>Get In Touch</h2>
                    <p className='text-xl text-gray-600'>
                        Interested in partnering with TechSoc or have questions?
                        We'd love to hear from you!
                    </p>
                </div>

                <div className='grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
                    <Card className='p-8'>
                        <h3 className='text-2xl mb-6'>Send us a message</h3>
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <div>
                                <label
                                    htmlFor='name'
                                    className='block text-sm mb-2'
                                >
                                    Name
                                </label>
                                <Input
                                    id='name'
                                    placeholder='Your name'
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='email'
                                    className='block text-sm mb-2'
                                >
                                    Email
                                </label>
                                <Input
                                    id='email'
                                    type='email'
                                    placeholder='your.email@university.edu'
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='message'
                                    className='block text-sm mb-2'
                                >
                                    Message
                                </label>
                                <Textarea
                                    id='message'
                                    placeholder='Tell us about yourself and why you want to join...'
                                    rows={5}
                                    required
                                />
                            </div>
                            <Button type='submit' className='w-full'>
                                Send Message
                            </Button>
                        </form>
                    </Card>

                    <div className='space-y-8'>
                        <div>
                            <h3 className='text-2xl mb-6'>
                                Contact Information
                            </h3>
                            <div className='space-y-4'>
                                <div className='flex items-start gap-3'>
                                    <Mail className='h-6 w-6 text-blue-600 flex-shrink-0 mt-1' />
                                    <div>
                                        <div>Email</div>
                                        <a
                                            href='mailto:contact@techsoc.university.edu'
                                            className='text-blue-600 hover:underline'
                                        >
                                            contact@techsoc.university.edu
                                        </a>
                                    </div>
                                </div>
                                <div className='flex items-start gap-3'>
                                    <MapPin className='h-6 w-6 text-blue-600 flex-shrink-0 mt-1' />
                                    <div>
                                        <div>Location</div>
                                        <div className='text-gray-600'>
                                            Student Union, Room 204
                                            <br />
                                            University Campus
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className='text-2xl mb-6'>Follow Us</h3>
                            <div className='flex gap-4'>
                                <a
                                    href='#'
                                    className='p-3 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-sm'
                                    aria-label='Instagram'
                                >
                                    <Instagram className='h-6 w-6 text-gray-700' />
                                </a>
                                <a
                                    href='#'
                                    className='p-3 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-sm'
                                    aria-label='Twitter'
                                >
                                    <Twitter className='h-6 w-6 text-gray-700' />
                                </a>
                                <a
                                    href='#'
                                    className='p-3 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-sm'
                                    aria-label='GitHub'
                                >
                                    <Github className='h-6 w-6 text-gray-700' />
                                </a>
                            </div>
                        </div>

                        <Card className='p-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white'>
                            <h3 className='text-2xl mb-3'>Weekly Meetings</h3>
                            <p className='mb-2'>
                                Join us every Thursday at 6:00 PM
                            </p>
                            <p className='text-blue-100'>
                                Engineering Building, Room 301
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
