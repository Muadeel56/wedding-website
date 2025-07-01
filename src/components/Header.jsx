import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/gallery", label: "Gallery" },
    { to: "/about", label: "About" },
    { to: "/story", label: "Our Story" },
    { to: "/contact", label: "Contact" },
  ];

  // Close menu on link click or ESC
  const handleClose = () => setIsMenuOpen(false);

  // Portal menu content
  const menuContent = (
    <AnimatePresence>
      {isMenuOpen && (
        <div
          className="md:hidden"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: theme === "dark" ? "#111" : "#fff",
            transition: "background-color 0.3s",
            display: "flex",
            flexDirection: "column",
            padding: "2rem",
            gap: "2rem",
            minHeight: "100vh",
            overflowY: "auto"
          }}
          tabIndex={-1}
          onKeyDown={e => e.key === "Escape" && handleClose()}
        >
          <div className="flex items-center justify-between mb-8">
            <span className="text-2xl font-bold font-serif">Menu</span>
            <button
              onClick={handleClose}
              className="p-3 rounded-full hover:bg-secondary focus-ring transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {links.map((link) => (
              <div
                key={link.to}
                style={{ transition: "opacity 0.3s, transform 0.3s", opacity: 1, transform: "none" }}
              >
                <Link
                  to={link.to}
                  className="text-2xl font-medium hover:text-primary transition-colors focus-ring rounded-lg px-3 py-2 block"
                  onClick={handleClose}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>
          <div className="mt-auto flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="rounded-full p-3 hover:bg-secondary focus-ring transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-6 w-6 text-primary" />
              ) : (
                <Moon className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <header className={`bg-background/95 fixed top-0 left-0 right-0 z-50 border-b border-border shadow-none transition-all duration-300 ${scrolled ? "backdrop-blur-xl" : ""}`}>
      <div className="container-enhanced flex flex-wrap items-center justify-between h-16 gap-y-2">
        <Link to="/" className="min-w-0 max-w-[50vw] sm:max-w-xs flex items-center focus-ring rounded-lg p-1">
          <Logo size={48} />
        </Link>
        <nav className="hidden md:flex flex-1 items-center justify-center min-w-0 space-x-2 sm:space-x-4 md:space-x-6 text-sm font-medium">
          {links.map((link) => (
            link.external ? (
              <a
                key={link.to}
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors px-3 py-2 rounded-lg focus-ring whitespace-nowrap font-medium"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-primary transition-colors px-3 py-2 rounded-lg focus-ring whitespace-nowrap font-medium"
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
          <button
            onClick={toggleTheme}
            className="rounded-full p-2.5 hover:bg-secondary focus-ring transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            ) : (
              <Moon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            )}
          </button>
          <button
            className="md:hidden p-2.5 rounded-lg focus-ring transition-colors duration-200 hover:bg-secondary"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="w-full h-px bg-border opacity-30 mt-0" />
      {typeof window !== "undefined" && createPortal(menuContent, document.body)}
    </header>
  );
} 