import { type Metadata } from 'next'

import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { brand } from '@/consts/landing'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Analytics } from '@vercel/analytics/next'
import ScrollToTop from '@/components/layout/scroll-to-top'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: brand.name,
	description: brand.tagline
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" data-theme="luxury">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					storageKey="app-theme"
					disableTransitionOnChange
				>
					<Header />
					<main className="min-h-body">{children}</main>
					<Footer />
					<ScrollToTop />
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	)
}
