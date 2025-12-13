import { Check } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

export function SponsorshipPackages() {
	const packages = [
		{
			name: 'Bronze',
			price: '$750',
			color: 'from-amber-600 to-amber-800',
			features: [
				'Social media marketing',
				'Up to 2x newsletter features per year',
				"Company merchandise distributed at O'day",
				'Invited to Skill Development events',
			],
		},
		{
			name: 'Silver',
			price: '$1,200',
			color: 'from-gray-400 to-gray-600',
			features: [
				'All Bronze benefits',
				'Up to 3x newsletter features per year',
				'Invited to Industry Insight events',
			],
		},
		{
			name: 'Gold',
			price: '$1,500',
			color: 'from-yellow-400 to-yellow-600',
			popular: true,
			features: [
				'All Silver benefits',
				'Up to 5x newsletter features per year',
				'1 custom event tailored to meet your needs',
			],
		},
	];

	return (
		<section id="packages" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<h2 className="text-4xl md:text-5xl mb-4">Sponsorship Packages</h2>
					<p className="text-xl text-gray-600">
						Partner with TechSoc to connect with talented students and support
						the next generation of tech professionals.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{packages.map((pkg, index) => (
						<Card
							key={index}
							className={`relative overflow-hidden ${
								pkg.popular ? 'ring-2 ring-blue-600' : ''
							}`}
						>
							{pkg.popular && (
								<div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm">
									Most Popular
								</div>
							)}
							<div className={`bg-gradient-to-r ${pkg.color} p-8 text-white`}>
								<h3 className="text-3xl mb-2">{pkg.name}</h3>
								<div className="text-4xl">{pkg.price}</div>
								<div className="text-sm opacity-90">per year</div>
							</div>
							<div className="p-8">
								<ul className="space-y-4 mb-8">
									{pkg.features.map((feature, featureIndex) => (
										<li key={featureIndex} className="flex items-start gap-3">
											<Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
											<span>{feature}</span>
										</li>
									))}
								</ul>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
