import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function MobileMenu({ onLinkClick }) {
  const links = [
    { to: "/gallery", label: "Gallery" },
    { to: "/story", label: "Our Story" },
    { to: "/events", label: "Events" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.div
      className="md:hidden fixed inset-0 z-40 bg-background flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="flex flex-col items-center space-y-8">
        {links.map((link, i) => (
          <motion.div
            key={link.to}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
          >
            <Link
              to={link.to}
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={onLinkClick}
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.div>
  );
} 