import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { Sun, Moon } from "lucide-react";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  const links = [
    { to: "/gallery", label: "Gallery" },
    { to: "/story", label: "Our Story" },
    { to: "/events", label: "Events" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-background/80 fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex flex-wrap items-center justify-between h-16 px-2 sm:px-4 md:px-6 gap-y-2">
        <Link to="/" className="text-base xs:text-lg md:text-xl font-bold font-serif truncate min-w-0 max-w-[50vw] sm:max-w-xs">
          Anb Photography
        </Link>
        <nav className="flex-1 flex items-center justify-center min-w-0 overflow-x-auto scrollbar-none space-x-2 sm:space-x-4 md:space-x-6 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-primary transition-colors px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 hover:bg-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            ) : (
              <Moon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
} 