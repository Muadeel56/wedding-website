import { useTheme } from "../hooks/useTheme";
import whiteLogo from "../assets/images/white logo.png";
import blackLogo from "../assets/images/Black Logo.png";

export default function Logo({ size = 60, className = "" }) {
  const { theme } = useTheme();
  const src = theme === "dark" ? whiteLogo : blackLogo;
  if (typeof window !== "undefined") {
    // Debug log for theme and logo src
    console.log("Logo theme:", theme, "src:", src);
  }
  return (
    <img
      src={src}
      alt="ANB Photography & Films logo"
      width={size}
      height={size}
      className={`object-contain select-none drop-shadow-logo transition-shadow duration-500 ${className}`}
      draggable={false}
      style={{ maxWidth: size, maxHeight: size }}
    />
  );
}

// Add this to your global CSS (index.css) if not already present:
// .drop-shadow-logo { filter: drop-shadow(0 2px 6px rgba(0,0,0,0.18)); transition: filter 0.5s; } 