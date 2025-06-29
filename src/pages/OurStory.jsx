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
    <div className="bg-secondary py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight font-serif sm:text-5xl">Our Story</h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            From a shared passion to a celebrated craft, this is the journey behind our lens.
          </p>
        </div>

        <div className="mt-16 flow-root">
          <div className="-m-8">
            {storyData.map((item, index) => (
              <div key={item.year} className="p-8">
                <div className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background border border-border shadow-sm">
                      <p className="text-primary font-bold">{item.year}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-semibold">{item.title}</h3>
                    <p className="mt-2 text-base text-muted">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 