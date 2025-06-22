const storyData = [
  {
    year: "2018",
    title: "The Spark of Passion",
    description:
      "Our journey began with a single, second-hand camera and an insatiable curiosity for capturing the beauty in everyday moments. We spent countless hours learning, experimenting, and discovering our unique visual style.",
  },
  {
    year: "2020",
    title: "Anb Photography Was Born",
    description:
      "After years of honing our craft, we officially launched Anb Photography & Films. Our mission was clear: to offer timeless, editorial-style photography that tells a genuine story, moving beyond clichés to capture authentic emotions.",
  },
  {
    year: "2022",
    title: "First Destination Wedding",
    description:
      "Our work took us abroad for the first time, capturing a beautiful ceremony against a stunning international backdrop. This experience solidified our love for travel and storytelling, shaping our signature destination wedding services.",
  },
  {
    year: "Today",
    title: "Crafting Stories Worldwide",
    description:
      "With hundreds of events captured and a growing team of passionate creatives, we continue to tell stories for clients around the globe. We are committed to artistic excellence and creating heirlooms that will be cherished for generations.",
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