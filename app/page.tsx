// app/page.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Zap, Shield, Layers, Code, Palette, Rocket } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function LandingPage() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<section className="py-20 px-4 md:py-32 bg-gradient-to-b from-background to-muted/20">
				<div className="container mx-auto text-center">
					<div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
						<Badge variant={'outline'}>Next.js 14+ Ready</Badge>
					</div>
					<h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
						Build Your Next Project
						<br />
						<span className="text-primary">Faster Than Ever</span>
					</h1>
					<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
						A production-ready Next.js starter with shadcn/ui, TypeScript, and everything you need to ship
						your app quickly.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/dashboard/users">
							<Button size="lg" className="w-full sm:w-auto">
								<Rocket className="mr-2 h-5 w-5" />
								View Dashboard
							</Button>
						</Link>
						<Link href="https://github.com" target="_blank">
							<Button size="lg" variant="outline" className="w-full sm:w-auto">
								<Code className="mr-2 h-5 w-5" />
								View on GitHub
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 px-4">
				<div className="container mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
						<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
							Pre-configured with the best tools and practices to help you build faster
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						<Card>
							<CardHeader>
								<Zap className="h-10 w-10 text-primary mb-2" />
								<CardTitle>Lightning Fast</CardTitle>
								<CardDescription>
									Built on Next.js 14+ with App Router for optimal performance and SEO
								</CardDescription>
							</CardHeader>
						</Card>

						<Card>
							<CardHeader>
								<Palette className="h-10 w-10 text-primary mb-2" />
								<CardTitle>Beautiful UI</CardTitle>
								<CardDescription>
									Powered by shadcn/ui with customizable components and themes
								</CardDescription>
							</CardHeader>
						</Card>

						<Card>
							<CardHeader>
								<Shield className="h-10 w-10 text-primary mb-2" />
								<CardTitle>Type Safe</CardTitle>
								<CardDescription>
									Full TypeScript support for better developer experience and fewer bugs
								</CardDescription>
							</CardHeader>
						</Card>

						<Card>
							<CardHeader>
								<Layers className="h-10 w-10 text-primary mb-2" />
								<CardTitle>Component Library</CardTitle>
								<CardDescription>
									Pre-built components including tables, forms, cards, and more
								</CardDescription>
							</CardHeader>
						</Card>

						<Card>
							<CardHeader>
								<Code className="h-10 w-10 text-primary mb-2" />
								<CardTitle>Developer First</CardTitle>
								<CardDescription>
									Clean code structure with best practices and easy customization
								</CardDescription>
							</CardHeader>
						</Card>

						<Card>
							<CardHeader>
								<Rocket className="h-10 w-10 text-primary mb-2" />
								<CardTitle>Ready to Deploy</CardTitle>
								<CardDescription>
									Optimized for Vercel, Netlify, or any hosting platform you prefer
								</CardDescription>
							</CardHeader>
						</Card>
					</div>
				</div>
			</section>

			{/* Tech Stack Section */}
			<section className="py-20 px-4 bg-muted/30">
				<div className="container mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Built With Modern Tech</h2>
						<p className="text-muted-foreground text-lg">
							The best tools for building modern web applications
						</p>
					</div>

					<div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
						<div className="text-center">
							<div className="text-4xl font-bold mb-2">Next.js 14+</div>
							<p className="text-sm">React Framework</p>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold mb-2">TypeScript</div>
							<p className="text-sm">Type Safety</p>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold mb-2">shadcn/ui</div>
							<p className="text-sm">UI Components</p>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold mb-2">Tailwind</div>
							<p className="text-sm">Styling</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-4">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
					<p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
						Start building your next project with this starter template today
					</p>
					<Link href="/dashboard/users">
						<Button size="lg">Explore Dashboard</Button>
					</Link>
				</div>
			</section>
		</div>
	)
}
