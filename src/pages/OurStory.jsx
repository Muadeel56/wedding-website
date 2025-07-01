import { Mail, Phone, Instagram, Camera, Video, Users, Palette } from "lucide-react";

const storyData = [
  {
    year: "2020",
    title: "The Beginning",
    description:
      "anbphotographyfilms was established with a vision to capture life's most precious moments. Starting in Rawalpindi/Islamabad, we began our journey with a passion for storytelling through the lens.",
  },
  {
    year: "2021",
    title: "Building Our Craft",
    description:
      "We dedicated ourselves to honing our skills in both photography and videography, developing our signature style that combines creativity with technical excellence. Our focus on weddings, families, fashion, and corporate projects began to take shape.",
  },
  {
    year: "2022",
    title: "Expanding Horizons",
    description:
      "As our reputation grew, we started capturing more diverse projects including cinematic music videos and fashion shoots. Our commitment to creating visual masterpieces that tell unique stories became our hallmark.",
  },
  {
    year: "Today",
    title: "Where Every Frame Tells a Story",
    description:
      "Since 2020, anbphotographyfilms has been dedicated to preserving memories that matter. With a passion for storytelling, we combine creativity and technical skill to deliver beautiful, timeless images and films that reflect your unique journey.",
  },
];

export default function OurStory() {
  return (
    <div className="bg-secondary min-h-screen py-16 sm:py-24 flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="bg-card/90 rounded-2xl shadow-lg border border-border p-8 md:p-14 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-primary">Our Story</h1>
          <p className="text-xl md:text-2xl font-serif text-foreground mb-8">Where every frame tells a story.</p>
          <p className="text-lg md:text-xl text-muted mb-6 leading-relaxed">
            Founded in 2020 in Rawalpindi/Islamabad, anbphotographyfilms was born from a passion for storytelling and a desire to preserve life's most meaningful moments. What started as a dream has grown into a creative studio trusted by couples, families, and brands across Pakistan.
          </p>
          <p className="text-lg md:text-xl text-muted mb-6 leading-relaxed">
            We believe every story is unique. Our team combines creativity, technical skill, and a love for visual storytelling to turn your memories into timeless masterpieces—whether it's a wedding, a family portrait, a fashion shoot, or a corporate event.
          </p>
          <p className="text-lg md:text-xl text-muted mb-6 leading-relaxed">
            Our mission is to create striking visuals that reflect your journey with passion and authenticity. Let us capture your story through our lens—we'd love to be part of your most meaningful moments.
          </p>
          <div className="mt-8 text-base text-muted font-medium">
            📍 Based in Rawalpindi/Islamabad &nbsp;|&nbsp; Est. 2020
          </div>
        </div>
      </div>
    </div>
  );
} 