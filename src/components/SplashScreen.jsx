import { useState, useEffect } from "react";

const videoUrl = "https://res.cloudinary.com/dgsjdnzyf/video/upload/v1750602159/Waleema_fhlqsw.mp4";

export default function SplashScreen({ onFinished }) {
  const [visible, setVisible] = useState(true);
  const [showLogo, setShowLogo] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Show logo for 1.2s, then fade out and fade in video/button
    const logoTimer = setTimeout(() => setShowLogo(false), 1200);
    const videoTimer = setTimeout(() => setShowVideo(true), 1800);
    return () => {
      clearTimeout(logoTimer);
      clearTimeout(videoTimer);
    };
  }, []);

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
      {/* Studio Logo/Name - fade out before video */}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-background transition-opacity duration-700 z-30 ${
          showLogo ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-primary drop-shadow-lg">
          ANB Photography <span className="text-foreground">&</span> Films
        </h1>
      </div>
      {/* Video background and button - fade in after logo */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 z-20 ${
          showVideo ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
        />
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