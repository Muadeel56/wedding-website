import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <div className="flex items-center gap-3">
          <Logo size={40} />
          <p className="text-sm text-muted">
            &copy; {currentYear} anbphotographyfilms. All rights reserved.<br />
            📍 Rawalpindi/Islamabad | Est. 2020<br />
            <a href="mailto:anbstudio77@gmail.com" className="text-primary underline">anbstudio77@gmail.com</a> | 
            <a href="https://wa.me/923041851531" className="text-primary underline ml-1">0304 1851531</a>
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
        </div>
      </div>
    </footer>
  );
} 