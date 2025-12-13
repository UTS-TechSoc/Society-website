import { ArrowRight, Code2, Users, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import utsLogo from '../../assets/utsLogo.png';

export function Hero() {
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 py-20 md:py-32">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<div className="inline-block">
							<span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm">
								{/* <Code2 className="h-4 w-4" /> */}
								<img src={utsLogo} alt="" className="h-10 w-10" />
								University of Technology Sydney
							</span>
						</div>
						<h1 className="text-5xl md:text-6xl">
							Welcome to{' '}
							<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								TechSoc
							</span>
						</h1>
						<p className="text-xl text-gray-600 text-justify">
							UTS Tech Society is the largest student run IT society at the
							University of Technology Sydney. We are committed to empowering
							students pursuing IT related degrees by fostering meaningful
							partnerships with leading industry organizations and collaborative
							student societies.
						</p>
						<div className="flex flex-wrap gap-4">
							<Button
								size="lg"
								onClick={() => scrollToSection('contact')}
								className="gap-2"
							>
								Join Now <ArrowRight className="h-4 w-4" />
							</Button>
							<Button
								size="lg"
								variant="outline"
								onClick={() => scrollToSection('events')}
							>
								View Events
							</Button>
						</div>
						<div className="flex flex-wrap gap-8 pt-4">
							<div className="flex items-center gap-2">
								<Users className="h-5 w-5 text-blue-600" />
								<div>
									<div className="text-2xl">900+</div>
									<div className="text-sm text-gray-600">Members</div>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<Calendar className="h-5 w-5 text-blue-600" />
								<div>
									<div className="text-2xl">50+</div>
									<div className="text-sm text-gray-600">Events/Year</div>
								</div>
							</div>
						</div>
					</div>
					<div className="relative">
						<div className="relative rounded-2xl overflow-hidden shadow-2xl">
							<ImageWithFallback
								src="https://images.unsplash.com/photo-1759884248009-92c5e957708e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvZGluZyUyMGNvbXB1dGVyc3xlbnwxfHx8fDE3NjU1OTQzMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
								alt="Students coding together"
								className="w-full h-auto"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
