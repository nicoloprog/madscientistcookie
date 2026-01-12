import Link from "next/link";
import { sansitaSwashed } from "lib/fonts";

export async function HeroSection() {
  return (
    <section className="relative h-[100svh] w-full mb-20 overflow-hidden">
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
          className="hidden h-full w-full object-fill md:block"
        />
        <div className="absolute inset-x-0 bottom-0 h-screen bg-gradient-to-t from-black/55 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto md:mx-30 flex h-full max-w-7xl items-end md:items-center px-6 pb-30 md:pt-80">
        <div className=" text-white">
          <h1
            className={`mb-6 ${sansitaSwashed.className} text-4xl leading-tight md:text-5xl lg:text-8xl`}
          >
            Enter the lab.
            <br />
            Trust the process.
            <br />
            Taste the result.
          </h1>

          <Link
            href="/search"
            className="
    group
    relative
    inline-flex
    rounded-md
    bg-[#9E5A2B]
    px-8 py-3 md:px-12 md:py-4
    text-lg md:text-2xl
    font-semibold
    text-white
    transition-transform
    duration-200
    ease-out
    hover:-translate-y-[7px]
  "
          >
            {/* Bottom shadow (stays in place) */}
            <span
              className="
      pointer-events-none
      absolute
      inset-x-3
      bottom-[-12px]
      h-3
      rounded-full
      bg-black/95
      blur-md
      opacity-0
      transition-opacity
      duration-200
      group-hover:opacity-900
    "
            />
            Shop Now
          </Link>
        </div>
      </div>

      {/* Side fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/70 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-0 md:w-200 bg-gradient-to-r from-black/70 to-transparent" />

      <div
        className="
    pointer-events-none 
    absolute 
    inset-x-0 
    top-0 
    w-full 
    h-[45svh] lg:h-[30svh] 
    bg-gradient-to-t from-transparent to-black/90
    z-[3]
  "
      />
      <div
        className="
    pointer-events-none 
    absolute 
    inset-x-0 
    bottom-0 
    w-full 
    h-[45svh] lg:h-[20svh] 
    bg-gradient-to-b from-transparent to-black/80 
    z-[3]
  "
      />
    </section>
  );
}
