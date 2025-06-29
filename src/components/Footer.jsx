import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <div className="flex items-center gap-3">
          <Logo size={40} />
          <p className="text-sm text-muted">
            &copy; {currentYear} Anb Photography & Films. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/anbphotographyfilms/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
          >
            Instagram
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
          >
            Facebook
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
} 