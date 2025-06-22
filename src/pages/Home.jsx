import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const backgroundImages = [
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594669/ANB06184-Enhanced-NR_m4ontq.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594668/ANB09657_wcmt0c.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594668/ANB09107_zf0ntw.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594668/ANB07919_copy_dwf91a.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594668/ANB_6831_copy_r9dltn.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594668/ANB09327_copy_urymev.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594668/ANB03983_hzid2l.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594667/ANB06203-Enhanced-NR_-_Copy_ejksqc.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594667/ANB01972-Enhanced-NR_lmg6aa.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594666/ANB01408_pivfwh.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594666/ANB01435_copy_ni5ufy.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594666/ANB01828-Enhanced-NR_a8q1wj.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594666/ANB03159-Enhanced-NR_hlgymw.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594665/ANB_8138_yaulcc.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750594665/ANB02062_j2do6g.jpg",
  "https://res.cloudinary.com/dgsjdnzyf/image/upload/v1750593371/ANB_1418_lfwezd.avif",
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Preload the next image
    const nextImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    const img = new Image();
    img.src = backgroundImages[nextImageIndex];
  }, [currentImageIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-grow">
      <section className="h-screen min-h-[700px] relative flex items-center justify-center text-white">
        {backgroundImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt="Wedding background"
            className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
        <motion.div
          className="container relative z-20 mx-auto px-4 md:px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold tracking-tight font-serif sm:text-5xl md:text-6xl lg:text-7xl">
            Capturing Moments, Creating Art
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200 md:text-xl">
            Timeless, editorial wedding and fashion photography that tells your unique story.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a
              href="/portfolio"
              className="rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              View Portfolio
            </a>
            <a href="/contact" className="text-base font-semibold leading-6">
              Get in Touch &rarr;
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
} 