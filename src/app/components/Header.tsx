import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import logo from '../../assets/techsocLogo.jpg';

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: 'smooth' });
		setMobileMenuOpen(false);
	};

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-white/95">
			<div className="container mx-auto px-4">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center gap-2">
						{/* <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
							<span className="text-white">TS</span>
						</div> */}
						<img src={logo} alt="" className="h-10 w-10" />
						<span className="text-xl">TechSoc</span>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center gap-6">
						<button
							onClick={() => scrollToSection('about')}
							className="hover:text-blue-600 transition-colors"
						>
							About
						</button>
						<button
							onClick={() => scrollToSection('packages')}
							className="hover:text-blue-600 transition-colors"
						>
							Packages
						</button>
						<button
							onClick={() => scrollToSection('team')}
							className="hover:text-blue-600 transition-colors"
						>
							Team
						</button>
						<button
							onClick={() => scrollToSection('contact')}
							className="hover:text-blue-600 transition-colors"
						>
							Contact
						</button>
						<Button onClick={() => scrollToSection('contact')}>Join Us</Button>
					</nav>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						aria-label="Toggle menu"
					>
						{mobileMenuOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-6 w-6" />
						)}
					</button>
				</div>

				{/* Mobile Navigation */}
				{mobileMenuOpen && (
					<nav className="md:hidden py-4 flex flex-col gap-4">
						<button
							onClick={() => scrollToSection('about')}
							className="text-left py-2 hover:text-blue-600 transition-colors"
						>
							About
						</button>
						<button
							onClick={() => scrollToSection('events')}
							className="text-left py-2 hover:text-blue-600 transition-colors"
						>
							Events
						</button>
						<button
							onClick={() => scrollToSection('team')}
							className="text-left py-2 hover:text-blue-600 transition-colors"
						>
							Team
						</button>
						<button
							onClick={() => scrollToSection('contact')}
							className="text-left py-2 hover:text-blue-600 transition-colors"
						>
							Contact
						</button>
						<Button
							onClick={() => scrollToSection('contact')}
							className="w-full"
						>
							Join Us
						</Button>
					</nav>
				)}
			</div>
		</header>
	);
}
