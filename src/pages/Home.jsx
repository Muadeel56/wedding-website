import { useState, useEffect } from "react";
import { Instagram, Phone, User } from "lucide-react";
import { motion } from "framer-motion";
import InstagramFeed from "../components/InstagramFeed";

// Hero slideshow images (replace/add as needed)
const heroImages = [
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594669/ANB06184-Enhanced-NR_m4ontq.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594668/ANB09657_wcmt0c.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594668/ANB09107_zf0ntw.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594668/ANB07919_copy_dwf91a.jpg",
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
    <div className="flex-grow">
      {/* Hero Section with Slideshow */}
      <motion.section
        className="relative flex flex-col items-center justify-center min-h-[70vh] py-20 bg-background overflow-hidden"
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
          <div className="absolute inset-0 bg-black/70 dark:bg-black/80 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-4 md:px-8 text-center z-10 relative">
          <h1 className="text-4xl font-bold tracking-tight font-serif sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight text-foreground drop-shadow-xl">
            ANB Photography <span className="text-primary">&</span> Films
          </h1>
          <p className="text-lg md:text-2xl text-foreground font-serif mb-3 drop-shadow">
            Timeless Wedding & Fashion Photography
          </p>
          <p className="max-w-xl mx-auto text-base md:text-lg text-foreground mb-10 drop-shadow">
            📍 Pakistan | Worldwide<br />
            Booking & Inquiries: WhatsApp: <a href="https://wa.me/923333333333" className="text-primary underline">+92 333 3333333</a>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <a
              href="#gallery"
              className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="rounded-full border border-primary px-8 py-3 text-base font-semibold text-primary hover:bg-primary/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
          <a
            href="https://www.instagram.com/anbphotographyfilms/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline mt-2"
          >
            <Instagram className="w-5 h-5" /> Follow us on Instagram
          </a>
        </div>
      </motion.section>

      {/* Instagram Gallery Section - now uses InstagramFeed */}
      <motion.section
        id="gallery"
        className="py-20 bg-secondary"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold font-serif text-center mb-12 text-foreground">Latest on Instagram</h2>
          <InstagramFeed />
          <div className="text-center mt-10">
            <a
              href="https://www.instagram.com/anbphotographyfilms/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline text-lg"
            >
              <Instagram className="w-5 h-5" /> See more on Instagram
            </a>
          </div>
        </div>
      </motion.section>

      {/* About Section - Card style, responsive, more spacing, no logo/profile image */}
      <motion.section
        className="py-20 bg-background border-t border-border"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
          <div className="w-full max-w-2xl mx-auto bg-card/90 dark:bg-card/80 rounded-2xl shadow-lg p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold font-serif mb-4 flex items-center justify-center gap-2 text-foreground">
              <User className="w-7 h-7 text-primary" /> About Us
            </h3>
            <p className="text-lg md:text-xl text-muted mb-6">
              ANB Photography & Films is dedicated to capturing timeless wedding and fashion moments with an editorial, cinematic style. Based in Pakistan, available worldwide. We turn your memories into art.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Weddings</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Fashion</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Editorial</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Events</span>
            </div>
            <a
              href="#contact"
              className="inline-block mt-2 rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </motion.section>

      {/* Contact Section - Card style, icons, large buttons, more spacing, theme-aware */}
      <motion.section
        id="contact"
        className="py-20 bg-secondary border-t border-border"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
          <div className="w-full max-w-xl bg-card/90 dark:bg-card/80 rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold font-serif mb-5 text-foreground">Contact Us</h3>
            <p className="text-lg md:text-xl text-muted mb-8">
              For bookings and inquiries, reach out via WhatsApp or Instagram DM.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
              <a
                href="https://wa.me/923333333333"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" /> WhatsApp
              </a>
              <a
                href="https://www.instagram.com/anbphotographyfilms/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-primary px-8 py-3 text-lg font-semibold text-primary hover:bg-primary/10 transition-colors"
              >
                <Instagram className="w-5 h-5" /> Instagram DM
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
} 