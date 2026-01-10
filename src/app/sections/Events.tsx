import { Calendar, Clock, MapPin } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Events() {
    const events = [
        {
            title: 'Web Development Workshop',
            date: 'Jan 20, 2025',
            time: '6:00 PM - 8:00 PM',
            location: 'Engineering Building, Room 301',
            description:
                'Learn modern web development with React and TypeScript. Perfect for beginners and intermediate developers.',
            image: 'https://images.unsplash.com/photo-1560523159-94c9d18bcf27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHdvcmtzaG9wfGVufDF8fHx8MTc2NTUzNDg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            tag: 'Workshop',
        },
        {
            title: 'Tech Networking Night',
            date: 'Jan 27, 2025',
            time: '7:00 PM - 9:00 PM',
            location: 'Student Union, Main Hall',
            description:
                'Meet industry professionals, alumni, and fellow tech enthusiasts. Bring your resume and be ready to network!',
            image: 'https://images.unsplash.com/photo-1706759755789-66d39fd252b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwbmV0d29ya2luZyUyMGV2ZW50fGVufDF8fHx8MTc2NTU5NDMyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            tag: 'Networking',
        },
        {
            title: 'Annual Hackathon',
            date: 'Feb 10-11, 2025',
            time: '24 Hours',
            location: 'Computer Science Building',
            description:
                'Our biggest event of the year! Form teams, build innovative projects, and compete for amazing prizes.',
            image: 'https://images.unsplash.com/photo-1759884248009-92c5e957708e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvZGluZyUyMGNvbXB1dGVyc3xlbnwxfHx8fDE3NjU1OTQzMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            tag: 'Hackathon',
        },
    ];

    return (
        <section id='events' className='py-20 bg-gray-50'>
            <div className='container mx-auto px-4'>
                <div className='text-center max-w-3xl mx-auto mb-16'>
                    <h2 className='text-4xl md:text-5xl mb-4'>
                        Upcoming Events
                    </h2>
                    <p className='text-xl text-gray-600'>
                        Join us at our upcoming events and be part of our
                        thriving tech community.
                    </p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {events.map((event, index) => (
                        <Card
                            key={index}
                            className='overflow-hidden hover:shadow-xl transition-shadow'
                        >
                            <div className='relative h-48 overflow-hidden'>
                                <ImageWithFallback
                                    src={event.image}
                                    alt={event.title}
                                    className='w-full h-full object-cover'
                                />
                                <div className='absolute top-4 right-4'>
                                    <Badge className='bg-white text-black hover:bg-white'>
                                        {event.tag}
                                    </Badge>
                                </div>
                            </div>
                            <div className='p-6 space-y-4'>
                                <h3 className='text-2xl'>{event.title}</h3>
                                <p className='text-gray-600'>
                                    {event.description}
                                </p>
                                <div className='space-y-2 text-sm text-gray-600'>
                                    <div className='flex items-center gap-2'>
                                        <Calendar className='h-4 w-4' />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <Clock className='h-4 w-4' />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <MapPin className='h-4 w-4' />
                                        <span>{event.location}</span>
                                    </div>
                                </div>
                                <Button className='w-full'>Register Now</Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
