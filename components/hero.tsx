import Link from "next/link";
import { sansitaSwashed } from "lib/fonts";

export async function HeroSection() {
  return (
    <section className="relative h-[91.9vh] w-full mb-20 overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        <img
          src="/hero2.png"
          alt="MadScientistCookie bakery interior mobile"
          className="h-full w-full object-fill md:hidden"
        />
        <img
          src="/hero.png"
          alt="MadScientistCookie bakery interior desktop"
          className="hidden h-full w-full object-cover md:block"
        />
        <div className="absolute inset-x-0 bottom-0 h-screen bg-gradient-to-t from-black/55 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end md:items-center px-6 pb-35 md:pb-0">
        <div className="max-w-xl text-white">
          <h1
            className={`mb-6 ${sansitaSwashed.className} text-4xl leading-tight md:text-5xl lg:text-6xl`}
          >
            Enter the lab.
            <br />
            Trust the process.
            <br />
            Taste the result.
          </h1>

          <Link
            href="/search"
            className="inline-flex rounded-md bg-orange-800 px-8 py-3 text-lg font-semibold text-white transition hover:bg-orange-800"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Side fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/70 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/70 to-transparent" />
    </section>
  );
}
