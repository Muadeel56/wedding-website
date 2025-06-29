import { useState, useEffect } from "react";
import { Instagram, Phone, User } from "lucide-react";
import { motion } from "framer-motion";
import InstagramFeed from "../components/InstagramFeed";
import Logo from "../components/Logo";

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
            <p className="text-lg md:text-2xl text-foreground font-serif mb-3 drop-shadow transition-colors duration-500">
              Where every frame tells a story.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
              <a
                href="#gallery"
                className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary-foreground transition-colors duration-300"
                tabIndex={0}
              >
                View Portfolio
              </a>
              <a
                href="#contact"
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

      {/* Contact Information Section */}
      <motion.section
        className="py-16 bg-background border-t border-border transition-colors duration-500"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold font-serif mb-6 text-foreground transition-colors duration-500">
              Get in Touch
            </h2>
            <p className="text-lg text-muted mb-8 transition-colors duration-500">
              📍 Rawalpindi/Islamabad | Est. 2020
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
              <a
                href="https://wa.me/923041851531"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary-foreground rounded transition-colors duration-300"
                tabIndex={0}
              >
                <Phone className="w-5 h-5" /> WhatsApp: 0304 1851531
              </a>
              <a
                href="mailto:anbstudio77@gmail.com"
                className="flex items-center gap-2 text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary-foreground rounded transition-colors duration-300"
                tabIndex={0}
              >
                Email: anbstudio77@gmail.com
              </a>
            </div>
            <a
              href="https://www.instagram.com/anbphotographyfilms/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary-foreground rounded transition-colors duration-300"
              tabIndex={0}
            >
              <Instagram className="w-5 h-5" /> @anbphotographyfilms
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

      {/* About Section - Card style, responsive, more spacing, no logo/profile image */}
      <motion.section
        className="py-20 bg-background border-t border-border transition-colors duration-500"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
          <div className="w-full max-w-2xl mx-auto bg-card/90 rounded-2xl shadow-lg p-8 md:p-12 text-center transition-colors duration-500 border border-border">
            <h3 className="text-3xl font-bold font-serif mb-4 flex items-center justify-center gap-2 text-foreground transition-colors duration-500">
              <User className="w-7 h-7 text-primary" /> About Us
            </h3>
            <p className="text-lg md:text-xl text-muted mb-6 transition-colors duration-500">
              Since 2020, anbphotographyfilms has been dedicated to preserving memories that matter. With a passion for storytelling, we combine creativity and technical skill to deliver beautiful, timeless images and films that reflect your unique journey.
            </p>
            <p className="text-base text-muted mb-6 transition-colors duration-500">
              We offer professional photography and videography services for weddings, families, fashion, and corporate projects. We create cinematic films and striking visuals that tell your unique story with passion and creativity.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium transition-colors duration-500">Weddings</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium transition-colors duration-500">Fashion</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium transition-colors duration-500">Editorial</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium transition-colors duration-500">Events</span>
            </div>
            <a
              href="#contact"
              className="inline-block mt-2 rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary-foreground transition-colors duration-300"
              tabIndex={0}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </motion.section>

      {/* Contact Section - Card style, icons, large buttons, more spacing, theme-aware */}
      <motion.section
        id="contact"
        className="py-20 bg-secondary border-t border-border transition-colors duration-500"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
          <div className="w-full max-w-xl bg-card/90 rounded-2xl shadow-xl p-8 md:p-12 text-center border border-border transition-colors duration-500">
            <h3 className="text-3xl font-bold font-serif mb-5 text-foreground transition-colors duration-500">Contact Us</h3>
            <p className="text-lg md:text-xl text-muted mb-8 transition-colors duration-500">
              We'd love to hear from you! Whether you're planning your big day, launching a creative project, or simply want to capture moments that matter—let's connect.<br /><br />
              Phone / WhatsApp: <a href="https://wa.me/923041851531" className="text-primary underline">0304 1851531</a><br />
              Email: <a href="mailto:anbstudio77@gmail.com" className="text-primary underline">anbstudio77@gmail.com</a><br />
              Instagram: <a href="https://www.instagram.com/anbphotographyfilms/" className="text-primary underline">@anbphotographyfilms</a>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
              <a
                href="https://wa.me/923041851531"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary-foreground transition-colors duration-300"
                tabIndex={0}
              >
                <Phone className="w-5 h-5" /> WhatsApp
              </a>
              <a
                href="https://www.instagram.com/anbphotographyfilms/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-primary px-8 py-3 text-lg font-semibold text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
                tabIndex={0}
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