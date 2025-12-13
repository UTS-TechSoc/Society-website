export function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-8">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="flex items-center gap-2">
						<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
							<span className="text-white text-sm">TS</span>
						</div>
						<span>TechSoc</span>
					</div>
					<div className="text-center text-gray-400 text-sm">
						© 2025 TechSoc. All rights reserved.
					</div>
					<div className="flex gap-6 text-sm">
						<a href="#" className="hover:text-blue-400 transition-colors">
							Privacy Policy
						</a>
						<a href="#" className="hover:text-blue-400 transition-colors">
							Terms of Service
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
