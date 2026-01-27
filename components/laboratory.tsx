import { sansitaSwashed } from "lib/fonts";

export async function LaboratorySection() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        <img
          src="/bglabo2.png"
          alt="MadScientistCookie bakery interior mobile"
          className="h-full w-full object-cover md:hidden"
        />
        <img
          src="/bglabo.png"
          alt="MadScientistCookie bakery interior desktop"
          className="hidden h-full w-full object-cover md:block"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col h-full min-h-[100svh] mx-auto md:mx-30 px-6 pt-24 md:min-w-[90%]">
        {/* Heading */}
        <h2
          className={`${sansitaSwashed.className} text-2xl md:text-5xl lg:text-7xl text-[#c9a227] italic mb-6 md:mb-18`}
        >
          Our Laboratory
        </h2>

        {/* Description text - left on mobile, centered on desktop */}
        <p className="text-[#c9a227] text-md md:text-2xl leading-relaxed max-w-full md:min-w-[100%] lg:max-w-5xl text-left md:text-center md:mx-auto">
          Let&apos;s embody your beautiful ideas together, simplify the way you
          visualize your next big things. Let&apos;s embody your beautiful ideas
          together, simplify the way you visualize your next big things.
          Let&apos;s embody your beautiful ideas together, simplify the way you
          visualize your next big things.visualize your next big things.
          Let&apos;s embody your beautiful ideas together, simplify the way you
          visualize your next big things. Let&apos;s embody your beautiful ideas
          together, simplify the way you visualize your next big
          things.visualize your next big things. Let&apos;s embody your
          beautiful ideas together, simplify the way you visualize your next big
          things. Let&apos;s embody your beautiful ideas together, simplify the
          way you visualize your next big things.
        </p>

        {/* Main featured image - absolute positioning */}
        {/* <div className="absolute top-200 left-[35%] w-64 md:w-96 lg:w-[30rem] z-20">
          <div className="aspect-[1/1] md:aspect-[1/1]">
            <img
              src="/science.png"
              alt="Honey jar"
              className="w-full h-full object-contain"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
