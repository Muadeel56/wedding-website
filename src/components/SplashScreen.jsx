import { useState, useEffect } from "react";

const videoUrl = "https://res.cloudinary.com/dgsjdnzyf/video/upload/v1750602159/Waleema_fhlqsw.mp4";

export default function SplashScreen({ onFinished }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      // Allow fade-out transition to complete before calling onFinished
      setTimeout(onFinished, 1000);
    }, 4000); // Splash screen will be visible for 4 seconds

    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <video
        className="w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
} 