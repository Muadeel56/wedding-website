import { Link } from "react-router-dom";

export default function MobileMenu({ isOpen, onLinkClick }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border">
      <nav className="flex flex-col items-center space-y-4 py-4">
        <Link
          to="/gallery"
          className="hover:text-primary transition-colors"
          onClick={onLinkClick}
        >
          Gallery
        </Link>
        <Link
          to="/story"
          className="hover:text-primary transition-colors"
          onClick={onLinkClick}
        >
          Our Story
        </Link>
        <Link
          to="/events"
          className="hover:text-primary transition-colors"
          onClick={onLinkClick}
        >
          Events
        </Link>
        <Link
          to="/contact"
          className="hover:text-primary transition-colors"
          onClick={onLinkClick}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
} 