import { useState, useEffect } from "react";
import Logo from "./Logo";

// Specific images from urls.txt for splash screen
const splashImages = [
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223714/ANB_6184_ya9brx.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223702/ANB_6038_qv9j38.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223701/ANB_1418_odiy5f.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223699/ANB_5981_ppimzi.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223690/ANB_3315_umez8c.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1751223690/ANB_9007_mm810g.jpg",
];

export default function SplashScreen({ onFinished }) {
  const [visible, setVisible] = useState(true);
  const [showLogo, setShowLogo] = useState(true);
  const [showImages, setShowImages] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Show logo for 1.2s, then fade out and fade in images/button
    const logoTimer = setTimeout(() => setShowLogo(false), 1200);
    const imagesTimer = setTimeout(() => setShowImages(true), 1800);
    return () => {
      clearTimeout(logoTimer);
      clearTimeout(imagesTimer);
    };
  }, []);

  useEffect(() => {
    if (showImages) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % splashImages.length);
      }, 2000); // Change image every 2 seconds
      return () => clearInterval(interval);
    }
  }, [showImages]);

  const handleEnter = () => {
    setVisible(false);
    setTimeout(onFinished, 800);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] min-h-screen w-screen transition-opacity duration-800 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Studio Logo/Name - fade out before images */}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-background transition-opacity duration-700 z-30 ${
          showLogo ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold tracking-tight text-primary drop-shadow-lg max-w-full text-center px-2 whitespace-normal">
          <Logo size={160} className="mx-auto mb-4" />
        </h1>
      </div>
      {/* Image background and button - fade in after logo */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 z-20 ${
          showImages ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Image slideshow */}
        <div className="absolute inset-0 w-full h-full z-0">
          {splashImages.map((img, idx) => (
            <img
              key={img}
              src={img}
              alt="Splash background"
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                idx === currentImage ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionProperty: "opacity" }}
              loading={idx === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full">
          <button
            onClick={handleEnter}
            className="bg-primary text-primary-foreground font-bold py-3 px-10 rounded-full hover:bg-primary/90 transition-colors duration-300 text-lg shadow-lg animate-fadeIn"
          >
            Enter Website
          </button>
        </div>
      </div>
      {/* Fade-in animation keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s cubic-bezier(0.4,0,0.2,1) 0.2s both;
        }
      `}</style>
    </div>
  );
} 