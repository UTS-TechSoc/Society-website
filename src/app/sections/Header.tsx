import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/button';
import logo from '../../assets/techsocLogo.jpg';
import { scrollToSection } from '../../utils';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className='sticky top-0 z-50 w-full border-b bg-white/95'>
            <div className='container mx-auto px-4'>
                <div className='flex h-16 items-center justify-between'>
                    <button
                        className='flex items-center gap-2 cursor-pointer'
                        onClick={() => scrollToSection('hero')}
                    >
                        <img src={logo} alt='' className='h-10 w-10' />
                        <span className='text-xl'>UTS TechSoc</span>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className='hidden md:flex items-center gap-6'>
                        <button
                            onClick={() => scrollToSection('about')}
                            className='hover:text-blue-600 transition-colors cursor-pointer'
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('sponsors')}
                            className='hover:text-blue-600 transition-colors cursor-pointer'
                        >
                            Sponsors
                        </button>
                        <button
                            onClick={() => scrollToSection('packages')}
                            className='hover:text-blue-600 transition-colors cursor-pointer'
                        >
                            Packages
                        </button>
                        <button
                            onClick={() => scrollToSection('team')}
                            className='hover:text-blue-600 transition-colors cursor-pointer'
                        >
                            Team
                        </button>
                        <Button onClick={() => scrollToSection('contact')}>
                            Contact Us
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className='md:hidden'
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label='Toggle menu'
                    >
                        {mobileMenuOpen ? (
                            <X className='h-6 w-6' />
                        ) : (
                            <Menu className='h-6 w-6' />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <nav className='md:hidden py-4 flex flex-col gap-4'>
                        <button
                            onClick={() => scrollToSection('about')}
                            className='text-left py-2 hover:text-blue-600 transition-colors cursor-pointer'
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('sponsors')}
                            className='text-left py-2 hover:text-blue-600 transition-colors cursor-pointer'
                        >
                            Sponsors
                        </button>
                        <button
                            onClick={() => scrollToSection('packages')}
                            className='text-left py-2 hover:text-blue-600 transition-colors cursor-pointer'
                        >
                            Packages
                        </button>
                        <button
                            onClick={() => scrollToSection('team')}
                            className='text-left py-2 hover:text-blue-600 transition-colors cursor-pointer'
                        >
                            Team
                        </button>
                        <Button
                            onClick={() => scrollToSection('contact')}
                            className='w-full'
                        >
                            Contact Us
                        </Button>
                    </nav>
                )}
            </div>
        </header>
    );
}
