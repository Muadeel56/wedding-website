import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { to: "/gallery", label: "Gallery" },
    { to: "/story", label: "Our Story" },
    { to: "/events", label: "Events" },
    { to: "/contact", label: "Contact" },
  ];

  // Close menu on link click or ESC
  const handleClose = () => setIsMenuOpen(false);

  // Portal menu content
  const menuContent = (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="md:hidden"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: theme === "dark" ? "#000" : "#fff",
            transition: "background-color 0.3s",
            display: "flex",
            flexDirection: "column",
            padding: "2rem 2rem 2rem 2rem",
            gap: "2rem",
            minHeight: "100vh",
            overflowY: "auto"
          }}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          tabIndex={-1}
          onKeyDown={e => e.key === "Escape" && handleClose()}
        >
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold font-serif">Menu</span>
            <button
              onClick={handleClose}
              className="p-2 rounded hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-6 text-lg font-medium">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2 py-1"
                onClick={handleClose}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 hover:bg-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-primary" />
              ) : (
                <Moon className="h-5 w-5 text-primary" />
              )}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <header className="bg-background/80 fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex flex-wrap items-center justify-between h-16 px-2 sm:px-4 md:px-6 gap-y-2">
        <Link to="/" className="text-base xs:text-lg md:text-xl font-bold font-serif truncate min-w-0 max-w-[50vw] sm:max-w-xs">
          Anb Photography
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex flex-1 items-center justify-center min-w-0 space-x-2 sm:space-x-4 md:space-x-6 text-sm font-medium">
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
          {/* Theme toggle always visible */}
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
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      {/* Mobile menu portal */}
      {typeof window !== "undefined" && createPortal(menuContent, document.body)}
    </header>
  );
} 