import { useState, useEffect } from "react";
import { Instagram, Phone, User } from "lucide-react";
import { motion } from "framer-motion";
import InstagramFeed from "../components/InstagramFeed";
import Logo from "../components/Logo";

// Hero slideshow images (specific images from urls.txt)
const heroImages = [
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223714/ANB_6184_ya9brx.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223702/ANB_6038_qv9j38.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223701/ANB_1418_odiy5f.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223699/ANB_5981_ppimzi.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223690/ANB_3315_umez8c.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223690/ANB_9007_mm810g.jpg",
];

// Instagram gallery images (replace with real data/API)
const instagramImages = [
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594669/ANB06184-Enhanced-NR_m4ontq.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594668/ANB09657_wcmt0c.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594668/ANB09107_zf0ntw.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594668/ANB07919_copy_dwf91a.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594668/ANB_6831_copy_r9dltn.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594668/ANB09327_copy_urymev.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594668/ANB03983_hzid2l.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594667/ANB06203-Enhanced-NR_-_Copy_ejksqc.jpg",
];

export default function Home() {
  // Slideshow state
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const next = (currentHero + 1) % heroImages.length;
    const img = new window.Image();
    img.src = heroImages[next];
  }, [currentHero]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-grow bg-background text-foreground transition-colors duration-500">
      {/* Hero Section with Slideshow */}
      <motion.section
        className="relative flex flex-col items-center justify-center min-h-[70vh] py-20 bg-background overflow-hidden transition-colors duration-500"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Slideshow Images */}
        <div className="absolute inset-0 w-full h-full z-0">
          {heroImages.map((img, idx) => (
            <img
              key={img}
              src={img}
              alt="Hero background"
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                idx === currentHero ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionProperty: "opacity" }}
              loading={idx === 0 ? "eager" : "lazy"}
            />
          ))}
          {/* Stronger overlay for readability, theme-aware */}
          <div className="absolute inset-0 bg-black/70" style={{backgroundColor: 'var(--color-background)', opacity: 0.7, mixBlendMode: 'multiply', transition: 'background-color 0.5s'}} />
        </div>
        <div className="container mx-auto px-4 md:px-8 text-center z-10 relative">
          <div className="hero-blur-bg mx-auto max-w-2xl px-6 py-8">
            <h1 className="text-4xl font-bold tracking-tight font-serif sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight text-foreground drop-shadow-xl transition-colors duration-500">
              <Logo size={120} className="mx-auto mb-4" />
            </h1>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
              <a
                href="/gallery"
                className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary-foreground transition-colors duration-300"
                tabIndex={0}
              >
                View Portfolio
              </a>
              <a
                href="/contact"
                className="rounded-full border border-primary px-8 py-3 text-base font-semibold text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
                tabIndex={0}
              >
                Contact Us
              </a>
            </div>
            <a
              href="https://www.instagram.com/anbphotographyfilms/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline mt-2 focus:outline-none focus:ring-2 focus:ring-primary-foreground rounded transition-colors duration-300"
              tabIndex={0}
            >
              <Instagram className="w-5 h-5" /> Follow us on Instagram
            </a>
          </div>
        </div>
      </motion.section>

      {/* Instagram Gallery Section - now uses InstagramFeed */}
      <motion.section
        id="gallery"
        className="py-20 bg-secondary transition-colors duration-500"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold font-serif text-center mb-12 text-foreground transition-colors duration-500">Latest on Instagram</h2>
          <InstagramFeed />
          <div className="text-center mt-10">
            <a
              href="https://www.instagram.com/anbphotographyfilms/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline text-lg focus:outline-none focus:ring-2 focus:ring-primary-foreground rounded transition-colors duration-300"
              tabIndex={0}
            >
              <Instagram className="w-5 h-5" /> See more on Instagram
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
} 