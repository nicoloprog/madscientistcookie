import { sansitaSwashed } from "lib/fonts";
import { FeaturedImage } from "./featuredimage";

export async function LaboratorySection() {
  return (
    <section className="relative min-h-[100svh] w-full">
      <FeaturedImage />
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
      <div className="relative z-10 flex flex-col h-full min-h-[100svh] mx-auto md:mx-30 px-6 pt-12 md:pt-24 md:min-w-[90%]">
        <h2
          className={`${sansitaSwashed.className} text-3xl md:text-5xl lg:text-7xl text-[#c9a227] italic mb-6 md:mb-18`}
        >
          Our Laboratory
        </h2>
        <p className="text-[#c9a227] text-[0.925rem] md:text-3xl leading-relaxed max-w-full md:min-w-[100%] lg:max-w-5xl text-left md:text-center md:mx-auto">
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
      </div>
    </section>
  );
}
