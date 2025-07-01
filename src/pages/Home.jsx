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
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223690/ANB_3315_umez8g.jpg",
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
        className="relative flex flex-col items-center justify-center min-h-[80vh] section-padding-lg bg-background overflow-hidden transition-colors duration-500"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Slideshow Images */}
        <div className="absolute inset-0 w-full h-full z-0">
          {heroImages.map((img, idx) => (
            <img
              key={img}
              src={img}
              alt="Hero background"
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1500 ${
                idx === currentHero ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionProperty: "opacity" }}
              loading={idx === 0 ? "eager" : "lazy"}
            />
          ))}
          {/* Enhanced theme-aware overlay */}
          <div className="image-overlay" />
        </div>
        
        <div className="container-enhanced text-center z-10 relative">
          <motion.div 
            className="hero-blur-bg mx-auto max-w-3xl px-8 py-12"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Logo size={140} className="mx-auto mb-6" />
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <a
                href="/contact"
                className="btn btn-secondary focus-ring"
                tabIndex={0}
                style={{ fontWeight: 500, fontSize: '1.1rem', minWidth: 160 }}
              >
                Contact Us
              </a>
            </motion.div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-2">
              <motion.a
                href="https://www.instagram.com/anbphotographyfilms/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline focus-ring rounded-lg px-3 py-2 transition-colors duration-300 hover:bg-primary/10"
                tabIndex={0}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                style={{ fontWeight: 400, fontSize: '1rem' }}
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm5.25-.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"/></svg>
                Instagram
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@anbphotographyfilms"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline focus-ring rounded-lg px-3 py-2 transition-colors duration-300 hover:bg-primary/10"
                tabIndex={0}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                style={{ fontWeight: 400, fontSize: '1rem' }}
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12.5 2h2.75v13.25a2.25 2.25 0 1 1-2.25-2.25h.25V11a4.75 4.75 0 1 0 4.75 4.75V8.5h-2.25V2Z"/></svg>
                TikTok
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Instagram Gallery Section - now uses InstagramFeed */}
      <motion.section
        id="gallery"
        className="section-padding bg-secondary transition-colors duration-500"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="container-enhanced">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground transition-colors duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Latest on Instagram
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <InstagramFeed />
          </motion.div>
          
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="https://www.instagram.com/anbphotographyfilms/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline text-lg focus-ring rounded-lg px-4 py-2 transition-colors duration-300 hover:bg-primary/10"
              tabIndex={0}
            >
              <Instagram className="w-5 h-5" /> See more on Instagram
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 