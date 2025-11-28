'use client'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

function ThemeToggleBtn() {
	const { theme, setTheme } = useTheme()
	const handleThemeToggle = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	return (
		<button
			onClick={handleThemeToggle}
			className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
			aria-label="Toggle theme"
			title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
		>
			{theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
		</button>
	)
}

export default ThemeToggleBtn
