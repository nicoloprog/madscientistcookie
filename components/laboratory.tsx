import { sansitaSwashed } from "lib/fonts";
import { FeaturedImage } from "./featuredimage";

export async function LaboratorySection() {
  return (
    <section className="relative min-h-[100svh] md:min-h-[105svh] w-full">
      <FeaturedImage />

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

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full min-h-[100svh] mx-auto px-6 pt-12 md:pt-24 md:px-20">
        <h2
          className={`${sansitaSwashed.className} text-3xl md:text-5xl lg:text-7xl text-[#c9a227] italic mb-8 md:mb-16`}
        >
          Our Laboratory
        </h2>

        {/* ---------------- MOBILE TEXT ---------------- */}
        <p className="md:hidden text-[#c9a227] text-sm leading-relaxed">
          Built in Las Vegas. Engineered with Obsession. I&apos;m Justin a
          Canadian bodybuilder turned cookie perfectionist, now baking big in
          Las Vegas. I started in my mom&apos;s restaurant kitchen at 10 years
          old. What began as passion turned into obsession. Bodybuilding taught
          me discipline. Baking became my creative outlet. And in a city that
          never does anything halfway, neither do I. Every cookie is built with
          precision gooey centers, perfect texture, balanced flavor, zero
          shortcuts. Most people say it&apos;s too much. I say it&apos;s not
          enough. This isn&apos;t just dessert. It&apos;s discipline meets
          indulgence.
          <br />
          <br /> Welcome to the lab.
          <br /> Justin
        </p>

        {/* ---------------- DESKTOP TEXT ---------------- */}
        <p className="hidden md:block text-[#c9a227] text-xl lg:text-2xl leading-relaxed max-w-5xl">
          Welcome to the Lab. <br />
          <br />
          I&apos;m a Canadian bodybuilder chasing big dreams in the USA, now
          building something bold in Las Vegas. I started baking at 10 years old
          in my mom&apos;s restaurant kitchen. While other kids were outside
          playing, I was experimenting with flavors, testing textures, and
          feeding my friends like they were judges on a cooking show.
          <br />
          <br />
          Bodybuilding taught me discipline. Las Vegas taught me scale. Baking
          taught me love. Now I bring all three together.
          <br />
          <br />
          Every cookie I create is built with precision — the perfect chew, the
          gooey center, the balance of salt and sweet, the finish that lingers.
          Most people say, “That&apos;s too much.” For me? It&apos;s never
          enough.
          <br />
          <br />
          This company isn&apos;t just about cookies. It&apos;s about passion,
          discipline, indulgence, and bold flavor — built in Las Vegas, with a
          Canadian work ethic behind it.
          <br />
          <br />
          Welcome to the lab. You&apos;re about to taste the difference.
          <br /> Justin
        </p>
      </div>
    </section>
  );
}
