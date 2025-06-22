export default function Home() {
  return (
    <div className="flex-grow">
      <section className="h-screen min-h-[600px] flex items-center justify-center bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight font-serif sm:text-5xl md:text-6xl lg:text-7xl">
            Capturing Moments, Creating Art
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted md:text-xl">
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
        </div>
      </section>
    </div>
  );
} 