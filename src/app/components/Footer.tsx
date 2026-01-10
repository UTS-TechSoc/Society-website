import { techsocLinkedInUrl } from '../../assets/content';
import logo from '../../assets/techsocLogo.jpg';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className='text-white py-8'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                    <div className='flex items-center gap-2'>
                        <img src={logo} alt='' className='h-10 w-10' />
                        <span className='text-xl'>TechSoc</span>
                    </div>
                    <div className='flex flex-row items-center gap-10 text-center text-sm'>
                        <div>
                            <div className='flex gap-4'>
                                <a
                                    href='https://www.instagram.com/utstechsoc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                                    className='p-3 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-sm'
                                    aria-label='Instagram'
                                >
                                    <Instagram className='h-6 w-6 text-gray-700' />
                                </a>
                                <a
                                    href='https://www.facebook.com/UTSTechSoc'
                                    className='p-3 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-sm'
                                    aria-label='Facebook'
                                >
                                    <Facebook className='h-6 w-6 text-gray-700' />
                                </a>
                                <a
                                    href={techsocLinkedInUrl}
                                    className='p-3 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-sm'
                                    aria-label='Linkedin'
                                >
                                    <Linkedin className='h-6 w-6 text-gray-700' />
                                </a>
                            </div>
                        </div>
                        © 2025 TechSoc. All rights reserved.
                    </div>
                    {/* <div className='flex gap-6 text-sm'>
                        <a
                            href='#'
                            className='hover:text-blue-400 transition-colors'
                        >
                            Privacy Policy
                        </a>
                        <a
                            href='#'
                            className='hover:text-blue-400 transition-colors'
                        >
                            Terms of Service
                        </a>
                    </div> */}
                </div>
            </div>
        </footer>
    );
}
