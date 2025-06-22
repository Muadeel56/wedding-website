import { useState } from "react";

const videoUrl = "https://res.cloudinary.com/dgsjdnzyf/video/upload/v1750602159/Waleema_fhlqsw.mp4";

export default function SplashScreen({ onFinished }) {
  const [visible, setVisible] = useState(true);

  const handleEnter = () => {
    setVisible(false);
    // Allow fade-out transition to complete before calling onFinished
    setTimeout(onFinished, 1000);
  };

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
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">Adeel & Fatima</h1>
        <p className="text-lg md:text-xl mb-8">are getting married</p>
        <button
          onClick={handleEnter}
          className="bg-white text-gray-800 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors duration-300"
        >
          Enter Site
        </button>
      </div>
    </div>
  );
} 