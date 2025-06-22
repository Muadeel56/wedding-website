import { useTheme } from "../hooks/useTheme";
import { Sun, Moon } from "lucide-react";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-background/80 fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="/" className="text-xl font-bold font-serif">
          Anb Photography
        </a>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="/portfolio" className="hover:text-primary transition-colors">
            Portfolio
          </a>
          <a href="/about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="/contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-primary" />
            ) : (
              <Moon className="h-5 w-5 text-primary" />
            )}
          </button>
          <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
} 