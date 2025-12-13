import { Code, Lightbulb, Rocket, Users } from 'lucide-react';
import { Card } from './ui/card';

export function About() {
	const features = [
		{
			icon: Code,
			title: 'Technical Workshops',
			description:
				'Learn cutting-edge technologies through hands-on workshops led by industry professionals and experienced students.',
		},
		{
			icon: Lightbulb,
			title: 'Innovation & Projects',
			description:
				'Collaborate on real-world projects and participate in hackathons to bring your ideas to life.',
		},
		{
			icon: Users,
			title: 'Networking',
			description:
				'Connect with like-minded peers, alumni, and industry partners to build lasting professional relationships.',
		},
		{
			icon: Rocket,
			title: 'Career Development',
			description:
				'Access career guidance, mentorship programs, and exclusive opportunities from our tech partners.',
		},
	];

	return (
		<section id="about" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<h2 className="text-4xl md:text-5xl mb-4">About Us</h2>
					<p className="text-xl text-gray-600">
						TechSoc is dedicated to fostering a vibrant community of technology
						enthusiasts. We provide opportunities for learning, collaboration,
						and growth.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{features.map((feature, index) => {
						const Icon = feature.icon;
						return (
							<Card
								key={index}
								className="p-6 hover:shadow-lg transition-shadow"
							>
								<div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
									<Icon className="h-6 w-6 text-blue-600" />
								</div>
								<h3 className="text-xl mb-2">{feature.title}</h3>
								<p className="text-gray-600">{feature.description}</p>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
}
